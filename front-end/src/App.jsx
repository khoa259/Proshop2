import React from "react";
import { Routes, Route } from "react-router-dom"
import AdminLayout from "./layout/AdminLayout";
import WebsiteLayout from "./layout/WebsiteLayout";
import Doashboard from "./pages/admin/Doashboard";
import AddProduct from "./pages/admin/ProductManage/AddProduct";
import ListProduct from "./pages/admin/ProductManage/ListProduct";
import HomPage from "./pages/HomPage";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<WebsiteLayout />}>
        <Route index element={<HomPage />} />

      </Route>
      <Route path="admin" element={<AdminLayout />}>
        <Route index element={<Doashboard />} />
        <Route path="product">
          <Route index element={<ListProduct />} />
          <Route path="add" element={<AddProduct />} />
          <Route path=":id/edit" element={<></>} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
