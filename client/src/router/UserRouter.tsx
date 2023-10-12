import React from 'react'
import {Routes,Route} from 'react-router-dom'
import UserLoginPage from '../pages/user/UserLoginPage'
import UserSignupPage from '../pages/user/UserSignupPage'
import DesignPage from '../pages/user/DesignPage'
import WorkerPage from '../pages/user/WorkerPage'
import AboutPage from '../pages/user/AboutPage'

const UserRouter = () => {
  return (
    <>
      <Routes>
         <Route path="/userRegister" element={<UserSignupPage/>} />  
         <Route path="/userLogin" element={<UserLoginPage/>} />  
         <Route path='/design' element={<DesignPage/>}/>
         <Route path='/worker' element={<WorkerPage/>}/>
         <Route path='/about' element={<AboutPage/>}/>
      </Routes>
    </>
  )
}

export default UserRouter
