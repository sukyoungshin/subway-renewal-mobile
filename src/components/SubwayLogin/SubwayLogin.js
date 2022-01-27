import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LINK from 'constants/link';
import { ButtonWrapperStyled, InputContainerStyled, LoginButtonStyled } from './SubwayLogin.style';
import { useSelector, useDispatch } from 'react-redux';
import { loginFlagSelector } from 'reducers';

const SubwayLogin = () => {
  /* 리덕스 */
  const loginFlag = useSelector(loginFlagSelector);
  const dispatch = useDispatch();

  /* 라우터 */
  const navigate = useNavigate();

  /* 아이디, 비밀번호 */
  const [ userInfo, setUserInfo ] = useState({});
  const handleUserInfo = (e) => {
    const { id, value } = e.target;
    setUserInfo({
      ...userInfo,
      [id]: value,
    });
  };

  /* 로그인 관리 */
  // 로그인
  const onSignIn = (e) => {
    e.preventDefault();
    if (userInfo.userid === undefined && userInfo.userpassword === undefined) {
      return;
    } else if (userInfo.userid === undefined || userInfo.userpassword === undefined) {
      console.log('아이디 또는 비밀번호를 확인하세요');
      return;
    } else if (userInfo.userid.length === 0 || userInfo.userpassword.length === 0) {
      console.log('아이디 또는 비밀번호를 확인하세요');   
      return;
    } 

    dispatch({ 
      type : 'auth/login', 
      userInfo : {
        id : userInfo.userid,
        userName : userInfo.userid,
        imageURL : null,
      }, 
      isLoggedIn : true,
    });

    window.alert(`${userInfo.userid}님, 로그인 되었습니다!`);
    navigate(LINK.ROOT);
  };
  // 로그아웃
  const onSignOut = () => {
    dispatch({ 
      type : 'auth/logout', 
      userInfo : {
        id : null,
        userName : null,
        imageURL : null,
      }, 
      isLoggedIn : false,
    });
    window.alert('로그아웃 되었습니다.');
    navigate(LINK.ROOT);
  };
  
  return(
    <>
      {
        !loginFlag
        ? <SubwayLoginButton userInfo={userInfo} handleUserInfo={handleUserInfo} onSignIn={onSignIn} />
        : <SubwayLogoutButtn onSignOut={onSignOut} />
      }
    </>
  );
};

const SubwayLoginButton = ({ userInfo, handleUserInfo, onSignIn }) => {
  return (
    <>
    <InputContainerStyled>
      <input 
        type="text" 
        placeholder="아이디를 입력하세요" 
        id="userid"
        value={userInfo.id}
        onChange={handleUserInfo}
      />
    </InputContainerStyled>
    <InputContainerStyled>
      <input 
        type="password" 
        placeholder="비밀번호를 입력하세요" 
        id="userpassword"
        value={userInfo.id}
        onChange={handleUserInfo}
      />
    </InputContainerStyled>

    <ButtonWrapperStyled>
      <LoginButtonStyled 
        type="button" 
        onClick={onSignIn}
      >
        로그인
      </LoginButtonStyled>
    </ButtonWrapperStyled>
    </>
  );
};

const SubwayLogoutButtn = ({ onSignOut }) => {
  return (
    <ButtonWrapperStyled>
      <LoginButtonStyled 
        type="button" 
        onClick={onSignOut}  
      >
        로그아웃
      </LoginButtonStyled>
    </ButtonWrapperStyled>
  );
};

export default SubwayLogin;