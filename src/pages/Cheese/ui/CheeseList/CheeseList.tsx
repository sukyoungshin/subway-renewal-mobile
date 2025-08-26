import { ICheeseList } from '@/shared/api/mock/food-menu.types';
import { Spinner } from '@/shared/ui';
import { AiOutlinePlus } from 'react-icons/ai';
import {
  CheeseCard,
  Container,
  MenuIamge,
  MenuName,
  OrderButtonStyled
} from './CheeseList.style';

interface ICheeseProps {
  menuId: number;
  cheeseList: ICheeseList[];
  handleSelectCheese: (id: number) => () => void;
}

const Cheeses = ({ menuId, cheeseList, handleSelectCheese }: ICheeseProps) => {
  return (
    <Container>
      {cheeseList.map(({ id, nameKor, nameEng, imgPath, description }) => (
        <CheeseCard key={id} isMenuSelected={menuId === id}>
          <OrderButtonStyled isMenuSelected={menuId === id} onClick={handleSelectCheese(id)}>
            <AiOutlinePlus />
          </OrderButtonStyled>
          <MenuName>
            <h3>{nameKor}</h3>
            <p>{nameEng}</p>
          </MenuName>
          <MenuIamge isMenuSelected={menuId === id}>
            <Spinner src={imgPath} alt={nameKor} />
            <span>{description}</span>
          </MenuIamge>
        </CheeseCard>
      ))}
    </Container>
  );
};

export default Cheeses;
