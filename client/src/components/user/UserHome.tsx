import React from 'react'
import { useNavigate } from 'react-router-dom'

const UserHome = () => {
  const navigate = useNavigate()
  return (
    <>
    <section>
        <div className='shadow-xl '>
            <img className='overflow-hidden w-full h-96 object-cover' src="https://res.cloudinary.com/di7nyjjfl/image/upload/v1695484705/creative%20company/banners/cdfgny1uh2xrmivtkvkl.jpg" alt="Creative Company" />
        </div>
        


        <div className='xxs: flex flex-col lg:flex-row  align-middle  mt-24  ' dir='ltr'>

           <div>
            <div className='flex h-80 w-80 xxs:mx-auto lg:ms-40 '>
                <img onClick={()=>navigate("/user/design")} className='object-cover w-full h-full hover:scale-110 cursor-pointer' src="https://res.cloudinary.com/di7nyjjfl/image/upload/v1695651634/creative%20company/banners/emiojnbyesje9rgaaexd.jpg" alt="" />
            </div>
           </div>
          
           <div className=' flex flex-col justify-center items-center w-full xxs:mt-14 lg:mt-0'>
              <h1 className='text-xl font-bold hover:text-gray-600 hover:text-2xl mb-4 cursor-pointer'onClick={()=>navigate("/user/design")}>Find your designs   </h1> 
              <p>"Bringing Your Dreams to Life: Crafting Exceptional Home <br/>Designs Tailored for You."</p>
            </div>

        </div>

        <div className='xxs:flex flex-col  lg:flex-row  align-middle mt-24 ' dir='rtl'>

            <div>
               <div className='h-80  w-80 xxs:mx-auto lg:ms-40'>
                 <img onClick={()=>navigate("/user/worker")} className='object-cover h-full w-full hover:scale-110  cursor-pointer ' src="https://res.cloudinary.com/di7nyjjfl/image/upload/v1695651651/creative%20company/banners/znskrlxqhvwbni58tr0g.jpg" alt="" />
               </div> 
            </div>

            <div className=' flex flex-col justify-center items-center w-full xxs:mt-14 lg:mt-0 'dir='ltr'>
              <h1 className='text-xl font-bold hover:text-gray-600 hover:text-2xl mb-4 cursor-pointer'onClick={()=>navigate("/user/worker")} >Find your workers </h1> 
              <p className="">Connecting Skilled Workers with Opportunities: Delivering <br/>Quality Workforce Solutions for Your Needs</p>
            </div> 
          

        </div>

    </section>
    </>
  )
} 

export default UserHome
          