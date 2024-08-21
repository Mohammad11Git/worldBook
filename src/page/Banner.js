import React from "react";
import BannerCard from "./BannerCard";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
const Banner = () => {
  return (
    <div className="px-4 lg:px-24 bg-teal-100 flex items-center">
      <div className=" flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
        {/*side left */}
        <div className=" text-center md:text-start ">
          <h2 className="text-5xl font-bold leading-snug text-black">
            Buy and Sell Your Books
          </h2>
          <p className="text-5xl font-bold text-blue-700">
            for the best prices
          </p>
          <div className="flex justify-center  md:justify-start items-start">
            <p className=" w-1/2 text-gray-500 py-4 ">
              Find and read more books you will love, and keep track of the
              books you want to read.Be part of the worlds largest community of
              book lovers on Goodreads.
            </p>
          </div>
          <div className=" flex flex-col items-center gap-2 md:flex-row justify-start ">
            <p className=" text-gray-500 flex justify-start items-center gap-2 ">
              {" "}
              Click here to Search <FaArrowRightLong />{" "}
            </p>
            <Link to="/Search">
              <button className="bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200 rounded ">
                Search
              </button>
            </Link>
          </div>
        </div>
        {/*side right */}
        <div>
          <BannerCard />
        </div>
      </div>
    </div>
  );
};

export default Banner;
