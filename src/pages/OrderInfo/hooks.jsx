import LINK from '@/shared/constants/link';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const DELIVER = 'deliver';

export const useSelectDeliverOrPickUp = () => {
  const [isRadioChecked, setIsRadioChecked] = useState(DELIVER);
  const handleRadioStatus = (id) => setIsRadioChecked(id);

  return { isRadioChecked, handleRadioStatus };
};

export const useCustomerRequest = () => {
  const [customerOrderRequest, setCustomerOrderRequest] = useState('');
  const handleOrderRequest = (e) => setCustomerOrderRequest(e.target.value);

  return { customerOrderRequest, handleOrderRequest };
};

export const useConditionAgreement = () => {
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const handleCheckboxStatus = (e) => setIsCheckboxChecked(e.target.checked);

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
      type: 'cart/additionalRequest',
      payload: {
        customerRequest: customerOrderRequest,
      },
    });

    if (!isCheckboxChecked) return;
    navigate(LINK.CONFIRM, { state: isRadioChecked });
  };

  return { isActive, setIsActive, goToPrevPage, goToPaymentPage };
};
