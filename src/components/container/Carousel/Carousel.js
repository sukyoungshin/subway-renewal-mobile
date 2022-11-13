import React from "react";
import { Container } from "./Carousel.style";
import { AdContents } from "mock/content-data";
import { useCarouselIndex, usePageMove } from "./hooks";
import { CarouselPagination, CarouselContent } from "components/index";

const Carousel = () => {
  const { selectedId, handleClick } = useCarouselIndex();
  const goToOrderPage = usePageMove();

  return (
    <Container>
      <CarouselPagination
        AdContents={AdContents}
        selectedId={selectedId}
        handleClick={handleClick}
      />
      <CarouselContent
        AdContents={AdContents}
        selectedId={selectedId}
        handleClick={handleClick}
        goToOrderPage={goToOrderPage}
      />
    </Container>
  );
};

export default Carousel;
