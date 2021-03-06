import styled, { css } from 'styled-components';

export const MainStyled = styled.main`
  padding: 16px;
  width: 100%;
  max-width: 440px;
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

export const CategoryButtonStyled = styled.button`
  padding: 8px;
  width: 100%;
  min-width: 65px;
  height: 104px;

  color: var(--color-grey);
  font-size: var(--font-size-12);
  font-weight: var(--font-weight-normal);
  background-color: rgba(233,233,233,0.4);
  border: 1px solid var(--color-light-grey);
  border-radius: 8px;
  
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  grid-gap: 24px;
  gap: 24px;

  transition: all 0.3s;

  img {
    width: 100%;
    aspect-ratio: 16 / 9;
  }

  ${(props) => props.isBtnSelected && css`
    color: var(--color-white);
    background-color: var(--color-green);
    font-weight: var(--font-weight-bold);

    img {
      transform: scale(2);
      transition: transform 0.3s;
      filter : drop-shadow(0px 2px 2px var(--color-black));
    }
  `}
`;

export const MenuListGrid = styled.div`
  margin-bottom: 16px;
  max-width: 440px;
  width: 100%;
  contain: layout;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(156px, auto);
  grid-gap: 20px;
`;

export const ArticleStyled = styled.article`
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

  .menu-price {
    font-size: var(--font-size-10);  
  }

  ${(props) => props.isMenuSelected && css`
    border: 2px solid var(--color-green);
  `}
`;

export const MenuNameSectionStyled = styled.section`
  max-width: 112px; 
  max-height: 30px; 

  h3 {
    font-size: var(--font-size-12);  
    
    text-overflow: ellipsis; 
    white-space: nowrap;
    overflow: hidden;
  }
  p {
    font-size: var(--font-size-10);  
    
    text-overflow: ellipsis; 
    white-space: nowrap;
    overflow: hidden;
  }
`;

export const MenuImgSectionStyled = styled.section`
  width: 100%;
  max-height: 84px;
  flex: 1;
  font-size: 0; 

  position: relative;
  
  img {
    display: inline-block;
    width: 100%;
    height: 100%;
    position: relative;
    font-size: var(--font-size-10);

    opacity: 1;
    transition: opacity 0.3s;
  }
  span {
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
    img {
      opacity: 0.3;
    }
    span {
      opacity: 1;
    }
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