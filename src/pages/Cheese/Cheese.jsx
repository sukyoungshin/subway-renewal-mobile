import { Cheeses, CtaButton } from '@/components';
import { cheeses } from '@/mock/food-data';
import { useCallback } from 'react';
import { Container, Section } from './Cheese.style';
import { useCTAbutton, useSelectCheese } from './hooks';

const Cheese = () => {
  const { menuId, currentMenu, handleOrderMenu } = useSelectCheese({ cheeses });
  const { isBtnActivated, setIsBtnActivated, handleOrderProcess } = useCTAbutton({ currentMenu });
  // eslint-disable-next-line
  const handleOrderSelect = useCallback((id) => () => {
    handleOrderMenu(id);
    setIsBtnActivated(true);
  });

  return (
    <Container>
      <Section style={{ marginTop: '32px' }}>
        <h2>옵션선택</h2>
        <article />
      </Section>
      <Section>
        <h2>치즈선택</h2>
        <Cheeses menuId={menuId} handleOrderSelect={handleOrderSelect} />
      </Section>

      <CtaButton
        isBtnActivated={isBtnActivated}
        handleOrderProcess={handleOrderProcess}
        label="치즈 선택 (3 / 7)"
      />
    </Container>
  );
};

export default Cheese;
