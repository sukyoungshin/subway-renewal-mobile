import styled, { css } from 'styled-components';

export const FormStyled = styled.form`
  padding: 16px;
  width: 100%;
  height: calc(100vh - 136px); 

  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-gap: 16px;
  gap: 16px;

  p,
  label {
    font-size: var(--font-size-14);
    font-weight: var(--font-weight-bold);
    color: var(--color-black);
  }
`;

export const FieldsetStyled = styled.fieldset`
  margin:0;
  padding: 0;
  border: none;

  display: inline-flex;
  flex-direction: column;
  grid-gap: 8px;
  gap: 8px;
`;

export const AddressInputStyled = styled.input`
  padding: 12px;
  width: 100%;
  height: 48px;
  box-sizing: border-box;

  color: var(--color-grey);
  font-size: var(--font-size-12);
  border: 1px solid var(--color-light-grey);
  border-radius: 8px;

  position: relative;

  &::placeholder {
    color: var(--color-grey);
    font-size: var(--font-size-12);
  }
`;

export const ResultInputStyled = styled.input`
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

  &:active,
  &:focus,
  &:active + span,
  &:focus + span {
    color: var(--color-white);
    background-color: var(--color-green);
  }
`;


export const MapWrapperStyled = styled.div`
  padding: ${(props) => props.padding? '12px' : '0px' };
  width: 100%;
  height: calc(100%);

  border-radius: 8px;
  border: 1px solid var(--color-light-grey);

  position: relative;

  p {
    color: var(--color-grey);
    font-size: var(--font-size-12);
    font-weight: var(--font-weight-normal);
  }

  ul.placesList {
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

    li {
      width: 100%;
      position: relative;
    }
  }
`;

export const MapViewerStyled = styled.div`
  height: 100%;
`;

export const CTAButtonStyled = styled.button`
  width: 100%;
  height: 48px;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  grid-gap: 8px; 
  gap: 8px;

  color: var(--color-grey);
  font-weight: var(--font-weight-normal);
  background-color: var(--transparent);
  border: 1px solid var(--color-light-grey);
  border-radius: 8px;
  
  transition: all 0.3s;
  
  ${props => props.isBtnSelected && css`
    color: var(--color-white);
    font-weight: var(--font-weight-bold);
    border: 1px solid var(--color-green);
    background-color: var(--color-green);
  `};
`;
