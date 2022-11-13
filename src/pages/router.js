import { useRoutes } from "react-router-dom";
import {
  Main,
  Login,
  Signup,
  Addr,
  PostSearch,
  Menu,
  Bread,
  Cheese,
  Veggie,
  Sauce,
  OrderCart,
  OrderDetail,
  OrderMenu,
  OrderConfirm,
  Auth,
  NoMatch
} from "pages";
import { AppLayout, OrderPageLayout } from "components/Layout/index";
import RouterPath from "constants/routerPath";
import withGoToMainIfAddrIsNotExistHOC from "hoc/withGoToMainIfAddrIsNotExist";

const render = (C) => <C />;
const elementLists = [
  {
    path: RouterPath.ROOT,
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Main />
      },
      {
        path: RouterPath.MAIN,
        element: <Main />
      },
      {
        path: RouterPath.ADDR,
        element: <Addr />
      },
      {
        path: RouterPath.MENU,
        element: render(withGoToMainIfAddrIsNotExistHOC(Menu))
      },
      {
        path: RouterPath.BREAD,
        element: render(withGoToMainIfAddrIsNotExistHOC(Bread))
      },
      {
        path: RouterPath.CHEESE,
        element: render(withGoToMainIfAddrIsNotExistHOC(Cheese))
      },
      {
        path: RouterPath.VEGGIE,
        element: render(withGoToMainIfAddrIsNotExistHOC(Veggie))
      },
      {
        path: RouterPath.SAUCE,
        element: render(withGoToMainIfAddrIsNotExistHOC(Sauce))
      },
      {
        path: RouterPath.SIGNUP,
        element: <Signup />
      },
      {
        path: RouterPath.SEARCH,
        element: <PostSearch />
      },
      {
        path: RouterPath.OAUTH,
        element: <Auth />
      },
      {
        path: RouterPath.NOMATCH,
        element: <NoMatch />
      }
    ]
  },
  {
    path: RouterPath.ORDER,
    element: <OrderPageLayout />,
    children: [
      {
        index: true,
        element: render(withGoToMainIfAddrIsNotExistHOC(OrderMenu))
      },
      {
        path: RouterPath.ORDER,
        element: render(withGoToMainIfAddrIsNotExistHOC(OrderMenu))
      },
      {
        path: RouterPath.INFO,
        element: render(withGoToMainIfAddrIsNotExistHOC(OrderDetail))
      },
      {
        path: RouterPath.CONFIRM,
        element: render(withGoToMainIfAddrIsNotExistHOC(OrderConfirm))
      },
      {
        path: RouterPath.CART,
        element: render(withGoToMainIfAddrIsNotExistHOC(OrderCart))
      }
    ]
  },
  {
    path: RouterPath.LOGIN,
    element: <Login />
  }
];

const Elements = () => {
  const element = useRoutes(elementLists);
  return element;
};

export default Elements;
