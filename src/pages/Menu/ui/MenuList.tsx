import { ICategoryMenuDetail } from '@/shared/api/mock/food-menu.types';
import Title from '@/shared/ui/Title';
import { formatPrice } from '@/shared/utils/common-utils';
interface IMenuProps {
  menuId: number;
  menuList: ICategoryMenuDetail[] | null;
  handleSelectMenu: (id: number) => () => void;
}

const MenuList = ({ menuId, menuList, handleSelectMenu }: IMenuProps) => {
  return (
    <>
      <Title>메뉴선택</Title>
      <div className="mb-4 grid w-full max-w-[440px] auto-rows-[minmax(156px,auto)] grid-cols-[repeat(2,1fr)] gap-5">
        {menuList?.map(
          ({ id, nameKor, nameEng, imgPath, description, price }) => {
            const selected = id === menuId;

            return (
              <article
                key={id}
                onClick={handleSelectMenu(id)}
                className={`relative inline-flex w-full cursor-pointer flex-col justify-center gap-2 rounded-lg border border-solid p-2 ${selected ? "border-green" : "border-grey-light"}`}
              >
                <section className="max-h-[30px] max-w-[112px]">
                  <h3 className="u-text-ellipsis text-xs font-semibold">
                    {nameKor}
                  </h3>
                  <p className="u-text-ellipsis text-2xs capitalize">
                    {nameEng}
                  </p>
                </section>
                <section
                  className={`relative max-h-[84px] w-full flex-1 text-[0]`}
                >
                  <img
                    src={imgPath}
                    alt={nameKor}
                    className={`relative inline-block h-full w-full object-contain text-2xs transition-opacity duration-[0.3s] ${selected ? "opacity-30" : "opacity-100"}`}
                  />
                  <span
                    className={`absolute left-2/4 top-2/4 w-full -translate-x-2/4 -translate-y-2/4 select-none text-2xs opacity-0 transition-opacity duration-[0.5s] ${selected ? "opacity-100" : ""}`}
                  >
                    {description}
                  </span>
                </section>
                {!!Number(price) && (
                  <p className="text-2xs">{formatPrice(Number(price))} 원</p>
                )}
              </article>
            );
          }
        )}
      </div>
    </>
  );
};

export default MenuList;
