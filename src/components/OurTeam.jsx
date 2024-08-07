import React from "react";
import CardOurTeam from "./CardOurTeam";

const OurTeam = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center sm:bg-blue-50 pb-12 sm:pb-56">
        <div className="text-3xl sm:text-4xl text-customBlack sm:text-customBlue font-medium mt-16 sm:mt-12">
          <div className="grid">
            <div className="relative">
              <div className="absolute -top-8 -right-8 h-8 w-8">
                <img src="doublequotes.jpg" alt="Double Quotes" />
              </div>
              <div className="text-4xl font-medium">Our Team</div>
            </div>
          </div>
        </div>
        <div className="sm:pt-0 pt-12">
          <CardOurTeam />
        </div>
      </div>
    </>
  );
};

export default OurTeam;
