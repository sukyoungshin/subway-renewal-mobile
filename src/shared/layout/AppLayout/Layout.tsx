import { Footer } from '@/shared/ui';
import { Outlet } from 'react-router';
import HeaderLayout from './ui/HeaderLayout/HeaderLayout';

const AppLayout = () => {
  return (
    <>
      <HeaderLayout />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
