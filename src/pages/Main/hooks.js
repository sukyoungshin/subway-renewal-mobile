import { useState, useEffect } from "react";

export const useSplashScreen = () => {

  const LOADING = 'loading';
  const [ isLoading, setIsLoading ] = useState(
    JSON.parse(sessionStorage.getItem(LOADING))
  );

  useEffect(() => {
    if (isLoading === null) {
      sessionStorage.setItem(LOADING, true);
      setIsLoading(true);
    } 
    setTimeout(() => {
      sessionStorage.setItem(LOADING, false)
      setIsLoading(false);
    }, 3000);

    // eslint-disable-next-line
  }, []);

  return isLoading;
};
