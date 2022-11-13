import { PaginationList, Item } from "./CarouselPagination.style";

const CarouselPagination = ({ AdContents, selectedId, handleClick }) => {
  return (
    <PaginationList>
      {AdContents.map((content) => (
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
