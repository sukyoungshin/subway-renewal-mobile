import DaumPostcode from 'react-daum-postcode';
import { usePostSearchAndButtons } from './hooks';
import { Button, ButtonWrapper, Container, Section } from './PostSearch.style';

const PostSearch = (data) => {
  const {
    roadAddress,
    detailAddress,
    isBtnSelected,
    handleAddress,
    handleDetailAddress,
    handleComplete,
    handleClose,
  } = usePostSearchAndButtons(data);

  return (
    <Container>
      <h1>배달주소 입력</h1>
      <section className="address-wrapper">
        <Section>
          <h2>- 주소 : </h2>
          <DaumPostcode onComplete={handleAddress} />
          {roadAddress !== '' && (
            <input type="text" placeholder="예) 서울시 방화대로" value={roadAddress} readOnly />
          )}
        </Section>
        <Section>
          <h2>- 상세주소 : </h2>
          <input
            type="text"
            placeholder="예) ㅇㅇ아파트 ㅇㅇ동ㅇㅇㅇ호"
            value={detailAddress}
            onChange={handleDetailAddress}
          />
        </Section>
      </section>

      <CTAButton
        isBtnSelected={isBtnSelected}
        handleComplete={handleComplete}
        handleClose={handleClose}
      />
    </Container>
  );
};

const CTAButton = ({ isBtnSelected, handleComplete, handleClose }) => {
  return (
    <ButtonWrapper>
      <Button type="button" isBtnSelected={isBtnSelected} onClick={handleComplete}>
        입력완료
      </Button>

      <Button type="button" onClick={handleClose}>
        다시입력 / 이전 페이지로 이동
      </Button>
    </ButtonWrapper>
  );
};

export default PostSearch;
