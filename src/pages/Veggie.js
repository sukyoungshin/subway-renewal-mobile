import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { MenuWrapper, MenuSection, VegListGrid, VegArticle, VegArticleHeader, VegAmountButton, VegContentWrapper, RangeButton } from '../common/Styled';
import FloatButton from '../components/FloatButton';
import { BASEURL, vegetables } from '../common/Datas';

const Veggie = () => {
  /* 리덕스 및 라우터 셋팅 */
  const dispatch = useDispatch(); // 리덕스
  const navigate = useNavigate(); // 라우터

  /* range 관련 */
  const [ step, setStep ] = useState(
    // vegetables 배열의 갯수만큼 step생성 (기본값 50)
    vegetables.reduce((result, veg) => {
      result[veg.id] = 50;
      return result;
    }, {})
  ); 

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

  /* 수량조절 버튼 핸들러 */
  const handleAmountVeg = (id, direction) => 
    () => {
      // 버튼방향
      const NEXT = 'next';
      const PREV = 'prev';

      // PREV 및 NEXT 버튼을 클릭 시, range step을 이동
      switch (direction) {
        case PREV:
          if (step[id] <= 0 ) return 0;
          setStep({
            ...step,
            [id] : step[id] - 10,
          });
          break;

        case NEXT:
          if (step[id] >= 100 ) return 100;
          setStep({
            ...step,
            [id] : step[id] + 10,
          });
          break;

        default:
          console.log('NaN');
    };
  };

  /* CTA버튼 관련 */
  // eslint-disable-next-line
  const handleOrderProcess = useCallback((e) => {
    e.preventDefault();
    dispatch({
      type: 'cart/veggie',
      payload : step, 
    }); 
    navigate('/sauce'); 
  });

  return (
    <MenuWrapper>
      <MenuSection style={{ marginTop: '32px' }}>
      <h2>옵션선택</h2>
        <article>
          <ul className="option-wrapper">
            {/* 빈 공간 */}
          </ul>
        </article>
      </MenuSection>
      <MenuSection style={{ marginTop: '16px' }}>
        <h2>야채선택</h2>
        <VegListGrid>
          {
            vegetables.map((veg) => (
                <VegArticle 
                  key={veg.id}
                >
                  <VegArticleHeader>
                    <VegAmountButton onClick={handleAmountVeg(veg.id, 'prev')}> 
                      -
                    </VegAmountButton>
                    <label htmlFor={veg.id}>
                      {veg.nameKor}
                    </label>
                    <VegAmountButton onClick={handleAmountVeg(veg.id, 'next')}>
                      + 
                    </VegAmountButton>
                  </VegArticleHeader>
                  <VegContentWrapper>
                    <img 
                      src={`${BASEURL}${veg.imgSrc}`} 
                      alt={veg.nameKor} 
                    />
                  </VegContentWrapper>
                  <VegContentWrapper>
                    <RangeButton 
                      id={veg.id}
                      type="range" 
                      min="0"
                      max="100"
                      step="10"
                      value={step[veg.id]} 
                      onChange={handleStepChange(veg.id)}
                    />
                  </VegContentWrapper>
                </VegArticle>
                ))
              }
            </VegListGrid>
          </MenuSection>
      <FloatButton
        isBtnActivated={true}
        handleOrderProcess={handleOrderProcess}
      >
        야채 선택 (4 / 7)
      </FloatButton>
    </MenuWrapper>
  );
};

export default Veggie;