import styled, { css } from "styled-components";

export const PaginationList = styled.ul`
  width: 100%;
  height: 32px;

  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  grid-gap: 16px; /* cross-browsing */
  gap: 16px;

  list-style: none;

  position: absolute;
  left: 50%;
  bottom: 0.4rem;
  transform: translateX(-50%);
  z-index: 50;
`;

export const Item = styled.li`
  width: 12px;
  height: 12px;
  font-size: var(--font-size-14);

  border-radius: 12px;
  border: 1px solid var(--color-white);
  background-color: transparent;
  transition: background-color 0.4s;

  ${(props) =>
    props.isSelected &&
    css`
      background-color: var(--color-white);
      border: none;
    `}
`;
