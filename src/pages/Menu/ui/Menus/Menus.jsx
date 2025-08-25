import { Spinner } from '@/shared/ui';
import { BsCart2 } from 'react-icons/bs';
import { Button, Container, MenuImage, MenuList, MenuName, MenuPrice } from './Menus.style';

const Menus = ({ menuId, handleSelectMenuAndBtnActive, currentSelectedMenuItems }) => {
  return (
    <Container>
      {currentSelectedMenuItems.map(({ id, nameKor, nameEng, imgSrc, description, price }) => (
        <MenuList key={id} isMenuSelected={menuId === id}>
          <Button isMenuSelected={menuId === id} onClick={handleSelectMenuAndBtnActive(id)}>
            <BsCart2 />
          </Button>
          <MenuName>
            <h3>{nameKor}</h3>
            <p>{nameEng}</p>
          </MenuName>
          <MenuImage isMenuSelected={menuId === id}>
            <Spinner src={imgSrc} alt={nameKor} />
            <span>{description}</span>
          </MenuImage>
          <MenuPrice>{price} KRW</MenuPrice>
        </MenuList>
      ))}
    </Container>
  );
};

export default Menus;
