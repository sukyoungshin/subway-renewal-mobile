import React from "react";
import { Link } from "react-router-dom";
// ICONS
import LogoSmall from "../assets/small-logo.png";
import { HiOutlineChevronLeft, HiLogout, HiLogin, HiUser } from "react-icons/hi";
// DATA
import { NavCategories } from '../common/Datas';
// STYLE
import { SideNavWrapper, SideHeader, SideNav, SideMain, SideFooter } from '../common/Styled';


const Navbar = ({ isLoggedIn, handleNavbar, getLoggedIn }) => {

  return (
    <SideNavWrapper>
      <SideHeader>
        <div>
          <img
            src={LogoSmall}
            alt="로고"
            style={{ width: "128px", height: "32px" }}
          />
        </div>
        <div onClick={handleNavbar}>
          <HiOutlineChevronLeft style={{ width: "24px", height: "24px" }} />
        </div>
      </SideHeader>
      <SideNav>
        <ul>
          {
            NavCategories.map(category => (
              <li key={category.pathName}>
                <Link to={`/${category.pathName}`}>{category.categoryName}</Link>
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
              <h1>안녕하세요, ㅇㅇㅇ님</h1>
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
        <div className="login-icon-wrapper">
          { isLoggedIn 
          ? <HiLogout onClick={() => console.log('로그아웃 기능구현 필요')} /> 
          : <HiLogin onClick={getLoggedIn} />}
        </div>
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
