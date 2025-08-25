import { CART_ACTION_TYPE } from '@/features/cart/model/actionTypes';
import { cheeseList } from '@/shared/api/mock/food-menu.mock.js';
import LINK from '@/shared/constants/link';
import { useCTAButton } from '@/shared/hooks/useCTAButton';
import { useSelectMenu } from '@/shared/hooks/useSelectMenu';
import { CTAButton } from '@/shared/ui';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Section } from './Cheese.style';
import CheeseList from './ui/CheeseList/CheeseList';

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
    <Container>
      <Section style={{ marginTop: '32px' }}>
        <h2>옵션선택</h2>
        <article />
      </Section>
      <Section>
        <h2>치즈선택</h2>
        <CheeseList menuId={menuId} cheeseList={cheeseList} handleSelectCheese={selectCheese} />
      </Section>

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
    </Container>
  );
};

export default Cheese;
