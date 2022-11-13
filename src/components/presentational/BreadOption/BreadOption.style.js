import styled from "styled-components";

export const BreadOptionList = styled.ul`
  min-height: 104px;
  display: inline-flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  gap: 8px;

  width: 100%;
  background-color: var(--color-transparent);
  border-radius: 8px;

  font-size: 0; /* removed unexpected space */
`;

export const BreadOptionItem = styled.li`
  display: inline-flex;
  align-items: center;
  grid-gap: 8px;
  gap: 8px;
`;

export const OptionTabList = styled.ul`
  width: 238px;
  display: inline-flex;
  flex-direction: row;
  grid-gap: 16px;
  gap: 16px;
`;

export const OptionTabItem = styled.li`
  display: inline-flex;
  justify-content: space-between;
  flex-direction: row;
  grid-gap: 16px;
  gap: 16px;

  font-size: var(--font-size-12);

  span {
    margin-left: 8px;
  }
`;

export const Radio = styled.input`
  accent-color: var(--color-green);
`;

export const Label = styled.label`
  font-size: var(--font-size-12);
`;
