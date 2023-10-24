import React from 'react'
import Header from '../../components/user/Header'
import Workers from '../../components/worker/Workers'
import Search from '../../components/common/Search'

const WorkerPage = () => {
  return (
    <div>
       <Header/>
       <div >
        <div className='px-6  mt-10 xs:mt-16  xs:flex  h-10  sm:px-10 gap-3 cursor-pointer '>
          <h1 className='text-zinc-600  text-2xl font-semibold hover:text-black'> Find your workers</h1>
        </div> 
      </div>
       <Search/>
       <Workers/>
    </div>
  )
}

export default WorkerPage
