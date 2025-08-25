import { cheeses } from '@/shared/api/mock/food-menu.mock.js';
import { Spinner } from '@/shared/ui';
import { AiOutlinePlus } from 'react-icons/ai';
import {
  CheeseCard,
  Container,
  MenuIamge,
  MenuName,
  MenuPrice,
  OrderButtonStyled,
} from './CheeseList.style';

const Cheeses = ({ menuId, handleOrderSelect }) => {
  return (
    <Container>
      {cheeses.map(({ id, nameKor, nameEng, imgSrc, description, price }) => (
        <CheeseCard key={id} isMenuSelected={menuId === id}>
          <OrderButtonStyled isMenuSelected={menuId === id} onClick={handleOrderSelect(id)}>
            <AiOutlinePlus />
          </OrderButtonStyled>
          <MenuName>
            <h3>{nameKor}</h3>
            <p>{nameEng}</p>
          </MenuName>
          <MenuIamge isMenuSelected={menuId === id}>
            <Spinner src={imgSrc} alt={nameKor} />
            <span>{description}</span>
          </MenuIamge>
          <MenuPrice>{price ? `${price}KRW` : null}</MenuPrice>
        </CheeseCard>
      ))}
    </Container>
  );
};

export default Cheeses;
