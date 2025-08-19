import { FacebookLogin, GoogleLogin, KakaoLogin } from '@/components/presentational';
import { ButtonsWrapper } from './LoginButtons.style';

const LoginButtons = () => {
  return (
    <ButtonsWrapper>
      <GoogleLogin />
      <KakaoLogin />
      <FacebookLogin />
    </ButtonsWrapper>
  );
};

export default LoginButtons;
