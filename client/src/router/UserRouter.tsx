import React from 'react'
import {Routes,Route} from 'react-router-dom'
import UserLoginPage from '../pages/user/UserLoginPage'
import UserSignupPage from '../pages/user/UserSignupPage'

const UserRouter = () => {
  return (
    <>
      <Routes>
         <Route path="/userRegister" element={<UserSignupPage/>} />  
         <Route path="/userLogin" element={<UserLoginPage/>} />  
      </Routes>
    </>
  )
}

export default UserRouter
