import React from "react";
import { Link } from "react-router-dom";
// ICONS
import LogoSmall from "../assets/small-logo.png";
import { HiOutlineChevronLeft, HiLogout, HiLogin, HiUser } from "react-icons/hi";
// CSS
import styled from 'styled-components';


// STYLE
const SideNavWrapper = styled.aside`
  padding: 16px;
  width: calc(100vw / 4 * 3); 
  height: 100vh;
  background-color: var(--color-light-grey); /* need to change colors */

  display: inline-flex;
  flex-direction: column;

  position: fixed;
  top:0;
  left:0;
  z-index: 999;
`;
const SideHeader = styled.header`
  width: 100%;

  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  font-size: 0;
`;
const SideNav = styled.nav`
  flex: 1;

  ul {
    margin: 40px 0 0 0;
    
    width: 100%;
    display: inline-flex;
    flex-direction: column;
    grid-gap: 16px;
    gap: 16px;
  }
  a:link,
  a:visited {
    font-size: 14px;
    color: var(--color-black);
    transition: color 0.4s;
  }
  a:active,
  a:focus {
    font-size: 14px;
    color: var(--color-green);    
    transition: color 0.4s;
  }
`;
const SideMain = styled.main`
  padding: 32px 0 0 0;
  height: 210px;

  display: inline-flex;
  flex-direction: column;
  grid-gap: 32px;
  gap: 32px;

  border-top: 1px solid var(--color-transparent);
  
  h1{
    font-size: 18px;
  }
  div {
    font-size: 14px;

    display: inline-flex;
    flex-direction: column;
    grid-gap: 8px;
    gap: 8px;
  }
`;
const SideFooter = styled.footer`
  font-size: 0;

  display: inline-flex;
  flex-direction: row;
  grid-gap: 16px;
  gap: 16px;

  svg {
    width: 24px;
    height: 24px;
  }
`;

// COMPONENT
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
          <li>
            <Link to="/main">메인화면</Link>
          </li>
          <li>
            <Link to="/order">주문하기</Link>
          </li>
          <li>
            <Link to="/cart">장바구니</Link>
          </li>
          <li>
            <Link to="/track">배송조회</Link>
          </li>
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
