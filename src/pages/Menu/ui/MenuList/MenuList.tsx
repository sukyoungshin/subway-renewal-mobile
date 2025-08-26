import { ICategoryMenuDetail } from '@/shared/api/mock/food-menu.types';
import { Spinner } from '@/shared/ui';
import { formatPrice } from '@/shared/utils/common-utils';
import { BsCart2 } from 'react-icons/bs';
import {
  Button,
  Container,
  MenuImage,
  MenuName,
  MenuPrice,
  StyledMenuList,
} from './MenuList.style';
interface IMenuProps {
  menuId: number;
  menuList: ICategoryMenuDetail[] | null;
  handleSelectMenu: (id: number) => () => void;
}

const MenuList = ({ menuId, menuList, handleSelectMenu }: IMenuProps) => {
  return (
    <Container>
      {menuList?.map(({ id, nameKor, nameEng, imgPath, description, price }) => (
        <StyledMenuList key={id} isMenuSelected={menuId === id}>
          <Button isMenuSelected={menuId === id} onClick={handleSelectMenu(id)}>
            <BsCart2 />
          </Button>
          <MenuName>
            <h3>{nameKor}</h3>
            <p>{nameEng}</p>
          </MenuName>
          <MenuImage isMenuSelected={menuId === id}>
            <Spinner src={imgPath} alt={nameKor} />
            <span>{description}</span>
          </MenuImage>

          {!!Number(price) && <MenuPrice>{formatPrice(Number(price))} 원</MenuPrice>}
        </StyledMenuList>
      ))}
    </Container>
  );
};

export default MenuList;
