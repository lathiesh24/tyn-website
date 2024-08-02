import React from "react";
import CardSpeakers from "./CardSpeakers";

const Speakers = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center sm:bg-blue-50 pb-12 sm:pb-24">
        <div className="text-3xl sm:text-4xl text-customBlack sm:text-customBlue font-medium mt-28 sm:mt-12">
          <div className="grid">
            <div className="relative">
              <div className="absolute -top-8 -right-8 h-8 w-8">
                <img src="doublequotes.jpg" alt="Double Quotes" />
              </div>
              <div className="text-4xl font-medium">Speakers</div>
            </div>
          </div>
        </div>
        <div className="sm:pt-0 pt-20">
          <CardSpeakers />
        </div>
      </div>
    </>
  );
};

export default Speakers;
