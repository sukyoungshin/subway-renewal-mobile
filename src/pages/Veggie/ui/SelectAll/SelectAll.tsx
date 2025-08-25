import { OptionList, Item, Checkbox, Label } from './SelectAll.style';

const VeggieOption = ({ isChecked, selectedCheckBox }) => {
  return (
    <article>
      <OptionList>
        <Item>
          <Checkbox
            type="checkbox"
            id="checkall"
            name="체크박스"
            checked={isChecked}
            onChange={selectedCheckBox}
          />
          <Label htmlFor="checkall">전체선택 ( 수량 : 중간 )</Label>
        </Item>
      </OptionList>
    </article>
  );
};

export default VeggieOption;
