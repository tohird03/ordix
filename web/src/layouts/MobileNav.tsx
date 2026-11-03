import { useEffect } from 'react';
import { Menu, Switch } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { useThemeMode } from '../app/theme-mode';
import Logo from './Logo';
import { findOpenKeys, menuItems } from './menu';

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function MobileNav({ open, onClose }: Props) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { mode, setMode } = useThemeMode();

  // Menyu ochiq turganda orqa sahifa aylanmasin
  useEffect(() => {
    document.body.classList.toggle('nav-open', open);
    return () => document.body.classList.remove('nav-open');
  }, [open]);

  return (
    <>
      <div className={`nav-overlay${open ? ' open' : ''}`} onClick={onClose} />
      <aside className={`nav-panel${open ? ' open' : ''}`} aria-hidden={!open}>
        <Logo />
        <Menu
          mode="inline"
          items={menuItems}
          selectedKeys={[pathname]}
          defaultOpenKeys={findOpenKeys(pathname)}
          onClick={({ key }) => {
            navigate(key);
            onClose();
          }}
          style={{ borderInlineEnd: 0, marginTop: 16 }}
        />
        <div className="nav-theme">
          <span>Qorong'i rejim</span>
          <Switch checked={mode === 'dark'} onChange={(on) => setMode(on ? 'dark' : 'light')} />
        </div>
      </aside>
    </>
  );
}
