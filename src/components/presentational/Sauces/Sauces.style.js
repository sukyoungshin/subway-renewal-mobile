import styled, { css } from "styled-components";

export const Container = styled.div`
  margin-bottom: 16px;
  width: 100%;
  contain: layout;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(156px, auto);
  grid-gap: 20px;
`;

export const SauceList = styled.article`
  padding: 8px;
  width: 100%;

  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  grid-gap: 8px;
  gap: 8px;

  border: 1px solid var(--color-light-grey);
  border-radius: 8px;

  position: relative;

  ${(props) =>
    props.isMenuSelected &&
    css`
      border: 2px solid var(--color-green);
    `}
`;

export const MenuName = styled.div`
  max-width: 112px;
  max-height: 30px;

  h3 {
    font-size: var(--font-size-12);

    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  p {
    font-size: var(--font-size-10);

    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

export const MenuImage = styled.div`
  width: 100%;
  max-height: 84px;
  flex: 1;
  font-size: 0;

  position: relative;

  img {
    width: 100%;
    height: 100%;
    position: relative;
    font-size: var(--font-size-10);

    opacity: 1;
    transition: opacity 0.3s;
  }
  ${(props) =>
    props.isMenuSelected &&
    css`
      img {
        opacity: 0.3;
      }
    `}
`;

export const MenuDescription = styled.span`
width: 100%;
font-size: var(--font-size-10);

position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

opacity: 0;
transition: opacity 0.5s;

${(props) =>
  props.isMenuSelected &&
  css`
    opacity: 1;
  `}
}
`;

export const MenuPrice = styled.p`
  font-size: var(--font-size-10);
`;
export const OrderButton = styled.button`
  padding: 0;
  width: 32px;
  height: 32px;

  color: var(--color-light-grey);
  font-size: 0;
  background-color: var(--color-transparent);
  border-radius: 0 8px 0 8px;

  position: absolute;
  top: -2px;
  right: -2px;
  z-index: 1;

  svg {
    font-size: var(--font-size-16);
  }

  ${(props) =>
    props.isMenuSelected &&
    css`
      background-color: var(--color-green);
    `}
`;
