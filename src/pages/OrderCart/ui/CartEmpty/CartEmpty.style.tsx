import styled, { css } from 'styled-components';

export const CartContainer = styled.section`
  margin: 48px 0 0 0;
  width: 100%;
  min-height: calc(100% - 48px);

  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  grid-gap: 8px;
  gap: 8px;

  h2 {
    color: var(--color-black);
    font-size: var(--font-size-14);
  }

  ${(props) =>
    props.empty &&
    css`
      justify-content: center;
      align-items: center;

      h2 {
        font-weight: var(--font-weight-normal);
      }
    `}
`;
