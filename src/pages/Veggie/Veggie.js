import React from "react";
import { Container, Section, Title, Paragraph } from "./Veggie.style";
import { CtaButton, SelectAll, VeggieRange } from "components";
import { useCTAButton, useSelectAmountOfVeg } from "./hooks";

const Veggie = () => {
  const {
    isChecked,
    step,
    selectedCheckBox,
    handleAmountVeg,
    handleStepChange,
  } = useSelectAmountOfVeg();
  const handleOrderProcess = useCTAButton({ step });

  return (
    <Container>
      <Section style={{ marginTop: "32px" }}>
        <Title>옵션선택</Title>
        <Paragraph className="description">
          원하시는 야채를 선택하세요.
        </Paragraph>
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
