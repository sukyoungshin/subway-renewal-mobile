import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { categorySelector, itemCountSelector } from "reducers";
import LINK from "constants/link";

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
