import { useState } from 'react';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Shop from './pages/Shop';
import ClientLayout from './components/Client/WebsiteClient';
import Blog from "./pages/Blog";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import ShopDetail from "./pages/ShopDetail";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ClientLayout/>}>
            <Route index element={<Home />}/>
            <Route path="shop" element={<Shop/>}  />
            <Route path="products/detail" element={<ShopDetail/>}  />
            <Route path="cart" element={<Cart/>}  />
            <Route path="checkout" element={<CheckOut/>}  />
            <Route path="blog" element={<Blog/>}  />
            <Route path="contact" element={<Contact/>}  />
            <Route path="login" element={<Signin/>}  />
            <Route path="signup" element={<Signup/>}  />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
