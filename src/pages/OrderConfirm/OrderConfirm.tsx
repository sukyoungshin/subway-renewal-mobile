import { useReduxSelector, useRouterLocation } from './hooks';
import OrderDeliver from './ui/OrderDeliver';
import OrderPickUp from './ui/OrderPickUp';

const DELIVER = 'deliver';
const OrderConfirm = () => {
  const orderDetail = useReduxSelector();
  const locationState = useRouterLocation();

  // 라우터 상태값에 따라 맞는 component 렌더링
  if (locationState === DELIVER) {
    return <OrderDeliver orderDetail={orderDetail} />;
  } else {
    return <OrderPickUp orderDetail={orderDetail} />;
  }
};

export default OrderConfirm;
