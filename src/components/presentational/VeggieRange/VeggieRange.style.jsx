import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin-bottom: 16px;
  width: 100%;
  contain: layout;

  display: grid;
  grid-template-columns: repeat(1fr);
  grid-auto-rows: minmax(156px, auto);
  grid-gap: 20px;
`;

export const VeggieList = styled.article`
  padding: 8px;
  width: 100%;

  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;

  border: 2px solid var(--color-light-grey);
  border-radius: 8px;

  position: relative;

  ${(props) =>
    props.isMenuSelected &&
    css`
      border: 2px solid var(--color-green);
    `}
`;

export const Header = styled.div`
  width: 100%;
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  label {
    font-size: var(--font-size-14);
  }
`;
export const AmountButton = styled.button`
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

export const Content = styled.div`
  width: 100%;
  font-size: 0;

  img {
    width: 100%;
    max-height: 84px;
    object-fit: contain;
  }

  input[type='range'] {
    width: 100%;
  }
`;

export const Range = styled.input`
  accent-color: var(--color-green);
`;
