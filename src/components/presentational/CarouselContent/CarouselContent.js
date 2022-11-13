import {
  ContentWrapper,
  TitleWrapper,
  EventWrapper,
  Button,
} from "./CarouselContent.style";

const CarouselContent = ({
  AdContents,
  selectedId,
  handleClick,
  goToOrderPage,
}) => {
  return (
    <>
      {AdContents.map((content) => (
        <ContentWrapper
          key={content.id}
          isSelected={content.id === selectedId}
          onClick={handleClick(content.id)}
        >
          <TitleWrapper>
            <h2>{content.eventTitle}</h2>
            <h2>{content.eventTitle2}</h2>
          </TitleWrapper>
          <EventWrapper>
            <p>{content.eventName}</p>
            <p>{content.eventDate}</p>
          </EventWrapper>
          <article>
            <Button type="button" onClick={goToOrderPage}>
              ORDER NOW
            </Button>
          </article>
        </ContentWrapper>
      ))}
    </>
  );
};

export default CarouselContent;
