import { Avatar } from 'antd';
import {
  BellOutlined,
  DownOutlined,
  InfoCircleOutlined,
  MenuOutlined,
  SearchOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import Logo from './Logo';

const tabs = [
  { key: '/dashboard', label: 'Umumiy' },
  { key: '/customers/list', label: 'Mijozlar' },
  { key: '/sales', label: 'Sotuv' },
  { key: '/purchases', label: 'Kirim' },
  { key: '/reports', label: 'Hisobotlar' },
];

interface Props {
  isMobile: boolean;
  onMenu: () => void;
}

export default function TopBar({ isMobile, onMenu }: Props) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <header className="topbar">
      {isMobile && (
        <button className="pill" aria-label="Menyuni ochish" onClick={onMenu}>
          <MenuOutlined />
        </button>
      )}
      <Logo />
      {!isMobile && (
        <nav className="pill tabs">
          {tabs.map((t) => (
            <button
              key={t.key}
              className={`tab${pathname === t.key ? ' active' : ''}`}
              onClick={() => navigate(t.key)}
            >
              {t.label}
            </button>
          ))}
        </nav>
      )}
      <div className="spacer" />
      <div className="pill actions">
        <SearchOutlined />
        <BellOutlined />
        {!isMobile && <InfoCircleOutlined />}
      </div>
      <div className="pill user">
        <Avatar size={36} icon={<UserOutlined />} />
        {!isMobile && (
          <div className="user-text">
            <b>Admin</b>
            <small>admin@ordix.uz</small>
          </div>
        )}
        <DownOutlined />
      </div>
    </header>
  );
}
