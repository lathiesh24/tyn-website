/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Footer = ({ handleNavigation }) => {
  const navigate = useNavigate();

  const handleAllianceNavigation = () => {
    navigate("/alliance");
  };

  const handleCoInnovationNavigation = () => {
    navigate("/alliance");
  };

  return (
    <div className="flex flex-col">
      {/* For mobile   */}
      <div className="mx-6 xl:mx-20 flex flex-col md:flex-row-reverse md:justify-between gap-6 mt-10">
        <div className="font-medium text-lg flex flex-col gap-1">
          <div>Services</div>
          <p
            className="font-normal text-customGreyishBlack cursor-pointer"
            onClick={handleAllianceNavigation}
          >
            Alliance as a service
          </p>
          <p
            className="font-normal text-customGreyishBlack cursor-pointer"
            onClick={handleCoInnovationNavigation}
          >
            Co Innovation as a service
          </p>
        </div>

        <div className="font-medium text-lg flex flex-col gap-1">
          <div>Company</div>
          <p
            onClick={() => handleNavigation("about-us")}
            className="font-normal text-customGreyishBlack cursor-pointer"
          >
            About us
          </p>
          <p
            onClick={() => handleNavigation("our-team")}
            className="font-normal text-customGreyishBlack cursor-pointer"
          >
            Our Team
          </p>
          <p
            onClick={() => handleNavigation("difference")}
            className="font-normal text-customGreyishBlack cursor-pointer"
          >
            Difference
          </p>
          <div className="text-blue-500 cursor-pointer my-1">
            <a
              href="https://www.linkedin.com/company/the-yellow-network/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={32} />
            </a>
          </div>
        </div>

        <div className="font-medium text-lg flex flex-col gap-4 leading-8">
          <div>
            <div>Contact</div>
            <a
              href="mailto:info@theyellownetwork.com"
              className="font-normal text-customGreyishBlack"
            >
              info@theyellownetwork.com
            </a>
          </div>

          <div>
            <div>Address</div>
            <div className="font-normal text-customGreyishBlack w-60">
              PSG Step, PSG College of Technology, Peelamedu, Coimbatore, Tamil
              Nadu 641004
            </div>
          </div>

          <div>
            <div>Phone Number</div>
            <div className="font-normal text-customGreyishBlack">
              +91 73582 95305
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center my-5">
          <img src="/tyn-logo.png" alt="tyn-footer-image" className="w-60" />
        </div>
      </div>

      {/* Footer part 2 */}

      {/* Footer last part */}
      <div className="font-light flex flex-col text-center justify-center items-center sm:flex-row mt-4 mb-1 text-[15px] sm:text-lg p-5 gap-5 md:my-5">
        <div className="text-gray-400">
          Copyright © 2024 TYN Ecosystem Private Ltd
        </div>
        <div className="gap-4 text-center sm:text-auto sm:gap-5 flex sm:justify-around text-customGreyishBlack">
          <div>Terms of Service</div>
          <div>Privacy Policy</div>
          <div>Cookie Policy</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
