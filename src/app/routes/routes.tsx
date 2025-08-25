import {
  Addr,
  Auth,
  Bread,
  Cheese,
  Main,
  Menu,
  NoMatch,
  OrderCart,
  OrderConfirm,
  OrderInfo,
  OrderMenu,
  Sauce,
  Signup,
  Veggie,
} from '@/pages';
import RouterPath from '@/shared/constants/routerPath';
import { AppLayout } from '@/shared/layout';
import { useRoutes } from 'react-router-dom';

const Routes = () => {
  const routes = useRoutes([
    {
      path: RouterPath.ROOT,
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <Main />,
        },
        {
          path: RouterPath.MAIN,
          element: <Main />,
        },
        {
          path: RouterPath.ADDR,
          element: <Addr />,
        },
        {
          path: RouterPath.MENU,
          element: <Menu />,
        },
        {
          path: RouterPath.BREAD,
          element: <Bread />,
        },
        {
          path: RouterPath.CHEESE,
          element: <Cheese />,
        },
        {
          path: RouterPath.VEGGIE,
          element: <Veggie />,
        },
        {
          path: RouterPath.SAUCE,
          element: <Sauce />,
        },
        {
          path: RouterPath.ORDER,
          element: <OrderMenu />,
        },
        {
          path: `${RouterPath.ORDER}/${RouterPath.INFO}`,
          element: <OrderInfo />,
        },
        {
          path: `${RouterPath.ORDER}/${RouterPath.CONFIRM}`,
          element: <OrderConfirm />,
        },
        {
          path: `${RouterPath.ORDER}/${RouterPath.CART}`,
          element: <OrderCart />,
        },
        {
          path: RouterPath.SIGNUP,
          element: <Signup />,
        },
        {
          path: RouterPath.OAUTH,
          element: <Auth />,
        },
        {
          path: RouterPath.NOMATCH,
          element: <NoMatch />,
        },
      ],
    },
  ]);

  return routes;
};

export default Routes;
