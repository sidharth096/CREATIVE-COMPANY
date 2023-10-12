import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { DesignInterface } from "../../types/designInterface";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducer/reducer";
import Modal from "react-modal";
import { modalCloseReducer } from "../../redux/slice/adminSlice/modalSlice";
import { addDesign } from "../../features/axios/api/design";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { setDesignCategories } from "../../redux/slice/designSlice/designCategoriesDataslice";
import { setDesigns } from "../../redux/slice/designSlice/designsDataslice";
import { getDesignCategories } from "../../features/axios/api/design";
import Select from "react-select";

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

const initialValuesLogin: DesignInterface = {
  categoryId: "",
  img: null,
};

const loginSchema = Yup.object().shape({
//   categoryId: Yup.mixed().required("Select Category"),
  img: Yup.mixed()
    .required("File is required")
    .test("fileType", "Invalid file format", (value) => {
      if (!value) return false; // Handle the case where no file is selected
      return (
        value &&
        ["image/jpeg", "image/jpg", "image/png"].includes((value as File).type)
      );
    }),
});

const DesignForm = () => {
  const dispatch = useDispatch();
  const modalIsOpen = useSelector((state: RootState) => state.modal.modal);
  const designCategories = useSelector(
    (state: RootState) => state.designcategories.designCatagories
  );
  const [imagePreview, setImagePreview] = useState<string | null>(null);

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


  const handleSubmit = (userData: DesignInterface) => {  
    if (selectedCategory) {
      userData.categoryId = selectedCategory.value;
    }
    addDesign(userData)
      .then((response) => {
        dispatch(modalCloseReducer());
        // dispatch(setDesigns(response.data))
        notify(response.data.message, "success");
      })
      .catch((error: any) => {
        notify(error.Error, "error");
      });
  };



  const notify = (msg: string, type: string) =>
    type === "error"
      ? toast.error(msg, { position: toast.POSITION.TOP_RIGHT })
      : toast.success(msg, { position: toast.POSITION.TOP_RIGHT });


  const closeModal = () => {
    dispatch(modalCloseReducer());
  };


  const [selectedCategory, setSelectedCategory] = useState<{
    value: string;
    label: string;
  } | null>(null);


  const handleCategoryChange = (
    selectedOption: { value: string; label: string } | null
  ) => {
    setSelectedCategory(selectedOption);
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
        <div className=" p-8  w-full sm:w-96">
          <Formik
            initialValues={initialValuesLogin}
            validationSchema={loginSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, setFieldValue }) => (
              <Form>
                <div className="mb-4">
                  <Select
                    id="categoryId"
                    name="categoryId"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    options={
                      (designCategories &&
                        designCategories.map((designCategory) => ({
                          value: designCategory._id,
                          label: designCategory.categoryName,
                        }))) ||
                      []
                    }
                    styles={customStyle}
                  />
                  {errors.categoryId && touched.categoryId ? (
                    <div className="text-red-600">{errors.categoryId}</div>
                  ) : null}
                </div>

                <div className="flex justify-center ">
                  {imagePreview && (
                    <img
                      src={imagePreview}
                      alt="Image Preview"
                      className="mt-2 rounded-md max-h-40"
                    />
                  )}
                  {!imagePreview && (
                    <img
                      src="https://res.cloudinary.com/di7nyjjfl/image/upload/v1696707298/creative%20company/banners/zekuekk58shaxj2siulq.png"
                      alt="Image Preview"
                      className="mt-2 rounded-md max-h-40"
                    />
                  )}
                </div>

                <div className=" flex justify-center mt-3 ">
                  <label className="file-input-button  bg-black text-white p-1 rounded-md">
                    <input
                      type="file"
                      id="img"
                      name="img"
                      className="hidden"
                      onChange={(e: any) => {
                        const file = e.target.files[0];
                        setFieldValue("img", file);
                        setImagePreview(URL.createObjectURL(file));
                      }}
                    />
                    Upload Image
                  </label>
                </div>

                {errors.img && touched.img ? (
                  <div className="text-red-600 flex justify-center">
                    {errors.img}
                  </div>
                ) : null}

                <div className="flex mt-7">
                  <button
                    type="submit"
                    className="bg-black hover:bg-gray-900 text-white py-1 px-2 rounded w-full"
                  >
                    Submit
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </Modal>
      <ToastContainer />
    </>
  );
};

export default DesignForm;
