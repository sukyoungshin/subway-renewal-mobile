import { useRoutes } from "react-router-dom";
import { Main, Login, Signup, Addr, PostSearch, Menu, Bread, Cheese, Veggie, Sauce, OrderCart, OrderDetail, OrderMenu, OrderConfirm, Auth, NoMatch } from 'pages';
import AppLayout from 'components/AppLayout/Layout';
import RouterPath from 'constants/routerPath';
import OrderPageLayout from 'components/OrderPageLayout/OrderPageLayout';
import goToMainIfAddrIsNotExistHOC from 'hoc/goToMainIfAddrIsNotExist.js';

const render = (C) => <C/>;
const elementLists = [
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
        element: render(goToMainIfAddrIsNotExistHOC(Menu)),
      },
      {
        path : RouterPath.BREAD,
        element: render(goToMainIfAddrIsNotExistHOC(Bread)),
      },
      {
        path : RouterPath.CHEESE,
        element: render(goToMainIfAddrIsNotExistHOC(Cheese)),
      },
      {
        path : RouterPath.VEGGIE,
        element: render(goToMainIfAddrIsNotExistHOC(Veggie)),
      },
      {
        path : RouterPath.SAUCE,
        element: render(goToMainIfAddrIsNotExistHOC(Sauce)),
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
        element: render(goToMainIfAddrIsNotExistHOC(OrderMenu)),
      },
      {
        path : RouterPath.ORDER,
        element: render(goToMainIfAddrIsNotExistHOC(OrderMenu)),
      },
      {
        path : RouterPath.INFO,
        element: render(goToMainIfAddrIsNotExistHOC(OrderDetail)),
      },
      {
        path : RouterPath.CONFIRM,
        element: render(goToMainIfAddrIsNotExistHOC(OrderConfirm)),
      },
      {
        path : RouterPath.CART,
        element: render(goToMainIfAddrIsNotExistHOC(OrderCart)),
      },
    ]
  },
  {
    path : RouterPath.LOGIN,
    element: <Login />,
  },
];

const Elements = () => {
  const element = useRoutes(elementLists);
  return element;
};

export default Elements;