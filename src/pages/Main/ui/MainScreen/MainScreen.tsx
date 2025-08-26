import { handleNavAddrType } from '../../hooks/usePageMove';
import Carousel from '../Carousel/Carousel';
import RecommendedMenu from '../RecommendedMenu/RecommendedMenu';
import { Container, Section } from './MainScreen.style';

const MainScreen = ({ handleNavAddr }: {handleNavAddr: handleNavAddrType}) => {
  return (
    <Container>
      <Carousel />
      <Section>
        <h2>추천메뉴</h2>
        <RecommendedMenu handleNavAddr={handleNavAddr} />
      </Section>
    </Container>
  );
};

export default MainScreen;
