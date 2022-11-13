import { ButtonsWrapper } from "./LoginButtons.style";
import {
  GoogleLogin,
  KakaoLogin,
  FacebookLogin,
} from "components/presentational";

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
