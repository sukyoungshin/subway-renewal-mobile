import Logo from "assets/splash-logo.webp";
import { Container } from "./SplashLogo.style";

const SplashLogo = () => {
  return (
    <Container>
      <img src={Logo} alt="스플래쉬 로고" />
    </Container>
  );
};

export default SplashLogo;
