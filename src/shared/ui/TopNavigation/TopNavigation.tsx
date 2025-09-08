import { itemCountSelector } from '@/features/cart/model/selector';
import icon_cart from '@/shared/assets/icons/cart.svg';
import logo_subway from '@/shared/assets/splash-logo.webp';
import LINK from '@/shared/constants/link';
import { HiMenuAlt1 } from 'react-icons/hi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

interface IProps {
  handleNavbar: () => void;
}

const TopNavigation = ({ handleNavbar }: IProps) => {
  const itemCount = useSelector(itemCountSelector); // 장바구니 주문갯수

  return (
    <header className="z-10 shadow-[0px_4px_4px_rgb(0_0_0/10%)]">
      <menu className="flex h-full list-none flex-row items-center header-nav-wrapper">
        <li className="h-14 p-2.5">
          <button type="button" className="bg-transparent text-[0]" onClick={handleNavbar}>
            <HiMenuAlt1 className="h-8 w-8 text-green" />
          </button>
        </li>
        <li className="h-14 flex-1 p-2.5 text-center">
          <Link
            to={LINK.ROOT}
            title="메인페이지로 이동"
            className="text-inherit text-[0px] no-underline"
          >
            <img src={logo_subway} alt="써브웨이 로고" className="ml-auto mr-auto h-[32px]" />
          </Link>
        </li>
        <li className="h-14 p-2.5">
          <Link to={LINK.CART} title="장바구니" className="relative h-8 w-8">
            <img src={icon_cart} alt="장바구니 아이콘" className="h-full w-full object-cover" />
            <span className="absolute left-0 top-2/4 translate-x-[-30%] rounded-[50%] bg-yellow px-1.5 py-0.5 text-2xs font-bold text-white">
              {itemCount}
            </span>
          </Link>
        </li>
      </menu>
    </header>
  );
};

export default TopNavigation;
