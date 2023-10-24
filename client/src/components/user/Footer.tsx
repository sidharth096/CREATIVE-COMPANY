import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()
  return (
    <>
    <footer className="bg-gray-800 text-white p-4 mt-14 h-52">
      <div className="container mx-auto"> 
      <div>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-lg font-semibold">Creative Company</p>
            <p className="text-sm items-baseline">Providing Quality Services Since  {new Date().getFullYear()}</p>
          </div>
          <div>
            <ul className="flex space-x-4">
             <li></li>
             <li></li>
             <li></li>
            </ul>
          </div>
         </div>
       </div>
       <div>

        <  div className='flex mx-auto justify-center'>
            <div className=''>
              <ul className="flex flex-col ">
                  <li><a  className="text-sm hover:text-base cursor-pointer" onClick={()=>navigate("/")}>Home</a></li>
                  <li><a  className="text-sm hover:text-base cursor-pointer" onClick={()=>navigate("/user/worker")}>Workers</a></li>
                  <li><a  className="text-sm hover:text-base cursor-pointer" onClick={()=>navigate("/user/about")}>About</a></li>
                  <li><a  className="text-sm hover:text-base cursor-pointer" onClick={()=>navigate("/user/design")}>Design</a></li>
              </ul>
            </div>

        </div>
       </div>
      
      <div className='mt-7'>
       <div className="flex justify-center text-xs">
          <p>&copy; {new Date().getFullYear()} Creative Company❤️. All Rights Reserved.</p>
        </div>
       </div>
      </div>
       
    </footer>
    </>
  )
}

export default Footer
