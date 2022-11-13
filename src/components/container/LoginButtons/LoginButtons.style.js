import styled from "styled-components";

export const ItemBlock = styled.div`
  width: 100%;
  height: fit-content;
  text-align: center;
`;

export const ButtonsWrapper = styled(ItemBlock)`
  display: inline-flex;
  flex-direction: column;
  grid-gap: 8px;
  gap: 8px;
`;
