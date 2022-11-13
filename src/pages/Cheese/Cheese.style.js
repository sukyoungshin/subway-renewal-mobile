import styled from "styled-components";

export const Container = styled.main`
  padding: 16px;
  width: 100%;
  min-height: calc(100% - 136px);
  position: relative;
`;

export const Section = styled.section`
  margin: 16px 0 0 0;
  width: 100%;

  display: inline-flex;
  flex-direction: column;
  grid-gap: 8px;
  gap: 8px;

  h2 {
    color: var(--color-black);
    font-size: var(--font-size-14);
  }
  .description {
    font-size: var(--font-size-12);
  }

  p {
    color: var(--color-black);

    span {
      float: right;
    }
  }
  p:not(total-price) {
    font-size: var(--font-size-12);
  }
  p.total-price {
    margin-top: 16px;
    font-size: var(--font-size-14);
    font-weight: var(--font-weight-bold);
  }

  article {
    width: 100%;
    min-height: 104px;

    background-color: var(--color-transparent);
    border-radius: 8px;
    font-size: 0;

    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    grid-gap: 20px;
    gap: 20px;
  }
`;
