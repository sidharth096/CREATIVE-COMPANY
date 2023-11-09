import React from 'react'
import Modal from "react-modal";
import { modalCloseReducer } from '../../redux/slice/adminSlice/modalSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/reducer/reducer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
};

const customStyle = {
  control: (styles: any) => ({
    ...styles,
    backgroundColor: "white",
    borderRadius: "0.375rem",
    borderColor: "black",
  }),
};


const LoginModal = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const modalIsOpen = useSelector((state:RootState)=>state.modal.modal)

  
  const closeModal = () => {
    dispatch(modalCloseReducer());
  };

  return (
   <>
     <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
         <div className="flex justify-end">
          <button onClick={closeModal}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
     <div className='flex justify-center items-center'>
      <div className='  p-8 rounded w-full sm:w-96 flex justify-center  items-center gap-10 h-48'>
        <button onClick={()=>navigate("/user/userLogin")} className='p-3 bg-black text-white rounded-lg'>UserLogin</button>
        <button onClick={()=>navigate("worker/workerLogin")} className='p-3 bg-black text-white rounded-lg'>WorkerLogin</button>
      </div>  
     </div>
     </Modal>
   </>
  )
}

export default LoginModal
