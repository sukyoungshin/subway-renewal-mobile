import { IBreadList } from '@/shared/api/mock/food-menu.types';
import { Spinner } from '@/shared/ui';
import { AiOutlinePlus } from 'react-icons/ai';
import { BreadCard, Button, Container, MenuImage, MenuName } from './BreadList.style';

interface IBreadProps {
  menuId: number;
  breadList: IBreadList[];
  handleSelectBread: (id: number) => void;
}

const BreadList = ({ menuId, breadList, handleSelectBread }: IBreadProps) => {
  return (
    <Container>
      {breadList.map(({ id, nameKor, nameEng, imgPath, description }) => (
        <BreadCard key={id} isMenuSelected={menuId === id}>
          <Button isMenuSelected={menuId === id} onClick={handleSelectBread(id)}>
            <AiOutlinePlus />
          </Button>
          <MenuName>
            <h3>{nameKor}</h3>
            <p>{nameEng}</p>
          </MenuName>
          <MenuImage isMenuSelected={menuId === id}>
            <Spinner src={imgPath} alt={nameKor} />
            <span>{description}</span>
          </MenuImage>
        </BreadCard>
      ))}
    </Container>
  );
};

export default BreadList;
