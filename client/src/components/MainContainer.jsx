import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import {
  RowContainer,
  MenuContainer,
  CartContainer,
  Home,
  About,
  Review,
  Contact,
} from "./index";

import { useSelector } from "react-redux";

const MainContainer = () => {
  const { foodItems, cartShow } = useSelector((state) => state.cart);
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {}, [scrollValue]);

  return (
    <div className="flex h-auto w-full flex-col items-center justify-center ">
      <Home />
      <section className="my-6 w-full ">
        <div className="flex w-full items-center justify-between">
          <p className=" text-customBlack before:content relative from-orange-400 to-orange-600 text-[2.6rem] font-bold capitalize transition-all duration-100 ease-in-out before:absolute before:-bottom-2 before:left-0 before:h-1 before:w-32 before:rounded-lg before:bg-gradient-to-tr">
            Our Fresh & Healthy Fruits
          </p>
          <div className="hidden items-center gap-3 md:flex">
            <motion.div
              onClick={() => setScrollValue((prev) => prev - 200)}
              whileTap={{ scale: 0.75 }}
              className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-lg bg-orange-300  hover:bg-orange-500 hover:shadow-lg"
            >
              <MdChevronLeft className="text-lg text-white" />
            </motion.div>
            <motion.div
              onClick={() => setScrollValue((prev) => prev + 200)}
              whileTap={{ scale: 0.75 }}
              className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-lg bg-orange-300 hover:bg-orange-500 hover:shadow-lg"
            >
              <MdChevronRight className="text-lg text-white" />
            </motion.div>
          </div>
        </div>
        <RowContainer
          scrollValue={scrollValue}
          flag={true}
          data={foodItems?.filter((n) => n.category === "fruits")}
        />
      </section>
      <MenuContainer />
      <About />
      <Review />
      <Contact />
      {cartShow && <CartContainer />}
    </div>
  );
};

export default MainContainer;
