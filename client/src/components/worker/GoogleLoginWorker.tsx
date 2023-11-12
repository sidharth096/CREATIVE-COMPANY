import React from 'react'
import { GoogleOAuthProvider,CredentialResponse } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { workerLoginReducer } from '../../redux/slice/workerSlice/workerAuthSlice';
import { setWorker } from '../../redux/slice/workerSlice/workerDataSlice';
import { setWorkerToken } from '../../redux/slice/workerSlice/workerTokenSlice';
import { googleLoginWorker } from '../../features/axios/api/worker';
import { modalCloseReducer } from '../../redux/slice/adminSlice/modalSlice';

const GoogleLoginWorker = () => {

  const ClientId:string = process.env.REACT_APP_GOOGLE_AUTH_CLIENTID||''
  
  const dispatch = useDispatch()
  const navigate= useNavigate()

  const notify = (msg: string, type: string) =>
 type === "error"
  ? toast.error(msg, { position: toast.POSITION.TOP_RIGHT })
  : toast.success(msg, { position: toast.POSITION.TOP_RIGHT });

  
  const handleSuccess = async (credentialResponse: CredentialResponse) => {
    if (typeof credentialResponse.credential === "string") {
        const decoded = jwtDecode(credentialResponse.credential)
        console.log(decoded)
        
        googleLoginWorker(decoded)
        
            .then((response) => {
                console.log(response);
                
                const worker = response.data;
                const token = response.token;

                
                dispatch(setWorkerToken(token))
                dispatch(setWorker(worker))
                dispatch(workerLoginReducer())
                dispatch(modalCloseReducer())

                navigate("/worker")

              }).catch((error: { message: string; })=>{
                notify(error.message, "error");
              })
    }
}

  return (
    <>
    <div className='mt-3 flex justify-center '>
     <GoogleOAuthProvider clientId = {ClientId}>
        <GoogleLogin 
          onSuccess={handleSuccess}
            
        
          onError={() => {
            console.log('Login Failed');
          }}
          
        />
      </GoogleOAuthProvider>
    </div>
   </>
  )
}

export default GoogleLoginWorker

