import React from "react";
import { Routes, Route } from "react-router-dom"
import AdminLayout from "./layout/AdminLayout";
import WebsiteLayout from "./layout/WebsiteLayout";
import Doashboard from "./pages/admin/Doashboard";
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
        <Route path="product" element={<ListProduct />} />
      </Route>
    </Routes>
  );
};

export default App;
