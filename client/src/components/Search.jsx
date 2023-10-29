import React, { useState } from "react";
import { MdClose } from "react-icons/md";

import FoodCard from "./FoodCard";
import { useSelector } from "react-redux";

const Search = ({ setShowSearch }) => {
  const [filteredData, setFilteredData] = useState(null);
  const { foodItems } = useSelector((state) => state.cart);

  const handleSearch = (e) => {
    setShowSearch(true);
    const searchValue = e.target.value;
    if (searchValue === " ") setFilteredData(null);
    else {
      if (foodItems?.length > 0) {
        const filter = foodItems?.filter((item) =>
          item.title?.toLowerCase().includes(searchValue.toLowerCase())
        );
        setFilteredData(filter);
      }
    }
  };

  return (
    <>
      <div className="fixed w-full h-full top-0 left-0 z-[999] bg-white overflow-y-auto">
        <div className="relative w-full flex justify-center px-12 py-3 border-b-2 border-[rgba(0,0,0,0.1)] md:py-0 md:px-0 ">
          <input
            type="text"
            placeholder="search food"
            // value={input}
            onChange={handleSearch}
            className="w-full max-w-6xl h-12 text-center text-xl font-semibold border-0 outline-0 text-customBlack md:h-[80px] md:text-5xl "
          />
          <MdClose
            onClick={() => setShowSearch(false)}
            className="absolute text-2xl right-5 top-[50%] -translate-y-[50%] cursor-pointer md:right-10 md:text-5xl"
          />
        </div>

        <div className="max-w-[calc(100% - 20px)] flex items-center justify-center px-6  my-2  md:min-w-[800px] min-h-[87%] bg-primary">
          <div className="w-full max-h-full  flex items-center justify-center flex-wrap gap-4 ">
            {filteredData &&
              filteredData?.length > 0 &&
              filteredData?.map((item) => (
                <FoodCard key={item?.id} item={item} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
