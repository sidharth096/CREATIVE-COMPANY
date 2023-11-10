import React from 'react'
import { GoogleOAuthProvider,CredentialResponse } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { login } from '../../redux/slice/userSlice/userAuthSlice';
import { setToken } from '../../redux/slice/userSlice/userTokenSlice';
import { setUser } from '../../redux/slice/userSlice/userDataSlice';
import { googleLoginUser } from '../../features/axios/api/user';

const GoogleLoginUser = () => {

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
        
        googleLoginUser(decoded)
        
            .then((response) => {
                console.log(response);
                
                const user = response.user;
                const token = response.token;

                dispatch(setToken(token));
                dispatch(setUser(user))
                dispatch(login());

                navigate("/");

              }).catch((error: { message: string; })=>{
                notify(error.message, "error");
              })
    }
}

  return (
    <>
    <div className='mt-3 flex justify-center '>
     <GoogleOAuthProvider clientId="605610022136-9okhpr30hfntohh8rii7qi672oss4qra.apps.googleusercontent.com">
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

export default GoogleLoginUser

