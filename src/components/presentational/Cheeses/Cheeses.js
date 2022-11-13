import { BASEURL } from "config";
import { cheeses } from "mock/food-data";
import {
  Container,
  CheeseCard,
  OrderButtonStyled,
  MenuIamge,
  MenuName,
  MenuPrice
} from "./Cheeses.style";
import { Spinner } from "components";
import { AiOutlinePlus } from "react-icons/ai";

const Cheeses = ({ menuId, handleOrderSelect }) => {
  return (
    <Container>
      {cheeses.map(({ id, nameKor, nameEng, imgSrc, description, price }) => (
        <CheeseCard key={id} isMenuSelected={menuId === id}>
          <OrderButtonStyled
            isMenuSelected={menuId === id}
            onClick={handleOrderSelect(id)}
          >
            <AiOutlinePlus />
          </OrderButtonStyled>
          <MenuName>
            <h3>{nameKor}</h3>
            <p>{nameEng}</p>
          </MenuName>
          <MenuIamge isMenuSelected={menuId === id}>
            <Spinner src={`${BASEURL}${imgSrc}`} alt={nameKor} />
            <span>{description}</span>
          </MenuIamge>
          <MenuPrice>{price ? `${price}KRW` : null}</MenuPrice>
        </CheeseCard>
      ))}
    </Container>
  );
};

export default Cheeses;
