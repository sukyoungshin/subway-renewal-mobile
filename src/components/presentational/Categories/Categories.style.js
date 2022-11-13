import styled, { css } from "styled-components";

export const CategoryButtonStyled = styled.button`
  padding: 8px;
  width: 100%;
  min-width: 65px;
  height: 104px;

  color: var(--color-grey);
  font-size: var(--font-size-12);
  font-weight: var(--font-weight-normal);
  background-color: rgba(233, 233, 233, 0.4);
  border: 1px solid var(--color-light-grey);
  border-radius: 8px;

  display: inline-flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  grid-gap: 24px;
  gap: 24px;

  transition: all 0.3s;

  img {
    width: 100%;
    aspect-ratio: 16 / 9;
  }

  ${(props) =>
    props.isBtnSelected &&
    css`
      color: var(--color-white);
      background-color: var(--color-green);
      font-weight: var(--font-weight-bold);

      img {
        transform: scale(2);
        transition: transform 0.3s;
        filter: drop-shadow(0px 2px 2px var(--color-black));
      }
    `}
`;
