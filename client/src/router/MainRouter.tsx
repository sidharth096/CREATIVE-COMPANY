import React from 'react'
import UserHomePage from '../pages/user/UserHomePage'
import UserRouter from './UserRouter'
import {Routes,Route} from 'react-router-dom'

const MainRouter = () => {
  return (
    <div>
    <Routes>
        <Route path="/" element={<UserHomePage/>} /> 

        <Route path="/user/*" element={<UserRouter/>} /> 
        
    </Routes>
     
    </div>

  )
}

export default MainRouter
