import { CART_ACTION_TYPE } from '@/features/cart/model/actionTypes';
import LINK from '@/shared/constants/link';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const DELIVER = 'deliver';

export const useSelectDeliverOrPickUp = () => {
  const [isRadioChecked, setIsRadioChecked] = useState(DELIVER);
  const handleRadioStatus = (id: string) => setIsRadioChecked(id);

  return { isRadioChecked, handleRadioStatus };
};

export const useCustomerRequest = () => {
  const [customerOrderRequest, setCustomerOrderRequest] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleOrderRequest = (e: any) => setCustomerOrderRequest(e.target.value);

  return { customerOrderRequest, handleOrderRequest };
};

export const useConditionAgreement = () => {
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleCheckboxStatus = (e: any) => setIsCheckboxChecked(e.target.checked);

  return { isCheckboxChecked, handleCheckboxStatus };
};

export const useCTAButtons = ({ isRadioChecked, isCheckboxChecked, customerOrderRequest }) => {
  /* 리덕스 및 라우터 */
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isActive, setIsActive] = useState(false);

  const goToPrevPage = () => {
    console.log('이전페이지로'); // currentMenu가 없어서 에러남
  };

  const goToPaymentPage = () => {
    dispatch({
      type: CART_ACTION_TYPE.ADDITIONAL_REQUEST,
      payload: {
        customerRequest: customerOrderRequest,
      },
    });

    if (!isCheckboxChecked) return;
    navigate(LINK.CONFIRM, { state: isRadioChecked });
  };

  return { isActive, setIsActive, goToPrevPage, goToPaymentPage };
};
