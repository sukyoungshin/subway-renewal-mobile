import styled from "styled-components";

export const Container = styled.main`
  padding: 8px 0;
  width: 100%;
  height: 100%;
  background-color: var(--color-green-dark);

  display: inline-flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
`;
