import styled from 'styled-components';

export const ButtonWrapperStyled = styled.div`
  width: 100%;
  height: 48px;
  text-align: center;
`;

export const LoginButtonStyled = styled.button`
  width: 100%;
  height: 100%; 

  display: inline-flex;
  align-items: center;
  justify-content: center;
  grid-gap: 8px; 
  gap: 8px;

  color: var(--color-white);
  font-size: var(--font-size-14);
  font-weight: var(--font-weight-bold);
  background-color: var(--color-green);
  border-radius: 8px;
`;