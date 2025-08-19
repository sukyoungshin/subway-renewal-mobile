import LINK from '@/constants/link';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const usePageMove = () => {
  const navigate = useNavigate();
  const handleNavAddr = () => navigate(LINK.ADDR);

  return handleNavAddr;
};

export const useSplashScreen = () => {
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
