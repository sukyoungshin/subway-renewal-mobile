import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavbarWrapperStyled = styled.aside`
  padding: 16px;
  width: 100%;
  max-width: 440px;
  height: 100%;
  background-color: var(--color-light-white);

  display: inline-flex;
  flex-direction: column;

  position: absolute;
  top: 0;
  z-index: 999;
`;

export const NavbarHeaderStyled = styled.header`
  width: 100%;

  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  grid-gap: 8px;
  gap: 8px;

  font-size: 0;

  div:first-child {
    flex: 1;
  }
  div:not(:first-child) {
    svg {
      font-size: var(--font-size-24);
    }
  }
`;

export const NavLinkStyled = styled(NavLink)`
  font-size: var(--font-size-14);

  img {
    width: 128px;
    height: 32px;
  }
  svg {
    color: var(--color-green);
  }
`;

export const ButtonStyled = styled.button`
  height: 40px;
  line-height: 40px;

  color: var(--color-white);
  font-size: var(--font-size-14);
  font-weight: var(--font-weight-normal);
  background-color: var(--color-green);
  border-radius: 8px;
`;

export const NavbarNavStyled = styled.nav`
  flex: 1;

  ul {
    margin: 40px 0 0 0;

    width: 100%;
    display: inline-flex;
    flex-direction: column;
    grid-gap: 16px;
    gap: 16px;
  }

  li {
    background-color: transparent;
    transition: all 0.4s;
  }
`;

export const NavbarMainStyled = styled.main`
  padding: 32px 0 0 0;
  height: 210px;

  display: inline-flex;
  flex-direction: column;
  grid-gap: 32px;
  gap: 32px;

  border-top: 1px solid var(--color-transparent);

  h1 {
    font-size: 18px;

    display: inline-flex;
    flex-direction: row;
    align-items: center;
    grid-gap: 8px;
    gap: 8px;
  }
  img {
    width: 24px;
    height: 24px;
    border-radius: 8px;
    font-size: var(--font-size-10);
  }
  div {
    font-size: var(--font-size-14);

    display: inline-flex;
    flex-direction: column;
    grid-gap: 8px;
    gap: 8px;
  }
`;

export const NavbarFooterStyled = styled.footer`
  font-size: 0;

  display: inline-flex;
  flex-direction: row;
  align-items: center;
  grid-gap: 16px;
  gap: 16px;

  svg {
    width: 24px;
    height: 24px;
  }
`;
