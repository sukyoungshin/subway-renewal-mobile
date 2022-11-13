import React from "react";
import { FloatButtonStyled } from "./FloatButtonLayout.style";

const FloatButton = ({
  type = "button",
  form,
  isBtnActivated,
  handleOrderProcess,
  label,
}) => {
  return (
    <FloatButtonStyled
      type={type || "submit"}
      form={form}
      isBtnActivated={isBtnActivated}
      disabled={isBtnActivated ? false : true}
      onClick={handleOrderProcess}
    >
      {label}
    </FloatButtonStyled>
  );
};

export default FloatButton;
