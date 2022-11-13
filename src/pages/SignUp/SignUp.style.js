import styled from "styled-components";

export const Container = styled.main`
  padding: 0 16px;
  width: 100%;
  height: auto;
  min-height: calc(100% - 184px);
  position: relative;
`;

export const Form = styled.form`
  margin: 48px 0 0 0;
  width: 100%;
  height: calc(100% - 48px);
`;

export const Fieldset = styled.fieldset`
  margin: 8px 0 0 0;
  padding: 0;
  width: 100%;
  border: none;

  display: inline-flex;
  grid-gap: 8px;
  gap: 8px;

  position: relative;

  &:first-child {
    margin: 0 0 0 0;
  }
  &:last-child {
    margin: 32px 0 16px 0;
    flex-direction: row;
    align-items: center;
  }
  &:not(:last-child) {
    flex-direction: column;
  }
  &:nth-child(2) {
    position: relative;
  }
`;

export const Input = styled.input`
  padding-left: 16px;
  height: 48px;

  background-color: var(--color-transparent);
  border-radius: 8px;

  &::placehoder {
    color: var(--color-grey);
    font-size: var(--font-size-12);
  }
`;

export const Password = styled(Input)``;

export const Text = styled(Input)`
  color: var(--color-grey);
  padding-left: 16px;
  height: 48px;

  background-color: var(--color-transparent);
  border-radius: 8px;
`;

export const Checkbox = styled.input`
  accent-color: var(--color-green);

  &::placehoder {
    color: var(--color-grey);
    font-size: var(--font-size-12);
  }
`;

export const Label = styled.label`
  color: var(--color-black);
  font-size: var(--font-size-14);

  &.checkbox-label {
    font-size: var(--font-size-12);
  }
`;

export const Button = styled.button`
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

export const Footer = styled.footer`
  margin: 24px 0 8px 0;
  height: 12px;
  font-size: var(--font-size-10);
`;
