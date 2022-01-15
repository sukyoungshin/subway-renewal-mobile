import { useRoutes } from "react-router-dom";
import { Main, Login, Signup, Addr, PostSearch, Menu, Bread, Cheese, Veggie, Sauce, OrderCart, OrderDetail, OrderMenu, OrderConfirm, Auth, NoMatch } from 'pages';
import AppLayout from 'components/AppLayout/Layout';
import RouterPath from 'constants/routerPath';
import OrderPageLayout from 'components/OrderPageLayout/OrderPageLayout';

const Elements = () => {
  let element = useRoutes([
    {
      path : RouterPath.ROOT,
      element : <AppLayout/>,
      children : [
        {
          index: true,
          element : <Main />,
        },
        {
          path : RouterPath.MAIN,
          element : <Main />,
        },
        {
          path : RouterPath.ADDR,
          element : <Addr />,
        },
        {
          path : RouterPath.MENU,
          element: <Menu />,
        },
        {
          path : RouterPath.BREAD,
          element: <Bread />,
        },
        {
          path : RouterPath.CHEESE,
          element: <Cheese />,
        },
        {
          path : RouterPath.VEGGIE,
          element: <Veggie />,
        },
        {
          path : RouterPath.SAUCE,
          element: <Sauce />,
        },
        {
          path : RouterPath.SIGNUP,
          element: <Signup />,
        },
        {
          path : RouterPath.SEARCH,
          element: <PostSearch />,
        },
        {
          path : RouterPath.OAUTH,
          element: <Auth />,
        },
        {
          path : RouterPath.NOMATCH,
          element : <NoMatch />,
        }
      ]
    },
    {
      path : RouterPath.ORDER,
      element: <OrderPageLayout />,
      children : [
        {
          index : true,
          element: <OrderMenu />,
        },
        {
          path : RouterPath.ORDER,
          element: <OrderMenu />,
        },
        {
          path : RouterPath.INFO,
          element: <OrderDetail />,
        },
        {
          path : RouterPath.CONFIRM,
          element: <OrderConfirm />,
        },
        {
          path : RouterPath.CART,
          element: <OrderCart />,
        },
      ]
    },
    {
      path : RouterPath.LOGIN,
      element: <Login />,
    },


  ]);
  return element;
};

export default Elements;