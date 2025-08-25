import { OAuthButtonLayout } from '@/shared/layout';
import { RiGoogleLine } from 'react-icons/ri';
import { LoginButtonStyled, LogoutButtonStyled } from './GoogleLogin.style';

import { useGoogleLoginAndOut } from './hooks';

const GoogleLogin = () => {
  const { loginFlag, onSignOut } = useGoogleLoginAndOut();

  return (
    <OAuthButtonLayout>
      {!loginFlag.id ? <LoginButton /> : <LogoutButton onSignOut={onSignOut} label="구글logout" />}
    </OAuthButtonLayout>
  );
};

const LoginButton = () => {
  return <LoginButtonStyled className="g-signin2" data-height="48" data-onsuccess="onSignIn" />;
};

const LogoutButton = ({ onSignOut, label }) => {
  return (
    <LogoutButtonStyled type="button" onClick={onSignOut}>
      <RiGoogleLine /> {label}
    </LogoutButtonStyled>
  );
};

export default GoogleLogin;
