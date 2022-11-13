import { breadOptionLists } from "mock/food-data";
import {
  BreadOptionList,
  BreadOptionItem,
  OptionTabItem,
  OptionTabList,
  Radio,
  Label
} from "./BreadOption.style";

const BreadOption = ({ selectedRadio }) => {
  return (
    <BreadOptionList>
      {breadOptionLists.map(({ id, name, option, nameEng }) => (
        <BreadOptionItem key={id}>
          <span>{name}</span>
          <OptionTabList>
            <OptionTabItem>
              <Radio
                type="radio"
                id={option["option1"].text}
                name={nameEng}
                defaultChecked={option["option1"]?.default}
                onChange={selectedRadio({
                  id: id,
                  name: nameEng,
                  nameKor: name,
                  bool: option["option1"].default,
                  price: option["option1"].price
                })}
              />
              <Label htmlFor={option["option1"].text}>
                {option["option1"].text}
              </Label>
            </OptionTabItem>
            <OptionTabItem>
              <Radio
                type="radio"
                id={option["option2"].text}
                name={nameEng}
                defaultChecked={option["option2"].default}
                onChange={selectedRadio({
                  id: id,
                  nameKor: name,
                  name: nameEng,
                  bool: option["option2"].default,
                  price: option["option2"].price
                })}
              />
              <Label htmlFor={option["option2"].text}>
                {option["option2"].text}{" "}
                {option["option2"].price
                  ? `(${option["option2"].price})`
                  : null}
              </Label>
            </OptionTabItem>
          </OptionTabList>
        </BreadOptionItem>
      ))}
    </BreadOptionList>
  );
};

export default BreadOption;
