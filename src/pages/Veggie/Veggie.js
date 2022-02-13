import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { MainStyled, SectionStyled, VegListGridStyled, VegArticleStyled, VegArticleHeaderStyled, AmountButtonStyled, ContentWrapperStyled, AmountRangeStyled, OptionListStyled, CheckBoxButtonStyled, CheckBoxLabelStyled } from './Veggie.style';
import { FloatButton, ImgSpinner } from 'components';
import LINK from 'constants/link';
import { BASEURL, vegetables } from 'mock/Datas';
import { useInputRangeAndCTAbutton } from './hooks';

// 버튼방향
const NEXT = 'next';
const PREV = 'prev';

const Veggie = () => {
  /* 리덕스 및 라우터 */
  const dispatch = useDispatch(); // 리덕스
  const navigate = useNavigate(); // 라우터

  /* 커스텀훅 (Input Range 및 CTA버튼) */
  const [ step, setStep, isChecked, setIsChecked, handleStepChange, isBtnActivated, selectedCheckBox ] = useInputRangeAndCTAbutton();

  /* 수량조절 버튼 핸들러 */
  const conditionZeroToTen = (step, id) => {
    return step[id] > 0 && step[id] <= 10;
  };
  const conditionLessThanZero = (step, id) => {
    return step[id] <= 0;
  };
  const conditionMoreThanAHundred = (step, id) => {
    return step[id] >= 100;
  };
  //eslint-disable-next-line
  const handleAmountVeg = useCallback((id, direction) => 
    () => {
      // PREV 및 NEXT 버튼을 클릭 시, range step을 이동
      switch (direction) {
        case PREV:
          if (conditionLessThanZero(step, id)) return 0;
          if (conditionZeroToTen(step, id)) { setIsChecked(false) };
          setStep({
            ...step,
            [id] : step[id] - 10,
          });
          break;

        case NEXT:          
          if (conditionMoreThanAHundred(step, id)) return 100;
          setStep({
            ...step,
            [id] : step[id] + 10,
          });
          break;

        default:
          console.log('NaN');
      };
    }
  );

  /* CTA버튼 관련 */
  // eslint-disable-next-line
  const handleOrderProcess = useCallback((e) => {
    e.preventDefault();
    dispatch({
      type: 'cart/veggie',
      payload : step, 
    }); 
    navigate(LINK.SAUCE); 
  });

  return (
    <MainStyled>
      <SectionStyled style={{ marginTop: '32px' }}>
        <h2>옵션선택</h2>
        <p className="description">원하시는 야채를 선택하세요.</p>
        <article>
          <ul className="option-wrapper">
            <OptionListStyled>
              <CheckBoxButtonStyled 
                type="checkbox" 
                id='checkall'
                name='체크박스'
                checked={isChecked}
                onChange={selectedCheckBox}
              />
              <CheckBoxLabelStyled htmlFor='checkall'>
                전체선택 {' '} ( 수량 : 중간 )
              </CheckBoxLabelStyled>
            </OptionListStyled>
          </ul>
        </article>
      </SectionStyled>
      <SectionStyled>
        <h2>야채선택</h2>
        <VegListGridStyled>
          {
            vegetables.map((veg) => (
              <VegArticleStyled 
                key={veg.id}
                isMenuSelected={ !(step[veg.id] < 10) }
              >
                <VegArticleHeaderStyled>
                  <AmountButtonStyled onClick={handleAmountVeg(veg.id, 'prev')}> 
                    -
                  </AmountButtonStyled>
                  <label htmlFor={veg.id}>
                    {veg.nameKor}
                  </label>
                  <AmountButtonStyled onClick={handleAmountVeg(veg.id, 'next')}>
                    + 
                  </AmountButtonStyled>
                </VegArticleHeaderStyled>
                <ContentWrapperStyled>
                  <ImgSpinner 
                    src={`${BASEURL}${veg.imgSrc}`} 
                    alt={veg.nameKor} 
                  />
                </ContentWrapperStyled>
                <ContentWrapperStyled>
                  <AmountRangeStyled 
                    id={veg.id}
                    type="range" 
                    min="0"
                    max="100"
                    step="10"
                    value={step[veg.id]} 
                    onChange={handleStepChange(veg.id)}
                  />
                </ContentWrapperStyled>
              </VegArticleStyled>
            ))
          }
          </VegListGridStyled>
        </SectionStyled>
        
      <FloatButton
        isBtnActivated={isBtnActivated}
        handleOrderProcess={handleOrderProcess}
      >
        야채 선택 (4 / 7)
      </FloatButton>
    </MainStyled>
  );
};

export default Veggie;