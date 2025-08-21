import { CarouselContent, CarouselPagination } from '@/components/index';
import { CarouselContents } from '@/mock/content-data';
import { Container } from './Carousel.style';
import { useCarouselIndex, usePageMove } from './hooks';

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
