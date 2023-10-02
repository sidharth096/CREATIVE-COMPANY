import React, { useEffect } from 'react'
import WorkersTable from '../Table/WorkersTable';
import { WorkersData } from '../../features/axios/api/admin';
import { useDispatch, useSelector } from 'react-redux';
import { setWorkers } from '../../redux/slice/workerSlice/workersDataSlice';
import { RootState } from '../../redux/reducer/reducer';
import { blockUnBlockWorker } from '../../features/axios/api/admin';

const AdminWorkers = () => {
  
  const dispatch =useDispatch()
  const workers =useSelector((state:RootState)=>state.workersData.workers)

  const admintoken:string|null =localStorage.getItem('admintoken')?? null

useEffect(()=>{

  console.log(admintoken);
  

  WorkersData(admintoken).then((response)=> {

    dispatch(setWorkers(response.data))   

  })
},[dispatch])


  const columns= [
    {
      Header: ' Name',
      accessor: 'name', 
    },
    {
      Header: ' Email',
      accessor: 'email',
    },
    {
      Header: 'Mob',
      accessor: 'phone',
    },
    {
      Header: 'Job Title',
      accessor:"job_title"
      
    },
    {
      Header: 'Action',
      accessor: '_id',
      Cell: ({ row }: { row: { original: { _id: string,block:boolean } } }) => (
        <button
        className={`rounded-md text-white text-sm px-2 ${row.original.block ? 'bg-red-500' : 'bg-green-500'}`}
          onClick={() => handleAction(row.original._id)}
         >
          {row.original.block? "Unblock":"Block"}

        </button>
      ),
    },

  ];

  const handleAction = (id:string) => {
    blockUnBlockWorker(id).then((response)=>{
      console.log(response?.data.data);
      dispatch(setWorkers(response?.data.data))  

    }).catch((error)=>{
      
    })
  };

  return (
    <>
    <div className='text-center p-10  h-screen '> 
      <h1 className='text-2xl font-bold mb-4'>Users</h1>
      <div className='mx-auto max-w-screen-md bg-white p-4 rounded-lg shadow-2xl mt-2 '>  
        <WorkersTable data={workers||[]} columns={columns} />
      </div>
    </div>
  </>
  )
}

export default AdminWorkers
