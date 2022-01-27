import styled from 'styled-components';

export const InputContainerStyled = styled.div`
  width: 100%;
  height: 48px;
  text-align: center;
  position: relative;

  input[type="text"],
  input[type="password"] {
    padding: 12px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;

    color: var(--color-grey);
    font-size: var(--font-size-12);
    border: 1px solid var(--color-light-grey);
    border-radius: 8px;
  }
  input[type="text"]::placeholder,
  input[type="password"]::placeholder {
    color: var(--color-grey);
    font-size: var(--font-size-12);
  }
`;

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