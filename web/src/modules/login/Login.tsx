import React, { useEffect, useRef, useState } from 'react';
import { ConfigProvider, Form, Input, Button, Checkbox, Typography, message } from 'antd';
import { PhoneOutlined, LockOutlined, ArrowRightOutlined } from '@ant-design/icons';
import './Login.scss';
import { formatPhone } from '@/shared/utils/format';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from 'usehooks-ts';
import { TokenType, authStore } from '@/stores/auth';
import { ILoginForm, ILoginResponse } from '@/shared/api/auth/types';
import { ROUTES } from '@/router/links';
import { addNotification } from '@/shared/utils/addNotification';
import { authApi } from '@/shared/api/auth';
import { AxiosError } from 'axios';
import { observer } from 'mobx-react';

const { Title, Text, Link } = Typography;

interface LoginFormValues {
  phone: string;
  password: string;
}

export interface LoginPayload {
  phone: string; // 998901234567
  password: string;
}

interface LoginProps {
  onLogin?: (payload: LoginPayload) => void;
}


const POLL_INTERVAL_MS = 5000;

type Stage = 'checking' | 'form' | 'waiting';

export const Login = observer(() => {
  const [form] = Form.useForm<LoginFormValues>();
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();
  const [, setAccessToken] =
    useLocalStorage<TokenType['accessToken']>('accessToken', '');
  const [, setRefreshToken] = useLocalStorage<string>('refreshToken', '');
  const [deviceToken, setDeviceToken] = useLocalStorage<string>('deviceToken', '');
  const [stage, setStage] = useState<Stage>(deviceToken ? 'checking' : 'form');

  const handleResult = (result?: ILoginResponse) => {
    if (result?.data?.data?.status === 'PENDING') {
      if (result?.data?.data.deviceToken) setDeviceToken(result?.data?.data.deviceToken);
      setStage('waiting');

      return;
    }

    if (result?.data?.data?.status === 'APPROVED' && result?.data?.data.tokens) {
      const { accessToken, refreshToken } = result.data.data.tokens;

      setAccessToken(accessToken);
      setRefreshToken(refreshToken);
      authStore.setSession(accessToken);
      navigate(ROUTES.home);
      addNotification('Success login');
      void authStore.getProfile();

      return;
    }

    setStage('form');
    addNotification('Login javobini tekshirib bo\'lmadi');
  };

  const checkDevice = async () => {
    try {
      const res = await authApi.deviceLogin(deviceToken);

      handleResult(res);
    } catch (error) {
      const status = (error as AxiosError).response?.status;

      if (status === 403) {
        addNotification('error'); // rad etilgan: backend xabari ko'rsatiladi
        setDeviceToken('');
        setStage('form');
      } else if (status === 401) {
        setStage('form'); // parol bilan kirish kerak
      } else {
        // tarmoq xatosi: kutish ekranidan chiqarib yubormaymiz
        setStage((current) => (current === 'checking' ? 'form' : current));
      }
    }
  };
  const handleSubmit = (values: ILoginForm) => {
    setLoading(true);

    authStore
      .getSignIn({ ...values, deviceToken: deviceToken || undefined })
      .then(res => {
        handleResult(res!);
      })
      .catch((error) => {
        if ((error as AxiosError).response?.status === 403) setDeviceToken('');
        addNotification(error);
      })
      .finally(() => setLoading(false));
  };

  // So'nggi checkDevice ni ref orqali chaqiramiz, eskirgan closure bo'lmaydi
  const checkDeviceRef = useRef(checkDevice);

  checkDeviceRef.current = checkDevice;

  // Sahifa ochilganda: saqlangan qurilma bo'lsa, holatini bir marta tekshiramiz
  useEffect(() => {
    if (stage === 'checking') void checkDeviceRef.current();
  }, [stage]);

  // Kutish ekranida holatni har 5 soniyada so'raymiz
  useEffect(() => {
    if (stage !== 'waiting') return;

    const timer = setInterval(() => void checkDeviceRef.current(), POLL_INTERVAL_MS);

    return () => clearInterval(timer);
  }, [stage]);

  const handleCancelWaiting = () => {
    setDeviceToken('');
    setStage('form');
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#F26A2E',
          borderRadius: 14,
          fontFamily: "'Inter', 'Segoe UI', sans-serif",
          colorText: '#1a1a1a',
        },
        components: {
          Input: { controlHeight: 52, paddingInline: 16 },
          Button: { controlHeight: 52 },
        },
      }}
    >
      <div className="login-page">
        <div className="login-card">
          <Title level={1} className="login-title">
            Xush kelibsiz!
          </Title>
          <Text className="login-subtitle">
            Davom etish uchun telefon raqam va parolingizni kiriting.
          </Text>

          <Form<LoginFormValues>
            form={form}
            layout="vertical"
            size="large"
            requiredMark={false}
            onFinish={handleSubmit}
            className="login-form"
          >
            <Form.Item
              label="Telefon raqam"
              name="phone"
              getValueFromEvent={(e: React.ChangeEvent<HTMLInputElement>) =>
                formatPhone(e.target.value)
              }
              rules={[
                { required: true, message: 'Telefon raqamni kiriting' },
                {
                  validator: (_, value: string) =>
                    !value || value.replace(/\D/g, '').length === 9
                      ? Promise.resolve()
                      : Promise.reject(new Error("Raqam to'liq emas")),
                },
              ]}
            >
              <Input
                addonBefore="+998"
                prefix={<PhoneOutlined className="login-icon" />}
                placeholder="90 123 45 67"
                inputMode="numeric"
                autoComplete="tel-national"
              />
            </Form.Item>

            <Form.Item
              label="Parol"
              name="password"
              rules={[
                { required: true, message: 'Parolni kiriting' },
                { min: 6, message: "Parol kamida 6 ta belgidan iborat bo'lishi kerak" },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="login-icon" />}
                placeholder="••••••••"
                autoComplete="current-password"
              />
            </Form.Item>

            <div className="login-row">
              <Link href="#" className="login-link">
                Parolni unutdingizmi?
              </Link>
            </div>

            <Button
              type="primary"
              htmlType="submit"
              block
              loading={loading}
              className="login-submit"
            >
              Kirish <ArrowRightOutlined />
            </Button>
          </Form>

          <Text className="login-footer">© 2026 Ordix · Savdo va ombor boshqaruvi</Text>
        </div>
      </div>
    </ConfigProvider>
  );
})
