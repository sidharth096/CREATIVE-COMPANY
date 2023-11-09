import React, { useEffect, useState } from "react";
import { getDesignCategories } from "../../features/axios/api/design";
import { error } from "console";
import { array } from "yup";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducer/reducer";
import { setDesignCategories } from "../../redux/slice/designSlice/designCategoriesDataslice";
import { setdesigncategoryName } from "../../redux/slice/designSlice/designCategoryNameslice";
import { setDesigns } from "../../redux/slice/designSlice/designsDataslice";
import { getDesignByCategory } from "../../features/axios/api/design";

const DesignCategory = () => {
  const dispatch = useDispatch();
  const designCategories = useSelector(
    (state: RootState) => state.designcategories.designCatagories
  );

  useEffect(() => {
    getDesignCategories()
      .then((response) => {
        console.log(response);

        dispatch(setDesignCategories(response.data));
      })
      .catch((error: any) => {
        console.log(error);

        console.log("Design category getting error", error);
      });
  }, []);

  const handleClick = (categoryName:string,categoryId:string)=>(event:any)=>{
    event.preventDefault();

    getDesignByCategory(categoryId).then((response) =>{
      dispatch(setDesigns(response.data))
    }).catch((error)=>{
      console.error('Error fetching design data:', error)
    })





    dispatch(setdesigncategoryName(categoryName))

    
    
    
  }

  return (
        <div className="mt-10 ">
          <div
            className="overflow-x-scroll overflow-y-hidden p-2"
            style={{ width: "100vw" }}
          >
            <div className="flex p-4" style={{ width: "200%" }}>
              {designCategories &&
                designCategories.map((item) => (
                  
                  <div
                    className="ml-4 shadow-lg w-36 md:w-32 sm:w-28  xxl:w-24 hover:scale-110"
                    key={item._id}
                    onClick={handleClick(item.categoryName,item._id)}
                  >
                    <div className="h-32 xl:h-24">
                      <img
                        className="cursor-pointer w-full h-full object-cover"
                        src={item.imageUrl}
                        alt="Design Category"
                      />
                    </div>
                    <div className="flex justify-center bg-gray-300 mt-1 overflow-hidden">
                      <h3 className="font-bold xs:text-sm">
                        {item.categoryName} 
                      </h3>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
  );
};

export default DesignCategory;
