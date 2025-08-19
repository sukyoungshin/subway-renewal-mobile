import LINK from '@/constants/link';
import { categorySelector, itemCountSelector } from '@/reducers';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const useReduxSelector = () => {
  const itemCount = useSelector(itemCountSelector); // 장바구니 갯수
  const AddedCartItem = useSelector(categorySelector); // 사용자가 주문한 아이템

  return { itemCount, AddedCartItem };
};

export const usePageMove = () => {
  const navigate = useNavigate();
  const handleOrderProcess = () => navigate(LINK.ROOT);

  return handleOrderProcess;
};
