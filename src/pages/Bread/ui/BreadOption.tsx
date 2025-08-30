import { breadOptionList } from '@/shared/api/mock/food-menu.mock.js';
import { useCallback, useState } from 'react';


import { formatPrice } from '@/shared/utils/common-utils';

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
    <ul className="inline-flex min-h-[104px] w-full flex-col justify-center gap-2 rounded-lg bg-[rgba(233,233,233,0.4)] p-2">
      {breadOptionList.map(({ id, nameKor, nameEng, option }) => (
        <li key={id} className="inline-flex items-center gap-2">
          <span className="w-20 text-xs font-medium text-black">{nameKor}</span>
          <ul className="inline-flex w-[238px] flex-row gap-4">
            <li className="inline-flex flex-row justify-between gap-2 text-xs">
              <input
                type="radio"
                id={option["option1"].text}
                name={nameEng}
                defaultChecked={option["option1"]?.default}
                onChange={handleSelectOption({
                  id: id,
                  nameEng: nameEng,
                  nameKor: nameKor,
                  boolean: option["option1"].default,
                  price: option["option1"].price,
                })}
                className="u-accent-color"
              />
              <label
                htmlFor={option["option1"].text}
                className="text-xs text-black"
              >
                {option["option1"].text}
              </label>
            </li>
            <li className="inline-flex flex-row justify-between gap-2 text-xs">
              <input
                type="radio"
                id={option["option2"].text}
                name={nameEng}
                defaultChecked={option["option2"].default}
                onChange={handleSelectOption({
                  id: id,
                  nameKor: nameKor,
                  nameEng: nameEng,
                  boolean: option["option2"].default,
                  price: option["option2"].price,
                })}
                className="u-accent-color"
              />
              <label
                htmlFor={option["option2"].text}
                className="text-xs text-black"
              >
                {option["option2"].text}{" "}
                {!!Number(option["option2"].price) && (
                  <span>
                    (추가 {formatPrice(Number(option["option2"].price))}원)
                  </span>
                )}
              </label>
            </li>
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default BreadOption;
