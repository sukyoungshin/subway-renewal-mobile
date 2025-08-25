import { categorySelector, itemCountSelector } from '@/features/cart/model/selector';
import { useSelector } from 'react-redux';

const useReduxSelector = () => {
  const itemCount = useSelector(itemCountSelector); // 장바구니 갯수
  const AddedCartItem = useSelector(categorySelector); // 사용자가 주문한 아이템

  return { itemCount, AddedCartItem };
};

export default useReduxSelector;
