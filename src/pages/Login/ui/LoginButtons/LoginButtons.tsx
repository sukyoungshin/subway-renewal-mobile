import FacebookLogin from '../FacebookLogin/FacebookLogin';
import GoogleLogin from '../GoogleLogin/GoogleLogin';
import KakaoLogin from '../KakaoLogin/KakaoLogin';
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
