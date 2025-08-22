import { Spinner } from '@/components';
import { breads } from '@/mock/food-data';
import { AiOutlinePlus } from 'react-icons/ai';
import { BreadCard, Button, Container, MenuImage, MenuName, MenuPrice } from './Breads.style';

const Breads = ({ menuId, handleSelectBread }) => {
  return (
    <Container>
      {breads.map(({ id, nameKor, nameEng, imgSrc, description, price }) => (
        <BreadCard key={id} isMenuSelected={menuId === id}>
          <Button isMenuSelected={menuId === id} onClick={handleSelectBread(id)}>
            <AiOutlinePlus />
          </Button>
          <MenuName>
            <h3>{nameKor}</h3>
            <p>{nameEng}</p>
          </MenuName>
          <MenuImage isMenuSelected={menuId === id}>
            <Spinner src={imgSrc} alt={nameKor} />
            <span>{description}</span>
          </MenuImage>
          <MenuPrice>{price ? `${price}KRW` : null}</MenuPrice>
        </BreadCard>
      ))}
    </Container>
  );
};

export default Breads;
