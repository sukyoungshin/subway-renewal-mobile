import styled from 'styled-components';

export const GoogleLoginButtonStyled = styled.div`
  border-radius: 8px;

  /* css override - 구글기본스타일을 override하기 위해 어쩔 수 없이 important 사용*/
  div.abcRioButton.abcRioButtonLightBlue{
    width: 100% !important;
    border-radius: 8px !important;
    box-shadow: none !important;
    color: var(--color-white) !important;
    background-color: var(--color-google) !important;
    
    .abcRioButtonContentWrapper {
      display: inline-flex !important;
      flex-direction: row !important;
      justify-content: center !important;
      align-items: center !important;
      
      .abcRioButtonContents{
        margin-left: 8px !important;
        line-height: 0 !important;
        font-size: var(--font-size-14) !important;
      }
    }
    .abcRioButtonIcon {
      padding: 0 !important;

      div {
        width: 14px !important;
        height: 14px !important;
        
        svg {
          width: 14px !important;
          height: 14px !important;
          filter: drop-shadow(0 0 1px white) !important;
        }
      }
    }

  }
`;

export const GoogleLogoutButtonStyled = styled.button`
  padding: 4px;
  width: 100%;
  height: 100%;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  grid-gap: 8px; 
  gap: 8px;

  color: var(--color-white);
  font-size: var(--font-size-14);
  background-color: var(--color-google);
  border-radius: 8px;

  &:is(:active, :focus, :hover) {
    color: var(--color-black);
  }
`;