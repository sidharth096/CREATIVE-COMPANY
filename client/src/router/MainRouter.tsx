import React from 'react'
import Header from '../components/user/Header'
import UserRouter from './UserRouter'
import {Routes,Route} from 'react-router-dom'

const MainRouter = () => {
  return (
    <div>
    <Routes>
        <Route path="/" element={<Header/>} /> 

        <Route path="/user/*" element={<UserRouter/>} /> 
        
    </Routes>
     
    </div>

  )
}

export default MainRouter
