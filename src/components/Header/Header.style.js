import styled from 'styled-components';

export const HeaderWrapperStyled = styled.header`
  width: 100vw;
  height: 56px;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 10%);
  position: relative;

  ul.header-nav-wrapper {
    height: 100%;
    list-style-type: none;

    display: inline-flex;
    flex-direction: row;
    align-items: center;
  };
  ul.header-nav-wrapper li {
    padding: 10px;
    height: 56px;
  };
  ul.header-nav-wrapper button[type="button"] {
    background-color: transparent;
    font-size: 0;
  };
  a.cart-btn {
    position: relative;
  };
  a.cart-btn span {
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
  };
`;