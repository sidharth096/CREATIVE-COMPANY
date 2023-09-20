import React from 'react'
import {Routes,Route} from 'react-router-dom'
import LoginPage from '../pages/user/LoginPage'

const UserRouter = () => {
  return (
    <>
      <Routes>
         <Route path="/userRegister" element={<LoginPage/>} />  
         <Route path="/userLogin" element={<LoginPage/>} />  
      </Routes>
    </>
  )
}

export default UserRouter
