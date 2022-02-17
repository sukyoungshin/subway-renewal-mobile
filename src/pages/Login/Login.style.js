import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MainStyled = styled.main`
  width: 100%;
  height: 100%;
  padding: 16px;
  
  background-color: var(--color-white);

  display: inline-flex;
  flex-direction: column;
  grid-gap: 16px;
  gap: 16px;
`;

export const CloseBtnContainerStyled = styled.span`
  width: 24px;
  height: 24px;
  font-size: var(--font-size-24);

  position: absolute;
  top: 16px;
  left: 16px;
`;

export const LinkStyled = styled(Link)`
  color: inherit;
  font-size: inherit;
`;

export const ItemBlock = styled.div`
  width: 100%;
  height: fit-content;
  text-align: center;

  &.btn-wrapper {
    display: inline-flex;
    flex-direction: column;
    grid-gap: 8px;
    gap: 8px;
  }
  &:is(.signup-wrapper, .signin-title) {
    font-size: var(--font-size-12);
    color: var(--color-grey);
  }
  &.signup-wrapper {
    padding: 8px;
    height: auto;

    p {
      font-weight: var(--font-weight-normal);
    }
    a {
      color: var(--color-grey);
      font-size: var(--font-size-small);
      font-weight: var(--font-weight-bold);
      border-bottom: 1px solid var(--color-white);
    }
  }
  &.signin-title {
    height: auto;

    /* line그리기 */
    p {
      display: flex;
      flex-basis: 100%;
      align-items: center;
      font-size: inherit;
      color: var(--color-grey);
    }
    p::before {
      content: '';
      flex-grow: 1;
      margin: 0px 16px;
      background-color: var(--color-light-grey);
      height: 1px; /* cross-browsing issue: chrome은 0.5px -> 1px, fireFox는 0.5px -> 0 */
    }
    p::after {
      content: '';
      flex-grow: 1;
      margin: 0px 16px;
      background-color: var(--color-light-grey);
      height: 1px; /* cross-browsing issue: chrome은 0.5px -> 1px, fireFox는 0.5px -> 0 */
    }
  }
`;

export const LogoContainerStyled = styled(ItemBlock)`
  height: 104px;

  img {
    display: inline-block;
    margin-top: 40px;
    width: 180px;
    height: 48px;
  }
`;
