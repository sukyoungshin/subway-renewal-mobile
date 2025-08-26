import { carouselContentListType } from '@/shared/api/mock/carousel-content.types';
import { Button, Container, Event, Text } from './CarouselContent.style';

interface ICarouselProps {
  carouselContentList: carouselContentListType;
  selectedId: number;
  handleClick: (id: number) => () => void;
  goToOrderPage: () => void;
}

const CarouselContent = ({
  carouselContentList,
  selectedId,
  handleClick,
  goToOrderPage,
}: ICarouselProps) => {
  return (
    <>
      {carouselContentList.map(({ id, eventTitle, eventTitle2, eventDate, eventName }) => (
        <Container key={id} isSelected={id === selectedId} onClick={handleClick(id)}>
          <Text>
            <h2>{eventTitle}</h2>
            <h2>{eventTitle2}</h2>
          </Text>
          <Event>
            <p>{eventName}</p>
            <p>{eventDate}</p>
          </Event>
          <article>
            <Button type="button" onClick={goToOrderPage}>
              ORDER NOW
            </Button>
          </article>
        </Container>
      ))}
    </>
  );
};

export default CarouselContent;
