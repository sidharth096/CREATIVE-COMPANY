import React from 'react'
import { Routes,Route } from 'react-router-dom'
import AdminLoginPage from '../pages/admin/AdminLoginPage'

const AdminRouter = () => {
  return (
    <>
      <Routes>
        
        <Route path="/adminLogin" element={<AdminLoginPage />} />
      </Routes>
    </>
  )
}

export default AdminRouter
