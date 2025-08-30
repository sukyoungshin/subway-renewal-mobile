import { handleNavAddrType } from '../../hooks/usePageMove';
import Carousel from '../Carousel/Carousel';
import RecommendedMenu from '../RecommendedMenu/RecommendedMenu';

const MainScreen = ({ handleNavAddr }: { handleNavAddr: handleNavAddrType }) => {
  return (
    <main className="flex-1 overflow-auto pb-[96px]">
      <Carousel />
      <RecommendedMenu handleNavAddr={handleNavAddr} />
    </main>
  );
};

export default MainScreen;
