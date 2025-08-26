import { breadOptionList } from '@/shared/api/mock/food-menu.mock.js';
import { useCallback, useState } from 'react';
import {
  BreadOptionItem,
  BreadOptionList,
  Label,
  OptionTabItem,
  OptionTabList,
  Radio,
} from './BreadOption.style';

interface IBreadOption {
  id: number;
  nameKor: string;
  nameEng: string;
  boolean: boolean;
  price: string;
}

const BreadOption = () => {
  const [optionList, setOptionList] = useState<IBreadOption[]>([]); // 선택한 빵 옵션을 저장

  /** 선택한 빵 옵션 저장 */
  const handleSelectOption = useCallback(
    ({ id, nameKor, nameEng, boolean, price }: IBreadOption) =>
      () => {
        const newOptionList = { id, nameEng, nameKor, boolean, price }; // 새로 선택된 빵 옵션
        setOptionList([...optionList, newOptionList]); // 선택한 빵 옵션 저장
      },
    [optionList]
  );

  return (
    <BreadOptionList>
      {breadOptionList.map(({ id, option, nameEng, nameKor }) => (
        <BreadOptionItem key={id}>
          <span>{nameKor}</span>
          <OptionTabList>
            <OptionTabItem>
              <Radio
                type="radio"
                id={option['option1'].text}
                name={nameEng}
                defaultChecked={option['option1']?.default}
                onChange={handleSelectOption({
                  id: id,
                  nameEng: nameEng,
                  nameKor: nameKor,
                  boolean: option['option1'].default,
                  price: option['option1'].price,
                })}
              />
              <Label htmlFor={option['option1'].text}>{option['option1'].text}</Label>
            </OptionTabItem>
            <OptionTabItem>
              <Radio
                type="radio"
                id={option['option2'].text}
                name={nameEng}
                defaultChecked={option['option2'].default}
                onChange={handleSelectOption({
                  id: id,
                  nameKor: nameKor,
                  nameEng: nameEng,
                  boolean: option['option2'].default,
                  price: option['option2'].price,
                })}
              />
              <Label htmlFor={option['option2'].text}>
                {option['option2'].text}{' '}
                {option['option2'].price ? `(${option['option2'].price})` : null}
              </Label>
            </OptionTabItem>
          </OptionTabList>
        </BreadOptionItem>
      ))}
    </BreadOptionList>
  );
};

export default BreadOption;
