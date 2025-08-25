import { CtaButton } from '@/shared/ui';
import { Container, Section } from './Bread.style';
import { useCTAButton, useSelectBread, useSelectBreadOption } from './hooks';
import BreadList from './ui/BreadList/BreadList';
import BreadOption from './ui/BreadOption/BreadOption';

const Bread = () => {
  const { breadOptions, selectedRadio } = useSelectBreadOption(); // 빵 옵션선택 로직
  const { menuId, currentMenu, handleOrderMenu } = useSelectBread(); // 빵 선택 로직
  const { isBtnActivated, setIsBtnActivated, handleOrderProcess } = useCTAButton({
    currentMenu,
    breadOptions,
  }); // CTA버튼
  const handleSelectBread = (id) => () => {
    handleOrderMenu(id);
    setIsBtnActivated(true);
  };

  return (
    <Container>
      <Section style={{ marginTop: '32px' }}>
        <h2>옵션선택</h2>
        <article>
          <BreadOption selectedRadio={selectedRadio} />
        </article>
      </Section>
      <Section style={{ marginTop: '16px' }}>
        <h2>빵선택</h2>
        <BreadList menuId={menuId} handleSelectBread={handleSelectBread} />
      </Section>

      <CtaButton
        isBtnActivated={isBtnActivated}
        handleOrderProcess={handleOrderProcess}
        label="빵 선택 (2 / 7)"
      />
    </Container>
  );
};

export default Bread;
