import { carouselContentList } from '@/shared/api/mock/carousel-content.mock.js';
import CarouselContent from '../CarouselContent/CarouselContent';
import CarouselPagination from '../CarouselPagination/CarouselPagination';
import { Container } from './Carousel.style';
import { useCarouselIndex, usePageMove } from './hooks';

const Carousel = () => {
  const { selectedId, handleClick } = useCarouselIndex();
  const goToOrderPage = usePageMove();

  return (
    <Container>
      <CarouselPagination
        carouselContentList={carouselContentList}
        selectedId={selectedId}
        handleClick={handleClick}
      />
      <CarouselContent
        carouselContentList={carouselContentList}
        selectedId={selectedId}
        handleClick={handleClick}
        goToOrderPage={goToOrderPage}
      />
    </Container>
  );
};

export default Carousel;
