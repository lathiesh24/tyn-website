import React from "react";
import { SlGlobe } from "react-icons/sl";
import { RiFlowChart } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";

const WhatWeDo = () => {
  return (
    <>
      <div className="bg-bgBlue flex flex-col sm:flex-row justify-around items-center px-0 sm:px-20 2xl:px-0 h-screenflex py-4 sm:py-16 sm:gap-10">
        <div className="text-2xl sm:text-5xl font-medium flex sm:hidden">What we do</div>
        <div className="2xl:m-0 sm:w-1/2 flex justify-center items-center pt-4 pb-2 sm:pt-0 sm:pb-0">
          <img
            className="rounded-[24px] object-cover cursor-pointer h-[140px] w-[340px] sm:h-[400px] sm:w-[600px] 2xl:w-[600px] 2xl:h-[400px]"
            src="/image3.png"
            alt="image2"
          />
        </div>
        <div className="flex flex-col sm:w-1/2 sm:gap-8 ">
          <div className="text-3xl sm:text-[40px] font-medium sm:flex hidden">What we do</div>

          <div className="flex flex-col py-4 sm:pt-0 gap-6 sm:gap-10 text-base sm:text-xl">
            <div className="bg-white p-3 sm:p-5 rounded-[18px] font-medium sm:text-[18px] sm:w-[450px] 2xl:w-[650px] flex gap-2 sm:gap-4 2xl:gap-4">
              <div className="text-customBlue">
                <SlGlobe size={30} />
              </div>
              We identify Ecosystem Stakeholders
            </div>

            <div className="bg-white p-3 sm:p-5 sm:text-[18px] rounded-[18px] font-medium sm:w-[450px] 2xl:w-[650px] flex gap-2 sm:gap-4 2xl:gap-4">
              <div className="text-customBlue">
                <RiFlowChart size={30} />
              </div>
              We define Ecosystem Strategy
            </div>

            <div className="bg-white p-3 sm:p-5 rounded-[18px] sm:text-[18px]  font-medium sm:w-[450px] 2xl:w-[650px] flex gap-2 sm:gap-4 2xl:gap-4">
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
