import React from 'react';

const HeroSection = ({ onCTAClick }) => {
  return (
    <section id="home" className="flex flex-col items-center justify-center text-center min-h-screen bg-white px-4">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-customBlack leading-tight">
        AI + Human Expertise. <br className="hidden sm:block"/>Co-Innovation Reimagined.
      </h1>
      <p className="mt-4 text-lg sm:text-xl text-customGreyishBlack max-w-2xl">
        Partner with us to turn emerging trends into tangible business impact.
      </p>
      <button
        onClick={onCTAClick}
        className="mt-8 bg-customBlue text-white rounded-full px-6 py-3 hover:bg-blue-700 transition"
      >
        See How It Works
      </button>
    </section>
  );
};

export default HeroSection;
