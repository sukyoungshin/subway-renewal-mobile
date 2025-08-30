import { MouseEventHandler } from 'react';

interface IButtonProps {
  disabled: boolean;
  label: string;
  handleNextOrder: MouseEventHandler<HTMLButtonElement>;
  formId?: string;
}

const CTAButton = ({ label, disabled, handleNextOrder, formId }: IButtonProps) => {
  return (
    <button
      type={formId ? 'submit' : 'button'}
      form={formId}
      disabled={disabled}
      onClick={handleNextOrder}
      className={`fixed left-0 bottom-[80px] z-[100] mx-auto my-0 h-12 w-full max-w-[440px] rounded-lg border border-solid backdrop-blur-sm transition-all duration-[0.3s] ${disabled ? 'border-grey-light bg-transparent font-light text-grey' : 'border-green bg-green font-semibold text-white'}`}
    >
      {label}
    </button>
  );
};

export default CTAButton;
