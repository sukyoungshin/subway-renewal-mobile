import styled from "styled-components";

export const Container = styled.article`
  width: 270px;
  height: fit-content;

  display: flex;
  flex-direction: column;
  text-align: center;
  grid-gap: 32px;
  gap: 32px;
`;

export const Menu = styled.div`
  padding: 16px;
  width: 270px;
  height: 260px;

  display: inline-block;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  box-sizing: border-box;

  img {
    width: 235px;
    height: 135px;
  }
  h3 {
    margin: 10px 0 11px 0;
    color: var(--color-black);
    font-size: var(--font-size-14);
  }
  p {
    color: var(--color-grey);
    font-size: var(--font-size-14);
  }
`;

export const Button = styled.button`
  background-color: transparent;
  font-size: 0;

  width: fit-content;
  height: 48px;

  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);

  img {
    width: 40px;
    height: 40px;
  }
`;
