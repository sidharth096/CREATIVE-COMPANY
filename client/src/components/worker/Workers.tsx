import React from 'react'
import { useEffect } from 'react'
import { WorkersDataForUsers } from '../../features/axios/api/admin'
import { useDispatch, useSelector } from 'react-redux'
import { setWorkers } from '../../redux/slice/workerSlice/workersDataSlice'
import { RootState } from '../../redux/reducer/reducer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';




const Workers = () => {
    
    const dispatch = useDispatch()
    const workers = useSelector((state:RootState)=>state.workersData.workers)
    const token:string|null =localStorage.getItem('token')?? null

    useEffect(()=>{
        console.log("hai");
        
        WorkersDataForUsers(token).then((response)=>{

            
            dispatch(setWorkers(response.data))
        })
    },[])

    console.log(workers);
    

    
  return (
   <>
<div className='mt-10'>
    {workers?.map((worker)=>(
<div className='flex justify-center mt-10'>
  <div className='flex justify-between w-3/6 h-48 mx-2 bg-gray-300'>
    <div className='text-white p-4 text-center w-2/3'>
      <div>
        <img src="https://res.cloudinary.com/di7nyjjfl/image/upload/v1695651651/creative%20company/banners/znskrlxqhvwbni58tr0g.jpg" alt="" />
      </div>
    </div>
    <div className='flex justify-between text-black p-4 text-center w-full'>
      <div className='text-start'>
       <h1 className='text-xl font-bold  '>{worker.name}</h1>
       <h1 className='mt-4 '><span className='font-bold'>Job title:</span>{worker.job_title}</h1>
       <h1><span className='font-bold'>Mob:</span> {worker.phone}</h1>
       <h1><span className='font-bold'>Location:</span> </h1>
      </div>
      <div>
        <FontAwesomeIcon icon={faEnvelope} />
      </div> 
    </div>
  </div>
</div>
 ))}
</div>

   </>
  )
}

export default Workers
