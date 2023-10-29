import React, { useEffect, useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { CiCircleRemove } from "react-icons/ci";
import { motion } from "framer-motion";

import {
  incrementQuantity,
  decrementQuantity,
  deleteItem,
} from "../redux/cartslice";
import { useDispatch } from "react-redux";

const CartList = ({ item, flag, setFlag }) => {

  const dispatch = useDispatch();

  const increment = () => {
    setFlag(flag + 1);
    dispatch(
      incrementQuantity({
        id: item.id,
        title: item.title,
        image: item.image,
        price: item.price,
        quantity: 1,
      })
    );
  };
  const decrement = () => {
    setFlag(flag + 1);

    dispatch(
      decrementQuantity({
        id: item.id,
        title: item.title,
        image: item.image,
        price: item.price,
        quantity: 1,
      })
    );
  };

  return (
    <div className="bg-cartItem flex w-full items-center gap-3 rounded-lg p-1 px-2 ">
      <motion.div
        whileTap={{ scale: 0.75 }}
        className=" text-white cursor-pointer hover:text-red-600 hover:font-semibold"
        onClick={() => dispatch(deleteItem(item.id))}
      >
        <CiCircleRemove size={30} />
      </motion.div>

      <img
        src={item?.image}
        alt=""
        className="h-20 w-20 max-w-[60px] object-contain"
      />

      {/* name section */}

      <div className="flex flex-col gap-2">
        <p className=" text-gray-50 text-2xl">{item?.title}</p>
        <p className="block text-2xl font-semibold text-gray-300">
        &#8377; {parseFloat(item?.price) * item?.quantity}
        </p>
      </div>

      {/* button section */}

      <div className="group ml-auto flex cursor-pointer items-center gap-4 border-2 border-customLight w-fit h-[30px] px-4">
        <motion.div whileTap={{ scale: 0.75 }} onClick={decrement}>
          <BiMinus className="text-gray-50 text-xl" />
        </motion.div>
        <p className="bg-cartBg flex h-5 w-5 items-center justify-center rounded-sm text-gray-50 text-2xl">
          {item?.quantity}
        </p>
        <motion.div whileTap={{ scale: 0.75 }} onClick={increment}>
          <BiPlus className="text-gray-50 text-xl" />
        </motion.div>
      </div>

    </div>
  );
};

export default CartList;
