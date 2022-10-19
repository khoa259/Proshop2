import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AdminLayout from "./layout/AdminLayout";
const App = () => {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path="admin" element={<AdminLayout/>}>
      </Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
};
export default App;
