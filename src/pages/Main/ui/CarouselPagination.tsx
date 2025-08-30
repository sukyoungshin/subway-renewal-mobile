import { carouselContentListType } from '@/shared/api/mock/carousel-content.types';

interface IPaginationProps {
  contentList: carouselContentListType;
  selectedId: number;
  handleClick: (id: number) => () => void;
}

const CarouselPagination = ({ contentList, selectedId, handleClick }: IPaginationProps) => {
  return (
    <menu className="absolute bottom-[0.4rem] left-0 z-50 inline-flex h-8 w-full translate-x-0 flex-row items-center justify-center gap-2">
      {contentList.map(({ id }) => {
        const isSelected = id === selectedId;

        return (
          <li
            key={id}
            className={`h-2 w-2 rounded-xl border border-solid border-white transition-[background-color] duration-[0.4s] ${isSelected ? "border-[none] bg-white" : "bg-transparent"}`}
            onClick={handleClick(id)}
          />
        );
      })}
    </menu>
  );
};

export default CarouselPagination;
