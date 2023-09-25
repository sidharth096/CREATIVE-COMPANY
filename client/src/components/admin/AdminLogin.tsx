import React, { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup'
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from 'formik';

import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';

import { adminLogin } from '../../features/axios/api/admin';
import { loginInterface } from '../../types/userInterface'
import { RootState } from '../../redux/reducer/reducer';
import { adminLoginReducer } from '../../redux/slice/adminSlice/adminAuthSlice';
import { setAdminToken } from '../../redux/slice/adminSlice/adminTokenSlice';





const loginSchema  = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});


const initialValuesLogin = {
  email: "",
  password: "",
};




const AdminLogin = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const adminIsLoggin = useSelector((state:RootState)=>state.adminAuth.adminLoggedIn)

  const adminToken = localStorage.getItem("admintoken")

  useEffect(()=>{
    if(adminToken){
      dispatch(adminLoginReducer())
    }
    if(adminIsLoggin==true){
      navigate('/admin')
    }
  })

  
  const notify = (msg: string, type: string) =>
  type === "error"
    ? toast.error(msg, { position: toast.POSITION.TOP_RIGHT })
    : toast.success(msg, { position: toast.POSITION.TOP_RIGHT });
  
    const handleSubmit = (userData:loginInterface)=>{
      adminLogin(userData).then((response)=>{
        const token = response.token
        dispatch(adminLoginReducer())
        dispatch(setAdminToken(token))
      notify(response.data.message, "success");
      navigate("/admin")
  
    }).catch((error)=>{
      notify(error.message, "error");
    })
    
      
  }
    return (
  
       <div className="min-h-screen flex items-center justify-center bg-gray-100">
       <div className="bg-gradient-to-t from-gray-400 to-gray-200  p-8 rounded shadow-md w-full sm:w-96">
        <h2 className="text-2xl font-semibold text-black  mb-6">Admin Login</h2>
        <Formik
        initialValues={initialValuesLogin}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}   >
       {({ errors, touched }) => (
        <Form>
          <div className="mb-4">
            {/* <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label> */}
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
  
          {/* remember_me */}
  
          {/* <div className="mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="text-black rounded border-gray-300 dark:border-gray-600" name="remember_me" />
              <span className="ml-2 text-sm text-black">Remember me</span>
            </label>
          </div> */}
  
  
          <div className="flex  mt-7">
            <button
              type="submit"
              className="bg-gray-500 hover:bg-gray-900 text-white   py-1 px-2 rounded w-full"
            >
              Login
            </button>
          </div>
  
          <div className='flex justify-center mt-3'>
            <a href="#" className="text-sm text-black hover:text-gray-600">
              Forgot password?
            </a>
          </div>
          
          
          </Form>
          )}
         </Formik>
      </div>
      <ToastContainer />
    </div>
  
  
    )
}

export default AdminLogin
