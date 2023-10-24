import React, { useEffect, useState } from 'react';
import { generateOtp } from '../../features/axios/api/otp';
import { verifyOtp } from '../../features/axios/api/otp';
import { signupInterface } from '../../types/userInterface';
import { error } from 'console';
import { userRegister } from '../../features/axios/api/user';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// interface UserOtpProps {
//   phone: string;
// }


function UserOtp(user:any) {

  const navigate = useNavigate()

  const User=user.user

  // useEffect(()=>{
  //   generateOtp(User.phone).then((response)=>{
  //     console.log("yes",response)   
    
  //   }).catch((error)=>{
  //     console.error(error)
  //   })
  
  // })
  

  
  const [otp, setOTP] = useState(['', '', '', '', '', '']);

  const handleOTPChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newOTP = [...otp];
    newOTP[index] = e.target.value;
    setOTP(newOTP);
  };

  const notify = (msg: string, type: string) =>
  type === "error"
    ? toast.error(msg, { position: toast.POSITION.TOP_RIGHT })
    : toast.success(msg, { position: toast.POSITION.TOP_RIGHT });



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    verifyOtp(User.phone,otp).then((response)=>{
      
      userRegister(User).then((response)=>{

        notify(response.data.message, "success");
        
        navigate('/user/userLogin')
    
      }).catch((error)=>{
        notify(error.message, "error");
      })
      
    }).catch((error)=>{

    })
    
  };

  return (
    <>
      <div className="bg-gradient-to-t from-gray-400 to-gray-200  p-8 rounded shadow-md h-72 max-w-md w-full space-y-4">
        <h2 className="text-2xl font-bold text-center"> OTP Verification</h2>
        <p className=' text-sm  text-center'>Thank you for registering with you.Please type the OTP as shared on your mobile {User.phone} </p>
        <form onSubmit={handleSubmit} className='text-center mt-10'>
          <div className="flex space-x-2">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                className="w-1/6 p-2 border border-gray-300 rounded text-center"
                maxLength={1}
                value={digit} 
                onChange={(e) => handleOTPChange(e, index)}
              />
            ))}
          </div>
          <button
            type="submit"
            className=" bg-gray-500 hover:bg-gray-900 text-white p-2 rounded w-1/3 mt-7" >
            Submit
          </button>
        </form>
      </div>
      <ToastContainer />
  </>

  );
}

export default UserOtp;
