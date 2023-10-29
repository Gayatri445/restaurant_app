import React, { useEffect, useRef, useState } from "react";
import { IoFastFood } from "react-icons/io5";
import { categories } from "../utils/data";
import { motion } from "framer-motion";
import RowContainer from "./RowContainer";
import { useSelector } from "react-redux";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const MenuContainer = () => {
  const { foodItems } = useSelector((state) => state.cart);
  const [scrollValue, setScrollValue] = useState(0);
  const [filter, setFilter] = useState("biryani");

  const rowContainer = useRef();

  const maxScrollValue = 200;
  useEffect(() => {
    if (scrollValue < 0) {
      setScrollValue(0);
    } else if (scrollValue >= maxScrollValue) {
      setScrollValue(maxScrollValue);
    }
    rowContainer.current.scrollLeft = scrollValue;
  }, [scrollValue, maxScrollValue]);

  useEffect(() => {}, [filter]);

  return (
    <section className="my-6  w-full" id="menu">
      <div className="flex w-full flex-col items-center justify-center">
        <div className="flex w-full items-center justify-between">
          <p className=" text-customBlack before:content relative mr-auto from-orange-400 to-orange-600 text-[2.6rem] font-bold capitalize transition-all duration-100 ease-in-out before:absolute before:-bottom-2 before:left-0 before:h-1 before:w-16 before:rounded-lg before:bg-gradient-to-tr">
            Our Hot Dishes
          </p>
          <div className="hidden items-center gap-3 md:flex">
            <motion.div
              onClick={() => {
                setScrollValue((prev) => prev - 200);
              }}
              whileTap={{ scale: 0.75 }}
              className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-lg bg-orange-300  hover:bg-orange-500 hover:shadow-lg"
            >
              <MdChevronLeft className=" text-lg text-white" />
            </motion.div>
            <motion.div
              onClick={() => {
                setScrollValue((prev) => prev + 200);
              }}
              whileTap={{ scale: 0.75 }}
              className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-lg bg-orange-300 hover:bg-orange-500 hover:shadow-lg"
            >
              <MdChevronRight className="text-lg text-white" />
            </motion.div>
          </div>
        </div>
        <div
          ref={rowContainer}
          className="pt-20 py-6 flex w-full items-center  gap-8 scroll-smooth scrollbar-none overflow-x-scroll "
        >
          {categories &&
            categories.map((category) => (
              <motion.div
                whileTap={{ scale: 0.75 }}
                key={category.id}
                onClick={() => setFilter(category.urlParamName)}
                className={`${
                  filter === category.urlParamName
                    ? "bg-customGreen"
                    : "bg-white"
                }  hover:bg-customGreen group flex min-h-[120px]  min-w-[120px] cursor-pointer flex-col items-center justify-center gap-3 rounded-lg drop-shadow-xl `}
              >
                <div
                  className={` flex h-20 w-20 items-center justify-center rounded-full shadow-lg group-hover:bg-white ${
                    filter === category.urlParamName
                      ? "bg-white"
                      : "bg-customGreen"
                  }`}
                >
                  <IoFastFood
                    className={`${
                      filter === category.urlParamName
                        ? "text-customBlack"
                        : "text-white"
                    } group-hover:text-customBlack text-4xl`}
                  />
                </div>
                <p
                  className={`text-2xl font-semibold ${
                    filter === category.urlParamName
                      ? "text-white"
                      : "text-customBlack"
                  } group-hover:text-white`}
                >
                  {category.name}
                </p>
              </motion.div>
            ))}
        </div>

        <div className="w-full ">
          <RowContainer
            flag={false}
            data={foodItems?.filter((n) => n.category === filter)}
          />
        </div>
      </div>
    </section>
  );
};

export default MenuContainer;
