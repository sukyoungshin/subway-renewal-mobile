import React from 'react';
import { MainStyled, SectionStyled, VegListGridStyled, VegArticleStyled, VegArticleHeaderStyled, AmountButtonStyled, ContentWrapperStyled, AmountRangeStyled, OptionListStyled, CheckBoxButtonStyled, CheckBoxLabelStyled } from './Veggie.style';
import { FloatButton, ImgSpinner } from 'components';
import { BASEURL, vegetables } from 'mock/Datas';
import { useCTAButton, useSelectAmountOfVeg } from './hooks';

const Veggie = () => {
  /* 비즈니스 로직 */
  const { isChecked, step, selectedCheckBox, handleAmountVeg, handleStepChange } = useSelectAmountOfVeg();
  const handleOrderProcess = useCTAButton({ step });

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
        isBtnActivated={true}
        handleOrderProcess={handleOrderProcess}
      >
        야채 선택 (4 / 7)
      </FloatButton>
    </MainStyled>
  );
};

export default Veggie;