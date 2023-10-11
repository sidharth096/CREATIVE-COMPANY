import React from 'react'
import Header from '../../components/user/Header'
import DesignCategory from '../../components/Design/DesignCategory'
import Design from '../../components/Design/Design'
import { useNavigate } from 'react-router-dom'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'
import { RootState } from '../../redux/reducer/reducer'

const DesignPage = () => {
  const navigate = useNavigate()
  const categoryName = useSelector((state:RootState)=>state.designCategoryName.designcategoryName)

  const handleClick: React.MouseEventHandler<HTMLHeadingElement> = () => {
    navigate('/')
  };

  return (
    <>
      <Header/>
     <div >
        <div className='px-6  mt-10 xs:mt-16  xs:flex  h-10  sm:px-10 gap-3 cursor-pointer '>
          <h1 className='text-zinc-600 text-2xl font-semibold hover:text-black' onClick={handleClick} >Home </h1>
          <h1 className='text-zinc-600  text-2xl font-semibold '> &gt; </h1>
          <h1 className='text-zinc-600  text-2xl font-semibold hover:text-black'> Design Categories ..</h1>
        </div>
      </div>
     
   
      <DesignCategory/>

      {categoryName ? (
      <div className=' flex justify-center cursor-pointer mt-10'>
        <h1 className='text-zinc-600  text-2xl font-semibold hover:text-black'>{categoryName}..</h1>
      </div>
    ) : null}

      <Design/>
    </>
  )
}

export default DesignPage
