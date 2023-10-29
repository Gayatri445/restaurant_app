import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MdCloudUpload,
  MdDelete,
  MdFastfood,
  MdDescription,
  MdCurrencyRupee,
} from "react-icons/md";
import { categories } from "../utils/data";
import Loader from "./Loader";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { storage } from "../firebase.config";
import { getAllFoodItems, saveItem } from "../utils/firebaseFunctions";
import { useDispatch, useSelector } from "react-redux";
import {setFoodItems} from "../redux/cartslice"


const CreateContainer = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState(null);
  const [fields, setFields] = useState(false); 
  const [msg, setMsg] = useState(null);
  const [alertStatus, setAlertStatus] = useState("danger");
  const [isLoading, setIsLoading] = useState(false);
  const [imageAsset, setImageAsset] = useState(null);

  const {foodItems} = useSelector((state)=>state.cart.foodItems)
  const dispatch = useDispatch();


  // UPLOAD THE FOOD ITEM
  const uploadImage = (e) => {
    setIsLoading(true);
    const imageFile = e.target.files[0];

    const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const uploadProgress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        console.log(error);
        setFields(true);
        setMsg("Error while uploading : try Again ");
        setAlertStatus("danger");
        setTimeout(() => {
          setFields(false);
          setIsLoading(false);
        }, 4000);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageAsset(downloadURL);
          setIsLoading(false);
          setFields(true);
          setMsg("Image uploaded successfully");
          setAlertStatus("success");
          setTimeout(() => {
            setFields(false);
          }, 4000);
        });
      },
    );
  };

  // DELETE THE FOOD ITEM
  const deleteImage = () => {
    setIsLoading(true);
    const deleteRef = ref(storage, imageAsset);
    deleteObject(deleteRef).then(() => {
      setImageAsset(null);
      setIsLoading(false);
      setFields(true);
      setMsg("Image deleted successfully");
      setAlertStatus("success");
      setTimeout(() => {
        setFields(false);
      }, 4000);
    });
  };

  // SAVE ALL THE FOOD DETAILS
  const saveDetails = () => {
    setIsLoading(true);
    try {
      if (!title || !desc || !imageAsset || !price || !category) {
        setFields(true);
        setMsg("Required fields can't be empty");
        setAlertStatus("danger");
        setTimeout(() => {
          setFields(false);
          setIsLoading(false);
        }, 4000);
      } else {
        const data = {
          id: `${Date.now()}`,
          title: title,
          imageURL: imageAsset,
          category: category,
          desc: desc,
          qty: 1,
          price: price,
        };
        saveItem(data);
        setIsLoading(false);
        setFields(true);
        setMsg("Data uploaded successfully");
        clearData();
        setAlertStatus("success");
        setTimeout(() => {
          setFields(false);
        }, 4000);
      }
    } catch (error) {
      console.log(error);
      setFields(true);
      setMsg("Error while uploading : try Again ");
      setAlertStatus("danger");
      setTimeout(() => {
        setFields(false);
        setIsLoading(false);
      }, 4000);
    }
    fetchData();
  };

  const clearData = () => {
    setTitle("");
    setImageAsset(null);
    setDesc("");
    setPrice("");
    setCategory("Select Category");
  };

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch(setFoodItems(data));
    });
  };

  return (
    <div className=" flex min-h-screen w-full items-center justify-center ">
      <div className="flex w-[90%] flex-col items-center justify-center gap-4 rounded-lg border border-gray-300 p-4 md:w-[75%] ">
        {fields && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`w-full rounded-lg p-2 text-center text-2xl font-semibold ${
              alertStatus === "danger"
                ? "bg-red-400 text-red-800"
                : "bg-emerald-400 text-emerald-800"
            } `}
          >
            {msg}
          </motion.p>
        )}

        <div className="flex w-full items-center gap-2 border-b border-gray-300 py-2 ">
          <MdFastfood className="text-3xl text-gray-700" />
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Give me a title"
            className="text-textColor h-full w-full border-none bg-transparent text-2xl  outline-none placeholder:text-gray-400"
          />
        </div>

        <div className="w-full">
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="w-full text-2xl cursor-pointer rounded-md border-b-2 border-gray-200 p-2 outline-none"
          >
            <option value="other" className="bg-white ">
              Select Category
            </option>
            {categories &&
              categories?.map((item) => (
                <option
                  key={item.id}
                  className="text-headingColor border-0 bg-white text-2xl capitalize outline-none"
                  value={item.urlParamName}
                >
                  {item.name}
                </option>
              ))}
          </select>
        </div>

        <div className="h-225 md:h-420 group flex w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dotted border-gray-300">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {!imageAsset ? (
                <>
                  <label className="flex h-full w-full cursor-pointer flex-col items-center justify-center">
                    <div className="flex h-full w-full flex-col items-center justify-center">
                      <MdCloudUpload className="text-4xl text-gray-500 hover:text-gray-700 " />
                      <p className="text-gray-500 hover:text-gray-700 text-xl">
                        Click here to upload
                      </p>
                    </div>
                    <input
                      type="file"
                      name="uploadImage"
                      accept="image/*"
                      onChange={uploadImage}
                      className="h-0 w-0"
                    />
                  </label>
                </>
              ) : (
                <>
                  <div className="relative h-full ">
                    <img
                      src={imageAsset}
                      alt="uploaded image"
                      className="h-full w-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={deleteImage}
                      className="absolute bottom-3 right-3 cursor-pointer rounded-full bg-red-500 p-3 text-2xl outline-none transition-all duration-500 ease-in-out hover:shadow-md "
                    >
                      <MdDelete className="text-white text-3xl" />
                    </button>
                  </div>
                </>
              )}
            </>
          )}
        </div>

        <div className="flex w-full flex-col items-center gap-3 md:flex-row">
          <div className="flex w-full items-center gap-2 border-b border-gray-300 py-2">
            <MdDescription className="text-3xl text-gray-700 " />
            <input
              type="text"
              required
              placeholder="Description"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="text-textColor h-full w-full border-none bg-transparent text-2xl outline-none placeholder:text-gray-400"
            />
          </div>
          <div className="flex w-full items-center gap-2 border-b border-gray-300 py-2">
            <MdCurrencyRupee className="text-3xl text-gray-700 " />
            <input
              type="text"
              required
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="text-textColor h-full w-full border-none bg-transparent text-2xl outline-none placeholder:text-gray-400"
            />
          </div>
        </div>

        <div className="flex w-full items-center">
          <button
            type="button"
            className="ml-0 w-full rounded-lg border-none bg-emerald-500 px-12 py-2 text-2xl font-semibold text-white outline-none md:ml-auto md:w-auto"
            onClick={saveDetails}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateContainer;
