import React from 'react'
import { useParams } from 'react-router-dom'
import Design from '../../components/Design/Design';
import AdminHeader from '../../components/admin/AdminHeader';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RootState } from '../../redux/reducer/reducer';


const AdminDesignPage = () => {

  const categoryName = useSelector((state:RootState)=>state.designCategoryName.designcategoryName)

    const {id} = useParams();
    
  return (
   <>
    <AdminHeader/>
     <div className='pl-10  mt-10 xs:mt-16   h-10  sm:px-10 '>
       <h1 className='text-black text-2xl font-semibold ml-16 '>{categoryName}</h1>
     </div>
    <Design id={id}/>
   </>
  )
}

export default AdminDesignPage
