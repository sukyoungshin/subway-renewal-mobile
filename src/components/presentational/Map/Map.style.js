import styled from "styled-components";

export const MapContainer = styled.div`
  padding: ${(props) => (props.padding ? "12px" : "0px")};
  width: 100%;
  height: 100%;
  min-height: 300px;

  border-radius: 8px;
  border: 1px solid var(--color-light-grey);

  position: relative;

  p {
    color: var(--color-grey);
    font-size: var(--font-size-12);
    font-weight: var(--font-weight-normal);
  }
`;

export const SubwaysList = styled.ul`
  width: 100%;
  display: block;

  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 10;

  display: inline-flex;
  flex-direction: column;
  grid-gap: 8px;
  gap: 8px;

  background-color: var(--color-transparent);
`;

export const Subway = styled.li`
  width: 100%;
  position: relative;
`;

export const MapViewer = styled.div`
  height: 100%;
  min-height: 300px;
  display: ${(props) => (props.isHidden ? "none" : "block")};
`;
export const ResultInput = styled.input`
  padding-left: 22px;
  width: 100%; 
  height: 40px;
  box-sizing: border-box;

  background-color: rgba(255,255,255,0.5);
  border: 1px solid var(--color-light-grey)
  border-radius: 8px;

  color: var(--color-black);
  font-size: var(--font-size-12);

  & + span {
    display:inline-block;
    
    color: var(--main-text-color);
    font-size: var(--font-size-12);

    position: absolute; 
    top: 50%; 
    right: 5%;
    transform: translateY(-50%);

    a {
      font-size: var(--font-size-12);
    }
  }

  &:is(:active, :focus) {
    color: var(--color-white);
    background-color: var(--color-green);
  }
  &:active + span, 
  &:focus + span {
    color: var(--color-white);
    background-color: var(--color-green);
  }
`;
