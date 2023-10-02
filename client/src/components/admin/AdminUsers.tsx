import React, { useEffect } from 'react'
import UsersTable from '../Table/UsersTable';
import { usersData } from '../../features/axios/api/admin';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers } from '../../redux/slice/userSlice/usersDataSlice';
import { RootState } from '../../redux/reducer/reducer';
import { blockUnBlock } from '../../features/axios/api/admin';



const AdminUsers = () => {

  const dispatch =useDispatch()
  const users =useSelector((state:RootState)=>state.usersData.users)

  const admintoken:string|null =localStorage.getItem('admintoken')?? null

useEffect(()=>{

  console.log(admintoken);
  

  usersData(admintoken).then((response)=> {

    dispatch(setUsers(response.data))   

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
      Header: 'Status',
      
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
    blockUnBlock(id).then((response)=>{
      console.log(response?.data.data);
      dispatch(setUsers(response?.data.data))  

    }).catch((error)=>{
      
    })
  };

  return (
    <>
    <div className='text-center p-10  h-screen '> 
      <h1 className='text-2xl font-bold mb-4'>Users</h1>
      <div className='mx-auto max-w-screen-md bg-white p-4 rounded-lg shadow-2xl mt-2 '>  
        <UsersTable data={users||[]} columns={columns} />
      </div>
    </div>
  </>
  
  )
}

export default AdminUsers
