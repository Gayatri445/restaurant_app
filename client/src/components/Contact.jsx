import React from "react";
import {
  FaFacebook,
  FaPinterest,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { useState } from "react";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sub, setSub] = useState("");
  const [msg, setMsg] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setSub("");
    setMsg("");
  };
  return (
    <section
      className=" bg-white h-full w-screen overflow-hidden mb-12"
      id="contact"
    >
      <div className=" my-6 md:mx-14 mx-8 ">
        <p className=" text-customBlack before:content relative mr-auto from-orange-400 to-orange-600 text-[2.6rem] font-bold capitalize transition-all duration-100 ease-in-out before:absolute before:-bottom-2 before:left-0 before:h-1 before:w-16 before:rounded-lg before:bg-gradient-to-tr">
          contact us
        </p>
        <h1 className="text-center text-customGreen md:text-[2.5rem] text-3xl py-6 capitalize font-semibold underline underline-offset-8 decoration-1 ">
          get in touch
        </h1>
        <div className="flex flex-wrap gap-6 items-center ">
          <div className="flex-1  basis-[45rem] flex md:flex-row flex-col items-center justify-around gap-6 ">
            <div className="py-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2382.3724973173516!2d72.84959876302635!3d19.071886243870974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1698092213361!5m2!1sen!2sin"
                width="420"
                height="270"
                loading="lazy"
              ></iframe>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <h1 className="uppercase text-2xl font-bold text-customBlack">
                  Address
                </h1>
                <p className="text-customLight text-3xl ">
                  mumbai, india - 400104
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <h1 className="uppercase text-2xl font-bold text-customBlack">
                  Phone Number
                </h1>
                <p className="text-customLight text-3xl">+123-456-7890</p>
                <p className="text-customLight text-3xl ">+111-222-3333</p>
              </div>

              <div className="flex flex-col gap-2">
                <h1 className="uppercase text-2xl font-bold text-customBlack">
                  Email Address
                </h1>
                <p className="text-customLight text-3xl  lowercase">
                  resto@gmail.com
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <h1 className="uppercase text-2xl font-bold text-customBlack">
                  Follow us
                </h1>
                <div className="flex text-3xl text-customLight gap-4">
                  <FaFacebook className="cursor-pointer hover:text-blue-700" />
                  <FaTwitter className="cursor-pointer hover:text-blue-700" />
                  <FaInstagram className="cursor-pointer hover:text-blue-700" />
                  <FaPinterest className="cursor-pointer hover:text-blue-700" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 basis-[45rem]  flex flex-col justify-center p-16 py-8">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-8 p-4 px-12 ">
                <div className="flex gap-6 ">
                  <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    type="text"
                    placeholder="Your Name"
                    className="px-4 py-2 border-0 outline-0 bg-[#cecdcd] w-[50%] h-[40px] text-customBlack text-2xl font-semibold rounded-md"
                  />
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="email"
                    placeholder="Your Email"
                    className="px-4 py-2 border-0 outline-0 bg-[#cecdcd] w-[50%] h-[40px] text-customBlack text-2xl font-semibold rounded-md"
                  />
                </div>
                <input
                  onChange={(e) => setSub(e.target.value)}
                  value={sub}
                  type="text"
                  placeholder="Subject"
                  className="px-4 py-2 border-0 outline-0 bg-[#cecdcd] w-full h-[40px] text-customBlack text-2xl font-semibold rounded-md"
                />
                <textarea
                  onChange={(e) => setMsg(e.target.value)}
                  value={msg}
                  placeholder="Message"
                  className="px-4 py-2 border-0 outline-0 bg-[#cecdcd] w-full h-[150px] text-customBlack text-2xl font-semibold rounded-md"
                />
                <div className="flex items-center justify-center">
                  <button className="capitalize md:w-[30%] w-full inline-block text-2xl text-[#fff] bg-customBlack rounded-lg cursor-pointer py-5 px-6 hover:bg-customGreen hover:tracking-[.1rem] ">
                    submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
