import { useEffect, useState } from 'react';

const useSplashScreen = () => {
  const LOADING = 'loading';
  const [isLoading, setIsLoading] = useState(JSON.parse(sessionStorage.getItem(LOADING)));

  useEffect(() => {
    if (!isLoading) {
      sessionStorage.setItem(LOADING, true);
      setIsLoading(true);
    }
    setTimeout(() => {
      sessionStorage.setItem(LOADING, false);
      setIsLoading(false);
    }, 3000);

    // eslint-disable-next-line
  }, []);

  return isLoading;
};

export default useSplashScreen;
