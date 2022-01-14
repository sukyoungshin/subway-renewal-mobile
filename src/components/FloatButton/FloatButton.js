import React from 'react';
import { FloatButtonStyled } from './FloatButton.style';

const FloatButton = ({ isBtnActivated, handleOrderProcess, children }) => {
  return (
    <FloatButtonStyled 
      type="button" 
      isBtnActivated={isBtnActivated}
      disabled={isBtnActivated ? false : true}
      onClick={handleOrderProcess}
    >
      {children}
    </FloatButtonStyled>
  );
};

export default FloatButton;