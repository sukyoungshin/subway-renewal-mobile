import React from 'react';
import { FloatButtonStyled } from './FloatButton.style';

const FloatButton = ({ 
  type = 'button',
  form, 
  isBtnActivated, 
  handleOrderProcess, 
  children }) => {

  return (
    <FloatButtonStyled 
      type={type || "submit"} 
      form={form}
      isBtnActivated={isBtnActivated}
      disabled={isBtnActivated ? false : true}
      onClick={handleOrderProcess}
    >
      {children}
    </FloatButtonStyled>
  );
};

export default FloatButton;