import React, { useState, useEffect } from "react";
// REACT-ROUTE
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
// ROUTES ELEMENTS
import SplashScreen from './pages/SplashScreen';
import Layout from './pages/Layout';
import Main from "./pages/Main";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Addr from './pages/Addr';
import PostSearch from './pages/PostSearch';
import Menu from './pages/Menu';
import Bread from './pages/Bread';
import Cheese from './pages/Cheese';
import Veggie from './pages/Veggie';
import Sauce from './pages/Sauce';
import OrderPageLayout from './pages/OrderPageLayout';
import OrderCart from './pages/OrderCart';
import OrderInfo from './pages/OrderInfo';
import OrderMenu from './pages/OrderMenu';
import OrderConfirmLayout from './pages/OrderConfirmLayout';
import Auth from './pages/Auth';
import NoMatch from './pages/NoMatch';
import URL from './constants/router';
import { GlobalStyle } from './common/Styled';

const App = () => {
  // Splash Screen
  const [ isLoading, setIsLoading ] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
      { 
        isLoading
        ? <Route path={URL.ROOT} element={<SplashScreen />} />
        : (
          <Route path={URL.ROOT} element={<Layout />}>
            <Route index element={<Main />} />
            <Route path={URL.MAIN} element={<Main />} />
            <Route path={URL.ADDR} element={<Addr />} />
            <Route path={URL.SEARCH} element={<PostSearch />} />
            <Route path={URL.MENU} element={<Menu />} />
            <Route path={URL.BREAD} element={<Bread />} />
            <Route path={URL.CHEESE} element={<Cheese />} />
            <Route path={URL.VEGGIE} element={<Veggie />} />
            <Route path={URL.SAUCE} element={<Sauce />} />
            {/*
            <Route path="extra" element={<ExtraMenu />} />
            <Route path="combo" element={<ComboMenu />} />
          */}
            <Route path={URL.LOGIN} element={<Login />} />
            <Route path={URL.OAUTH} element={<Auth />} />
            <Route path={URL.SIGNIN} element={<Signin />} />
            <Route path={URL.SIGNUP} element={<Signup />} />

            <Route element={<OrderPageLayout /> }>
              <Route path={URL.ORDER} element={<OrderMenu />} />
              <Route path={URL.CART} element={<OrderCart />} />
              <Route path={URL.INFO} element={<OrderInfo />} />
              <Route path={URL.CONFIRM} element={<OrderConfirmLayout />} />
            </Route> 
            {/* <Route path="/track" element={<CartTrack />} /> */}
            <Route path={URL.NOMATCH} element={<NoMatch />} />
          </Route>          
          )
      }
      </Routes>
    </BrowserRouter>
  );
};

export default App;
