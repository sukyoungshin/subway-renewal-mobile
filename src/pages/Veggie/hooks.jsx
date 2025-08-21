import LINK from '@/constants/link';
import { vegetables } from '@/mock/food-data';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const NEXT = 'next';
const PREV = 'prev';

export const useSelectAmountOfVeg = () => {
  /* 체크박스 및 Input Range */
  const [isChecked, setIsChecked] = useState(false);
  const [step, setStep] = useState(
    vegetables.reduce((result, veg) => {
      result[veg.id] = 50;
      return result;
    }, {})
  );

  /* 수량조절 버튼 핸들러 */
  const conditionZeroToTen = (step, id) => {
    return step[id] > 0 && step[id] <= 10;
  };
  const conditionLessThanZero = (step, id) => {
    return step[id] <= 0;
  };
  const conditionMoreThanAHundred = (step, id) => {
    return step[id] >= 100;
  };
  //eslint-disable-next-line
  const handleAmountVeg = useCallback((id, direction) => () => {
    // PREV 및 NEXT 버튼을 클릭 시, range step을 이동
    switch (direction) {
      case PREV:
        if (conditionLessThanZero(step, id)) return 0;
        if (conditionZeroToTen(step, id)) {
          setIsChecked(false);
        }
        setStep({
          ...step,
          [id]: step[id] - 10,
        });
        break;

      case NEXT:
        if (conditionMoreThanAHundred(step, id)) return 100;
        setStep({
          ...step,
          [id]: step[id] + 10,
        });
        break;

      default:
        console.log('NaN');
    }
  });

  const selectedCheckBox = (e) => {
    setIsChecked(e.target.checked);

    if (e.target.checked) {
      setStep(
        vegetables.reduce((result, veg) => {
          result[veg.id] = 50;
          return result;
        }, {})
      );
    } else {
      setStep(
        vegetables.reduce((result, veg) => {
          result[veg.id] = 0;
          return result;
        }, {})
      );
    }
  };

  // eslint-disable-next-line
  const handleStepChange = useCallback((id) => (e) => {
    const range = e.target.valueAsNumber; // 숫자로 바꿔줌
    setStep({
      ...step,
      [id]: range,
    });
  });

  // 야채 전부 다 10이상일 때, 전체선택 체크박스가 체크선텍
  useEffect(() => {
    const vegAmounts = Object.values(step);
    const condition = vegAmounts.every((v) => v >= 10);
    if (condition) setIsChecked(true);
    // eslint-disable-next-line
  }, [step]);

  // 야채 step 중 하나라도 0일 때, 전체선택 체크박스가 체크해제
  useEffect(() => {
    const vegAmounts = Object.values(step);
    const condition = vegAmounts.some((v) => v === 0);
    if (condition) setIsChecked(false);
    // eslint-disabled-next-line
  }, [step]);

  // 야채 전부 다 0일 때, 전체선택 체크박스가 체크해제
  useEffect(() => {
    const vegAmounts = Object.values(step);
    const condition = vegAmounts.every((v) => v === 0);
    if (condition) setIsChecked(false);
    // eslint-disable-next-line
  }, [step]);

  return {
    isChecked,
    step,
    selectedCheckBox,
    handleAmountVeg,
    handleStepChange,
  };
};

export const useCTAButton = ({ step }) => {
  /* 리덕스 및 라우터 */
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // eslint-disable-next-line
  const handleOrderProcess = useCallback((e) => {
    e.preventDefault();
    dispatch({
      type: 'cart/veggie',
      payload: step,
    });
    navigate(LINK.SAUCE);
  });

  return handleOrderProcess;
};
