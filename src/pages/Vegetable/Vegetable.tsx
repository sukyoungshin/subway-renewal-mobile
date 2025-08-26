import { CART_ACTION_TYPE } from '@/features/cart/model/actionTypes';
import { vegetableList } from '@/shared/api/mock/food-menu.mock';
import LINK from '@/shared/constants/link';
import { useCTAButton } from '@/shared/hooks/useCTAButton';
import { CTAButton } from '@/shared/ui';
import { useDispatch } from 'react-redux';
import { useHandleVegetableAmount } from './hooks';
import VegetableList from './ui/VegetableList/VegetableList';
import VegetableOption from './ui/VegetableOption/VegetableOption';
import { Container, Paragraph, Section, Title } from './Vegetable.style';

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
    <Container>
      <Section style={{ marginTop: '32px' }}>
        <Title>옵션선택</Title>
        <VegetableOption
          isChecked={isChecked}
          selectedCheckBox={selectedCheckBox}
          setButtonDisabled={() => setButtonDisabled(false)}
        />
      </Section>
      <Section>
        <Title>야채선택</Title>
        <Paragraph>원하시는 야채를 선택하세요.</Paragraph>
        <VegetableList
          vegetableList={vegetableList}
          step={step}
          setStep={setStep}
          handleStepChange={handleStepChange}
          handleVegetableAmount={handleVegetableAmount}
          setButtonDisabled={() => setButtonDisabled(false)}
        />
      </Section>

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
    </Container>
  );
};

export default Vegetable;
