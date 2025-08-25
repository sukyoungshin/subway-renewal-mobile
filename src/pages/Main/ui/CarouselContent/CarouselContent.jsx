import { Container, Text, Event, Button } from './CarouselContent.style';

const CarouselContent = ({ CarouselContents, selectedId, handleClick, goToOrderPage }) => {
  return (
    <>
      {CarouselContents.map(({ id, eventTitle, eventTitle2, eventDate, eventName }) => (
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
