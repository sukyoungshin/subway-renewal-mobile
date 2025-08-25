import SplashFooter from '../SplashFooter/SplashFooter';
import SplashLogo from '../SplashLogo/SplashLogo';
import { Container } from './SplashScreen.style';

const SplashScreen = () => {
  return (
    <Container>
      <SplashLogo />
      <SplashFooter />
    </Container>
  );
};

export default SplashScreen;
