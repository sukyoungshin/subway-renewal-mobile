import { useEffect, useState } from 'react';

const NEED_SPLASH_SCREEN = 'needSplashScreen';

const useSplashScreen = () => {
  const [isSplashNeeded, setIsSplashNeeded] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    if (sessionStorage.getItem(NEED_SPLASH_SCREEN) === 'false') {
      setIsSplashNeeded(false);
      return;
    }

    sessionStorage.setItem(NEED_SPLASH_SCREEN, 'true');
    setIsSplashNeeded(true);

    const timer = setTimeout(() => {
      sessionStorage.setItem(NEED_SPLASH_SCREEN, 'false');
      setIsSplashNeeded(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return isSplashNeeded;
};

export default useSplashScreen;
