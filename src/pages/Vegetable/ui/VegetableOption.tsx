import { ChangeEvent } from 'react';

interface IVegetableOptionProps {
  isChecked: boolean;
  setButtonDisabled: () => void;
  selectedCheckBox: (e: ChangeEvent<HTMLInputElement>) => void;
}
const VegetableOption = ({
  isChecked,
  setButtonDisabled,
  selectedCheckBox,
}: IVegetableOptionProps) => {
  return (
    <div className="rounded-lg bg-[rgba(233,233,233,0.4)]">
      <div className="inline-flex flex-row justify-start gap-4 p-2 text-xs">
        <input
          type="checkbox"
          id="check-all"
          name="체크박스"
          checked={isChecked}
          onChange={(e) => {
            selectedCheckBox(e);
            setButtonDisabled();
          }}
          className="u-accent-color"
        />
        <label htmlFor="check-all" className="text-xs">
          전체선택 (기본값 : 모든 야채 적당히)
        </label>
      </div>
    </div>
  );
};

export default VegetableOption;
