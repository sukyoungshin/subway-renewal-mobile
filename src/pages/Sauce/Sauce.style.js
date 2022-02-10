import styled, { css } from 'styled-components';

export const MainStyled = styled.main`
  padding: 16px;
  width: 100%;
  min-height: calc(100% - 136px);
  position: relative;
`;

export const SectionStyled = styled.section`
  margin-top: 16px;
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

export const MenuListGridStyled = styled.div`
  margin-bottom: 16px;
  width: 100%;
  contain: layout;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(156px, auto);
  grid-gap: 20px;
`;


export const MenuArticleStyled = styled.article`
  padding: 8px;
  width: 100%;

  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  grid-gap: 8px;
  gap: 8px;

  border: 1px solid var(--color-light-grey);
  border-radius: 8px;

  position: relative;

  .menu-name-wrapper {
    max-width: 112px; /* 패딩, 아이콘너비 제외한 최대너비값 */
    max-height: 30px; 

    .menu-name-kor {
      font-size: var(--font-size-12);  
      
      text-overflow: ellipsis; // 네이밍이 길어지면 ... 처리
      white-space: nowrap;
      overflow: hidden;
    }
    .menu-name-eng {
      font-size: var(--font-size-10);  
      
      text-overflow: ellipsis; // 네이밍이 길어지면 ... 처리
      white-space: nowrap;
      overflow: hidden;
    }
  }

  .menu-img-wrapper{
    width: 100%;
    max-height: 84px;
    flex: 1;
    font-size: 0; 

    position: relative;
    
    .menu-img {
      width: 100%;
      position: relative;
      font-size: var(--font-size-10);

      opacity: 1;
      transition: opacity 0.3s;
    }
    .menu-description {
      width: 100%;
      font-size: var(--font-size-10);
      
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      opacity: 0;
      transition: opacity 0.5s;
    }

    ${(props) => props.isMenuSelected && css`
      .menu-img {
        opacity: 0.3;
      }
      .menu-description {
        opacity: 1;
      }
    `}
  }

  .menu-price {
    font-size: var(--font-size-10);  
  }

  ${(props) => props.isMenuSelected && css`
    border: 2px solid var(--color-green);
  `}
`;


export const OrderButtonStyled = styled.button`
  padding: 0;
  width: 32px;
  height: 32px;
  
  color: var(--color-light-grey);
  font-size: 0;
  background-color: var(--color-transparent);
  border-radius: 0 8px 0 8px;

  position: absolute;
  top: -2px;
  right: -2px;
  z-index: 1;

  svg {
    font-size: var(--font-size-16);
  }

  ${(props) => props.isMenuSelected && css`
    background-color: var(--color-green);
  `}
`;

export const OptionListStyled = styled.li`
  margin: 0 0 0 8px;

  display: inline-flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  grid-gap: 8px;
  gap: 8px;

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

export const InputRadioStyled = styled.input`
  accent-color: var(--color-green);
`;

export const LabelRadioStyled = styled.label`
  font-size: var(--font-size-12);
`;

