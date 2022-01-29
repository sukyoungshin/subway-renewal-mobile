import { useState, useEffect, useCallback } from 'react';
import { vegetables } from 'mock/Datas';

export const useInputRangeAndCTAbutton = () => {
  /* Input Range 관련 */
  const [ isChecked, setIsChecked ] = useState(false); // 체크박스 관리
  const [ step, setStep ] = useState(
    // vegetables 배열의 갯수만큼 step생성 (기본값 50)
    vegetables.reduce((result, veg) => {
      result[veg.id] = 50;
      return result;
    }, {})
  ); 
  // 야채 전부 다 10이상일 때,
  useEffect(() => {
    const vegAmounts = Object.values(step); 
    const condition = vegAmounts.every((v) => v >= 10);
    if (condition) {
      setIsChecked(true); // 전체선택 체크박스가 체크
      setIsBtnActivated(true); // CTA버튼 활성화
    };
    // eslint-disable-next-line
  }, [step]);
  // eslint-disable-next-line
  const handleStepChange = useCallback((id) => 
    (e) => {
      const range = e.target.valueAsNumber; // 숫자로 바꿔줌
      setStep({
        ...step,
        [id] : range,  
      });
    }
  );

  /* CTA버튼 관련 */
  const [ isBtnActivated, setIsBtnActivated ] = useState(false); // CTA버튼 활성화 여부
  const selectedCheckBox = (e) => {
    setIsChecked(e.target.checked); // 현재 체크된 상태로 업데이트
    
    if (e.target.checked) {
      setStep(
        vegetables.reduce((result, veg) => {
          result[veg.id] = 50;
          return result;
        }, {})
      );
      setIsBtnActivated(true); 
  
    } else {
      setStep(
        vegetables.reduce((result, veg) => {
          result[veg.id] = 0;
          return result;
        }, {})
      );
      setIsBtnActivated(false);
    };
  };

  return [ step, setStep, isChecked, setIsChecked, handleStepChange, isBtnActivated, selectedCheckBox ];
};

