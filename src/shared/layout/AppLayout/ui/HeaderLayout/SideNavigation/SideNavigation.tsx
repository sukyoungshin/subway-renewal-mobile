import { navigationMenuList } from '@/shared/api/mock/navigation.mock.js';
import logo_subway_small from '@/shared/assets/small-logo.webp';
import LINK from '@/shared/constants/link';
import { HiLogout, HiX } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
import { usePageMove, useReduxSelector } from './hooks';

interface IProps {
  handleNavbar: () => void;
}

const SideNavigation = ({ handleNavbar }: IProps) => {
  const { loginFlag, userInfo } = useReduxSelector();
  const goToLoginPage = usePageMove();

  return (
    <aside className="p-4 w-full max-w-[440px] h-full bg-white-light inline-flex flex-col absolute top-0 z-[999]">
      <header className="w-full inline-flex flex-row justify-between items-center gap-2 text-0">
        <div className="flex-1">
          <NavLink to={LINK.ROOT} onClick={handleNavbar} className="text-sm">
            <img src={logo_subway_small} alt="로고" className="w-32 h-8" />
          </NavLink>
        </div>
        <div>
          <NavLink to={LINK.ROOT} onClick={handleNavbar} className="text-[24px]">
            <HiX className="w-6 h-6 text-green" />
          </NavLink>
        </div>
      </header>
      <nav className="flex-1">
        <ul className="mt-10 w-full inline-flex flex-col gap-4">
          {navigationMenuList.map((menu) => (
            <li key={menu.pathName} className="bg-transparent transition-all duration-400">
              <NavLink
                to={menu.pathName}
                onClick={handleNavbar}
                className={({ isActive }: { isActive: boolean }) =>
                  `text-sm hover:text-green ${isActive ? 'text-green' : 'text-black'}`
                }
              >
                {menu.categoryName}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      {loginFlag === false && (
        <button
          type="button"
          onClick={goToLoginPage}
          className="h-10 leading-10 text-white text-sm font-normal bg-green rounded-lg"
        >
          로그인
        </button>
      )}
      {loginFlag && (
        <main className="pt-8 h-[210px] inline-flex flex-col gap-8 border-t border-solid border-transparent">
          <h1 className="text-[18px] inline-flex flex-row items-center gap-2">
            안녕하세요, {userInfo.userName}님
            <img src={userInfo.imageURL} alt={userInfo.userName} className="w-6 h-6 rounded-lg text-2xs" />            
          </h1>
          <div className="text-sm inline-flex flex-col gap-2">
            <p>멤버십포인트 : 000원</p>
            <p>주문내역 : 0건</p>
          </div>
        </main>
      )}
      <footer className="inline-flex flex-row items-center gap-4 text-0">
        {loginFlag && (
          <>
            {/* <HiUser className="w-6 h-6" /> */}
            <NavLink to={LINK.LOGIN}>
              <HiLogout className="w-6 h-6" />
            </NavLink>
          </>
        )}
      </footer>
    </aside>
  );
};

export default SideNavigation;
