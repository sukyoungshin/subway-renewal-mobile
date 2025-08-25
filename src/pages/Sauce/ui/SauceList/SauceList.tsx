import { ISauceList } from '@/shared/api/mock/food-menu.types';
import { Spinner } from '@/shared/ui';
import { AiOutlinePlus } from 'react-icons/ai';
import {
  Container,
  MenuDescription,
  MenuImage,
  MenuName,
  OrderButton,
  StyledSauceList,
} from './SauceList.style';

interface ISauce {
  menuId: number[];
  handleOrderMenu: ({ id }: { id: number }) => void;
  sauceList: ISauceList[];
  setButtonDisabled: () => void;
}

const SauceList = ({ menuId, sauceList, handleOrderMenu, setButtonDisabled }: ISauce) => {
  return (
    <Container>
      {sauceList.map(({ id, nameKor, nameEng, imgPath, description }) => {
        const isMenuSelected = menuId.includes(id);

        return (
          <StyledSauceList key={id} isMenuSelected={isMenuSelected}>
            <OrderButton
              isMenuSelected={isMenuSelected}
              onClick={() => {
                if (id === 0 && isMenuSelected) {
                  return;
                }
                setButtonDisabled();
                handleOrderMenu({ id });
              }}
            >
              <AiOutlinePlus />
            </OrderButton>
            <MenuName>
              <h3>{nameKor}</h3>
              <p>{nameEng}</p>
            </MenuName>
            <MenuImage isMenuSelected={isMenuSelected}>
              <Spinner src={imgPath} alt={nameKor} />
              <MenuDescription isMenuSelected={isMenuSelected}>{description}</MenuDescription>
            </MenuImage>
          </StyledSauceList>
        );
      })}
    </Container>
  );
};

export default SauceList;
