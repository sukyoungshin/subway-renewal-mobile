import { AMOUNT_ACTION_TYPE } from '@/features/amount/model/actionTypes';
import { itemAmountSelector } from '@/features/amount/model/selector';
import { CART_ACTION_TYPE } from '@/features/cart/model/actionTypes';
import { itemCountSelector, orderSelector } from '@/features/cart/model/selector';
import LINK from '@/shared/constants/link';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

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
      type: AMOUNT_ACTION_TYPE.INCREMENT,
      payload: itemAmount,
    });
  };
  const handleDecrement = () => {
    dispatch({
      type: AMOUNT_ACTION_TYPE.DECREMENT,
      payload: itemAmount,
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
      type: CART_ACTION_TYPE.ITEM_COUNT,
      payload: itemCount + 1,
    });
  };
  const goToOrderPage = () => navigate(LINK.INFO);

  return { goToCartPage, goToOrderPage };
};
