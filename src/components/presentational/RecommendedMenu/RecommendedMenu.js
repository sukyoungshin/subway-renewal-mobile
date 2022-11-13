import { Container, Menu, Button } from "./RecommendedMenu.style";
import { RecommendedMenus } from "mock/content-data";
import OrderIcon from "assets/icons/order.svg";
import Sample from "assets/sample.webp";
import { Spinner } from "components";

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
