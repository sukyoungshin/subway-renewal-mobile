import styled, { css } from 'styled-components';

export const CarouselWrapperStyled = styled.section`
  width: 100%;
  height: 232px;
  overflow: hidden;
  position: relative;
`;

export const AdPaginationStyled = styled.ul`
  width: 100%;
  height: 32px;

  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  grid-gap: 16px; /* cross-browsing */
  gap: 16px;

  list-style: none;

  position: absolute;
  left: 50%;
  bottom: 0.4rem;
  transform: translateX(-50%);
  z-index: 50;
`;

export const AdPaginationListStyled = styled.li`
  width: 12px;
  height: 12px;
  font-size: var(--font-size-14);

  border-radius: 12px;
  border: 1px solid var(--color-white);
  background-color: transparent;
  transition: background-color 0.4s;

  ${(props) => props.isSelected && css`
    background-color: var(--color-white);
    border: none;
  `}
`;

export const AdWrapperStyled = styled.section`
  padding: 16px;
  width: 100%;
  height: 232px;
  overflow: hidden;
  position: relative;
  background-color: var(--color-green);

  display: inline-flex;
  flex-direction: column;
  grid-gap: 16px;
  gap: 16px;

  position: absolute;
  top: 0;
  left: 0;
  z-index: ${(props) => props.isSelected ? 5 : null};
`;

export const AdTitleWrapperStyled = styled.article`
  h2:first-child {
    color: var(--color-yellow);
    font-size: var(--font-size-20);
  }
  h2:last-child {
    color: var(--color-white);
    font-size: var(--font-size-20);
  }
`;

export const AdEventWrapperStyled = styled.article`
  color: var(--color-white);
  font-size: var(--font-size-14);

  p {
    line-height: 1.3rem;
  }
`;

export const ButtonStyled = styled.button`
  padding: 8px 16px;
  border-radius: 8px;
  background-color: transparent;
  border: 1px solid var(--color-white);
  
  color: var(--color-white);
  font-size: var(--font-size-10);

  transition: background-color 0.4s;

  &:is(:focus, :active, :hover) {
    background-color: var(--color-transparent);
  }
`;