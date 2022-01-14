import { useRoutes } from "react-router-dom";
import { Layout, Main, Login, Signin, Signup, Addr, PostSearch, Menu, Bread, Cheese, Veggie, Sauce, OrderPageLayout, OrderCart, OrderInfo, OrderMenu, OrderConfirmLayout, Auth, NoMatch } from 'pages';
import RouterPath from 'constants/routerPath';

const Elements = () => {
  let element = useRoutes([
    {
      path : RouterPath.ROOT,
      element : <Layout/>,
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
          path : RouterPath.SEARCH,
          element: <PostSearch />,
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
          path : RouterPath.LOGIN,
          element: <Login />,
        },
        {
          path : RouterPath.OAUTH,
          element: <Auth />,
        },
        {
          path : RouterPath.SIGNIN,
          element: <Signin />,
        },
        {
          path : RouterPath.SIGNUP,
          element: <Signup />,
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
          element: <OrderInfo />,
        },
        {
          path : RouterPath.CONFIRM,
          element: <OrderConfirmLayout />,
        },
        {
          path : RouterPath.CART,
          element: <OrderCart />,
        },
      ]
    }
  ]);
  return element;
};

export default Elements;