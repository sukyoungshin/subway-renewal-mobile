import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { MainStyled, SectionStyled, VegListGridStyled, VegArticleStyled, VegArticleHeaderStyled, AmountButtonStyled, ContentWrapperStyled, AmountRangeStyled, OptionListStyled, CheckBoxButtonStyled, CheckBoxLabelStyled } from './Veggie.style';
import { FloatButton } from 'components';
import LINK from 'constants/link';
import { BASEURL, vegetables } from 'mock/Datas';

// 버튼방향
const NEXT = 'next';
const PREV = 'prev';

const Veggie = () => {
  /* 리덕스 및 라우터 */
  const dispatch = useDispatch(); // 리덕스
  const navigate = useNavigate(); // 라우터

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

  /* 체크박스 및 Input Range 관련 */
  const [ isChecked, setIsChecked ] = useState(false);;
  const [ step, setStep ] = useState(
    vegetables.reduce((result, veg) => {
      result[veg.id] = 50;
      return result;
    }, {})
  ); 
  
  const selectedCheckBox = (e) => {
    setIsChecked(e.target.checked);
    
    if (e.target.checked) {
      setStep(
        vegetables.reduce((result, veg) => {
          result[veg.id] = 50;
          return result;
        }, {})
      );
  
    } else {
      setStep(
        vegetables.reduce((result, veg) => {
          result[veg.id] = 0;
          return result;
        }, {})
      );
    };
  };
  
  // eslint-disable-next-line
  const handleStepChange = useCallback((id) => 
    (e) => {
      const range = e.target.valueAsNumber; // 숫자로 바꿔줌
      setStep({
        ...step,
        [id] : range,  
      });
    }
  );

  // 야채 전부 다 10이상일 때, 전체선택 체크박스가 체크선텍
  useEffect(() => {
    const vegAmounts = Object.values(step); 
    const condition = vegAmounts.every((v) => v >= 10);
    if (condition) setIsChecked(true); 
    // eslint-disable-next-line
  }, [step]);

  // 야채 step 중 하나라도 0일 때, 전체선택 체크박스가 체크해제
  useEffect(() => {
    const vegAmounts = Object.values(step);
    const condition = vegAmounts.some((v) => v === 0);
    if (condition) setIsChecked(false);
    // eslint-disabled-next-line
  }, [step]);

  // 야채 전부 다 0일 때, 전체선택 체크박스가 체크해제
  useEffect(() => {
    const vegAmounts = Object.values(step); 
    const condition = vegAmounts.every((v) => v === 0);
    if (condition) setIsChecked(false); 
    // eslint-disable-next-line
  }, [step]);

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
                  <img 
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
        isBtnActivated={true}
        handleOrderProcess={handleOrderProcess}
      >
        야채 선택 (4 / 7)
      </FloatButton>
    </MainStyled>
  );
};

export default Veggie;