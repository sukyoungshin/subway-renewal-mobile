import { MouseEventHandler } from "react";
import { Button as StyledButton } from './CTAButton.style';

interface IButtonProps {
  disabled: boolean;
  label: string;
  handleNextOrder: MouseEventHandler<HTMLButtonElement>;
  formId?: string;
}

const CTAButton = ({
  label,
  disabled,
  handleNextOrder,
  formId,
}: IButtonProps) => {

  return (
    <StyledButton
      type={formId ? "submit" : "button"}
      form={formId}
      disabled={disabled}
      onClick={handleNextOrder}
    >
      {label}
    </StyledButton>
  );
};

export default CTAButton;