import styled, { css } from 'styled-components';

export const FloatButtonStyled = styled.button`
  display: block;
  margin: auto;
  width: 100%;
  height: 48px;

  color: var(--color-grey);
  font-weight: var(--font-weight-normal);
  background-color: var(--color-transparent);
  border: 1px solid var(--color-light-grey);
  backdrop-filter: blur(4px);
  border-radius: 8px;

  position: sticky; /* 부모요소에 overflow 요소가 있으면 작동안함 */
  bottom: 16px;
  left: 0;
  z-index: 100;

  transition: all 0.3s;
  
  ${props => props.isBtnActivated && css`
    color: var(--color-white);
    font-weight: var(--font-weight-bold);
    border: 1px solid var(--color-green);
    background-color: var(--color-green);
  `};
`;
