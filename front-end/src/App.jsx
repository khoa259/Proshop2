import React from "react";
import { Routes, Route } from "react-router-dom"
import AdminLayout from "./layout/AdminLayout";
import WebsiteLayout from "./layout/WebsiteLayout";
import AddBill from "./pages/admin/BillManage/AddBill";
import EditBill from "./pages/admin/BillManage/EditBill";
import ListBill from "./pages/admin/BillManage/ListBill";
import AddCategory from "./pages/admin/CategoryManage/AddCategory";
import EditCategory from "./pages/admin/CategoryManage/EditCategory";
import ListCategory from "./pages/admin/CategoryManage/ListCategory";
import Doashboard from "./pages/admin/Doashboard";
import AddProduct from "./pages/admin/ProductManage/AddProduct";
import EditProduct from "./pages/admin/ProductManage/EditProduct";
import ListProduct from "./pages/admin/ProductManage/ListProduct";
import Home from "./pages/client/Home";
import Shop from "./pages/client/Shop";
import Blog from "./pages/client/Blog";
import Cart from "./pages/client/Cart";
import CheckOut from "./pages/client/CheckOut";
// import Contact from "./pages/client/Contact";
// import ShopDetail from "./pages/client/ShopDetail";
// import Signin from "./pages/Signin";
// import Signup from "./pages/Signup";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<Home />}/>
          <Route path="shop" element={<Shop/>}  />
          <Route path="cart" element={<Cart/>}  />
          <Route path="blog" element={<Blog/>}  />
          <Route path="checkout" element={<CheckOut/>}  />
          {/* <Route path="products/detail" element={<ShopDetail/>}  />
          <Route path="contact" element={<Contact/>}  />
          <Route path="login" element={<Signin/>}  />
          <Route path="signup" element={<Signup/>}  /> */}
      </Route>
      <Route path="admin" element={<AdminLayout />}>
        <Route index element={<Doashboard />} />
        <Route path="bill">
          <Route index element={<ListBill />} />
          <Route path="addbill" element={<AddBill />} />
          <Route path="editbill" element={<EditBill />} />
        </Route>
        <Route path="category">
          <Route index element={<ListCategory />} />
          <Route path="addcategory" element={<AddCategory />} />
          <Route path="editcategory" element={<EditCategory />} />
        </Route>
        <Route path="product">
          <Route index element={<ListProduct />} />
          <Route path="add" element={<AddProduct />} />
          <Route path=":id/edit" element={<EditProduct/>} />
        </Route>

      </Route>
    </Routes>
  );
};

export default App;
