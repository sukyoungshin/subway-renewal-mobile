import { recommendedMenuList } from '@/shared/api/mock/recommend-menu.mock.js';
import icon_order from '@/shared/assets/icons/order.svg';
import image_sandwich_sample from '@/shared/assets/sample.webp';
// import { Spinner } from '@/shared/ui';
import { handleNavAddrType } from '../hooks/usePageMove';

const RecommendedMenu = ({ handleNavAddr }: { handleNavAddr: handleNavAddrType }) => {
  return (
    <div className="mb-14 flex flex-col items-center text-center">
      <h2 className="mx-0 mb-6 mt-8 text-xl font-bold text-black">추천메뉴</h2>
      <div className="flex h-fit w-[270px] flex-col gap-8">
        {recommendedMenuList.map(({ id, imgPath, menu, kcal, altMessage }) => (
          <div
            key={id}
            className="relative box-border inline-block h-[260px] w-[270px] p-4 shadow-[0px_3px_10px_rgba(0,0,0,0.1)]"
          >
            <img
              src={imgPath || image_sandwich_sample}
              alt={altMessage}
              width={235}
              height={135}
              style={{ width: '235px', height: '135px' }}
            />
            <h3 className="mx-0 mb-[11px] mt-2.5 text-sm font-bold text-black">{menu}</h3>
            <p className="text-sm text-grey">{kcal}kcal</p>
            <button
              type="button"
              onClick={handleNavAddr}
              className="absolute bottom-0 left-2/4 h-12 w-fit -translate-x-2/4 translate-y-2/4 bg-transparent text-[0]"
            >
              <img
                src={icon_order}
                alt="주문하기 버튼"
                width={40}
                height={40}
                style={{ width: '40px', height: '40px' }}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedMenu;
