import React from "react";
import { Container } from "./SplashScreen.style";
import { SplashLogo, SplashFooter } from "components/presentational/index";

const SplashScreen = () => {
  return (
    <Container>
      <SplashLogo />
      <SplashFooter />
    </Container>
  );
};

export default SplashScreen;
