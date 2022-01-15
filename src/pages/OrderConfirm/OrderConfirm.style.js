import styled from 'styled-components';

export const MainStyled = styled.main`
  padding: 16px;
  width: 100vw;
  min-height: calc(100% - 136px);
  position: relative;
`;

export const SectionStyled = styled.section`
  margin: 48px 0 16px 0;
  width: 100%;

  h2 {
    font-size: var(--font-size-20);
  }
  p {
    font-size: var(--font-size-14);
  }
  li {
    font-size: var(--font-size-14);
  }
  
  ul {
    display: inline-flex;
    flex-direction: column;
    grid-gap: 8px;
    gap: 8px;
  }
`;

