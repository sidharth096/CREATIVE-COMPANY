import React, { useEffect,useState } from 'react'
import { getDesignCategories } from '../../features/axios/api/design';
import { error } from 'console';
import { array } from 'yup';

interface initialValues{
  map(arg0: (item: any) => import("react/jsx-runtime").JSX.Element): React.ReactNode;
  categoryName:string
  imageUrl:string
  _id:string
}

const DesignCategory = () => {
 
  const [state, setstate] = useState<initialValues>();

  useEffect(()=>{
     getDesignCategories().then((response)=>{
       console.log(response.data);
       setstate(response.data)
       

     }).catch((error:any)=>{
      console.log("Design category getting error",error);
      
     })
  }) 
  
  return (
   <>
<div className='mt-16'>
  <div className='overflow-x-scroll overflow-y-hidden' style={{ width: '100vw' }}>
    <div className='flex p-4' style={{ width: '200%' }}>
      {state &&
        state.map((item) => (
          <div className='ml-4 shadow-lg w-36 md:w-32 sm:w-28  xxl:w-24 ' key={item._id}>
            <div className='h-32 xl:h-24'>
              <img
                className='cursor-pointer w-full h-full object-cover'
                src={item.imageUrl}
                alt='Design Category'
              />
            </div>
            <div className='flex justify-center bg-gray-300 mt-1 overflow-hidden'>
              <h3 className='font-bold xs:text-sm'>{item.categoryName}</h3>
            </div>
          </div>
        ))}
    </div>
  </div>
</div>



   </>
  )
}

export default DesignCategory
