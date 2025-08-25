import { ChangeEvent, useCallback, useEffect, useState } from "react";

interface IVegetableListProps {
  id: number;
  nameKor: string;
  description: string;
  imgPath: string;
}

interface INumberValueObject {
  [x: string]: number;
}

export const useHandleVegetableAmount = (
  vegetableList: IVegetableListProps[]
) => {
  /* 체크박스 및 Input Range */
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [step, setStep] = useState<INumberValueObject>(
    vegetableList.reduce((result: INumberValueObject, veg) => {
      result[veg.id] = 50;
      return result;
    }, {})
  );

  /* 수량조절 버튼 핸들러 */
  const handleVegetableAmount =
    (id: string, direction: "prev" | "next") => () => {
      // PREV 및 NEXT 버튼클릭 시, range step을 이동
      switch (direction) {
        case "prev":
          if (step[id] <= 0) {
            return 0;
          }
          if (step[id] > 0 && step[id] <= 10) {
            setIsChecked(false);
          }
          setStep({
            ...step,
            [id]: step[id] - 10,
          });
          break;

        case "next":
          if (step[id] >= 100) {
            return 100;
          }
          setStep({
            ...step,
            [id]: step[id] + 10,
          });
          break;

        default:
          console.error("NaN");
      }
    };

  const selectedCheckBox = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);

    if (e.target.checked) {
      setStep(
        vegetableList.reduce((result: INumberValueObject, veg) => {
          result[veg.id] = 50;
          return result;
        }, {})
      );
    } else {
      setStep(
        vegetableList.reduce((result: INumberValueObject, veg) => {
          result[veg.id] = 0;
          return result;
        }, {})
      );
    }
  };

  const handleStepChange = useCallback(
    (id: string) => (e: ChangeEvent<HTMLInputElement>) => {
      const range = e.target.valueAsNumber; // 숫자로 바꿔줌

      setStep({
        ...step,
        [id]: range,
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  // 야채 전부 다 10이상일 때, 전체선택 체크박스가 체크선텍
  useEffect(() => {
    const condition = Object.values(step).every((v) => v >= 10);
    if (condition) {
      setIsChecked(true);
    }
     
  }, [step]);

  // 야채 step 중 하나라도 0일 때, 전체선택 체크박스가 체크해제
  useEffect(() => {
    const condition = Object.values(step).some((v) => v === 0);
    if (condition) {
      setIsChecked(false);
    }
    // eslint-disabled-next-line
  }, [step]);

  // 야채 전부 다 0일 때, 전체선택 체크박스가 체크해제
  useEffect(() => {
    const condition = Object.values(step).every((v) => v === 0);
    if (condition) {
      setIsChecked(false);
    }
     
  }, [step]);

  return {
    isChecked,
    step,
    setStep,
    selectedCheckBox,
    handleVegetableAmount,
    handleStepChange,
  };
};
