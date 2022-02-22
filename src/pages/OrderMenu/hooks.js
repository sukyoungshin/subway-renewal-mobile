import { useDispatch, useSelector } from 'react-redux';
import { itemAmountSelector, itemCountSelector } from 'reducers';
import { useNavigate } from 'react-router-dom';
import LINK from 'constants/link';

export const useCountAmountOfItems = () => {
  /* 리덕스 */
  const dispatch = useDispatch(); 
  const itemAmount = useSelector(itemAmountSelector); // 수량

  /* 수량조절 버튼 */
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
  /* 리덕스 및 라우터 */
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
