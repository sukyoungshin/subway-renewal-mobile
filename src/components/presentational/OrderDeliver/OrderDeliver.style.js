import styled from "styled-components";

export const Container = styled.main`
  padding: 16px;
  width: 100%;
  min-height: calc(100% - 136px);
  position: relative;
`;

export const Text = styled.section`
  margin: 48px 0 16px 0;
  width: 100%;

  h2 {
    font-size: var(--font-size-20);
  }
  p {
    font-size: var(--font-size-14);
  }
`;

export const Section = styled.section`
  margin: 48px 0 16px 0;
  width: 100%;
`;

export const OrderDetail = styled.ul`
  display: inline-flex;
  flex-direction: column;
  grid-gap: 8px;
  gap: 8px;

  li {
    font-size: var(--font-size-14);
  }
`;
