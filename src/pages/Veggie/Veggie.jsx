import { CtaButton } from '@/shared/ui';
import { useCTAButton, useSelectAmountOfVeg } from './hooks';
import SelectAll from './ui/SelectAll/SelectAll';
import VeggieRange from './ui/VeggieRange/VeggieRange';
import { Container, Paragraph, Section, Title } from './Veggie.style';

const Veggie = () => {
  const { isChecked, step, selectedCheckBox, handleAmountVeg, handleStepChange } =
    useSelectAmountOfVeg();
  const handleOrderProcess = useCTAButton({ step });

  return (
    <Container>
      <Section style={{ marginTop: '32px' }}>
        <Title>옵션선택</Title>
        <Paragraph className="description">원하시는 야채를 선택하세요.</Paragraph>
        <SelectAll isChecked={isChecked} selectedCheckBox={selectedCheckBox} />
      </Section>
      <Section>
        <Title>야채선택</Title>
        <VeggieRange
          step={step}
          handleAmountVeg={handleAmountVeg}
          handleStepChange={handleStepChange}
        />
      </Section>

      <CtaButton
        isBtnActivated={true}
        handleOrderProcess={handleOrderProcess}
        label="야채 선택 (4 / 7)"
      />
    </Container>
  );
};

export default Veggie;
