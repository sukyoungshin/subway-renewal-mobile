import React from "react";
import DaumPostcode from "react-daum-postcode";
import { usePostSearchAndButtons } from "./hooks";
import {
  MainStyled,
  SectionStyled,
  ButtonWrapperStyled,
  CTAButtonStyled,
} from "./PostSearch.style";

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
    <MainStyled>
      <h1>배달주소 입력</h1>
      <section className="address-wrapper">
        <SectionStyled>
          <h2>- 주소 : </h2>
          <DaumPostcode onComplete={handleAddress} />
          {roadAddress !== "" && (
            <input
              type="text"
              placeholder="예) ㅇㅇ아파트 ㅇㅇ동ㅇㅇㅇ호"
              value={roadAddress}
              readOnly
            />
          )}
        </SectionStyled>
        <SectionStyled>
          <h2>- 상세주소 : </h2>
          <input
            type="text"
            placeholder="예) ㅇㅇ아파트 ㅇㅇ동ㅇㅇㅇ호"
            value={detailAddress}
            onChange={handleDetailAddress}
          />
        </SectionStyled>
      </section>

      <CTAButton
        isBtnSelected={isBtnSelected}
        handleComplete={handleComplete}
        handleClose={handleClose}
      />
    </MainStyled>
  );
};

const CTAButton = ({ isBtnSelected, handleComplete, handleClose }) => {
  return (
    <ButtonWrapperStyled>
      <CTAButtonStyled
        type="button"
        isBtnSelected={isBtnSelected}
        onClick={handleComplete}
      >
        입력완료
      </CTAButtonStyled>

      <CTAButtonStyled type="button" onClick={handleClose}>
        다시입력 / 이전 페이지로 이동
      </CTAButtonStyled>
    </ButtonWrapperStyled>
  );
};

export default PostSearch;
