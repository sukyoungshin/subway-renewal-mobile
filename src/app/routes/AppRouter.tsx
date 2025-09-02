import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';

interface AppRouterProps {
  children: ReactNode;
  url?: string;
}

const isServer = typeof window === 'undefined';

const AppRouter = ({ children, url = '/' }: AppRouterProps) => {
  if (isServer) {
    return <StaticRouter location={url}>{children}</StaticRouter>;
  }
  return <BrowserRouter>{children}</BrowserRouter>;
};

export default AppRouter;
