import React from "react";
import { useNavigate } from "react-router-dom";
import { MainScreen, SplashScreen } from 'components';
import { useSplashScreen } from './hooks';
import LINK from 'constants/link';

const Main = () => {

  /* 라우터 */
  const navigate = useNavigate(); 
  const handleNavAddr = () => navigate(LINK.ADDR);

  /* 스플래쉬스크린 커스텀훅 */
  const isLoading = useSplashScreen();

  return (
    <>
      {   
        isLoading 
        ? <SplashScreen />
        : <MainScreen handleNavAddr={handleNavAddr} />
      }  
    </>
  );
};

export default Main;
