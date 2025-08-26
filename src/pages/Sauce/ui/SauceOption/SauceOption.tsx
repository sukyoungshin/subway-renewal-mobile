import { ISauceOptionList } from '@/shared/api/mock/food-menu.types';
import { Item, Label, OptionList, Radio } from './SauceOption.style';

interface ISauceOptionProps {
  selectedOptionId: number;
  handleSelectedOptionId: (id: number) => () => void;
  sauceOptionList: ISauceOptionList[];
  setButtonDisabled: () => void;
}
const SauceOption = ({
  selectedOptionId,
  handleSelectedOptionId,
  sauceOptionList,
  setButtonDisabled,
}: ISauceOptionProps) => {
  return (
    <article>
      <OptionList onClick={setButtonDisabled}>
        {sauceOptionList.map(({ id, radioGroup, nameKor }) => (
          <Item key={id}>
            <Radio
              type="radio"
              id={id}
              name={radioGroup}
              checked={selectedOptionId === id}
              onChange={handleSelectedOptionId(id)}
            />
            <Label htmlFor={radioGroup}>{nameKor}</Label>
          </Item>
        ))}
      </OptionList>
    </article>
  );
};

export default SauceOption;
