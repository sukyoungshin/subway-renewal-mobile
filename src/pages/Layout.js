import React from 'react';
import { Outlet } from 'react-router';
// COMPONENTS
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
  );
};

export default Layout;