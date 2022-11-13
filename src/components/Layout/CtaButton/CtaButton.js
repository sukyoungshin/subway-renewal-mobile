import React from "react";
import { Button } from "./CtaButton.style";

const CtaButton = ({
  type = "button",
  form,
  isBtnActivated,
  handleOrderProcess,
  label
}) => {
  return (
    <Button
      type={type || "submit"}
      form={form}
      isBtnActivated={isBtnActivated}
      disabled={isBtnActivated ? false : true}
      onClick={handleOrderProcess}
    >
      {label}
    </Button>
  );
};

export default CtaButton;
