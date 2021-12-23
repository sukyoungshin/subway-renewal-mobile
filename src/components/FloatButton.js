import React from 'react';
import { FloatBtn } from '../common/Styled';


const FloatButton = ({ isBtnActivated, handleOrderProcess, children }) => {
  return (
    <FloatBtn 
      type="button" 
      isBtnActivated={isBtnActivated}
      disabled={isBtnActivated ? false : true}
      onClick={handleOrderProcess}
    >
      {children}
    </FloatBtn>
  );
};

export default FloatButton;