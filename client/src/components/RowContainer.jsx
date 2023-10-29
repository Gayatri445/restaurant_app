import React, { useEffect, useRef } from "react";
import NotFound from "../img/NotFound.svg";
import FoodCard from "./FoodCard";

const RowContainer = ({ flag, data, scrollValue }) => {
  const rowContainer = useRef();
  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);


  return (
    <div
      ref={rowContainer}
      className={`my-12 flex w-full items-center scroll-smooth gap-6   ${
        flag
          ? "scrollbar-none overflow-x-scroll "
          : "flex-wrap justify-center overflow-x-hidden"
      }`}
    >
      {data && data.length > 0 ? (
        data.map((item) => <FoodCard key={item?.id} item={item} />)
      ) : (
        <div className="flex w-full flex-col items-center justify-center">
          <img src={NotFound} className="h-340" />
          <p className="text-headingColor my-2 text-xl font-semibold">
            Items Not Available
          </p>
        </div>
      )}
    </div>
  );
};

export default RowContainer;
