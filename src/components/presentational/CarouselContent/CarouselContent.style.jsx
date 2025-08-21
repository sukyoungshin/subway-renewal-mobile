import styled from 'styled-components';

export const Container = styled.section`
  padding: 16px;
  width: 100%;
  height: 232px;
  overflow: hidden;
  position: relative;
  background-color: var(--color-green);

  display: inline-flex;
  flex-direction: column;
  grid-gap: 16px;
  gap: 16px;

  position: absolute;
  top: 0;
  left: 0;
  z-index: ${(props) => (props.isSelected ? 5 : null)};
`;

export const Text = styled.article`
  h2:first-child {
    color: var(--color-yellow);
    font-size: var(--font-size-20);
  }
  h2:last-child {
    color: var(--color-white);
    font-size: var(--font-size-20);
  }
`;

export const Event = styled.article`
  color: var(--color-white);
  font-size: var(--font-size-14);

  p {
    line-height: 1.3rem;
  }
`;

export const Button = styled.button`
  padding: 8px 16px;
  border-radius: 8px;
  background-color: transparent;
  border: 1px solid var(--color-white);

  color: var(--color-white);
  font-size: var(--font-size-10);

  transition: background-color 0.4s;

  &:is(:focus, :active, :hover) {
    background-color: var(--color-transparent);
  }
`;
