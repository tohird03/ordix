import { useState } from 'react';
import { Grid } from 'antd';
import { Outlet } from 'react-router-dom';
import '../app/global.css';
import './layout.css';
import MobileNav from './MobileNav';
import SideRail from './SideRail';
import TopBar from './TopBar';

export default function MainLayout() {
  const isMobile = Grid.useBreakpoint().lg === false;
  const [open, setOpen] = useState(false);

  return (
    <div className="shell">
      <TopBar isMobile={isMobile} onMenu={() => setOpen(true)} />
      <div className="body">
        {!isMobile && <SideRail />}
        <main className="content">
          <Outlet />
        </main>
      </div>
      {isMobile && <MobileNav open={open} onClose={() => setOpen(false)} />}
    </div>
  );
}
