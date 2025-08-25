import { HeaderLayout } from '@/shared/layout';
import { Footer } from '@/shared/ui';
import { Outlet } from 'react-router';

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
