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
    {workers?.map((worker) => (
      <div className='flex justify-center mt-10'>
        <div className='flex flex-col md:flex-row w-full md:w-2/3 mx-2 bg-gray-100 rounded-lg shadow-md'>
          <div className='md:w-2/5 relative'>
            <img className='object-cover w-full h-48 md:h-64 rounded-lg' src="https://res.cloudinary.com/di7nyjjfl/image/upload/v1695651651/creative%20company/banners/znskrlxqhvwbni58tr0g.jpg" alt={worker.name} />
          </div>
          <div className='flex flex-col md:flex-row justify-between p-4 w-full'>
            <div className='text-center md:text-left'>
              <h1 className='text-2xl font-bold mb-2'>{worker.name}</h1>
              <p className='text-gray-600'><span className='font-bold'>Job title:</span> {worker.job_title}</p>
              <p className='text-gray-600'><span className='font-bold'>Mob:</span> {worker.phone}</p>
              <p className='text-gray-600'><span className='font-bold'>Location:</span> </p>
            </div>
            <div className='flex justify-center md:justify-end '>
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
