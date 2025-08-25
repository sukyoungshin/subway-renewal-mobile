import { useReduxSelector, useRouterLocation, useTodayTime } from './hooks';
import OrderDeliver from './ui/OrderDeliver/OrderDeliver';
import OrderPickUp from './ui/OrderPickUp/OrderPickUp';

const DELIVER = 'deliver';
const OrderConfirm = () => {
  const orderDetail = useReduxSelector();
  const locationState = useRouterLocation();
  const timeString = useTodayTime();

  // 라우터 상태값에 따라 맞는 component 렌더링
  if (locationState === DELIVER) {
    return <OrderDeliver orderDetail={orderDetail} timeString={timeString} />;
  } else {
    return <OrderPickUp orderDetail={orderDetail} timeString={timeString} />;
  }
};

export default OrderConfirm;
