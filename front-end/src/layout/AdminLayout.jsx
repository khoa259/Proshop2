import React from "react";
import { Outlet } from 'react-router-dom'
import HeaderAdmin from "../component/HeaderAdmin";
const AdminLayout = () => {
    return (
        <div>
            <HeaderAdmin />
            <Outlet />
        </div>
    );
};
export default AdminLayout;
