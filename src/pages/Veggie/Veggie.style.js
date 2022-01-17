import styled, { css } from 'styled-components';

export const MainStyled = styled.main`
  padding: 16px;
  width: 100%;
  min-height: calc(100% - 136px);
  position: relative;
`;

export const SectionStyled = styled.section`
  width: 100%;

  display: inline-flex;
  flex-direction: column;
  grid-gap: 8px;
  gap: 8px;

  h2 {
    color: var(--color-black);
    font-size: var(--font-size-14);
  }
  .description {
    font-size: var(--font-size-12);
  }

  p {
    color: var(--color-black);

    span {
      float: right;
    }
  }
  p:not(total-price) {
    font-size: var(--font-size-12);
  }
  p.total-price {
    margin-top: 16px;
    font-size: var(--font-size-14);
    font-weight: var(--font-weight-bold);
  }

  ul {
    width: 100%;
    background-color: var(--color-transparent);
    border-radius: 8px;

    font-size: 0; /* removed unexpected space */
  }
  ul:not(option-wrapper) {
    display: inline-flex;
    flex-direction: row;
    grid-gap: 20px;
    gap: 20px;
  }
  ul.option-wrapper{
    min-height: 104px;

    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    grid-gap: 8px;
    gap: 8px;
  }
`;

export const OptionListStyled = styled.li`
  display: inline-flex;
  justify-content: space-between;
  flex-direction: row;
  grid-gap: 16px;
  gap: 16px;

  font-size: var(--font-size-12);

  span {
    margin-left: 8px;
  }
  .option {
    width: 238px;
    display: inline-flex;
    flex-direction: row;
    grid-gap: 16px;
    gap: 16px;
  }
`;

export const CheckBoxButtonStyled = styled.input`
  accent-color: var(--color-green);
`;
export const CheckBoxLabelStyled = styled.label`
  font-size: var(--font-size-12);
`;


// 야채 선택
export const VegListGridStyled = styled.div`
  margin-bottom: 16px;
  width: 100%;

  display: grid;
  grid-template-columns: repeat(1fr);
  grid-auto-rows: minmax(156px, auto);
  grid-gap: 20px;
`;

export const VegArticleStyled = styled.article`
  padding: 8px;
  width: 100%;

  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;

  border: 2px solid var(--color-light-grey);
  border-radius: 8px;

  position: relative;

  ${(props) => props.isMenuSelected && css`
    border: 2px solid var(--color-green);
  `}
`;

export const VegArticleHeaderStyled = styled.div`
  width: 100%;
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  label {
    font-size: var(--font-size-14);
  }
`;
export const AmountButtonStyled = styled.button`
  padding: 0;
  width: 32px;
  height: 32px;
  
  color: var(--color-grey);
  font-size: var(--font-size-18);
  background-color: var(--color-transparent);
  border-radius: 50%;
  
  &:focus {
    color: var(--color-white);
    background-color: var(--color-green);
  }
  svg {
    font-size: var(--font-size-16);
  }
`;

export const ContentWrapperStyled = styled.div`
  width: 100%;
  font-size: 0; /* remove space */

  img {
    width: 100%;
    max-height: 84px;
    object-fit: contain;
  }

  input[type="range"] {
    width: 100%;
  }
`;

export const AmountRangeStyled = styled.input`
  accent-color: var(--color-green);
`;