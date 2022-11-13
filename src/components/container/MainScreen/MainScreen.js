import React from "react";
import { Carousel } from "components";
import { Container, Section } from "./MainScreen.style";
import { RecommendedMenu } from "../../index";

const MainScreen = ({ handleNavAddr }) => {
  return (
    <Container>
      <Carousel />
      <Section>
        <h2>추천메뉴</h2>
        <RecommendedMenu handleNavAddr={handleNavAddr} />
      </Section>
    </Container>
  );
};

export default MainScreen;
