import React from 'react';
import { Outlet } from 'react-router-dom';

import BaseHeader from '@/components/BaseHeader';
import BaseFooter from '@/components/BaseFooter';

import './Layout.scss';

const Layout: React.FC = () => {
  return (
    <div className='layout'>
      <main>
        <BaseHeader />
        <Outlet />
        <BaseFooter />
      </main>
    </div>
  );
};

export default Layout;
