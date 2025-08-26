import styled, { css } from 'styled-components';

export const Container = styled.main`
  padding: 16px;
  width: 100%;
  min-height: calc(100% - 136px);

  display: inline-flex;
  flex-direction: column;
  grid-gap: 16px;
  gap: 16px;

  h1 {
    color: var(--color-black);
    font-size: var(--font-size-14);
    font-weight: var(--font-weight-bold);
  }
  .address-wrapper {
    flex: 1;
  }
`;

export const Section = styled.section`
  width: 100%;
  display: inline-flex;
  flex-direction: column;
  grid-gap: 8px;
  gap: 8px;

  h2 {
    color: var(--color-grey);
    font-size: var(--font-size-12);
  }

  input[type='text'] {
    padding: 12px;
    width: 100%;
    font-size: var(--font-size-12);
    border: 1px solid var(--color-light-grey);
    border-radius: 8px;
  }
  input[type='text']::placeholder {
    color: var(--color-light-grey);
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;

  display: inline-flex;
  flex-direction: column;
  grid-gap: 16px;
  gap: 16px;
`;

export const Button = styled.button`
  width: 100%;
  height: 48px;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  grid-gap: 8px;
  gap: 8px;

  color: var(--color-grey);
  font-weight: var(--font-weight-normal);
  background-color: var(--transparent);
  border: 1px solid var(--color-light-grey);
  border-radius: 8px;

  transition: all 0.3s;

  ${(props) =>
    props.isBtnSelected &&
    css`
      color: var(--color-white);
      font-weight: var(--font-weight-bold);
      border: 1px solid var(--color-green);
      background-color: var(--color-green);
    `};
`;
