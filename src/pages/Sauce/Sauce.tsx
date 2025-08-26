import { CART_ACTION_TYPE } from '@/features/cart/model/actionTypes';
import { sauceList, sauceOptionList } from '@/shared/api/mock/food-menu.mock';
import LINK from '@/shared/constants/link';
import { useCTAButton } from '@/shared/hooks/useCTAButton';
import { CTAButton } from '@/shared/ui';
import { useDispatch } from 'react-redux';
import { Container, Section } from './Sauce.style';
import { useSelectOptionAndMenu } from './hooks';
import SauceList from './ui/SauceList/SauceList';
import SauceOption from './ui/SauceOption/SauceOption';

const Sauce = () => {
  const dispatch = useDispatch();
  const { menuId, currentMenu, selectedOptionId, handleOrderMenu, handleSelectedOptionId } =
    useSelectOptionAndMenu(sauceOptionList, sauceList);
  const { buttonDisabled, setButtonDisabled, handleNextOrder } = useCTAButton(LINK.ORDER);

  const saveSauce = () => {
    dispatch({
      type: CART_ACTION_TYPE.SAUCE,
      payload: currentMenu,
    });
  };

  return (
    <Container>
      <Section style={{ marginTop: '32px' }}>
        <h2>옵션선택 (다중선택)</h2>
        <SauceOption
          selectedOptionId={selectedOptionId}
          handleSelectedOptionId={handleSelectedOptionId}
          sauceOptionList={sauceOptionList}
          setButtonDisabled={() => setButtonDisabled(false)}
        />
      </Section>

      <Section>
        <h2>소즈/시즈닝 선택</h2>
        <SauceList
          menuId={menuId}
          sauceList={sauceList}
          handleOrderMenu={handleOrderMenu}
          setButtonDisabled={() => setButtonDisabled(false)}
        />
      </Section>

      <CTAButton
        label="소스 선택 (5 / 7)"
        disabled={buttonDisabled}
        handleNextOrder={(e) => {
          // 소스를 선택하지 않은 경우, alert
          const condition = currentMenu?.find(({ id }) => id === 0);
          if (condition) {
            const confirm = window.confirm('소스를 선택하지 않으셨습니다.\n이대로 주문할까요?');
            if (confirm) {
              saveSauce();
              handleNextOrder(e);
            }
            return null;
          } else {
            saveSauce();
            handleNextOrder(e);
          }
        }}
      />
    </Container>
  );
};

export default Sauce;
