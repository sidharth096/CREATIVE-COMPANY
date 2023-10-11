import React, { useEffect } from "react";
import { getDesignCategories } from "../../features/axios/api/design";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducer/reducer";
import { setDesignCategories } from "../../redux/slice/designSlice/designCategoriesDataslice";
import { setdesigncategoryName } from "../../redux/slice/designSlice/designCategoryNameslice";
import { Link } from "react-router-dom";

const AdminDesignCategory = () => {
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

  return (
    <div className="p-20 mt-10">
      <div className="grid grid-cols-5 gap-8 ">
        {designCategories &&
          designCategories.map((designcategory) => (
            
            <Link to={`/admin/designs/${designcategory._id}`} key={designcategory._id} onClick={()=>dispatch(setdesigncategoryName(designcategory.categoryName))}>
            <div className="flex justify-center items-center flex-col hover:scale-110">
              <div className="w-48 h-48 relative overflow-hidden ">
                <img
                  src={designcategory.imageUrl}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-in-out"
                />
              </div>
              <div className="flex justify-center bg-gray-300 mt-1 overflow-hidden w-48">
                <h3 className="font-bold xs:text-sm">{designcategory.categoryName}</h3>
              </div>
            </div>
           </Link>
          ))}
      </div>
    </div>
  );
};

export default AdminDesignCategory;
