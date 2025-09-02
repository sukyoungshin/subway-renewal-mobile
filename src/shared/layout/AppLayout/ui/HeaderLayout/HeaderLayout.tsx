import { TopNavigation } from '@/shared/ui';
import { useEffect, useState } from 'react';
import SideNavigation from './SideNavigation/SideNavigation';

const HeaderLayout = () => {
  const [isSideVisible, setIsSideVisible] = useState<boolean>(false);
  const handleSideNavigationVisibility = () => setIsSideVisible((prev) => !prev);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const root = document.getElementById('root');
    if (!root) return;

    if (isSideVisible) {
      root.classList.add('u-no-scroll');
    } else {
      root.classList.remove('u-no-scroll');
    }

    return () => root.classList.remove('u-no-scroll');
  }, [isSideVisible]);

  return (
    <>
      {isSideVisible && <SideNavigation handleNavbar={handleSideNavigationVisibility} />}

      <TopNavigation handleNavbar={handleSideNavigationVisibility} />
    </>
  );
};

export default HeaderLayout;
