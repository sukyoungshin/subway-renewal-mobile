import React from "react";
import { Link } from "react-router-dom";
// ICONS
import LogoSmall from "../assets/small-logo.png";
import { HiOutlineChevronLeft, HiLogout, HiLogin, HiUser } from "react-icons/hi";
// DATA
import { NavCategories } from '../common/Datas';
// STYLE
import { SideNavWrapper, SideHeader, SideNav, SideMain, SideFooter } from '../common/Styled';
// React-redux
import { useSelector } from 'react-redux';

const Navbar = ({ handleNavbar }) => {
  // 리덕스 스토어의 상태를 조회
  // eslint-disable-next-line
  const { userInfo, isLoggedIn } = useSelector((state) => state.auth); 
  const userName = userInfo.userName; // Objects are not valid as a React child 

  return (
    <SideNavWrapper>
      <SideHeader>
        <div>
          <Link to="/" onClick={handleNavbar}>
            <img
              src={LogoSmall}
              alt="로고"
              style={{ width: "128px", height: "32px" }}
            />
          </Link>
        </div>
        <div>
          { 
            isLoggedIn 
            ? <HiLogout onClick={() => console.log('로그아웃 기능구현 필요')} /> 
            : <Link to="/login"><HiLogin /></Link>
          }
        </div>
        <div onClick={handleNavbar}>
          <HiOutlineChevronLeft />
        </div>
      </SideHeader>
      <SideNav>
        <ul>
          {
            NavCategories.map(category => (
              <li key={category.pathName}>
                <Link to={`/${category.pathName}`} onClick={handleNavbar}>
                  {category.categoryName}
                </Link>
              </li>
            ))
          }
        </ul>
      </SideNav>
      {/* 로그인 되었을 때만 나타냄 */}
      {
        isLoggedIn 
        ? (
          <>
            <SideMain>
              <h1>안녕하세요, {userName}님</h1>
              <div>
                <p>멤버십포인트 : 000원</p>
                <p>주문내역 : 0건</p>
              </div>
            </SideMain>
          </>
          ) 
        : null
      }
      <SideFooter>

        {
          isLoggedIn 
          ? (
            <div className="mypage-icon-wrapper">
              <HiUser />
            </div>
            ) 
          : null
        }
      </SideFooter>
    </SideNavWrapper>
  );
};

export default Navbar;
