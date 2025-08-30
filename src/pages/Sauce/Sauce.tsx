import { CART_ACTION_TYPE } from '@/features/cart/model/actionTypes';
import { sauceList, sauceOptionList } from '@/shared/api/mock/food-menu.mock';
import LINK from '@/shared/constants/link';
import { useCTAButton } from '@/shared/hooks/useCTAButton';
import { CTAButton } from '@/shared/ui';
import Title from '@/shared/ui/Title';
import { useDispatch } from 'react-redux';
import { useSelectOptionAndMenu } from './hooks';
import SauceList from './ui/SauceList';
import SauceOption from './ui/SauceOption';

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
    <main className="flex-1 overflow-auto pb-[96px]">
      <form className="h-full p-4">
        <fieldset className="mb-4 flex flex-col gap-2">
          <Title>옵션선택 (다중선택)</Title>
          <SauceOption
            selectedOptionId={selectedOptionId}
            handleSelectedOptionId={handleSelectedOptionId}
            sauceOptionList={sauceOptionList}
            setButtonDisabled={() => setButtonDisabled(false)}
          />
        </fieldset>

        <fieldset className="mb-4 flex flex-col gap-2">
          <Title>소스/시즈닝 선택</Title>
          <SauceList
            menuId={menuId}
            sauceList={sauceList}
            handleOrderMenu={handleOrderMenu}
            setButtonDisabled={() => setButtonDisabled(false)}
          />
        </fieldset>

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
      </form>
    </main>
  );
};

export default Sauce;
