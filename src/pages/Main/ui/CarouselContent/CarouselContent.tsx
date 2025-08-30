import { carouselContentListType } from '@/shared/api/mock/carousel-content.types';
import usePageMove from '../../hooks/usePageMove';

interface ICarouselProps {
  contentList: carouselContentListType;
  selectedId: number;
  handleClick: (id: number) => () => void;
}

const CarouselContent = ({ contentList, selectedId, handleClick }: ICarouselProps) => {
  const goToOrderPage = usePageMove();

  return (
    <>
      {contentList.map(({ id, title, subTitle, period, event }) => (
        <div
          key={id}
          onClick={() => handleClick(id)}
          className={`absolute left-0 flex h-[232px] w-full flex-1 flex-col gap-4  bg-green p-4 ${id === selectedId ? 'z-[5]' : ''}`}
        >
          <div>
            <h2 className="text-xl font-bold text-yellow">{title}</h2>
            <h2 className="text-xl font-bold text-white">{subTitle}</h2>
          </div>
          <div>
            <p className="text-sm text-white">{event}</p>
            <p className="text-sm text-white">{period}</p>
          </div>
          <div>
            <button
              type="button"
              onClick={goToOrderPage}
              className="px-4 py-2 rounded-lg bg-transparent border border-white text-white text-2xs transition-[background-color] duration-400"
            >
              ORDER NOW
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default CarouselContent;
