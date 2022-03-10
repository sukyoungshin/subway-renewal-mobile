import { useDispatch, useSelector } from 'react-redux';
import { itemAmountSelector, itemCountSelector, orderSelector } from 'reducers';
import { useNavigate } from 'react-router-dom';
import LINK from 'constants/link';

export const useReduxSelector = () => {
  const order = useSelector(orderSelector); // 주문내역 전체
  const itemAmount = useSelector(itemAmountSelector); // 수량

  return { order, itemAmount };
};

export const useCountAmountOfItems = () => {
  const dispatch = useDispatch(); 
  const itemAmount = useSelector(itemAmountSelector); // 수량

  const handleIncrement = () => {
    dispatch({
      type : 'cart/increment',
      payload : itemAmount,
    });
  };
  const handleDecrement = () => {
    dispatch({
      type : 'cart/decrement',
      payload : itemAmount,
    });
  };

  return { handleIncrement, handleDecrement };
};

export const useCTAButtons = () => {
  const dispatch = useDispatch(); 
  const itemCount = useSelector(itemCountSelector); // 장바구니 주문갯수
  const navigate = useNavigate(); 
  
  const goToCartPage = () => {
    dispatch({
      type : 'cart/itemCount',
      payload : itemCount + 1,
    });
  };
  const goToOrderPage = () => navigate(LINK.INFO);

  return { goToCartPage, goToOrderPage };
};
