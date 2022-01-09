import React from "react";
import { Link } from "react-router-dom";
// ICONS
import LogoSmall from "../assets/small-logo.png";
import { HiX, HiLogout, HiUser } from "react-icons/hi";
// DATA
import { NavCategories } from '../common/Datas';
// STYLE
import { SideNavWrapper, SideHeader, SideNav, SideMain, SideFooter } from '../common/Styled';
// React-redux
import { useSelector, useDispatch } from 'react-redux';

const Navbar = ({ handleNavbar }) => {
  // 리덕스 스토어의 상태를 조회
  // eslint-disable-next-line
  const { userInfo, isLoggedIn } = useSelector((state) => state.auth); 
  const userName = userInfo.userName; // Objects are not valid as a React child 
  
  const dispatch = useDispatch();
  const signOut = () => {
    dispatch({ 
      type : 'LOGOUT',  // 액션타입
      isLoggedIn : false, // 로그인여부
      userInfo : {
        id: null,
        userName: null,
        imageURL: null,
        email: null, 
      }, // 로그인 된 유저의 정보저장
    });
  };

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
        <div onClick={handleNavbar}>
          <HiX />
        </div>
      </SideHeader>
      <SideNav>
        <ul>
          {
            NavCategories.map(category => (
              <li key={category.pathName}>
                <Link 
                  to={`/${category.pathName}`} 
                  onClick={handleNavbar}
                >
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
        : (
          <Link 
            to="/login" 
            className="loginlink"
          >로그인</Link>
        )
      }
      <SideFooter>
        {
          isLoggedIn 
          ? (
            <>
            <div>
              <HiUser />
            </div>
            <div>
              <HiLogout 
                onClick={signOut} 
              /> 
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
