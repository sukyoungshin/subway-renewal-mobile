import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  min-height: calc(100% - 138px);
`;

export const Form = styled.form`
  padding: 16px;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-gap: 16px;
  gap: 16px;

  p,
  label {
    font-size: var(--font-size-14);
    font-weight: var(--font-weight-bold);
    color: var(--color-black);
  }
`;

export const Fieldset = styled.fieldset`
  margin: 0;
  padding: 0;
  border: none;

  display: inline-flex;
  flex-direction: column;
  grid-gap: 8px;
  gap: 8px;

  flex: ${(props) => props.flex && 1};
`;

export const AddressInput = styled.input`
  padding: 12px;
  width: 100%;
  height: 48px;
  box-sizing: border-box;

  color: var(--color-grey);
  font-size: var(--font-size-12);
  border: 1px solid var(--color-light-grey);
  border-radius: 8px;

  position: relative;

  &::placeholder {
    color: var(--color-grey);
    font-size: var(--font-size-12);
  }
`;
