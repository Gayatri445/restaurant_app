import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCartPlus } from "react-icons/fa";
import { addToCart } from "../redux/cartslice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const FoodCard = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const increment = () => {
    setQuantity((prev) => prev + 1);
  };
  const decrement = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };
  return (
    <div className=" w-275 md:w-300 bg-[#fff] relative my-12  flex h-[230px] min-w-[285px] flex-col  items-center justify-evenly rounded-lg px-4 py-2 backdrop-blur-lg hover:drop-shadow-xl md:min-w-[300px]  border-[0.1rem] border-[rgba(0,0,0,0.2)] shadow-customBoxShadow overflow-hidden">
      <div className="flex w-full items-center justify-between pr-8 ">
        <motion.div
          className="-mt-8 h-44 w-48 drop-shadow-2xl pt-4  "
          whileHover={{ scale: 1.2 }}
        >
          <img
            src={item?.imageURL}
            alt=""
            className="h-full w-full object-contain "
          />
        </motion.div>

        <div className="flex ">
          <div className="w-fit flex border-2 border-[rgba(0,0,0,0.2)] h-[30px]">
            <span
              onClick={decrement}
              className="text-2xl font-semibold w-10 flex items-center justify-center cursor-pointer text-customBlack"
            >
              -
            </span>
            <span className="text-xl font-semibold  w-10 flex items-center justify-center cursor-pointer text-customBlack">
              {quantity}
            </span>
            <span
              onClick={increment}
              className="text-2xl font-semibold  w-10 flex items-center justify-center cursor-pointer text-customBlack"
            >
              +
            </span>
          </div>
          <motion.button
            whileTap={{ scale: 1.05 }}
            className="border-0 outline-0 w-[40px] h-[30px] flex items-center justify-center cursor-pointer text-md text-white bg-customGreen  "
            onClick={() => {
              dispatch(
                addToCart({
                  id: item.id,
                  title: item.title,
                  image: item.imageURL,
                  price: item.price,
                  quantity: quantity,
                })
              );
              toast.success(
                `${quantity} ${item?.title} is added to your cart`,
                {
                  hideProgressBar: true,
                  style: {
                    fontSize: "14px",
                  },
                }
              );
              setQuantity(1);
            }}
          >
            <FaCartPlus size={15} />
          </motion.button>
        </div>
      </div>

      <div className="-mt-8 pr-8 flex w-full flex-col items-end justify-end gap-2 pt-8">
        <p className="text-customBlack text-base font-bold md:text-2xl">
          {item?.title}
        </p>
        <p className="mt-1 text-lg capitalize text-gray-500">{item?.desc}</p>
        <div className="flex items-center gap-8 pb-4">
          <p className="text-black text-2xl font-semibold">
            <span className="text-2xl font-semibold text-red-500">&#8377;</span>
            {item?.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
