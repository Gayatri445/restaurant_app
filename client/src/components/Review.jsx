import React, { useRef } from "react";
import user1 from "../img/user1.jpg";
import user2 from "../img/user2.jpg";
import user3 from "../img/user3.jpg";
import user5 from "../img/user5.jpg";
import user6 from "../img/user6.jpg";
import user7 from "../img/user7.jpg";
import { FaStar, FaStarHalfAlt, FaQuoteRight } from "react-icons/fa";
const Review = () => {
  const rowContainer = useRef();
  return (
    <section className="my-6 w-full " id="review">
        <p className=" text-customBlack before:content relative from-orange-400 to-orange-600 text-[2.6rem] font-bold capitalize transition-all duration-100 ease-in-out before:absolute before:-bottom-2 before:left-0 before:h-1 before:w-32 before:rounded-lg before:bg-gradient-to-tr">
          customer's review
        </p>
        <h1 className="text-center text-customGreen md:text-[2.5rem] text-3xl py-6 capitalize font-semibold underline underline-offset-8 decoration-1 ">
          what they say
        </h1>

      <div
        ref={rowContainer}
        className="my-12 flex w-full items-center  gap-10 scroll-smooth scrollbar-none overflow-x-scroll"
        style={{ width: "100%" }}
      >
        <div className="relative p-8 shadow-customBoxShadow border-[.1rem] border-[rgba(0,0,0,0.2)]  rounded-lg md:min-w-[350px] min-w-[300px] h-[250px]">
          <FaQuoteRight className="absolute top-8 right-8 text-[4rem] text-[#ccc]" />
          <div className="flex gap-6 items-center pb-6">
            <img
              src={user1}
              alt=""
              className="h-[7rem] w-[7rem] rounded-[50%] object-cover"
            />
            <div className="user-info">
              <h3 className="text-customBlack text-[2rem] pb-2">john doe</h3>
              <div className="flex">
                <FaStar className="text-[1.3rem] text-customGreen" />
                <FaStar className="text-[1.3rem] text-customGreen" />
                <FaStar className="text-[1.3rem] text-customGreen" />
                <FaStar className="text-[1.3rem] text-customGreen" />
                <FaStarHalfAlt className="text-[1.3rem] text-customGreen" />
              </div>
            </div>
          </div>
          <p className="text-2xl text-customLight">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
            neque voluptate voluptatibus inventore, distinctio unde deleniti
            nemo velit error explicabo eum sed adipisci possimus, quibusdam
            soluta corporis maxime odio enim.
          </p>
        </div>
        <div className="relative p-8 shadow-customBoxShadow border-[.1rem] border-[rgba(0,0,0,0.2)]  rounded-lg md:min-w-[350px] min-w-[300px] h-[250px]">
          <FaQuoteRight className="absolute top-8 right-8 text-[4rem] text-[#ccc]" />
          <div className="flex gap-6 items-center pb-6">
            <img
              src={user2}
              alt=""
              className="h-[7rem] w-[7rem] rounded-[50%] object-cover"
            />
            <div className="user-info">
              <h3 className="text-customBlack text-[2rem] pb-2">jessica smith</h3>
              <div className="flex">
                <FaStar className="text-[1.3rem] text-customGreen" />
                <FaStar className="text-[1.3rem] text-customGreen" />
                <FaStar className="text-[1.3rem] text-customGreen" />
                <FaStar className="text-[1.3rem] text-customGreen" />
                <FaStarHalfAlt className="text-[1.3rem] text-customGreen" />
              </div>
            </div>
          </div>
          <p className="text-2xl text-customLight">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
            neque voluptate voluptatibus inventore, distinctio unde deleniti
            nemo velit error explicabo eum sed adipisci possimus, quibusdam
            soluta corporis maxime odio enim.
          </p>
        </div>
        <div className="relative p-8 shadow-customBoxShadow border-[.1rem] border-[rgba(0,0,0,0.2)]  rounded-lg md:min-w-[350px] min-w-[300px] h-[250px]">
          <FaQuoteRight className="absolute top-8 right-8 text-[4rem] text-[#ccc]" />
          <div className="flex gap-6 items-center pb-6">
            <img
              src={user3}
              alt=""
              className="h-[7rem] w-[7rem] rounded-[50%] object-cover"
            />
            <div className="user-info">
              <h3 className="text-customBlack text-[2rem] pb-2">mary riley</h3>
              <div className="flex">
                <FaStar className="text-[1.3rem] text-customGreen" />
                <FaStar className="text-[1.3rem] text-customGreen" />
                <FaStar className="text-[1.3rem] text-customGreen" />
                <FaStar className="text-[1.3rem] text-customGreen" />
                <FaStarHalfAlt className="text-[1.3rem] text-customGreen" />
              </div>
            </div>
          </div>
          <p className="text-2xl text-customLight">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
            neque voluptate voluptatibus inventore, distinctio unde deleniti
            nemo velit error explicabo eum sed adipisci possimus, quibusdam
            soluta corporis maxime odio enim.
          </p>
        </div>
        <div className="relative p-8 shadow-customBoxShadow border-[.1rem] border-[rgba(0,0,0,0.2)]  rounded-lg md:min-w-[350px] min-w-[300px] h-[250px]">
          <FaQuoteRight className="absolute top-8 right-8 text-[4rem] text-[#ccc]" />
          <div className="flex gap-6 items-center pb-6">
            <img
              src={user5}
              alt=""
              className="h-[7rem] w-[7rem] rounded-[50%] object-cover"
            />
            <div className="user-info">
              <h3 className="text-customBlack text-[2rem] pb-2">mark turner</h3>
              <div className="flex ">
                <FaStar className="text-[1.3rem] text-customGreen" />
                <FaStar className="text-[1.3rem] text-customGreen" />
                <FaStar className="text-[1.3rem] text-customGreen" />
                <FaStar className="text-[1.3rem] text-customGreen" />
                <FaStarHalfAlt className="text-[1.3rem] text-customGreen" />
              </div>
            </div>
          </div>
          <p className="text-2xl text-customLight">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
            neque voluptate voluptatibus inventore, distinctio unde deleniti
            nemo velit error explicabo eum sed adipisci possimus, quibusdam
            soluta corporis maxime odio enim.
          </p>
        </div>
        <div className="relative p-8 shadow-customBoxShadow border-[.1rem] border-[rgba(0,0,0,0.2)]  rounded-lg md:min-w-[350px] min-w-[300px] h-[250px]">
          <FaQuoteRight className="absolute top-8 right-8 text-[4rem] text-[#ccc]" />
          <div className="flex gap-6 items-center pb-6">
            <img
              src={user6}
              alt=""
              className="h-[7rem] w-[7rem] rounded-[50%] object-cover"
            />
            <div className="user-info">
              <h3 className="text-customBlack text-[2rem] pb-2">sarah</h3>
              <div className="flex ">
                <FaStar className="text-[1.3rem] text-customGreen" />
                <FaStar className="text-[1.3rem] text-customGreen" />
                <FaStar className="text-[1.3rem] text-customGreen" />
                <FaStar className="text-[1.3rem] text-customGreen" />
                <FaStarHalfAlt className="text-[1.3rem] text-customGreen" />
              </div>
            </div>
          </div>
          <p className="text-2xl text-customLight">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
            neque voluptate voluptatibus inventore, distinctio unde deleniti
            nemo velit error explicabo eum sed adipisci possimus, quibusdam
            soluta corporis maxime odio enim.
          </p>
        </div>
        <div className="relative p-8 shadow-customBoxShadow border-[.1rem] border-[rgba(0,0,0,0.2)]  rounded-lg md:min-w-[350px] min-w-[300px] h-[250px]">
          <FaQuoteRight className="absolute top-8 right-8 text-[4rem] text-[#ccc]" />
          <div className="flex gap-6 items-center pb-6">
            <img
              src={user7}
              alt=""
              className="h-[7rem] w-[7rem] rounded-[50%] object-cover"
            />
            <div className="user-info">
              <h3 className="text-customBlack text-[2rem] pb-2">nick gibson</h3>
              <div className="flex ">
                <FaStar className="text-[1.3rem] text-customGreen" />
                <FaStar className="text-[1.3rem] text-customGreen" />
                <FaStar className="text-[1.3rem] text-customGreen" />
                <FaStar className="text-[1.3rem] text-customGreen" />
                <FaStarHalfAlt className="text-[1.3rem] text-customGreen" />
              </div>
            </div>
          </div>
          <p className="text-2xl text-customLight">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
            neque voluptate voluptatibus inventore, distinctio unde deleniti
            nemo velit error explicabo eum sed adipisci possimus, quibusdam
            soluta corporis maxime odio enim.
          </p>
        </div>
       
      </div>
    </section>
  );
};

export default Review;
