import SubwayButton from '../SubwayButton/SubwayButton';
import { InputContainerStyled } from './SubwayLogin.style';
import { useSubwayLogin } from './hooks';

const SubwayLogin = () => {
  const { loginFlag, userInfo, handleUserInfo, onSignIn, onSignOut } = useSubwayLogin();

  return (
    <>
      {!loginFlag ? (
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

          <SubwayButton onAction={onSignIn} label="로그인" />
        </>
      ) : (
        <SubwayButton onAction={onSignOut} label="로그아웃" />
      )}
    </>
  );
};

export default SubwayLogin;
