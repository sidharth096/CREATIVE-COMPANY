import React from 'react'
import { Routes,Route } from 'react-router-dom'
import AdminHomePage from '../pages/admin/AdminHomePage'

const AdminRouter = () => {
  return (
    <>
      <Routes>
        
        <Route path="/home" element={<AdminHomePage/> } />
      </Routes>
    </>
  )
}

export default AdminRouter
