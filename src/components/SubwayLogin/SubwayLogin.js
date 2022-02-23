import React from 'react';
import { useSubwayLogin } from './hooks';
import { ButtonWrapperStyled, InputContainerStyled, LoginButtonStyled } from './SubwayLogin.style';

const SubwayLogin = () => {
  const { loginFlag, userInfo, handleUserInfo, onSignIn, onSignOut } = useSubwayLogin();
  
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