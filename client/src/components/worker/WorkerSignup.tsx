import React, { useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useNavigate } from 'react-router-dom';

import { workerRegister } from '../../features/axios/api/worker';
import { workerSignupInterface } from '../../types/workerInterface'; 
import * as Yup from 'yup'
import {
  Formik,
  // FormikHelpers,
  // FormikProps,
  Form,
  Field,
  FieldProps,
} from 'formik';
// import { workerData } from 'worker_threads';
import { isExistingWorker } from '../../features/axios/api/worker';
import { generateOtp } from '../../features/axios/api/otp';
import WorkerOtp from './WorkerOtp';




const loginSchema  = Yup.object().shape({
  name:Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string()
  .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
  .required('Phone number is required'),
  job_title:Yup.string().required('Job title is required'),
  password: Yup.string()
  .min(6, 'Password must be at least 6 characters')
  .required('Password is required'),
  confirmpassword: Yup.string().required('Confirm Password is required')
  .oneOf([Yup.ref('password')], 'Passwords must match')
  
  
});


const initialValuesSignup = {
  name:"",
  email: "",
  phone:"",
  job_title:"",
  password: "",
  confirmpassword:""

};

  
    

const WorkerSignup = () => {

   const navigate = useNavigate()
   const [otpPage,setotpPage] = useState(false)
   const [worker,setWorkerData] =useState({})

  const notify = (msg: string, type: string) =>
    type === "error"
      ? toast.error(msg, { position: toast.POSITION.TOP_RIGHT })
      : toast.success(msg, { position: toast.POSITION.TOP_RIGHT });

const handleSubmit = (workerData:workerSignupInterface)=>{

  isExistingWorker(workerData.email,workerData.phone).then((response)=>{
    generateOtp(workerData.phone).then((response)=>{   
    
    }).catch((error)=>{
      console.error(error) 
    })
    
    setWorkerData(workerData)
    setotpPage(true)
  
  }).catch((error)=>{
    notify(error.message, "error");
  })
  
  
  // workerRegister(workerData).then((response)=>{

  //   notify(response.data.message, "success");
  //   navigate('/worker')

  // }).catch((error)=>{
  //   notify(error.message, "error");
  // })
}
  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    {!otpPage?(
        <Formik
      initialValues={initialValuesSignup}
      validationSchema={loginSchema}
      onSubmit={handleSubmit}   >
     {({ errors, touched }) => (
      <>
     <div className="bg-gradient-to-t from-gray-400 to-gray-200  p-8 rounded shadow-md w-full sm:w-96">
      <h2 className="text-2xl font-semibold text-black  mb-6">Worker Signup</h2>
     
      <Form>
        <div className="mb-4">
         
          <Field
            type="name"
            id="name"
            name="name"
            placeholder='Name'
            className="mt-1 p-2.5 w-full  rounded-md "
          />
           {errors.name && touched.name ? (
          <div className="text-red-600">{errors.name}</div>
           ) : null}
        </div>
        <div className="mb-4">
          
          <Field
            type="email"
            id="email"
            name="email"
            placeholder='Email or Password'
            className="mt-1 p-2.5 w-full  rounded-md "
          />
           {errors.email && touched.email ? (
          <div className="text-red-600">{errors.email}</div>
            ) : null}
          </div>
        <div className="mb-4">
         
         <Field
           type="phone"
           id="phone"
           name="phone"
           placeholder='Phone'
           className="mt-1 p-2.5 w-full  rounded-md "
         />
          {errors.phone && touched.phone ? (
         <div className="text-red-600">{errors.phone}</div>
          ) : null}
       </div>
       <div className="mb-4">
         
         <Field
           type="text"
           id="job_title"
           name="job_title"
           placeholder='Job title'
           className="mt-1 p-2.5 w-full  rounded-md "
         />
          {errors.job_title && touched.job_title ? (
         <div className="text-red-600">{errors.job_title}</div>
          ) : null}
       </div>
        <div className="mb-4">
          
          <Field
            type="password"
            id="password"
            name="password"
            placeholder='Password'
            className="mt-1 p-2.5 w-full  rounded-md "
          />
          {errors.password && touched.password ? (
          <div className="text-red-600">{errors.password}</div>
          ) : null}
        </div>
        <div className="mb-4">
          
          <Field
            type="password"
            id="confirmpassword"
            name="confirmpassword"
            placeholder='Confirmpassword'
            className="mt-1 p-2.5 w-full  rounded-md "
          />
          {errors.confirmpassword && touched.confirmpassword ? (
          <div className="text-red-600">{errors.confirmpassword}</div>
          ) : null}
        </div>


        <div className="flex  mt-7">
          <button
            type="submit"
            className="bg-gray-500 hover:bg-gray-900 text-white   py-1 px-2 rounded w-full"
          >
            Signup
          </button>
        </div>
        <div className='flex justify-center mt-3'>
          <a onClick={()=>navigate("/worker/workerLogin")} className="text-sm text-black hover:text-gray-600">
            Already have an account 
          </a>
        </div>

     
      </Form>
      
    </div>
    <ToastContainer/>
    </>
  )}
  
  </Formik>
    ):(
      <>
      <WorkerOtp worker={worker}/>
      </>
    )
}
</div>
    </>
  )
}

export default WorkerSignup
