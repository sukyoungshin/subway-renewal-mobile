import React from "react";
import { MainScreen, SplashScreen } from 'components';
import { usePageMove, useSplashScreen } from './hooks';

const Main = () => {

  const handleNavAddr = usePageMove();
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
