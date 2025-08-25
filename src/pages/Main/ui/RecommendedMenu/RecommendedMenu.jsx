import { RecommendedMenus } from '@/shared/api/mock/recommend-menu.mock.js';
import OrderIcon from '@/shared/assets/icons/order.svg';
import Sample from '@/shared/assets/sample.webp';
import { Spinner } from '@/shared/ui';
import { Button, Container, Menu } from './RecommendedMenu.style';

const RecommendedMenu = ({ handleNavAddr }) => {
  return (
    <Container>
      {RecommendedMenus.map(({ id, menuName, kcal }) => (
        <Menu key={id}>
          <Spinner src={Sample} alt="첫번째 샌드위치 이미지" />
          <h3>{menuName}</h3>
          <p>{kcal}kcal</p>
          <Button type="button" onClick={handleNavAddr}>
            <img src={OrderIcon} alt="주문하기 버튼" />
          </Button>
        </Menu>
      ))}
    </Container>
  );
};

export default RecommendedMenu;
