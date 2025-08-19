import { orderSelector } from '@/reducers';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

export const useReduxSelector = () => {
  const order = useSelector(orderSelector);
  const orderDetail = {
    orderMenu: order.category.nameKor,
    customerAddr: order.generalInfo.customerInfo,
    subwayName: order.generalInfo.subwayInfo.name,
    subwayAddr: order.generalInfo.subwayInfo.address,
    subwayPhone: order.generalInfo.subwayInfo.phone,
    customerRequest: order.request.customerRequest,
  };

  return orderDetail;
};

export const useRouterLocation = () => {
  const location = useLocation();
  const locationState = location.state;

  return locationState;
};

export const useTodayTime = () => {
  const today = new Date();
  const timeString = new Intl.DateTimeFormat('kr').format(today);

  return timeString;
};
