import styled from 'styled-components';

export const WrapperStyled = styled.main`
  padding: 8px 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--color-green-dark);

  display: inline-flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
`;
export const LogoWrapperStyled = styled.section`
  flex: 1;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  img {
    width: calc(50%);
  }
`;
export const FooterWrapperStyled = styled.footer`
  color: var(--color-white);
  font-size: var(--font-size-10);
`;