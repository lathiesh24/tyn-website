import React from "react";
import Navbar from "./Navbar";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Event = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div
        className="relative bg-center bg-cover h-screen"
        style={{ backgroundImage: 'url("/eventImage.webp")' }}
      >
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-center p-4">
          <div className="flex flex-col bg-white bg-opacity-75 py-5 pl-4 pr-16 rounded-2xl font-medium items-start mb-12">
            <div className="text-sm opacity-100 font-semibold text-customBlack">
              INNOVATION CONFERENCE
            </div>
            <div className="opacity-100 py-12">
              <img src="/YInfinity.png" alt="Logo" className="h-24" />
            </div>
            <div className="flex flex-row gap-2 justify-center w-max cursor-pointer font-semibold items-center text-customBlue hover:text-white bg-white hover:bg-customBlue rounded-full px-4 py-2 transition duration-300 ease-in-out transform hover:scale-110">
              <button className="w-max font-bold rounded-full">Register</button>
              <FaArrowRight className="transition-transform duration-300" />
            </div>
          </div>
          <div className="mx-auto px-4">
            <div className="flex flex-wrap justify-center">
              <div className="text-left event-card w-60 m-4 p-4 bg-gray-200 opacity-90 shadow-lg rounded-lg flex flex-row gap-4 items-start transition transform hover:scale-105 animate-fadeInUp delay-600">
                <div className="icon bg-customBlue text-white p-4 rounded-full">
                  <FaCalendarAlt className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Date</h3>
                  <p>July 15, 2024</p>
                </div>
              </div>
              <div className="text-left event-card w-max m-4 p-4 bg-gray-200 opacity-90 shadow-md rounded-lg flex flex-row gap-4 items-start transition transform hover:scale-105 animate-fadeInUp delay-800">
                <div className="icon bg-customBlue text-white p-4 rounded-full">
                  <FaClock className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Time</h3>
                  <p>10:00 AM - 2:00 PM</p>
                </div>
              </div>
              <div className="text-left event-card w-64 m-4 p-4 bg-gray-200 opacity-90 shadow-md rounded-lg flex flex-row gap-4 items-start transition transform hover:scale-105 animate-fadeInUp delay-1000">
                <div className="icon bg-customBlue text-white p-4 rounded-full">
                  <FaMapMarkerAlt className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Venue</h3>
                  <p>PSG Street, City</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-12 justify-start items-start">
        <div className="text-3xl font-semibold mb-4 text-center">
          Event Overview
        </div>
        <div className="mb-4 max-w-3xl text-lg leading-relaxed">
          YInfinity is an exclusive invite-only CXO Innovation Summit, themed
          around "Sustainable Innovation through Ecosystems." This event brings
          together top executives and industry leaders to explore innovative
          strategies and network with pioneers in the field.
        </div>
      </div>
      <div className="mt-16 text-center animate-fadeInUp delay-1400">
        <h2 className="text-3xl font-bold mb-6">Why Attend?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center p-8">
          {[
            {
              title: "Discover Cutting-Edge Strategies",
              description:
                "Gain insights into sustainable innovation practices.",
              image: "/event1.webp",
              alt: "Discover Cutting-Edge Strategies",
            },
            {
              title: "Interact with Industry Leaders",
              description: "Connect with top executives and thought leaders.",
              image: "/event2.webp",
              alt: "Interact with Industry Leaders",
            },
            {
              title: "From the lens of Global Innovators",
              description:
                "Explore how global enterprises leverage ecosystems for growth.",
              image: "/event3.webp",
              alt: "From the lens of Global Innovators",
            },
            {
              title: "Collaborate for Impact",
              description:
                "Engage with academia and industry experts to drive co-innovation for enterprises.",
              image: "/event4.webp",
              alt: "Collaborate for Impact",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="h-40 p-6 bg-zinc-400 bg-opacity-20 shadow-lg rounded-2xl transition transform hover:scale-105 border border-white border-opacity-20"
            >
              <div className="text-lg font-semibold mb-2 text-customBlack px-1.5 py-1.5">
                {item.title}
              </div>
              <div className="px-1.5 text-base  text-black">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Event;
