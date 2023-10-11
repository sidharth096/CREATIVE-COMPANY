import React from 'react'
import AdminHeader from '../../components/admin/AdminHeader'

import DesignCategoryForm from '../../components/Design/DesignCategoryForm'
import { useDispatch,useSelector } from 'react-redux'
import { modalOpenReducer } from '../../redux/slice/adminSlice/modalSlice'
import AdminDesignCategory from '../../components/Design/AdminDesignCategory'
import { RootState } from '../../redux/reducer/reducer'


const AdminDesignCategoryPage = () => {

  const dispatch=useDispatch()
 

  const openModal = () => {

    dispatch(modalOpenReducer())

  };


  return (
   <>
     <AdminHeader/>
     <div className='px-6  mt-10 xs:mt-16  xs:flex justify-between h-10  sm:px-10 '>
      <h1 className='text-black text-2xl font-semibold'>Design Categories ..</h1>
      <button onClick={openModal} className='bg-black text-white xs:p-2 xxs:mt-2 xs:mt-0 rounded-lg xxs:text-sm xs:text-base xxs:p-1'>Add Designcategory</button>
     </div>

     <AdminDesignCategory/>
     <DesignCategoryForm/>
       
   </>
  )
}

export default AdminDesignCategoryPage
