import { carouselContentList } from '@/shared/api/mock/carousel-content.mock.js';
import { useCarouselIndex } from '../hooks/useCarouselIndex';
import CarouselContent from './CarouselContent';
import CarouselPagination from './CarouselPagination';

const Carousel = () => {
  const { selectedId, handleClick } = useCarouselIndex();

  return (
    <section className={`relative flex h-[232px] max-w-[440px]`}>
      <CarouselPagination
        contentList={carouselContentList}
        selectedId={selectedId}
        handleClick={handleClick}
      />
      <CarouselContent
        contentList={carouselContentList}
        selectedId={selectedId}
        handleClick={handleClick}
      />
    </section>
  );
};

export default Carousel;
