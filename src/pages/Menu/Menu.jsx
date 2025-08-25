import { CtaButton } from '@/shared/ui';
import { useCallback } from 'react';
import { useCTAButton, useSelectCategoryAndMenu } from './hooks';
import { Container, Section } from './Menu.style';
import Categories from './ui/Categories/Categories';
import Menus from './ui/Menus/Menus';

const Menu = () => {
  const {
    menuId,
    categoryId,
    currentMenu,
    currentSelectedMenuItems,
    handleOrderMenu,
    handleButtonActive,
  } = useSelectCategoryAndMenu();
  const { isBtnActivated, setIsBtnActivated, handleOrderProcess } = useCTAButton({ currentMenu });
  // eslint-disable-next-line
  const handleSelectMenuAndBtnActive = useCallback((id) => () => {
    handleOrderMenu(id);
    setIsBtnActivated(true);
  });

  return (
    <Container>
      <Section style={{ marginTop: '32px' }}>
        <h2>카테고리</h2>
        <Categories categoryId={categoryId} handleButtonActive={handleButtonActive} />
      </Section>
      <Section style={{ marginTop: '16px' }}>
        <h2>메뉴선택</h2>
        <Menus
          menuId={menuId}
          currentSelectedMenuItems={currentSelectedMenuItems}
          handleSelectMenuAndBtnActive={handleSelectMenuAndBtnActive}
        />
      </Section>

      <CtaButton
        isBtnActivated={isBtnActivated}
        handleOrderProcess={handleOrderProcess}
        label="메뉴 선택 (1 / 7)"
      />
    </Container>
  );
};

export default Menu;
