import { CART_ACTION_TYPE } from '@/features/cart/model/actionTypes';
import { vegetableList } from '@/shared/api/mock/food-menu.mock';
import LINK from '@/shared/constants/link';
import { useCTAButton } from '@/shared/hooks/useCTAButton';
import { CTAButton } from '@/shared/ui';
import Title from '@/shared/ui/Title';
import { useDispatch } from 'react-redux';
import { useHandleVegetableAmount } from './hooks';
import VegetableList from './ui/VegetableList';
import VegetableOption from './ui/VegetableOption';

const Vegetable = () => {
  const dispatch = useDispatch();
  const { isChecked, step, setStep, selectedCheckBox, handleVegetableAmount, handleStepChange } =
    useHandleVegetableAmount(vegetableList);
  const { buttonDisabled, setButtonDisabled, handleNextOrder } = useCTAButton(LINK.SAUCE);

  const saveVegetable = () => {
    dispatch({
      type: CART_ACTION_TYPE.VEGETABLE,
      payload: step,
    });
  };

  return (
    <main className="flex-1 overflow-auto pb-[96px]">
      <form className="h-full p-4">
        <fieldset className="mb-4 flex flex-col gap-2">
          <Title>옵션선택</Title>
          <VegetableOption
            isChecked={isChecked}
            selectedCheckBox={selectedCheckBox}
            setButtonDisabled={() => setButtonDisabled(false)}
          />
        </fieldset>
        <fieldset className="mb-4 flex h-auto flex-col gap-2">
          <Title>야채선택</Title>
          <p className="text-color text-xs">원하시는 야채를 선택하세요.</p>
          <VegetableList
            vegetableList={vegetableList}
            step={step}
            setStep={setStep}
            handleStepChange={handleStepChange}
            handleVegetableAmount={handleVegetableAmount}
            setButtonDisabled={() => setButtonDisabled(false)}
          />
        </fieldset>

        <CTAButton
          disabled={buttonDisabled}
          label="야채 선택 (4 / 7)"
          handleNextOrder={(e) => {
            // 야채를 하나도 선택하지 않은 경우, alert
            const condition = Object.values(step).every((v) => v === 0);
            if (condition) {
              const confirm = window.confirm('야채를 선택하지 않으셨습니다.\n이대로 주문할까요?');
              if (confirm) {
                saveVegetable();
                handleNextOrder(e);
              }
              return null;
            } else {
              saveVegetable();
              handleNextOrder(e);
            }
          }}
        />
      </form>
    </main>
  );
};

export default Vegetable;
