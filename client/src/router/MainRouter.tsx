import React from 'react'
import UserHomePage from '../pages/user/UserHomePage'
import UserRouter from './UserRouter'
import WorkerRouter from './WorkerRouter'
import AdminRouter from './AdminRouter'
import WorkerHomePage from '../pages/worker/WorkerHomePage'
import AdminHomePage from '../pages/admin/AdminHomePage'
import {Routes,Route} from 'react-router-dom'

const MainRouter = () => {
  return (
    <div>
    <Routes>
        <Route path='/' element={<UserHomePage/>} /> 

        <Route path='/worker' element={<WorkerHomePage/>} />

        <Route path='/admin' element={<AdminHomePage/>} />

        <Route path='/user/*' element={<UserRouter/>} /> 

        <Route path='/worker/*' element={<WorkerRouter/>} />

        <Route path='/admin/*' element={<AdminRouter/>} />
   
    </Routes>
     
    </div>

  )
}

export default MainRouter
