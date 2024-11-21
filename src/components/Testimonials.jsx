import React, { useState, useEffect } from "react";
import { BiSolidQuoteLeft, BiSolidQuoteRight } from "react-icons/bi";

const testimonialData = [
  {
    name: "Bo Nielson",
    designation: "Sales Head, ThirdAI",
    profilePic: "/bo-nielson.png",
    companyLogo: "/thirdai.png",
    testimonial:
      "We are a start-up and the Yellow Network opened doors to large Global Systems Integrators at a rate that we never could have accomplished. The broad net they cast allowed us to find the right partners and account managers to build a revenue pipeline.",
  },
  {
    name: "Dhwani Mehta",
    designation: "VP - Partnerships and Strategy, Fluxgen",
    profilePic: "/dhwani-mehta.png",
    companyLogo: "/fluxgen.png",
    testimonial:
      "Right from the first interaction we had TYN, the team has been extremely helpful and accommodating of our asks. After carefully understanding our business, they immediately helped us get connected to the leading conglomerate of India. And they helped us improvise our pitch each step of the way. Highly recommend TYN to growth-stage businesses.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // State to track if the carousel is paused

  const nextSlide = () => {
    const isLastSlide = currentIndex === testimonialData.length - 1;
    setCurrentIndex(isLastSlide ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    setCurrentIndex(
      isFirstSlide ? testimonialData.length - 1 : currentIndex - 1
    );
  };

  useEffect(() => {
    if (isPaused) return; // Skip setting interval if paused

    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentIndex, isPaused]);

  // Handlers to pause and resume carousel
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div
      className="mx-6 sm:mx-auto mt-8"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex justify-center items-center text-3xl sm:text-4xl text-customBlack font-medium py-16 sm:py-16">
        <div className="grid">
          <div className="relative">
            <div className="absolute -top-8 -right-8 h-8 w-8">
              <img src="doublequotes.jpg" alt="Double Quotes" />
            </div>
            <div className="">Success Stories</div>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col sm:flex-row gap-4 sm:mx-32 items-center">
        <div className="w-auto sm:w-[40%] text-center">
          <img
            src={testimonialData[currentIndex].profilePic}
            alt={testimonialData[currentIndex].name}
            className="rounded-full w-28 h-28 sm:w-48 sm:h-48 mx-auto"
          />
          <div className="mt-4 font-semibold text-lg">
            {testimonialData[currentIndex].name}
          </div>
          <div className="text-gray-500 text-sm">
            {testimonialData[currentIndex].designation}
          </div>
          <div className="flex justify-center items-center mt-2">
            <img
              src={testimonialData[currentIndex].companyLogo}
              alt={`${testimonialData[currentIndex].name} company`}
              className="h-12 w-auto"
            />
          </div>
        </div>

        <div className="relative bg-blue-50 rounded-lg shadow-lg px-4 py-4 sm:px-8 text-gray-600 italic w-full flex h-[300px] sm:h-[250px] items-center">
          <BiSolidQuoteLeft className="absolute text-customYellow text-3xl sm:text-6xl top-0 left-0 -translate-x-4 sm:-translate-x-4 -translate-y-4 sm:-translate-y-6" />
          <div className="sm:text-xl sm:leading-[32px] overflow-hidden text-ellipsis">
            {testimonialData[currentIndex].testimonial}
          </div>
          <BiSolidQuoteRight className="absolute text-customYellow text-3xl sm:text-6xl bottom-0 right-0 translate-x-4 translate-y-4 sm:translate-x-4 sm:translate-y-6" />
        </div>
      </div>
      <div className="flex justify-center mt-8">
        {testimonialData.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 mx-2 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
