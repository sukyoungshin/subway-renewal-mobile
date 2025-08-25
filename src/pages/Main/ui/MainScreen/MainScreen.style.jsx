import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  min-height: calc(100% - 136px);
  max-height: calc(100% - 232px);
  overflow: auto;
`;

export const Section = styled.section`
  margin-bottom: 56px;
  width: 100%;

  display: inline-flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin: 32px 0 24px 0;
    text-align: center;
    color: var(--color-black);
    font-size: var(--font-size-20);
  }
`;
