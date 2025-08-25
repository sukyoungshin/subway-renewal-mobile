import usePageMove from './hooks/usePageMove';
import useSplashScreen from './hooks/useSplashScreen';
import MainScreen from './ui/MainScreen/MainScreen';
import SplashScreen from './ui/SplashScreen/SplashScreen';

const Main = () => {
  const handleNavAddr = usePageMove();
  const isLoading = useSplashScreen();

  return <>{isLoading ? <SplashScreen /> : <MainScreen handleNavAddr={handleNavAddr} />}</>;
};

export default Main;
