import { ICheeseList } from '@/shared/api/mock/food-menu.types';
import { defaultProductImageUrl } from '@/shared/constants/image';

interface ICheeseProps {
  menuId: number;
  cheeseList: ICheeseList[];
  handleSelectCheese: (id: number) => () => void;
}

const Cheeses = ({ menuId, cheeseList, handleSelectCheese }: ICheeseProps) => {
  return (
    <div className="mb-4 grid w-full auto-rows-[minmax(156px,auto)] grid-cols-[repeat(2,1fr)] gap-5">
      {cheeseList.map(({ id, nameKor, nameEng, imgPath, description }) => {
        const selected = menuId === id;

        return (
          <div
            key={id}
            onClick={handleSelectCheese(id)}
            className={`relative inline-flex w-full flex-col justify-center cursor-pointer gap-2 rounded-lg border border-solid  p-2
              ${selected ? "border-green" : "border-grey-light"}`}
          >
            <div className="max-h-[30px] max-w-[112px]">
              <h3 className="u-text-ellipsis text-xs font-bold">{nameKor}</h3>
              <p className="u-text-ellipsis text-2xs capitalize">{nameEng}</p>
            </div>
            <div className="relative max-h-[84px] w-full flex-1 text-[0]">
              <img
                src={imgPath !== "" ? imgPath : defaultProductImageUrl}
                alt={nameKor}
                className={`relative inline-block h-full w-full text-2xs transition-opacity duration-[0.3s] ${selected ? "opacity-30" : "opacity-100"}`}
              />
              <span
                className={`absolute left-2/4 top-2/4 w-full -translate-x-2/4 -translate-y-2/4 text-2xs transition-opacity duration-[0.5s] ${selected ? "opacity-100" : "opacity-0"}`}
              >
                {description}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cheeses;
