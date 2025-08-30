import { ISauceList } from '@/shared/api/mock/food-menu.types';


import { defaultProductImageUrl } from '@/shared/constants/image';

interface ISauce {
  menuId: number[];
  handleOrderMenu: ({ id }: { id: number }) => void;
  sauceList: ISauceList[];
  setButtonDisabled: () => void;
}

const SauceList = ({ menuId, sauceList, handleOrderMenu, setButtonDisabled }: ISauce) => {
  return (
    <div className="mb-4 grid w-full auto-rows-[minmax(156px,auto)] grid-cols-[repeat(2,1fr)] gap-5">
      {sauceList.map(({ id, nameKor, nameEng, imgPath, description }) => {
        const isMenuSelected = menuId.includes(id);

        return (
          <div
            key={id}
            onClick={() => {
              if (id === 0 && isMenuSelected) {
                return;
              }
              setButtonDisabled();
              handleOrderMenu({ id });
            }}
            className={`relative flex w-full flex-col gap-2 cursor-pointer rounded-lg border border-solid p-2 ${isMenuSelected ? "border-green" : "border-grey-light"}`}
          >
            <div className="max-h-[30px] max-w-[112px]">
              <h3 className="u-text-ellipsis text-xs font-bold">{nameKor}</h3>
              <p className="u-text-ellipsis text-2xs capitalize">{nameEng}</p>
            </div>
            <div className="relative max-h-[84px] w-full flex-1 text-[0]">
              <img
                src={imgPath !== "" ? imgPath : defaultProductImageUrl}
                alt={nameKor}
                className={`relative h-full w-full object-cover text-2xs transition-opacity duration-[0.3s] ${isMenuSelected ? "opacity-30" : "opacity-100"}`}
              />
              <span
                className={`absolute left-2/4 top-2/4 w-full -translate-x-2/4 -translate-y-2/4 text-2xs transition-opacity duration-[0.5s] ${isMenuSelected ? "opacity-100" : "opacity-0"}`}
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

export default SauceList;
