import React from "react";
import { BiSolidQuoteLeft, BiSolidQuoteRight } from "react-icons/bi";

const Testimonials = () => {
  return (
    <div className="mx-32 mt-32">
      <div className="text-3xl font-bold mb-8">Testimonials</div>
      <div className="flex flex-row gap-x-8 w-full">
        <div className="w-[40%]">
          <img src="/bo-nielson.png" alt="Bo Nielson" className=" rounded-full" />
          <div className="mt-4 font-semibold text-lg">Bo Nielson</div>
          <div className="text-gray-500">Sales Head, ThirdAI</div>
        </div>
        <div className="relative p-8 bg-bgBlue rounded-lg shadow-lg text-gray-600 italic">
          <BiSolidQuoteLeft className="absolute text-customYellow text-6xl top-0 left-0 -translate-x-4 -translate-y-6" />
          <div className="text-lg pl-8">
            We are a start-up and the Yellow Network opened doors to large
            Global Systems Integrators at a rate that we never could have
            accomplished. The broad net they cast allowed us to find the right
            partners and account managers to build a revenue pipeline.
          </div>
          <BiSolidQuoteRight className="absolute text-customYellow text-6xl bottom-0 right-0 translate-x-4 translate-y-6" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
