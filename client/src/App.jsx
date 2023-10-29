import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import {setFoodItems} from "./redux/cartslice"
import { useDispatch } from "react-redux";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
const App = () => {
  const dispatch = useDispatch();
  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch(setFoodItems(data));
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <AnimatePresence mode="wait">
      <div className="  bg-primary flex h-full w-screen flex-col " >
        <Header />
        <br />
        <main className=" mt-14 w-full px-8 pt-[0.7rem] pb-8  md:mt-20 md:px-16 ">
          <Outlet />
          <ToastContainer className="z-[9999]"/>
        </main>
        <Footer/>
      </div>
    </AnimatePresence>
  );
};

export default App;
