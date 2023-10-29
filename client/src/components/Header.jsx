import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Avatar from "../img/avatar.png";
import { MdAdd, MdLogout } from "react-icons/md";
import { FaUtensils, FaShoppingCart, FaBars } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { motion } from "framer-motion";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import Search from "./Search";
import { useDispatch, useSelector } from "react-redux";
import { setCartShow, addUser, removeUser } from "../redux/cartslice";
import { toast } from "react-toastify";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const { user, cartShow, cartItems } = useSelector((state) => state.cart);
  const [menuList, setMenuList] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const login = async (e) => {
    e.preventDefault();
    if (!user) {
      try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        dispatch(
          addUser({
            _id: user.uid,
            name: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          })
        );
        //save the value in localstorage
        localStorage.setItem("user", JSON.stringify(user));
        setTimeout(() => {
          navigate(`/`);
        }, 1500);
      } catch (error) {
        console.log("error : ", error);
      }
    } else {
      setIsMenu(!isMenu);
    }
  };

  const logout = async (e) => {
    e.preventDefault();
    try {
      await signOut(auth);
      toast.success("Logged out successfully", {
        hideProgressBar: true,
        style: {
          fontSize: "14px",
        },
      });
      dispatch(removeUser());
      localStorage.clear();
    } catch (error) {
      console.error("Error signing out:", error);
    }
    setIsMenu(false);
  };

  const showCart = () => {
    dispatch(setCartShow(!cartShow));
  };

  const scrollToSection = (goTo) => {
    document.querySelector("#" + goTo).scrollIntoView({ behavior: "smooth" });
  };
  const menuItemClickHandler = (section) => {
    scrollToSection(section);
  };

  return (
    <header className=" bg-customBlack fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 shadow-customBoxShadow  h-[6rem] ">
      {/*  desktop & tablet */}
      <div className="hidden h-full w-full items-center justify-between md:flex ">
        <Link to={"/"} className="flex items-center gap-2">
          <FaUtensils className="text-customGreen text-4xl font-bold" />
          <p className="text-white text-4xl font-bold">resto.</p>
        </Link>

        <div className="flex items-center gap-4">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className=" flex items-center gap-4 "
          >
            <Link to={"/"}>
              <li
                onClick={() => window.scrollTo(0, 0)}
                className="md:text-white font-semibold  px-5 py-2 rounded-lg text-customBlack  hover:text-[#fff] hover:bg-customGreen cursor-pointer text-2xl transition-all duration-100 ease-in-out"
              >
                Home
              </li>
            </Link>

            <li
              onClick={() => menuItemClickHandler("menu")}
              className="md:text-white font-semibold px-5 py-2 rounded-lg text-customBlack hover:text-[#fff] hover:bg-customGreen cursor-pointer text-2xl transition-all duration-100 ease-in-out"
            >
              Menu
            </li>
            <li
              onClick={() => menuItemClickHandler("about")}
              className="md:text-white font-semibold px-5 py-2 rounded-lg text-customBlack hover:text-[#fff] hover:bg-customGreen cursor-pointer text-2xl transition-all duration-100 ease-in-out"
            >
              About Us
            </li>
            <li
              onClick={() => menuItemClickHandler("review")}
              className="md:text-white font-semibold px-5 py-2 rounded-lg text-customBlack hover:text-[#fff] hover:bg-customGreen cursor-pointer text-2xl transition-all duration-100 ease-in-out"
            >
              Review
            </li>
            <li
              onClick={() => menuItemClickHandler("contact")}
              className="md:text-white font-semibold px-5 py-2 rounded-lg text-customBlack hover:text-[#fff] hover:bg-customGreen cursor-pointer text-2xl transition-all duration-100 ease-in-out"
            >
              Contact Us
            </li>
          </motion.ul>
          <div className=" flex items-center justify-center  gap-4 ">
            <div
              className="flex items-center justify-center bg-[#faf7f7f8] w-12 h-12 hover:bg-customGreen rounded-[50%]"
              onClick={() => setShowSearch(true)}
            >
              <BiSearch className=" cursor-pointer  text-textColor hover:text-[#fff] text-2xl" />
            </div>

            <div className="flex items-center justify-center bg-[#faf7f7f8] w-12 h-12 hover:bg-customGreen rounded-[50%]">
              <AiFillHeart className=" cursor-pointer  text-textColor hover:text-[#fff] text-2xl" />
            </div>
            <div
              className="  relative flex items-center justify-center bg-[#faf7f7f8] w-12 h-12 hover:bg-customGreen rounded-[50%]"
              onClick={showCart}
            >
              <FaShoppingCart className=" cursor-pointer  text-textColor hover:text-[#fff] text-2xl" />

              {cartItems && cartItems.length > 0 && (
                <div className=" bg-cartNumBg absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full">
                  <p className="text-xs font-semibold text-white">
                    {cartItems.length}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="relative">
            <div className="flex gap-2 items-center">
              <motion.img
                onClick={login}
                whileTap={{ scale: 0.6 }}
                src={user?.photoURL ? user?.photoURL : Avatar}
                alt="userprofile"
                className="min-h-[30px] w-8 min-w-[30px] cursor-pointer rounded-full drop-shadow-xl"
              />
              {user && <p className="text-white text-xl">{user.name}</p>}
            </div>

            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="absolute right-0 top-16 flex w-56  flex-col rounded-lg bg-gray-50 shadow-xl "
              >
                {user && user.email === "ggayatri.1313@gmail.com" && (
                  <Link to={"/createItem"}>
                    <p
                      className="text-customBlack flex cursor-pointer items-center gap-3 px-4 py-2 text-2xl transition-all duration-100 ease-in-out hover:bg-customGreen hover:text-white "
                      onClick={() => setIsMenu(false)}
                    >
                      New Item
                      <MdAdd />
                    </p>
                  </Link>
                )}
                <p
                  className="text-textColor flex cursor-pointer items-center gap-3 px-4 py-2 text-2xl transition-all duration-100 ease-in-out  hover:bg-customGreen hover:text-white"
                  onClick={logout}
                >
                  Logout
                  <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/*  mobile */}
      <div className=" flex h-full w-full items-center justify-between md:hidden">
        <Link to={"/"} className="flex items-center gap-2">
          <FaUtensils className="text-customGreen text-2xl font-bold" />
          <p className="text-white text-2xl font-bold">resto.</p>
        </Link>

        <div className="flex items-center gap-3">
          <div
            className="relative flex items-center justify-center bg-[#e0ddddf8] w-12 h-12 hover:bg-customGreen rounded-[50%] "
            onClick={() => setMenuList((prev) => !prev)}
          >
            <FaBars className=" cursor-pointer  text-textColor hover:text-[#fff] text-2xl" />
            {menuList && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="absolute top-14 flex  w-40 h-50  flex-col rounded-lg bg-gray-50 shadow-xl  "
              >
                <ul className=" flex flex-col justify-center items-center w-full h-full ">
                  <Link to={"/"}>
                    <li
                      onClick={() => window.scrollTo(0, 0)}
                      className="text-textColor cursor-pointer px-4 py-2 text-base transition-all duration-100 ease-in-out w-40 text-center hover:bg-customGreen hover:text-[#fff]  bg-[#eee] mt-2 rounded-md"
                    >
                      Home
                    </li>
                  </Link>

                  <li
                    onClick={() => menuItemClickHandler("menu")}
                    className="text-textColor  cursor-pointer px-4 py-2 text-base transition-all duration-100 ease-in-out  w-40 text-center hover:bg-customGreen hover:text-[#fff] bg-[#eee] mt-2 rounded-md"
                  >
                    Menu
                  </li>
                  <li
                    onClick={() => menuItemClickHandler("about")}
                    className="text-textColor  cursor-pointer px-4 py-2 text-base transition-all duration-100 ease-in-out  w-40 text-center hover:bg-customGreen hover:text-[#fff] bg-[#eee] mt-2 rounded-md"
                  >
                    About Us
                  </li>
                  <li
                    onClick={() => menuItemClickHandler("review")}
                    className="text-textColor  cursor-pointer px-4 py-2 text-base transition-all duration-100 ease-in-out  w-40 text-center hover:bg-customGreen hover:text-[#fff] bg-[#eee] mt-2 rounded-md"
                  >
                    Review
                  </li>
                  <li
                    onClick={() => menuItemClickHandler("contact")}
                    className="text-textColor  cursor-pointer px-4 py-2 text-base transition-all duration-100 ease-in-out  w-40 text-center hover:bg-customGreen hover:text-[#fff] bg-[#eee] my-2 rounded-md"
                  >
                    Contact
                  </li>
                </ul>
              </motion.div>
            )}
          </div>
          <div
            className="flex items-center justify-center bg-[#e0ddddf8] w-12 h-12 hover:bg-customGreen rounded-[50%]"
            onClick={() => setShowSearch(true)}
          >
            <BiSearch className=" cursor-pointer  text-textColor hover:text-[#fff] text-2xl" />
          </div>
          <div className="flex items-center justify-center bg-[#e0ddddf8] w-12 h-12 hover:bg-customGreen rounded-[50%] ">
            <AiFillHeart className=" cursor-pointer  text-textColor hover:text-[#fff] text-2xl" />
          </div>

          <div
            className="relative flex items-center justify-center  bg-[#e0ddddf8] w-12 h-12 hover:bg-customGreen rounded-[50%]"
            onClick={showCart}
          >
            <FaShoppingCart className=" cursor-pointer text-textColor hover:text-[#fff] text-2xl" />
            {cartItems && cartItems.length > 0 && (
              <div className="bg-cartNumBg absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full">
                <p className="text-xs font-semibold text-white">
                  {cartItems.length}
                </p>
              </div>
            )}
          </div>

          <div className="relative pr-6">
            <div className="flex items-center gap-2">
              <motion.img
                whileTap={{ scale: 0.6 }}
                src={user?.photoURL ? user?.photoURL : Avatar}
                alt="userprofile"
                className="min-h-[30px] w-8 min-w-[30px]  cursor-pointer rounded-full drop-shadow-xl "
                onClick={login}
              />
              {user && <p className="text-white text-xl">{user.name}</p>}
            </div>

            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="absolute right-0 top-14 flex w-40 flex-col rounded-lg bg-gray-50 shadow-xl "
              >
                {user && user.email === "ggayatri.1313@gmail.com" && (
                  <Link to={"/createItem"}>
                    <p
                      className="text-customBlack flex cursor-pointer items-center gap-3 px-4 py-2 text-xl transition-all duration-100 ease-in-out  hover:bg-customGreen hover:text-white"
                      onClick={() => setIsMenu(false)}
                    >
                      New Item
                      <MdAdd />
                    </p>
                  </Link>
                )}

                <p
                  className="text-customBlack m-2 flex cursor-pointer items-center justify-center gap-3 rounded-md bg-gray-200 p-2 text-xl shadow-md transition-all duration-100 ease-in-out hover:bg-gray-300"
                  onClick={logout}
                >
                  Logout
                  <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      {showSearch && <Search setShowSearch={setShowSearch} />}
    </header>
  );
};

export default Header;
