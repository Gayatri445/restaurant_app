import React from "react";
import img5 from "../img/c7.png";
import { FaDollarSign, FaShippingFast, FaHeadset } from "react-icons/fa";
const About = () => {
  return (
    <section
      className=" bg-white h-full w-screen overflow-hidden mb-12 "
      id="about"
    >
      <div className=" my-6 md:mx-14 mx-8 ">
        <p className=" text-customBlack before:content relative mr-auto from-orange-400 to-orange-600 text-[2.6rem] font-bold capitalize transition-all duration-100 ease-in-out before:absolute before:-bottom-2 before:left-0 before:h-1 before:w-16 before:rounded-lg before:bg-gradient-to-tr">
          about us
        </p>
        <h1 className="text-center text-customGreen md:text-[2.5rem] text-3xl py-6 capitalize font-semibold underline underline-offset-8 decoration-1 ">
          why choose us ?
        </h1>
        <div className="flex flex-wrap gap-6 items-center">
          <div className="flex-1  basis-[45rem] flex items-center justify-center px-8 ">
            <img src={img5} alt="" className="md:w-[75%] w-[50%] " />
          </div>
          <div className="flex-1 basis-[45rem] md:h-[49.75rem] flex flex-col justify-around pr-12 mr-8">
            <h3 className="text-customBlack md:text-5xl text-4xl font-semibold py-4 px-0">
              best food in the country
            </h3>
            <p className="text-customLight text-2xl text-justify ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus ipsam sequi dignissimos iusto inventore fuga
              dolorum autem voluptatem adipisci corporis. Soluta modi rem
              voluptas excepturi a nam, laudantium asperiores neque.Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Numquam, fuga.
            </p>
            <p className="text-customLight text-2xl text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              eaque veniam cumque eos voluptate ab! Quia repellendus suscipit
              dolor.Soluta modi rem voluptas excepturi a nam, laudantium
              asperiores neque.
            </p>
            <div className="flex gap-4 flex-wrap py-4 px-0 mt-2">
              <div className="bg-[#eee] rounded-lg border-[.1rem] border-[rgba(0,0,0,.2)] flex items-center justify-center gap-4 flex-1 py-4 px-3">
                <FaShippingFast className="text-4xl text-customGreen" />
                <span className="text-2xl text-customBlack">free delivery</span>
              </div>
              <div className="bg-[#eee] rounded-lg border-[.1rem] border-[rgba(0,0,0,.2)] flex items-center justify-center gap-4 flex-1 py-4 px-3">
                <FaDollarSign className="text-4xl text-customGreen" />
                <span className="text-2xl text-customBlack">easy payment</span>
              </div>
              <div className="bg-[#eee] rounded-lg border-[.1rem] border-[rgba(0,0,0,.2)] flex items-center justify-center gap-4 flex-1 py-4 px-3">
                <FaHeadset className="text-4xl text-customGreen" />
                <span className="text-2xl text-customBlack">24/7 service</span>
              </div>
            </div>
            <button className="capitalize md:w-[25%] w-full mt-4 inline-block text-2xl text-[#fff] bg-customBlack rounded-lg cursor-pointer py-5 px-6 hover:bg-customGreen hover:tracking-[.1rem] ">
              learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
