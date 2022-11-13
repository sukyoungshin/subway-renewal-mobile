import React from "react";
import { Container } from "./Carousel.style";
import { CarouselContents } from "mock/content-data";
import { useCarouselIndex, usePageMove } from "./hooks";
import { CarouselPagination, CarouselContent } from "components/index";

const Carousel = () => {
  const { selectedId, handleClick } = useCarouselIndex();
  const goToOrderPage = usePageMove();

  return (
    <Container>
      <CarouselPagination
        CarouselContents={CarouselContents}
        selectedId={selectedId}
        handleClick={handleClick}
      />
      <CarouselContent
        CarouselContents={CarouselContents}
        selectedId={selectedId}
        handleClick={handleClick}
        goToOrderPage={goToOrderPage}
      />
    </Container>
  );
};

export default Carousel;
