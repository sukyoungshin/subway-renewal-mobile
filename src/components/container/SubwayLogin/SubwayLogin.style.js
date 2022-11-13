import styled from "styled-components";

export const InputContainerStyled = styled.div`
  width: 100%;
  height: 48px;
  text-align: center;
  position: relative;

  input:is([type="text"], [type="password"]) {
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
