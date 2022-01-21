import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import LogoSmall from "assets/small-logo.png";
import { HiX, HiLogout, HiUser } from "react-icons/hi";
import { NavCategories } from 'common/Datas';
import { useSelector } from 'react-redux';
import { loginFlagSelector, userInfoSelector } from 'reducers';
import LINK from 'constants/link';
import { NavbarWrapperStyled, NavbarHeaderStyled, NavbarNavStyled, NavbarFooterStyled, NavbarMainStyled, NavLinkStyled, ButtonStyled } from './SideMenu.style';

const Navbar = ({ handleNavbar }) => {
  /* 리덕스 */
  const loginFlag = useSelector(loginFlagSelector);
  const userInfo = useSelector(userInfoSelector);

  /* 라우터 */
  const navigate = useNavigate();
  const goToLoginPage = () => navigate(LINK.LOGIN);

  return (
    <NavbarWrapperStyled>
      <NavbarHeader handleNavbar={handleNavbar}/>
      <NavbarNav handleNavbar={handleNavbar}/>
      { loginFlag === false && <NavbarLoginButton goToLoginPage={goToLoginPage} /> }
      { loginFlag && <NavbarMain userInfo={userInfo} /> }
      <NavbarFooter loginFlag={loginFlag} />
    </NavbarWrapperStyled>
  );
};

const NavbarHeader = ({ handleNavbar }) => {

  return (
    <NavbarHeaderStyled>
      <div>
        <NavLinkStyled 
          to={LINK.ROOT} 
          onClick={handleNavbar}
        >
          <img src={LogoSmall} alt="로고" />
        </NavLinkStyled>
      </div>
      <div>
        <NavLinkStyled 
          to={LINK.ROOT} 
          onClick={handleNavbar}
        >
          <HiX />
        </NavLinkStyled>
      </div>
    </NavbarHeaderStyled>
  );
};

const NavbarNav = ({ handleNavbar }) => {
  return (
    <NavbarNavStyled>
      <ul>
        {
          NavCategories.map(category => (
            <li key={category.pathName}>
              <NavLinkStyled 
                to={category.pathName} 
                onClick={handleNavbar}
              >
                {category.categoryName}
              </NavLinkStyled>
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

const NavbarLoginButton = ({ goToLoginPage }) => {
  return (
    <ButtonStyled type="button" onClick={goToLoginPage} >
      로그인
    </ButtonStyled>
  );
};

const NavbarFooter = ({ loginFlag }) => {
  return (
    <NavbarFooterStyled>
      {
        loginFlag && (
          <>
          <div>
            <HiUser />
          </div>
          <div>
            <NavLink to={LINK.LOGIN} >
              <HiLogout />
            </NavLink>
          </div>
          </>
        ) 
      }
    </NavbarFooterStyled>
  );
};

export default Navbar;
