import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Checkbox, Form, Input, Modal } from 'antd';
import { EPageAccess, IAddStaff, staffsApi } from '@/api/staffs';
import { staffsStore } from '@/stores/workers';
import { addNotification } from '@/utils';
import { regexPhoneNumber } from '@/utils/phoneFormat';
import { EPageAccessLabel } from '../constants';

const PHONE_PREFIX = '998';
const MENU_PREFIX = 'menu.';
const MIN_PASSWORD_LENGTH = 6;
const REQUIRED = { required: true, message: 'Majburiy maydon' };

const PAGE_OPTIONS = Object.values(EPageAccess).map((page) => ({
  value: page,
  label: EPageAccessLabel[page],
}));

const isMenuPermission = (permission: string) =>
  permission.startsWith(MENU_PREFIX);

const toPages = (permissions: string[]) =>
  permissions
    .filter(isMenuPermission)
    .map((permission) => permission.slice(MENU_PREFIX.length) as EPageAccess);

const toMenuPermissions = (pages: EPageAccess[]) =>
  pages.map((page) => `${MENU_PREFIX}${page}`);

interface StaffFormValues {
  fullName: string;
  phone: string;
  password?: string;
  confirmPassword?: string;
  pages: EPageAccess[];
}

export const AddStaffsModal = observer(() => {
  const [form] = Form.useForm<StaffFormValues>();
  const queryClient = useQueryClient();
  const { singleStaff, isOpenAddEditStaffModal } = staffsStore;
  const isEdit = Boolean(singleStaff);
  const title = isEdit ? 'Xodimni tahrirlash' : 'Xodimni qo\'shish';

  const { data: staffResponse } = useQuery({
    queryKey: ['getSingleStaff', singleStaff?.id],
    queryFn: () => staffsApi.getSingleStaffs(singleStaff!.id),
    enabled: isEdit,
  });
  const staff = staffResponse?.data;

  useEffect(() => {
    if (!isOpenAddEditStaffModal || !staff) return;

    form.setFieldsValue({
      fullName: staff.fullName,
      phone: staff.phone.slice(PHONE_PREFIX.length),
      pages: staff.pages,
    });
  }, [isOpenAddEditStaffModal, staff, form]);

  const handleClose = () => {
    staffsStore.setSingleStaff(null);
    staffsStore.setIsOpenAddEditStaffModal(false);
  };

  const { mutate: saveStaff, isPending } = useMutation({
    mutationFn: (values: Partial<IAddStaff>) =>
      singleStaff
        ? staffsApi.updateStaff({ id: singleStaff.id, ...values })
        : staffsApi.addNewStaff(values as IAddStaff),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getStaffs'] });
      queryClient.invalidateQueries({ queryKey: ['getSingleStaff'] });
      addNotification(
        isEdit
          ? 'Xodim muvaffaqiyatli o\'zgartirildi'
          : 'Xodim muvaffaqiyatli qo\'shildi'
      );
      handleClose();
    },
    onError: addNotification,
  });

  const handleSubmit = (values: StaffFormValues) => {
    saveStaff({
      fullName: values.fullName,
      phone: `${PHONE_PREFIX}${values.phone}`,
      pages: values.pages,
      ...(values.password ? { password: values.password } : {}),
    });
  };

  return (
    <Modal
      open={isOpenAddEditStaffModal}
      title={title}
      okText={title}
      cancelText="Bekor qilish"
      onOk={() => form.submit()}
      onCancel={handleClose}
      afterClose={() => form.resetFields()}
      confirmLoading={isPending}
      centered
      forceRender
      width={600}
    >
      <Form
        form={form}
        layout="vertical"
        autoComplete="off"
        initialValues={{ pages: [] }}
        onFinish={handleSubmit}
      >
        <Form.Item name="fullName" label="Xodim" rules={[REQUIRED]}>
          <Input placeholder="F.I.O" />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Telefon raqami: 901234567"
          rules={[
            REQUIRED,
            {
              pattern: regexPhoneNumber,
              message: 'Raqamni to\'g\'ri kiriting! Masalan: 901234567',
            },
          ]}
        >
          <Input addonBefore="+998" maxLength={9} placeholder="Telefon raqami" />
        </Form.Item>

        <Form.Item
          name="password"
          label="Parol"
          rules={[
            { required: !isEdit, message: 'Majburiy maydon' },
            {
              min: MIN_PASSWORD_LENGTH,
              message: `Parol kamida ${MIN_PASSWORD_LENGTH} ta belgidan iborat bo'lsin`,
            },
          ]}
        >
          <Input.Password
            autoComplete="new-password"
            placeholder={
              isEdit ? 'O\'zgartirmasangiz bo\'sh qoldiring' : 'Parolni kiriting'
            }
          />
        </Form.Item>

        <Form.Item
          name="confirmPassword"
          label="Parolni qayta kiriting"
          dependencies={['password']}
          rules={[
            ({ getFieldValue }) => ({
              validator: (_, value) =>
                !getFieldValue('password') || value === getFieldValue('password')
                  ? Promise.resolve()
                  : Promise.reject(new Error('Parollar bir-biriga mos emas')),
            }),
          ]}
        >
          <Input.Password
            autoComplete="new-password"
            placeholder="Parolni qayta kiriting"
          />
        </Form.Item>

        <Form.Item name="pages" label="Sahifalarga kirish huquqi">
          <Checkbox.Group
            options={PAGE_OPTIONS}
            style={{ display: 'flex', flexDirection: 'column', gap: 8 }}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
});
