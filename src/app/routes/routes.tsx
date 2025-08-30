import RouterPath from '@/shared/constants/routerPath';
import { AppLayout } from '@/shared/layout';
import { ComponentType, ReactNode, Suspense, lazy } from 'react';
import { useRoutes } from 'react-router-dom';

// 첫 화면은 그대로 로딩
import { Login, Main } from '@/pages';

export function withSuspense<T extends object>(
  Component: React.LazyExoticComponent<ComponentType<T>>,
  fallback: ReactNode = <div>Loading...</div>
) {
  return (props: T) => (
    <Suspense fallback={fallback}>
      <Component {...props} />
    </Suspense>
  );
}

// React.lazy 로 페이지 단위 분할
const Addr = withSuspense(lazy(() => import('@/pages/Addr/Addr')));
const Auth = withSuspense(lazy(() => import('@/pages/Auth/Auth')));
const Bread = withSuspense(lazy(() => import('@/pages/Bread/Bread')));
const Cheese = withSuspense(lazy(() => import('@/pages/Cheese/Cheese')));
const Menu = withSuspense(lazy(() => import('@/pages/Menu/Menu')));
const NoMatch = withSuspense(lazy(() => import('@/pages/NoMatch/NoMatch')));
const OrderCart = withSuspense(lazy(() => import('@/pages/OrderCart/ui/OrderCart')));
const OrderConfirm = withSuspense(lazy(() => import('@/pages/OrderConfirm/OrderConfirm')));
const OrderInfo = withSuspense(lazy(() => import('@/pages/OrderInfo/OrderInfo')));
const OrderMenu = withSuspense(lazy(() => import('@/pages/OrderMenu/OrderMenu')));
const Sauce = withSuspense(lazy(() => import('@/pages/Sauce/Sauce')));
const Signup = withSuspense(lazy(() => import('@/pages/SignUp/Signup')));
const Vegetable = withSuspense(lazy(() => import('@/pages/Vegetable/Vegetable')));

const Routes = () => {
  const routes = useRoutes([
    {
      path: RouterPath.ROOT,
      element: <AppLayout />,
      children: [
        { index: true, element: <Main /> },
        { path: RouterPath.ROOT, element: <Main /> },
        { path: RouterPath.MAIN, element: <Main /> },
        { path: RouterPath.ADDR, element: <Addr /> },
        { path: RouterPath.MENU, element: <Menu /> },
        { path: RouterPath.BREAD, element: <Bread /> },
        { path: RouterPath.CHEESE, element: <Cheese /> },
        { path: RouterPath.VEGETABLE, element: <Vegetable /> },
        { path: RouterPath.SAUCE, element: <Sauce /> },
        { path: RouterPath.ORDER, element: <OrderMenu /> },
        { path: `${RouterPath.ORDER}/${RouterPath.INFO}`, element: <OrderInfo /> },
        { path: `${RouterPath.ORDER}/${RouterPath.CONFIRM}`, element: <OrderConfirm /> },
        { path: `${RouterPath.ORDER}/${RouterPath.CART}`, element: <OrderCart /> },
        { path: RouterPath.SIGNUP, element: <Signup /> },
        { path: RouterPath.OAUTH, element: <Auth /> },
        { path: RouterPath.NOMATCH, element: <NoMatch /> },
      ],
    },
    {
      path: RouterPath.LOGIN,
      element: <Login />,
    },
  ]);

  return routes;
};

export default Routes;
