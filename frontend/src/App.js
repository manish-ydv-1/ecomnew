import "./App.css";
import { BrowserRouter, Routes, useLocation } from "react-router-dom";
import { Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Category from "./pages/Category";

import { useEffect, useLayoutEffect, useState } from "react";
import Login from "./pages/Login";
import Beauty from "./Category pages/Beauty";
import ProductDetails from "./Category pages/ProductDetail";
import Fragrances from "./Category pages/Fragrances";
import Cart from "./pages/Cart";





function App() {

  const Wrapper = ({children}) =>{
    const location = useLocation()
    useLayoutEffect(()=>{
      document.documentElement.scrollTo(0,0);
    }, [location.pathname])
  return children
  }



  return (
    <>
      <BrowserRouter>

      <Wrapper>
      
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="product" element={<Product />} />
            <Route path="category" element={<Category />} />
            <Route path="login" element={<Login />} />
            <Route path="cart" element={<Cart />} />
            <Route path="/product-details/:productName" element={<ProductDetails/>} />
            <Route path="/category/beauty" element={<Beauty/>} />
            <Route path="/category/fragnence" element={<Fragrances/>} />
        

          </Route>
        </Routes>
        </Wrapper>
      </BrowserRouter>
    </>
  );
}

export default App;
