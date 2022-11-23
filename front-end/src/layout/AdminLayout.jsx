import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderAdmin from '../component/HeaderAdmin'
import "../css/main.css"

const AdminLayout = () => {
  return (
    <body className="app sidebar-mini rtl">
      <HeaderAdmin />
      <Outlet />
    </body>
  )
}

export default AdminLayout