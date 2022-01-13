import React from "react";
import { NavLink } from "react-router-dom";
import LogoSmall from "../assets/small-logo.png";
import { HiX, HiLogout, HiUser } from "react-icons/hi";
import { NavCategories } from '../common/Datas';
import { SideNavWrapper, SideHeader, SideNav, SideMain, SideFooter } from '../common/Styled';
import { useSelector, useDispatch } from 'react-redux';
import { loginFlagSelector, userInfoSelector } from '../reducers';
import LINK from '../constants/link';

const Navbar = ({ handleNavbar }) => {
  /* 리덕스 */
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const loginFlag = useSelector(loginFlagSelector);
  const userInfo = useSelector(userInfoSelector);
  const { userName, imageURL } = userInfo;
  
  const signOut = () => {
    dispatch({
      type : 'auth/logout',
      userInfo : {
        id : null,
        userName: null,
        email: null, 
      },
      isLoggedIn: false,
    });
    console.log('로그아웃');
  };

  /* NavLink style */
  const style = ({ isActive }) => ({
    color : isActive ? 'var(--color-green)' : 'var(--color-black)'
  });


  return (
    <SideNavWrapper>
      <SideHeader>
        <div>
          <NavLink to={LINK.ROOT} style={style} onClick={handleNavbar}>
            <img
              src={LogoSmall}
              alt="로고"
              style={{ width: "128px", height: "32px" }}
            />
          </NavLink>
        </div>
        <div onClick={handleNavbar}>
          <HiX />
        </div>
      </SideHeader>
      <SideNav>
        <ul>
          {
            NavCategories.map(category => (
              <li key={category.pathName}>
                <NavLink 
                  to={category.pathName} 
                  style={style}
                  onClick={handleNavbar}
                >
                  {category.categoryName}
                </NavLink>
              </li>
            ))
          }
        </ul>
      </SideNav>
      {/* 로그인 되었을 때만 나타냄 */}
      {
        loginFlag 
        ? (
          <SideMain>
            <h1>
              안녕하세요, {userName}님
              <img src={imageURL} alt={userName} />  
            </h1>
            <div>
              <p>멤버십포인트 : 000원</p>
              <p>주문내역 : 0건</p>
            </div>
          </SideMain>
          ) 
        : (
          <NavLink 
            to={LINK.LOGIN} 
            className="loginlink"
          >
            로그인
          </NavLink>
        )
      }
      <SideFooter>
        {
          loginFlag 
          ? (
            <>
            <div>
              <HiUser />
            </div>
            <div>
              <HiLogout onClick={signOut} /> 
            </div>
            </>
            ) 
          : null
        }
      </SideFooter>
    </SideNavWrapper>
  );
};

export default Navbar;
