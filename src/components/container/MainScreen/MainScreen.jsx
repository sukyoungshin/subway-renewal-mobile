import { Carousel } from '@/components';
import { RecommendedMenu } from '../../index';
import { Container, Section } from './MainScreen.style';

const MainScreen = ({ handleNavAddr }) => {
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
