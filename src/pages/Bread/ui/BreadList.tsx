import { IBreadList } from '@/shared/api/mock/food-menu.types';
import { defaultProductImageUrl } from '@/shared/constants/image';
import { formatPrice } from '@/shared/utils/common-utils';

interface IBreadProps {
  menuId: number;
  breadList: IBreadList[];
  handleSelectBread: (id: number) => void;
}

const BreadList = ({ menuId, breadList, handleSelectBread }: IBreadProps) => {
  return (
    <div className="mb-4 grid w-full auto-rows-[minmax(156px,auto)] grid-cols-[repeat(2,1fr)] gap-5">
      {breadList.map(({ id, nameKor, nameEng, imgPath, description, price }) => {
        const selected = id === menuId;

        return (
          <section
            key={id}
            onClick={() => handleSelectBread(id)}
            className={`relative inline-flex cursor-pointer w-full flex-col justify-center gap-2 rounded-lg border border-solid p-2 ${selected ? 'border-green' : 'border-grey-light'}`}
          >
            <div className="max-h-[30px] max-w-[112px]">
              <h3 className="u-text-ellipsis text-xs font-semibold">{nameKor}</h3>
              <p className="u-text-ellipsis text-2xs capitalize">{nameEng}</p>
            </div>
            <div className="relative max-h-[84px] w-full flex-1 text-[0]">
              <img
                src={imgPath !== '' ? imgPath : defaultProductImageUrl}
                alt={nameKor}
                className={`relative inline-block h-full w-full text-2xs transition-opacity duration-[0.3s] ${selected ? 'opacity-30' : 'opacity-100'}`}
              />
              <span
                className={`absolute left-2/4 top-2/4 w-full -translate-x-2/4 -translate-y-2/4 select-none text-2xs transition-opacity duration-[0.5s] ${selected ? 'opacity-100' : 'opacity-0'}`}
              >
                {description}
              </span>
            </div>
            {!!Number(price) && <span className="text-2xs">{formatPrice(Number(price))}</span>}
          </section>
        );
      })}
    </div>
  );
};

export default BreadList;
