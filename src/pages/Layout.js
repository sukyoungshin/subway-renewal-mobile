import React from 'react';
import { Outlet } from 'react-router';
import { Footer, HeaderLayout } from '../components';

const Layout = () => {
  return (
    <>
      <HeaderLayout />
      <Outlet/>
      <Footer />
    </>
  );
};

export default Layout;