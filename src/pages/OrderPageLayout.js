import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, HeaderLayout } from '../components';

const OrderPageLayout = () => {
  return (
    <>
      <HeaderLayout />
      <Outlet />
      <Footer />
    </>
  );
};

export default OrderPageLayout;