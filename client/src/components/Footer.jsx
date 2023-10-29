import React from "react";

const Footer = () => {
  return (
    <section className=" bg-customBlack h-full w-screen overflow-hidden  ">
      <div className="py-6 md:mx-14 mx-8 ">
        <div className="flex flex-wrap justify-around gap-6">
          <div className="flex flex-col">
            <h3 className="pb-4 text-3xl text-white">locations</h3>
            <p className="block py-1 text-2xl text-[#abaaaa] ">japan</p>
            <p className="block py-1 text-2xl text-[#abaaaa] ">russia</p>
            <p className="block py-1 text-2xl text-[#abaaaa] ">USA</p>
            <p className="block py-1 text-2xl text-[#abaaaa] ">india</p>
            <p className="block py-1 text-2xl text-[#abaaaa] ">france</p>
          </div>
          <div className="flex flex-col">
            <h3 className="pb-4 text-3xl text-white">quick links</h3>
            <p className="block py-1 text-2xl text-[#abaaaa]  hover:text-customGreen hover:underline cursor-pointer">
              home
            </p>
            <p className="block py-1 text-2xl text-[#abaaaa]  hover:text-customGreen hover:underline cursor-pointer">
              menu
            </p>
            <p className="block py-1 text-2xl text-[#abaaaa]  hover:text-customGreen hover:underline cursor-pointer">
              about
            </p>
            <p className="block py-1 text-2xl text-[#abaaaa]  hover:text-customGreen hover:underline cursor-pointer">
              review
            </p>
          </div>

          <div className="flex flex-col">
            <h3 className="pb-4 text-3xl text-white">legal</h3>
            <p className="block py-1 text-2xl text-[#abaaaa] hover:text-customGreen hover:underline cursor-pointer">
              terms & conditions
            </p>
            <p className="block py-1 text-2xl text-[#abaaaa] hover:text-customGreen hover:underline cursor-pointer">
              cookie policy
            </p>
            <p className="block py-1 text-2xl text-[#abaaaa] hover:text-customGreen hover:underline cursor-pointer">
              privacy policy
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="pb-4 text-3xl text-white">contact info</h3>
            <p className="block py-1 text-2xl text-[#abaaaa] ">+123-456-7890</p>
            <p className="block py-1 text-2xl text-[#abaaaa] ">+111-222-3333</p>
            <p className="block py-1 text-2xl text-[#abaaaa] lowercase">
              resto@gmail.com
            </p>
            <p className="block py-1 text-2xl text-[#abaaaa] ">
              mumbai, india - 400104
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="pb-4 text-3xl text-white">follow us</h3>
            <p className="block py-1 text-2xl text-[#abaaaa] hover:text-customGreen hover:underline cursor-pointer">
              facebook
            </p>
            <p className="block py-1 text-2xl text-[#abaaaa] hover:text-customGreen hover:underline cursor-pointer">
              twitter
            </p>
            <p className="block py-1 text-2xl text-[#abaaaa] hover:text-customGreen hover:underline cursor-pointer">
              instagram
            </p>
            <p className="block py-1 text-2xl text-[#abaaaa] hover:text-customGreen hover:underline cursor-pointer">
              linkedin
            </p>
          </div>
        </div>
        <div className="block pt-4 text-xl text-center text-[#abaaaa] lowercase border-t-[.1rem] border-[rgba(128,127,127,0.8)]">
          copyright @ 2023 by{" "}
          <span className="capitalize text-customGreen font-semibold">
            resto.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
