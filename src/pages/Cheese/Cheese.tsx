import { CART_ACTION_TYPE } from '@/features/cart/model/actionTypes';
import { cheeseList } from '@/shared/api/mock/food-menu.mock.js';
import LINK from '@/shared/constants/link';
import { useCTAButton } from '@/shared/hooks/useCTAButton';
import { useSelectMenu } from '@/shared/hooks/useSelectMenu';
import { CTAButton } from '@/shared/ui';
import Title from '@/shared/ui/Title';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import CheeseList from './ui/CheeseList';

const Cheese = () => {
  const dispatch = useDispatch();
  const { menuId, currentMenu: currentCheese, handleOrderMenu } = useSelectMenu(cheeseList);
  const { buttonDisabled, setButtonDisabled, handleNextOrder } = useCTAButton(LINK.VEGETABLE);

  const selectCheese = useCallback(
    (id: number) => () => {
      handleOrderMenu(id);
      setButtonDisabled(false);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const saveCheese = () => {
    dispatch({
      type: CART_ACTION_TYPE.CHEESE,
      payload: {
        currentMenu: currentCheese,
      },
    });
  };

  return (
    <main className="flex-1 overflow-auto pb-[96px]">
      <form className="relative h-full p-4">
        <fieldset className="mb-4 inline-flex h-full flex-col gap-2">
          <Title>치즈선택</Title>
          <CheeseList menuId={menuId} cheeseList={cheeseList} handleSelectCheese={selectCheese} />
        </fieldset>

        <CTAButton
          label={`${currentCheese.nameKor} 치즈 선택 (3 / 7) `}
          disabled={buttonDisabled}
          handleNextOrder={(e) => {
            // 치즈를 하나도 선택하지 않은 경우, alert
            const condition = currentCheese.id === 0;
            if (condition) {
              const confirm = window.confirm('치즈를 선택하지 않으셨습니다.\n이대로 주문할까요?');
              if (confirm) {
                saveCheese();
                handleNextOrder(e);
              }

              return null;
            } else {
              saveCheese();
              handleNextOrder(e);
            }
          }}
        />
      </form>
    </main>
  );
};

export default Cheese;
