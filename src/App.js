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
import NoMatch from './pages/NoMatch';
// STYLE
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
        ? <Route path="/" element={<SplashScreen />} />
        : (
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="main" element={<Main />} />
            <Route path="login" element={<Login />} />
            <Route path="addr" element={<Addr />} />
            <Route path="search" element={<PostSearch />} />
            <Route path="menu" element={<Menu />} />
            <Route path="bread" element={<Bread />} />
            <Route path="cheese" element={<Cheese />} />
            <Route path="veggie" element={<Veggie />} />
            <Route path="sauce" element={<Sauce />} />
            {/*
            <Route path="extra" element={<ExtraMenu />} />
            <Route path="combo" element={<ComboMenu />} />
            */}

            <Route element={<OrderPageLayout /> }>
              <Route path="/order" element={<OrderMenu />} />
              <Route path="/cart" element={<OrderCart />} />
              <Route path="/info" element={<OrderInfo />} />
              <Route path="/confirm" element={<OrderConfirmLayout />} />
            </Route> 

            <Route path="signin" element={<Signin />} />
            <Route path="signup" element={<Signup />} />
            <Route path="*" element={<NoMatch />} />
          </Route>          
          )
      }
      </Routes>
    </BrowserRouter>
  );
};

export default App;
