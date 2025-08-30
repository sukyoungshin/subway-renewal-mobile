import { ISauceOptionList } from '@/shared/api/mock/food-menu.types';

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
    <ul
      onClick={setButtonDisabled}
      className="inline-flex w-full flex-col justify-center gap-2 rounded-lg bg-[rgba(255,255,255,0.5)] text-[0]"
    >
      {sauceOptionList.map(({ id, nameKor, radioGroup }) => (
        <li
          key={id}
          className="my-0 ml-2 mr-0 inline-flex flex-row items-center justify-start gap-2"
        >
          <input
            type="radio"
            id={`${id}`}
            name={radioGroup}
            checked={selectedOptionId === id}
            onChange={handleSelectedOptionId(id)}
            className="u-accent-color"
            readOnly
          />
          <label htmlFor={radioGroup} className="text-xs">
            {nameKor}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default SauceOption;
