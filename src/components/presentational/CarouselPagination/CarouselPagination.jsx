import { PaginationList, Item } from './CarouselPagination.style';

const CarouselPagination = ({ CarouselContents, selectedId, handleClick }) => {
  return (
    <PaginationList>
      {CarouselContents.map((content) => (
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
