import { CtaButton } from '@/shared/ui';
import { useCallback } from 'react';
import { Container, Section } from './Sauce.style';
import { useCTAButton, useSelectOptionAndMenu } from './hooks';
import SauceOption from './ui/SauceOption/SauceOption';
import Sauces from './ui/Sauces/Sauces';

const Sauce = () => {
  const { menuId, currentMenu, isChecked, handleOrderMenu, selectedRadio } =
    useSelectOptionAndMenu();
  const { isBtnActivated, setIsBtnActivated, handleOrderProcess } = useCTAButton({ currentMenu });
  // eslint-disable-next-line
  const handleSelectSauce = useCallback(
    ({ id, nameKor, description, imgSrc, defaultChecked }) =>
      () => {
        handleOrderMenu({
          id: id,
          nameKor: nameKor,
          description: description,
          imgSrc: imgSrc,
          defaultChecked: defaultChecked,
        });
        setIsBtnActivated(true);
      }
  );

  return (
    <Container>
      <Section style={{ marginTop: '32px' }}>
        <h2>옵션선택 (다중선택)</h2>
        <SauceOption isChecked={isChecked} selectedRadio={selectedRadio} />
      </Section>

      <Section>
        <h2>소즈/시즈닝 선택</h2>
        <Sauces menuId={menuId} handleSelectSauce={handleSelectSauce} />
      </Section>

      <CtaButton
        isBtnActivated={isBtnActivated}
        handleOrderProcess={handleOrderProcess}
        label="소스 선택 (5 / 7)"
      />
    </Container>
  );
};

export default Sauce;
