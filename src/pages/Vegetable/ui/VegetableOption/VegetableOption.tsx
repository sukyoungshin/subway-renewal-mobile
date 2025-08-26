import { ChangeEvent } from 'react';
import { Checkbox, Item, Label, OptionList } from '../VegetableOption/VegetableOption.style';

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
    <article>
      <OptionList>
        <Item>
          <Checkbox
            type="checkbox"
            id="check-all"
            name="체크박스"
            checked={isChecked}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              selectedCheckBox(e);
              setButtonDisabled();
            }}
            className="c-accent-color"
          />
          <Label htmlFor="check-all" className="text-xs">
            전체선택 (기본값 : 모든 야채 적당히)
          </Label>
        </Item>
      </OptionList>
    </article>
  );
};

export default VegetableOption;
