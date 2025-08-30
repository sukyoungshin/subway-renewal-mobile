import { CART_ACTION_TYPE } from '@/features/cart/model/actionTypes';
import { breadList, breadOptionList } from '@/shared/api/mock/food-menu.mock';
import { defaultBreadList } from '@/shared/constants/image';
import LINK from '@/shared/constants/link';
import { useCTAButton } from '@/shared/hooks/useCTAButton';
import { useSelectMenu } from '@/shared/hooks/useSelectMenu';
import { CTAButton } from '@/shared/ui';
import Title from '@/shared/ui/Title';
import { useDispatch } from 'react-redux';
import BreadList from './ui/BreadList/BreadList';
import BreadOption from './ui/BreadOption/BreadOption';

const Bread = () => {
  const dispatch = useDispatch();
  const { menuId, currentMenu: selectedBread, handleOrderMenu } = useSelectMenu(breadList);
  const { buttonDisabled, setButtonDisabled, handleNextOrder } = useCTAButton(LINK.CHEESE);

  const selectBread = (id: number) => {
    handleOrderMenu(id);
    setButtonDisabled(false);
  };

  const saveBread = () => {
    dispatch({
      type: CART_ACTION_TYPE.BREAD,
      payload: {
        currentMenu: selectedBread,
        breadOptions: breadOptionList,
      },
    });
  };

  return (
    <main className="flex-1 overflow-auto pb-[96px]">
      <form className="relative h-full w-full p-4">
        <fieldset className="mb-4 inline-flex w-full flex-col gap-2">
          <Title>옵션선택</Title>
          <BreadOption />
        </fieldset>
        <fieldset className="mb-4 inline-flex h-full w-full flex-col gap-2">
          <Title>빵 선택</Title>
          <BreadList
            menuId={menuId}
            breadList={breadList ?? defaultBreadList}
            handleSelectBread={selectBread}
          />
        </fieldset>

        {breadList && breadList.length !== 0 && (
          <CTAButton
            label={`${selectedBread?.nameKor} 빵 선택 (2 / 7) `}
            disabled={buttonDisabled}
            handleNextOrder={(e) => {
              saveBread();
              handleNextOrder(e);
            }}
          />
        )}
      </form>
    </main>
  );
};

export default Bread;
