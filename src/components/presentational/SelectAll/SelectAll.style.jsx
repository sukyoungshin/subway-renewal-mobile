import styled from 'styled-components';

export const OptionList = styled.ul`
  width: 100%;
  min-height: 104px;
  background-color: var(--color-transparent);
  border-radius: 8px;

  font-size: 0;

  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  grid-gap: 8px;
  gap: 8px;
`;

export const Item = styled.li`
  padding: 8px;
  display: inline-flex;
  justify-content: flex-start;
  flex-direction: row;
  grid-gap: 16px;
  gap: 16px;

  font-size: var(--font-size-12);

  span {
    margin-left: 8px;
  }
  .option {
    width: 238px;
    display: inline-flex;
    flex-direction: row;
    grid-gap: 16px;
    gap: 16px;
  }
`;

export const Checkbox = styled.input`
  accent-color: var(--color-green);
`;

export const Label = styled.label`
  font-size: var(--font-size-12);
`;
