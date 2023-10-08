import React from 'react'
import { Routes,Route } from 'react-router-dom'
import AdminHomePage from '../pages/admin/AdminHomePage'
import AdminUsersPage from '../pages/admin/AdminUsersPage'
import AdminWorkersPage from '../pages/admin/AdminWorkersPage'
import AdminDesignPage from '../pages/admin/AdminDesignPage'

const AdminRouter = () => {
  return (
    <>
      <Routes>
        
        <Route path="/home" element={<AdminHomePage/> } />
        <Route path='/users' element={<AdminUsersPage/>} />
        <Route path='/workers' element={<AdminWorkersPage/>} />
        <Route path='/designs' element={<AdminDesignPage/>} />

      </Routes>
    </>
  )
}

export default AdminRouter
