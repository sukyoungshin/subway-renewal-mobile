import { Spinner } from '@/components';
import { BASEURL } from '@/config';
import { sauces } from '@/mock/food-data';
import { AiOutlinePlus } from 'react-icons/ai';
import {
  Container,
  MenuDescription,
  MenuImage,
  MenuName,
  MenuPrice,
  OrderButton,
  SauceList,
} from './Sauces.style';

const Sauces = ({ menuId, handleSelectSauce }) => {
  return (
    <Container>
      {sauces.map(({ id, nameKor, nameEng, imgSrc, description, price, defaultChecked }) => (
        <SauceList key={id} isMenuSelected={menuId === id}>
          <OrderButton
            isMenuSelected={menuId === id}
            onClick={handleSelectSauce({
              id: id,
              nameKor: nameKor,
              description: description,
              imgSrc: imgSrc,
              defaultChecked: defaultChecked,
            })}
          >
            <AiOutlinePlus />
          </OrderButton>
          <MenuName>
            <h3>{nameKor}</h3>
            <p>{nameEng}</p>
          </MenuName>
          <MenuImage isMenuSelected={menuId === id}>
            <Spinner src={`${BASEURL}${imgSrc}`} alt={nameKor} />
            <MenuDescription isMenuSelected={menuId === id}>{description}</MenuDescription>
          </MenuImage>
          <MenuPrice>{price ? `${price}KRW` : null}</MenuPrice>
        </SauceList>
      ))}
    </Container>
  );
};

export default Sauces;
