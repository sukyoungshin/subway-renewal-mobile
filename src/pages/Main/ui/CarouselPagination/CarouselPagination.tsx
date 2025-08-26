import { carouselContentListType } from '@/shared/api/mock/carousel-content.types';
import { Item, PaginationList } from './CarouselPagination.style';

interface ICarouselProps {
  carouselContentList: carouselContentListType;
  selectedId: number;
  handleClick: (id: number) => () => void;
}

const CarouselPagination = ({ carouselContentList, selectedId, handleClick }: ICarouselProps) => {
  return (
    <PaginationList>
      {carouselContentList.map((content) => (
        <Item
          key={content.id}
          isSelected={content.id === selectedId}
          onClick={handleClick(content.id)}
        />
      ))}
    </PaginationList>
  );
};

export default CarouselPagination;
