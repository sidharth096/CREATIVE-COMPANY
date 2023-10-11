import React, { useEffect, useState } from 'react';
import { getDesign, getDesignCategories } from '../../features/axios/api/design';
import { getDesignByCategory } from '../../features/axios/api/design';
import { useDispatch,useSelector } from 'react-redux';
import { RootState } from '../../redux/reducer/reducer';
import { setDesigns } from '../../redux/slice/designSlice/designsDataslice';
import { error } from 'console';


const Design = (Id:any) => {
  


    const dispatch = useDispatch()
    const designs = useSelector((state:RootState)=>state.desings.designs)

  useEffect(() => {
   
    const categoryId=Id.id

    if(categoryId){
      
      getDesignByCategory(categoryId).then((response)=>{
        dispatch(setDesigns(response.data))
      }).catch((error)=>{
        console.error('Error fetching design data:', error)
      })
    }

    else{
      
      getDesign()
      .then((response) => {
        console.log(response);  
        dispatch(setDesigns(response.data))
      }).catch((error) => {
        console.error('Error fetching design data:', error);
      });
    }  
  
  }, []);

  return (
    <div className="px-20 py-6 mt-10">
      <div className="grid grid-cols-4 gap-8  ">
        {designs && designs.map((design) => (
          <div className="flex justify-center items-center">
            <div className="w-52 h-52 relative overflow-hidden hover:scale-110">
              <img
                src={design.imageUrl} 

                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-in-out"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  
  );
};

export default Design;
