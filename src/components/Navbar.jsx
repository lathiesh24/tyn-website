import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleIconNavigation = () => {
    navigate("/");
  };

  const scrollToSection = (section) => {
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      const navbarHeight = document.querySelector(".fixed").offsetHeight;
      const sectionTop = sectionElement.offsetTop - navbarHeight;
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }
  };

  const handleLinkNavigation = (section) => {
    if (["nifo", "yzone", "ynfinity","ynsights"].includes(section)) {
      navigate(`/${section}`);
      setIsOpen(false);
    } else {
      if (location.pathname !== "/") {
        navigate(`/#${section}`);
        setTimeout(() => {
          scrollToSection(section);
        }, 100);
      } else {
        scrollToSection(section);
      }
      setIsOpen(false);
    }
  };

  // Determine if the current path is part of the accelerators section
  const isAcceleratorActive = ["nifo", "yzone", "ynfinity"].some((path) =>
    location.pathname.includes(path)
  );

  return (
    <>
      <div className="fixed flex flex-row bg-white z-50 h-20 sm:h-16 w-full items-center justify-between">
        <div
          className="ml-4 sm:ml-8 cursor-pointer"
          onClick={handleIconNavigation}
        >
          <img
            src="/tyn-logo.png"
            alt="The Yellow Network Logo"
            className="w-44"
          />
        </div>
        <div className="hidden md:grid text-customBlack grid-flow-col sm:gap-x-6 xl:gap-x-16 sm:mr-4 xl:mr-20 text-base">
          <div
            onClick={() => handleLinkNavigation("about-us")}
            className={`mt-2 cursor-pointer ${
              activeSection === "about-us"
                ? "underline decoration-customYellow decoration-[3px]"
                : ""
            }`}
          >
            About Us
          </div>
          <div
            onClick={() => handleLinkNavigation("services")}
            className={`mt-2 cursor-pointer ${
              activeSection === "services"
                ? "underline decoration-customYellow decoration-[3px]"
                : ""
            }`}
          >
            Services
          </div>
          <div
            onClick={() => handleLinkNavigation("ynsights")}
            className={`mt-2 cursor-pointer ${activeSection === "ynsights"
                ? "underline decoration-customYellow decoration-[3px]"
                : ""
              }`}
          >
            Ynsights
          </div>
          <div
            onClick={() => handleLinkNavigation("our-team")}
            className={`mt-2 cursor-pointer ${
              activeSection === "our-team"
                ? "underline decoration-customYellow decoration-[3px]"
                : ""
            }`}
          >
            Our Team
          </div>
        <div
  className="relative mt-2 cursor-pointer"
  onMouseEnter={() => setIsDropdownOpen(true)}
  onMouseLeave={() => setIsDropdownOpen(false)}
>
  <div
    className={`${
      isAcceleratorActive
        ? "underline decoration-customYellow decoration-[3px]"
        : ""
    }`}
  >
    Accelerators
  </div>
  {isDropdownOpen && (
    <div
      className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-white border shadow-md rounded-lg w-40"
    >
      <div
        onClick={() => handleLinkNavigation("nifo")}
        className="py-2 px-4 hover:bg-gray-200 border"
      >
        <img
          src="/nifo.png"
          className="mx-auto h-8 justify-center items-center"
        />
      </div>
      <div
        onClick={() => handleLinkNavigation("yzone")}
        className="py-2 px-4 hover:bg-gray-200 border"
      >
        <img
          src="/yzone-logo.png"
          className="mx-auto h-8 justify-center items-center"
        />
      </div>
      <div
        onClick={() => handleLinkNavigation("ynfinity")}
        className="py-2 px-4 hover:bg-gray-200 border"
      >
        <img
          src="/YInfinity.png"
          className="mx-auto h-8 justify-center items-center"
        />
      </div>
    </div>
  )}
</div>
          <div
            onClick={() => handleLinkNavigation("contact-us")}
            className={`border bg-sky-600 text-white hover:text-customBlue shadow hover:bg-white py-1.5 px-8 rounded-3xl cursor-pointer ${
              activeSection === "contact-us"
                ? "underline decoration-customYellow decoration-[3px]"
                : ""
            }`}
          >
            Contact Us
          </div>
        </div>
        <div className="sm:hidden flex items-center mr-4 sm:mr-8">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? <IoClose size={24} /> : <GiHamburgerMenu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-customBlack bg-opacity-50 z-20">
          <div className="fixed top-0 right-0 w-full bg-white flex flex-col items-center pt-24 pb-8 space-y-8">
            <div
              onClick={() => handleLinkNavigation("home")}
              className="mt-2 cursor-pointer text-xl"
            >
              Home
            </div>
            <div
              onClick={() => handleLinkNavigation("about-us")}
              className="mt-2 cursor-pointer text-xl"
            >
              About Us
            </div>
            <div
              onClick={() => handleLinkNavigation("services")}
              className="mt-2 cursor-pointer text-xl"
            >
              Services
            </div>
            <div
              onClick={() => handleLinkNavigation("our-team")}
              className="mt-2 cursor-pointer text-xl"
            >
              Our Team
            </div>
            <div
              onClick={() => handleLinkNavigation("ynsights")}
              className="mt-2 cursor-pointer text-xl"
            >
              Ynsights
            </div>

            {/* Dropdown for Accelerators */}
            <div className="relative w-full">
              <div
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="mt-2 cursor-pointer text-xl flex justify-center gap-2 items-center px-4"
              >
                Accelerators
                <span>{isDropdownOpen ? "-" : "+"}</span>
              </div>
              {isDropdownOpen && (
                <div className="flex flex-row justify-around items-center mt-8 mb-4">
                  <div
                    onClick={() => handleLinkNavigation("nifo")}
                    className="cursor-pointer"
                  >
                    <img src="/nifo.png" alt="NIFO Logo" className="h-12" />
                  </div>
                  <div
                    onClick={() => handleLinkNavigation("yzone")}
                    className="cursor-pointer"
                  >
                    <img src="/yzone-logo.png" alt="YZONE Logo" className="h-12" />
                  </div>
                  <div
                    onClick={() => handleLinkNavigation("ynfinity")}
                    className="cursor-pointer"
                  >
                    <img src="/YInfinity.png" alt="YInfinity Logo" className="h-8" />
                  </div>
                </div>
              )}
            </div>
            <div
              onClick={() => handleLinkNavigation("contact-us")}
              className="flex justify-center items-center border bg-sky-600 text-white py-2 px-8 rounded-3xl cursor-pointer text-xl"
            >
              Contact Us
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
