import styled from "styled-components";

export const Container = styled.main`
  padding: 16px;
  width: 100%;
  min-height: calc(100% - 136px);
  position: relative;
`;

export const Paragraph = styled.p`
  font-size: var(--font-size-12);
  color: var(--color-black);

  span {
    float: right;
  }
`;

export const Title = styled.h2`
  color: var(--color-black);
  font-size: var(--font-size-14);
`;
export const Section = styled.section`
  margin: 16px 0 0 0;
  width: 100%;

  display: inline-flex;
  flex-direction: column;
  grid-gap: 8px;
  gap: 8px;
`;
