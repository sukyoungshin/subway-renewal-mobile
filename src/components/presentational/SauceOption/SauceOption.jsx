import { sauceOptionLists } from '@/mock/food-data';
import { Item, Label, OptionList, Radio } from './SauceOption.style';

const SauceOption = ({ isChecked, selectedRadio }) => {
  return (
    <article>
      <OptionList>
        {sauceOptionLists.map(({ id, radioGroup, name }) => (
          <Item key={id}>
            <Radio
              type="radio"
              id={id}
              name={radioGroup}
              checked={isChecked === id}
              onChange={selectedRadio(id)}
            />
            <Label htmlFor={radioGroup}>{name}</Label>
          </Item>
        ))}
      </OptionList>
    </article>
  );
};

export default SauceOption;
