import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import WhatWeDo from "./WhatWeDo";
import OurMission from "./OurMission";
import WeOffer from "./WeOffer";
import OurTeam from "./OurTeam";
import AdvisoryTeam from "./AdvisoryTeam";
import OurDifferentiators from "./OurDifferentiators";
import Footer from "./Footer";
import OurIdeology from "./OurIdeology";

const Homepage = () => {
  const [activeSection, setActiveSection] = useState("home");

  const handleNavigation = (sectionId) => {
    const section = document.getElementById(sectionId);
    const navbarHeight = document.querySelector(".fixed").offsetHeight;
    if (section) {
      const sectionTop = section.offsetTop - navbarHeight;
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const navbarHeight = document.querySelector(".fixed").offsetHeight;
      const sections = document.querySelectorAll("section[id]");

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - navbarHeight;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="">
      <Navbar
        activeSection={activeSection}
        handleNavigation={handleNavigation}
      />
      <div className="relative flex items-center justify-center bg-white overflow-hidden">
        {/* <div className="absolute inset-0">
          <div className="border-8 absolute w-64 h-64 sm:w-[400px] border-customYellow sm:h-[400px]  rounded-full opacity-20 -left-32 sm:-left-64 top-1/4"></div>
          <div className="absolute border-8 w-64 h-64 sm:w-[400px] border-customYellow sm:h-[400px] bg-customGradient rounded-full opacity-20 -right-32 sm:-right-64 top-1/4"></div>
        </div> */}
        <div className="sm:flex hidden absolute  right-0">
          <img src="/circle1.png" alt="/" className="sm:h-[70vh] sm:w-auto" />
        </div>
        <div className="sm:flex hidden absolute  left-0">
          <img src="/circle2.png" alt="/" className="sm:h-[70vh] sm:w-auto" />
        </div>

        <div className="z-10 text-center">
          <section
            id="home"
            className="flex flex-col items-center justify-center  h-[100vh]"
          >
            <div className="flex flex-col text-2xl sm:text-6xl font-medium tracking-wide">
              <span className="text-customBlack">
                Unleashing the potential of
              </span>
              <span className="flex items-center justify-center mt-3 sm:mt-6 bg-custom-gradient text-transparent bg-clip-text min-w-max p-2 tracking-wider">
                ecosystems
              </span>
            </div>
            <button
              className="flex border-[3px] border-customBlue text-base sm:text-2xl font-medium text-customBlue w-max items-center justify-center py-1.5 px-3 sm:py-3 sm:px-5 rounded-2xl cursor-pointer mt-6 tracking-wider"
              onClick={() => handleNavigation("Differentiators")}
            >
              Our Differentiators
            </button>
          </section>
        </div>
      </div>

      <section id="what-we-do">
        <WhatWeDo />
      </section>

      <section id="about-us">
        <OurMission />
      </section>

      <section>
        <OurIdeology />
      </section>

      <section id="services">
        <WeOffer />
      </section>

      <section id="Differentiators">
        <OurDifferentiators />
      </section>

      <section id="our-team" className="mt-8 sm:mt-20">
        <OurTeam />
      </section>

      <section>
        <AdvisoryTeam />
      </section>

      <section id="contact-us">
        <Footer handleNavigation={handleNavigation} />
      </section>
    </div>
  );
};

export default Homepage;
