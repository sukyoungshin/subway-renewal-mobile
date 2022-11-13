import { Container, MenuWrapper, Button } from "./RecommendedMenu.style";
import { RecommendedMenus } from "mock/content-data";
import OrderIcon from "assets/icons/order.svg";
import Sample from "assets/sample.webp";
import { ImgSpinner } from "components";

const RecommendedMenu = ({ handleNavAddr }) => {
  return (
    <Container>
      {RecommendedMenus.map((menu) => (
        <MenuWrapper key={menu.id}>
          <ImgSpinner src={Sample} alt="첫번째 샌드위치 이미지" />
          <h3>{menu.menuName}</h3>
          <p>{menu.kcal}kcal</p>
          <Button type="button" onClick={handleNavAddr}>
            <img src={OrderIcon} alt="주문하기 버튼" />
          </Button>
        </MenuWrapper>
      ))}
    </Container>
  );
};

export default RecommendedMenu;
