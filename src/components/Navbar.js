import React, { useState } from "react";
import LogoSmall from "../assets/small-logo.png";
import {
  HiOutlineChevronLeft,
  HiLogout,
  HiLogin,
  HiUser,
} from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = ({ handleNavbar }) => {
  const [isLogin, setIsLogin] = useState(false); // 로그인여부

  return (
    <aside className="side-navbar">
      <header>
        <div className="logo-wrapper">
          <img
            src={LogoSmall}
            alt="로고"
            style={{ width: "128px", height: "32px" }}
          />
        </div>
        <div className="close-btn-wrapper" onClick={handleNavbar}>
          <HiOutlineChevronLeft style={{ width: "32px", height: "32px" }} />
        </div>
      </header>
      <nav>
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
      </nav>
      {/* 로그인 되었을 때만 나타냄 */}
      {isLogin ? (
        <>
          <main>
            <h1>안녕하세요, ㅇㅇㅇ님</h1>
            <div className="customer-points">
              <p>멤버십포인트 : 000원</p>
              <p>주문내역 : 0건</p>
            </div>
          </main>
        </>
      ) : null}
      <footer>
        <div className="login-icon-wrapper">
          {isLogin ? <HiLogout /> : <HiLogin />}
        </div>
        {isLogin ? (
          <div className="mypage-icon-wrapper">
            <HiUser />
          </div>
        ) : null}
      </footer>
    </aside>
  );
};

export default Navbar;
