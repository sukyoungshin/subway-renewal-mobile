import React from 'react';
import { Outlet } from 'react-router';
import { Footer, HeaderLayout } from '../index';

const AppLayout = () => {
  return (
    <>
      <HeaderLayout />
      <Outlet/>
      <Footer />
    </>
  );
};

export default AppLayout;