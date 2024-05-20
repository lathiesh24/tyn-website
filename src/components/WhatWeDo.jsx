import React from "react";
import { SlGlobe } from "react-icons/sl";
import { RiFlowChart } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";

const WhatWeDo = () => {
  return (
    <>
      <div className="bg-blue-50 flex flex-col sm:flex-row justify-around items-center px-0 sm:px-20 2xl:px-0 h-screenflex py-4 sm:py-16 sm:gap-10">
        <div className="text-2xl sm:text-5xl font-medium flex sm:hidden">What we do</div>
        <div className="m-5 2xl:m-0 sm:w-1/2 flex justify-center items-center">
          <img
            className="rounded-xl 2xl:rounded-2xl object-cover cursor-pointer h-[140px] w-[400px] sm:h-[400px] sm:w-[600px] 2xl:w-[600px] 2xl:h-[400px]"
            src="/image3.png"
            alt="image2"
          />
        </div>
        <div className="flex flex-col sm:w-1/2 sm:gap-8 2xl:gap-10">
          <div className="text-3xl sm:text-5xl font-medium sm:flex hidden">What we do</div>

          <div className="flex flex-col py-4 sm:pt-0 gap-6 sm:gap-10 text-base sm:text-xl">
            <div className="bg-white p-3 sm:p-6 rounded-lg sm:w-[450px] 2xl:w-[650px] flex gap-2 sm:gap-4 2xl:gap-4">
              <div className="text-customBlue">
                <SlGlobe size={30} />
              </div>
              We identify Ecosystem Stakeholders
            </div>

            <div className="bg-white p-3 sm:p-6 rounded-lg sm:w-[450px] 2xl:w-[650px] flex gap-2 sm:gap-4 2xl:gap-4">
              <div className="text-customBlue">
                <RiFlowChart size={30} />
              </div>

              We define Ecosystem Strategy
            </div>

            <div className="bg-white p-3 sm:p-6 rounded-lg sm:w-[450px] 2xl:w-[650px] flex gap-2 sm:gap-4 2xl:gap-4">
              <div className="text-customBlue">
                <IoSettingsOutline size={30} />
              </div>
              We build and Orchestrate Ecosystem
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;
