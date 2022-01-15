import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, HeaderLayout } from '../index';

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