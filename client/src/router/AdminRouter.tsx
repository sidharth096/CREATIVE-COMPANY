import React from 'react'
import { Routes,Route } from 'react-router-dom'
import AdminHomePage from '../pages/admin/AdminHomePage'
import AdminUsersPage from '../pages/admin/AdminUsersPage'
import AdminWorkersPage from '../pages/admin/AdminWorkersPage'
import AdminDesignCategoryPage from '../pages/admin/AdminDesignCategoryPage'
import AdminDesignPage from '../pages/admin/AdminDesignPag'


const AdminRouter = () => {
  return (
    <>
      <Routes>
        
        <Route path="/home" element={<AdminHomePage/> } />
        <Route path='/users' element={<AdminUsersPage/>} />
        <Route path='/workers' element={<AdminWorkersPage/>} />
        <Route path='/designCategories' element={<AdminDesignCategoryPage/>} />
        <Route path='/designs' element={<AdminDesignPage/>} />
        <Route path='/designs/:id' element={<AdminDesignPage/>} />
        

      </Routes>
    </>
  )
}

export default AdminRouter
