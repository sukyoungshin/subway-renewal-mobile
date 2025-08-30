import { ChangeEvent, Dispatch, SetStateAction } from 'react';

import { defaultProductImageUrl } from '@/shared/constants/image';

interface IVegetableProps {
  step: IStep;
  setStep: Dispatch<SetStateAction<IStep>>;
  handleVegetableAmount: (id: string, direction: 'prev' | 'next') => () => 0 | 100 | undefined;
  handleStepChange: (id: string) => (e: ChangeEvent<HTMLInputElement>) => void;
  setButtonDisabled: () => void;
  vegetableList: IVegetableList[];
}
interface IStep {
  [x: string]: number;
}
interface IVegetableList {
  id: number;
  nameKor: string;
  nameEng: string;
  description: string;
  imgPath: string;
}

const Vegetable = ({
  step,
  setStep,
  handleVegetableAmount,
  handleStepChange,
  setButtonDisabled,
  vegetableList,
}: IVegetableProps) => {
  return (
    <div className="mb-4 flex w-full flex-col gap-5">
      {vegetableList.map(({ id, nameKor, nameEng, imgPath }) => (
        <div
          key={id}
          className={`inline-flex w-full flex-col justify-between rounded-lg border border-solid p-2 ${!(step[`${id}`] < 10) ? 'border-green' : 'border-grey-light'}`}
        >
          <div
            onClick={setButtonDisabled}
            className="inline-flex w-full flex-row items-center justify-between"
          >
            <button
              type="button"
              onClick={handleVegetableAmount(`${id}`, 'prev')}
              className="u-button-round select-none bg-[color:rgba(233,233,233,0.4)] text-lg text-grey focus:bg-green focus:text-white"
            >
              -
            </button>
            <label htmlFor={`${id}`} className="text-sm capitalize">
              {nameKor} {!!nameEng && nameEng}
            </label>
            <button
              type="button"
              onClick={handleVegetableAmount(`${id}`, 'next')}
              className="u-button-round select-none bg-[color:rgba(233,233,233,0.4)] text-lg text-grey focus:bg-green focus:text-white"
            >
              +
            </button>
          </div>
          <div>
            <img
              src={imgPath !== '' ? imgPath : defaultProductImageUrl}
              alt={nameKor}
              className="max-h-[84px] w-full object-contain"
            />
          </div>
          <div>
            <input
              type="range"
              id={`${id}`}
              min="0"
              max="100"
              step="10"
              value={step[`${id}`]}
              onChange={(e) => {
                handleStepChange(`${id}`);
                setStep({
                  ...step,
                  [id]: e.target.valueAsNumber,
                });
                setButtonDisabled();
              }}
              className="u-accent-color w-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Vegetable;
