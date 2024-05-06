import React from "react";
import { SlGlobe } from "react-icons/sl";
import { RiFlowChart } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";

const WhatWeDo = () => {
  return (
    <>
      <div className="bg-cyan-50 flex justify-around items-center px-20 h-screen gap-10">
        {/* What we do image */}
        <div className="m-5 w-1/2 flex justify-center items-center">
          <img
            className="rounded-xl 2xl:rounded-2xl object-cover cursor-pointer h-[400px] w-[600px] 2xl:w-[700px] 2xl:h-[500px]"
            src="/image3.png"
            alt="image2"
          />
        </div>

        {/* What we do context */}
        <div className="flex flex-col w-1/2 gap-8 2xl:gap-10">
          <div className="text-4xl 2xl:text-6xl font-medium">What we do</div>

          <div className="flex flex-col gap-10 text-lg 2xl:text-3xl">
            <div className="bg-white p-6 rounded-lg w-[450px] 2xl:w-[650px] flex gap-4 2xl:gap-8">
              <SlGlobe color="darkblue" size={30} />
              We identify Ecosystem Stakeholders
            </div>

            <div className="bg-white p-6 rounded-lg w-[450px] 2xl:w-[650px] flex gap-4 2xl:gap-8">
              <RiFlowChart color="darkblue" size={30} />
              We define Ecosystem Strategy
            </div>

            <div className="bg-white p-6 rounded-lg w-[450px] 2xl:w-[650px] flex gap-4 2xl:gap-8">
              <IoSettingsOutline color="darkblue" size={30} />
              We build and Orchestrate Ecosystem
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;
