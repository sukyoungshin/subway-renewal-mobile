import styled from "styled-components";

export const MainWrapperStyled = styled.main`
  padding: 0 16px;
  width: 100%;
  height: auto;
  min-height: calc(100% - 184px);
  position: relative;
`;

export const FormWrapperStyled = styled.form`
  margin: 48px 0 0 0;
  width: 100%;
  height: calc(100% - 48px);

  fieldset {
    margin: 8px 0 0 0;
    padding: 0;
    width: 100%;
    border: none;

    display: inline-flex;
    grid-gap: 8px;
    gap: 8px;

    position: relative;
  }
  fieldset:first-child {
    margin: 0 0 0 0;
  }
  fieldset:last-child {
    margin: 32px 0 16px 0;
    flex-direction: row;
    align-items: center;
  }
  fieldset:not(:last-child) {
    flex-direction: column;
  }
  fieldset:nth-child(2) {
    position: relative;
  }

  label {
    color: var(--color-black);
    font-size: var(--font-size-14);
  }
  input.checkbox + label {
    font-size: var(--font-size-12);
  }
  input,
  input::placeholder {
    color: var(--color-grey);
  }
  input,
  input::placeholder {
    font-size: var(--font-size-12);
  }
  input:not([type="checkbox"]) {
    padding-left: 16px;
    height: 48px;

    background-color: var(--color-transparent);
    border-radius: 8px;
  }
  input[type="checkbox"] {
    accent-color: var(--color-green);
  }
`;

export const ButtonStyled = styled.button`
  width: 24px;
  height: 24px;

  background-color: transparent;
  font-size: 0;

  position: absolute;
  bottom: 12px;
  right: 16px;

  svg {
    color: var(--color-grey);
    font-size: var(--font-size-24);
  }
`;

export const FooterStyled = styled.footer`
  margin: 24px 0 8px 0;
  height: 12px;
  font-size: var(--font-size-10);
`;
