import styled from 'styled-components';

export const MainWrapperStyled = styled.main`
  width: 100%;
  height: auto;
  min-height: calc(100% - 184px);
  position: relative;
`;

export const FormWrapperStyled = styled.form`
  margin: 48px 0 0 0;
  padding: 0 16px;
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
  input + svg {
    color: var(--color-light-grey);
    font-size: var(--font-size-24);

    position: absolute;
    right: 16px;
    bottom: 12px;

    cursor: pointer;
  }

  label {
    color: var(--color-black);
  }
  input,
  input::placeholder {
    color: var(--color-grey);
  }
  label,
  input,
  input::placeholder {
    font-size: var(--font-size-14);
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

export const ButtonWrapperStyled = styled.div`
  margin: 0 auto;
  width: calc(100% - 32px);
`;

export const FooterStyled = styled.footer`
  height: 12px;
  font-size: var(--font-size-10);

`;
