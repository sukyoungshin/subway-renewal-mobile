import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 56px;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 10%);
  position: relative;

  ul.header-nav-wrapper {
    height: 100%;
    list-style-type: none;

    display: inline-flex;
    flex-direction: row;
    align-items: center;
  }
  ul.header-nav-wrapper li {
    padding: 10px;
    height: 56px;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  font-size: 0;

  svg {
    width: 32px;
    height: 32px;
    color: var(--color-green);
  }
`;

export const Anchor = styled(Link)`
  img {
    width: calc(50%);
    height: calc(50%);
  }
`;

export const LinkStyled = styled(Link)`
  position: relative;

  span {
    padding: 2px 6px;
    color: var(--color-white);
    font-size: var(--font-size-10);
    font-weight: var(--font-weight-bold);
    background-color: var(--color-yellow);
    border-radius: 50%;

    position: absolute;
    top: 50%;
    left: 0;
    transform: translateX(-30%);
  }
`;
