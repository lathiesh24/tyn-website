import React from "react";
import Navbar from "./Navbar";
import { FaArrowRight } from "react-icons/fa";
import Footer from "./Footer";

const EventReworked = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div
        className="relative bg-center bg-cover h-screen"
        style={{
          backgroundImage:
            'linear-gradient(to right, #FFF25CF2, rgba(255, 242, 92, 0)), url("/eventbg.png")',
        }}
      >
        <div className="absolute inset-0 justify-end items-center text-right p-4 grid grid-cols-2">
          <div className="flex flex-col justify-center items-end gap-5 col-span-1 pr-32">
            <div>
              <img
                src="/YInfinity-event.png"
                alt="Y Infinity event"
                className="h-60"
              />
            </div>
            <div className="text-2xl text-customBlack font-medium">
              September 10
            </div>
            <div className="text-2xl text-customBlack font-medium">
              Sofitel BKC, Mumbai
            </div>
            <div className="text-2xl text-customBlack font-medium">
              4:30pm Onwards
            </div>
          </div>
          <div></div>
        </div>
      </div>

      <div className="relative flex flex-col items-center justify-center my-16 text-5xl">
        <div className="relative">
          <div className="absolute -top-6 -right-8">
            <img
              src="doublequotes.jpg"
              alt="Double Quotes"
              className="h-8 w-8"
            />
          </div>
          <div>
            <span className="text-customBlack">Welcome to </span>
            <span className="bg-custom-gradient text-transparent bg-clip-text">
              Ynifity
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 px-32 place-content-between items-center">
        <div className="space-y-4">
          <div className="text-customGreyishBlack leading-loose text-lg">
            Unlock the potential of Ecosystem and lead your innovation game!
            Ynfinity is an invite-only CXO event themed around 'Sustainable
            innovation through ecosystem'. Gain access to the exclusive event
            and discover strategies and insights on how ecosystems can empower
            innovation in your organization.
          </div>
          <div>
            <button className="flex flex-row items-center justify-center gap-2 bg-customBlue text-white py-2 px-4 rounded-md">
              <div>Register</div>
              <div>
                <FaArrowRight />
              </div>
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <img src="/Group 1.png" alt="event" className="w-72" />
        </div>
      </div>

      <div className="grid grid-cols-2 my-32 mx-8">
        <div className=" flex flex-col text-5xl font-medium items-center justify-center gap-4">
          <div className="relative flex gap-4">
            <div className="absolute -right-8 -top-6 ">
              <img
                src="doublequotes.jpg"
                alt="Double Quotes"
                className="h-8 w-8"
              />
            </div>
            <span className="text-customBlue">Y</span>
            <span className="text-customBlack">I need to</span>
          </div>
          <div className="">
            <span>attend</span>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2 bg-bgBlue px-6 py-4 rounded-lg ">
            <div className="text-customBlack font-medium text-xl">
              Discover Cutting-Edge Strategies
            </div>
            <div className="text-customGreyishBlack">
              Gain insights into sustainable innovation practices
            </div>
          </div>
          <div className="flex flex-col gap-2 bg-bgBlue px-6 py-4 rounded-lg ">
            <div className="text-customBlack font-medium text-xl">
              Interact with Industry Leader
            </div>
            <div className="text-customGreyishBlack">
              Connect with top executives and thought leaders
            </div>
          </div>

          <div className="flex flex-col gap-2 bg-bgBlue px-6 py-4 rounded-lg ">
            <div className="text-customBlack font-medium text-xl">
              From the lens of Global Innovators
            </div>
            <div className="text-customGreyishBlack">
              Explore how global enterprises leverage ecosystems for growth
            </div>
          </div>
          <div className="flex flex-col gap-2 bg-bgBlue  px-6  py-4 rounded-lg ">
            <div className="text-customBlack font-medium text-xl">
              Collaborate for Impact
            </div>
            <div className="text-customGreyishBlack">
              Discover ecosystems can leverage academia for excelling in
              Innovation
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col px-16">
        <div className="relative flex justify-center items-center text-5xl font-medium mx-auto">
          <div className="absolute -right-8 -top-6 ">
            <img
              src="doublequotes.jpg"
              alt="Double Quotes"
              className="h-8 w-8"
            />
          </div>
          Probable Attendees
        </div>

        <div className="text-xl pt-20 pb-12 text-customGreyishBlack">
          15+ CXOs from the likes of
        </div>

        <div className="flex flex-row gap-8 justify-around items-center ">
          <div>
            <img src="/tata.png" alt="TCS" className="w-[200px]" />
          </div>
          <div>
            <img src="/pwcpng.png" alt="PWC" className="w-[150px]" />
          </div>
          <div>
            <img src="/l&t.png" alt="L&T" className="w-[300px]" />
          </div>
          <div>
            <img src="/godrej.png" alt="Godrej" className="w-[200px]" />
          </div>
          <div>
            <img src="/viacom.png" alt="Viacom" className="w-[200px]" />
          </div>
        </div>
      </div>

      <div className="flex flex-col px-16">
        <div className="relative flex justify-center items-center text-5xl font-medium py-32 mx-auto">
          <div className="absolute top-12 -right-8">
            <img
              src="doublequotes.jpg"
              alt="Double Quotes"
              className="h-8 w-8"
            />
          </div>
          Event Highlights
        </div>
        <div className="flex flex-row gap-12 justify-center items-center">
          <div className="p-4 bg-white shadow-customAdCard rounded-xl w-60 h-32 flex items-center justify-center">
            <div>
              Panel discussion by TCS CMI CTO, Fortune 500 CTO & Startup CEOs
            </div>
          </div>
          <div className="p-4 bg-white shadow-customAdCard rounded-xl w-60 h-32 flex items-center justify-center">
            <div>Insights from the Israeli Innovation Ecosystem</div>
          </div>
          <div className="p-4 bg-white shadow-customAdCard rounded-xl w-60 h-32 flex items-center justify-center">
            <div>Emerging Tech/ Startup Showcases</div>
          </div>
          <div className="p-4 bg-white shadow-customAdCard rounded-xl w-60 h-32 flex items-center justify-center">
            <div>
              Academia as Innovation Hubs: Real-life case study from Head of
              Digital Transformation - ELGi
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24">
        <Footer />
      </div>
    </div>
  );
};

export default EventReworked;
