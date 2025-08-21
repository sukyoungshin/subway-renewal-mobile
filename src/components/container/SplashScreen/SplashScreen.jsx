import { SplashFooter, SplashLogo } from '@/components/presentational/index';
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
