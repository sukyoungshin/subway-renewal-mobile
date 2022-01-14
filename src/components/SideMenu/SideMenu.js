import React from "react";
import { NavLink } from "react-router-dom";
import LogoSmall from "../../assets/small-logo.png";
import { HiX, HiLogout, HiUser } from "react-icons/hi";
import { NavCategories } from '../../common/Datas';
import { useSelector, useDispatch } from 'react-redux';
import { loginFlagSelector, userInfoSelector } from '../../reducers';
import LINK from '../../constants/link';
import { NavbarWrapperStyled, NavbarHeaderStyled, NavbarNavStyled, NavbarFooterStyled, NavbarMainStyled } from './SideMenu.style';

const Navbar = ({ handleNavbar }) => {
  /* 리덕스 */
  const dispatch = useDispatch();
  const loginFlag = useSelector(loginFlagSelector);
  const userInfo = useSelector(userInfoSelector);

  /* 로그아웃 함수 (구글OAuth 제대로 작동안함 - 수정필요) */
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
    <NavbarWrapperStyled>
      <NavbarHeader 
        style={style} 
        handleNavbar={handleNavbar}
      />
      <NavbarNav 
        style={style} 
        handleNavbar={handleNavbar}
      />
      {
        loginFlag 
        ? <NavbarMain userInfo={userInfo} />
        : <NavbarLoginButton handleNavbar={handleNavbar} />
      }
      <NavbarFooter 
        loginFlag={loginFlag} 
        signOut={signOut} 
      />
    </NavbarWrapperStyled>
  );
};

const NavbarHeader = ({ style, handleNavbar }) => {

  return (
    <NavbarHeaderStyled>
      <div>
        <NavLink 
          to={LINK.ROOT} 
          style={style} 
          onClick={handleNavbar}
        >
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
    </NavbarHeaderStyled>
  );
};

const NavbarNav = ({ style, handleNavbar }) => {
  return (
    <NavbarNavStyled>
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
    </NavbarNavStyled>
  );
};

const NavbarMain = ({ userInfo }) => {
  const { userName, imageURL } = userInfo;

  return (
    <NavbarMainStyled>
      <h1>
        안녕하세요, {userName}님
        <img src={imageURL} alt={userName} />  
      </h1>
      <div>
        <p>멤버십포인트 : 000원</p>
        <p>주문내역 : 0건</p>
      </div>
    </NavbarMainStyled>
  );
};

const NavbarLoginButton = () => {
  return (
    <NavLink 
      to={LINK.LOGIN} 
      className="loginlink"
    >
      로그인
    </NavLink>
  );
};

const NavbarFooter = ({ loginFlag, signOut }) => {
  return (
    <NavbarFooterStyled>
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
    </NavbarFooterStyled>
  );
};

export default Navbar;
