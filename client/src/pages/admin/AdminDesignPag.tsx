import React from 'react'
import { useParams } from 'react-router-dom'
import Design from '../../components/Design/Design';
import AdminHeader from '../../components/admin/AdminHeader';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RootState } from '../../redux/reducer/reducer';
import { useDispatch } from 'react-redux';
import { modalOpenReducer } from '../../redux/slice/adminSlice/modalSlice';
import DesignForm from '../../components/Design/DesignForm';


const AdminDesignPage = () => {

  const dispatch=useDispatch()
  const openModal = () => {

    dispatch(modalOpenReducer())

  };
  const categoryName = useSelector((state:RootState)=>state.designCategoryName.designcategoryName)

    const {id} = useParams();
    
  return (
   <>
    <AdminHeader/>

     <div className='px-6  mt-10 xs:mt-16  xs:flex justify-between h-10  sm:px-10 '>
       <h1 className='text-black text-2xl font-semibold ml-16'>{categoryName}..</h1>
       <button onClick={openModal} className='bg-black text-white xs:p-2 xxs:mt-2 xs:mt-0 rounded-lg xxs:text-sm xs:text-base xxs:p-1'>Add Design</button>
     </div>

    <Design id={id}/>
    <DesignForm/>
   </>
  )
}

export default AdminDesignPage
