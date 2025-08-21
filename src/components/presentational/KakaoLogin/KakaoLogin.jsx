import { OAuthButtonLayout } from '@/components/Layout';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { KakaoButton } from './KakaoLogin.style';
import { useKakaoLoginAndOut } from './hooks';

const KakaoLogin = () => {
  const { loginFlag, onSignIn, onSignOut } = useKakaoLoginAndOut();

  return (
    <OAuthButtonLayout>
      {!loginFlag ? (
        <LoginButton onSignIn={onSignIn} label="카카오로 시작" />
      ) : (
        <LogoutButton onSignOut={onSignOut} label="Logout" />
      )}
    </OAuthButtonLayout>
  );
};

const LoginButton = ({ onSignIn, label }) => {
  return (
    <KakaoButton type="button" onClick={onSignIn}>
      <RiKakaoTalkFill /> {label}
    </KakaoButton>
  );
};

const LogoutButton = ({ onSignOut, label }) => {
  return (
    <KakaoButton type="button" onClick={onSignOut}>
      {label}
    </KakaoButton>
  );
};

export default KakaoLogin;
