import styled from "styled-components";

export const MenuCardStyled = styled.section`
  padding: 8px;
  width: 100%;
  height: 112px;
  background-color: var(--color-white);
  display: inline-flex;
  grid-gap: 16px;
  gap: 16px;
`;

export const MenuImage = styled.article`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  max-width: 96px;
  height: 100%;
  img {
    min-width: 96px;
    height: 96px;
    object-fit: cover;
    font-size: var(--font-size-12);
  }
`;

export const MenuDescription = styled.article`
  padding-top: 8px;
  flex: 1;
  display: inline-flex;
  flex-direction: column;
  grid-gap: 8px;
  gap: 8px;
  overflow: hidden;
  h3 {
    font-size: var(--font-size-14);
    font-weight: var(--font-weight-bold);
    span {
      float: right;
      font-size: var(--font-size-12);
    }
  }
  p {
    font-size: var(--font-size-12);
    max-height: 32px;
    overflow: hidden;
    position: relative;
  }
`;
