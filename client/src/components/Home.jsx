import React, { useEffect, useState } from "react";
import spicyNoodles from "../img/img4.jpg";
import friedChicken from "../img/img5.jpg";
import hotPizza from "../img/img8.jpg";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [currentSlide]);

  const scrollToSection = (goTo) => {
    document.querySelector("#" + goTo).scrollIntoView({ behavior: "smooth" });
  };
  const menuItemClickHandler = (section) => {
    scrollToSection(section);
  };

  return (
    <section className="relative bg-white h-full w-screen overflow-hidden mb-12 ">
      <div
        className="w-[300vw] h-full flex transition-all ease-in-out duration-100"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <div className="flex items-center md:flex-row flex-col flex-wrap gap-8 py-10 px-[40px] w-screen h-full object-contain">
          <div className="flex-1 p-2 flex flex-col md:gap-10 gap-6">
            <span className="text-customGreen md:text-4xl text-3xl">
              our special dish
            </span>
            <h3 className="text-customBlack md:text-8xl text-6xl font-semibold">
              spicy noodles
            </h3>
            <p className="text-customLight md:text-2xl text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              ducimus impedit, veritatis inventore recusandae, sed officia, enim
              nisi non perferendis tenetur incidunt odit, Dicta molestiae
              repudiandae corporis quasi veritatis.
            </p>

            <button
              onClick={() => menuItemClickHandler("menu")}
              className="md:w-[185px] w-full md:mt-12  mt-4 inline-block md:text-2xl text-xl text-[#fff] bg-customBlack rounded-lg cursor-pointer md:py-5 py-2 md:px-6 px-3 hover:bg-customGreen hover:tracking-[.1rem] "
            >
              Order Now
            </button>
          </div>
          <div className="flex-1 ">
            <img src={spicyNoodles} alt="" className="md:w-[75%] md:h-[75%]" />
          </div>
        </div>
        <div className="flex items-center md:flex-row flex-col flex-wrap gap-8 py-10 px-[40px] w-screen h-full object-contain ">
          <div className="flex-1 p-2  flex flex-col  md:gap-10 gap-6">
            <span className="text-customGreen md:text-4xl text-3xl ">
              our special dish
            </span>
            <h3 className="text-customBlack md:text-8xl text-6xl font-semibold">
              fried chicken
            </h3>
            <p className="text-customLight md:text-2xl text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              ducimus impedit, veritatis inventore recusandae, sed officia, enim
              nisi non perferendis tenetur incidunt odit, Dicta molestiae
              repudiandae corporis quasi veritatis.
            </p>
            <button
              onClick={() => menuItemClickHandler("menu")}
              className="md:w-[185px] w-full md:mt-12  mt-4 inline-block text-2xl text-[#fff] bg-customBlack rounded-lg cursor-pointer md:py-5 py-2 md:px-6 px-3 hover:bg-customGreen hover:tracking-[.1rem] "
            >
              Order Now
            </button>
          </div>
          <div className="flex-1 ">
            <img src={friedChicken} alt="" className="md:w-[75%] md:h-[75%]" />
          </div>
        </div>
        <div className="flex items-center md:flex-row flex-col flex-wrap gap-8 py-10 px-[40px] w-screen h-full object-contain  ">
          <div className="flex-1 p-2 flex flex-col md:gap-10 gap-6">
            <span className="text-customGreen md:text-4xl text-3xl">
              our special dish
            </span>
            <h3 className="text-customBlack md:text-8xl text-6xl font-semibold">
              hot pizza
            </h3>
            <p className="text-customLight md:text-2xl text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              ducimus impedit, veritatis inventore recusandae, sed officia, enim
              nisi non perferendis tenetur incidunt odit, Dicta molestiae
              repudiandae corporis quasi veritatis.
            </p>
            <button
              onClick={() => menuItemClickHandler("menu")}
              className="md:w-[185px] w-full md:mt-12 mt-4 inline-block text-2xl text-[#fff] bg-customBlack rounded-lg cursor-pointer md:py-5 py-2 md:px-6 px-3 hover:bg-customGreen hover:tracking-[.1rem] "
            >
              Order Now
            </button>
          </div>
          <div className="flex-1 ">
            <img src={hotPizza} alt="" className="md:w-[75%] md:h-[75%]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
