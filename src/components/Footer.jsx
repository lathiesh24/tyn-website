/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { FaLinkedin } from "react-icons/fa6";

const Footer = ({ handleNavigation }) => {
  return (
    <div className="flex flex-col">
      {/* For mobile   */}
      <div className="mx-6 flex flex-col md:flex-row-reverse lg:mx-24 xl:mx-28 md:justify-between gap-6 mt-10">
        <div className="font-medium text-lg">
          <div>Services</div>
          <p className="font-normal text-customGreyishBlack">
            Alliance as a service
          </p>
          <p className="font-normal text-customGreyishBlack">
            Co Innovation as a service
          </p>
        </div>

        <div className="font-medium text-lg">
          <div>Company</div>
          <p  onClick={() => handleNavigation('about-us')} className="font-normal text-customGreyishBlack cursor-pointer">About us</p>
          <p  onClick={() => handleNavigation('our-team')} className="font-normal text-customGreyishBlack cursor-pointer">Our Team</p>
          <p  onClick={() => handleNavigation('difference')}className="font-normal text-customGreyishBlack cursor-pointer">Difference</p>
        </div>

        <div className="font-medium text-lg">
          <div>Contact</div>
          <a href = "mailto:info@theyellownetwork.com" className="font-normal text-customGreyishBlack">
            info@theyellownetwork.com
          </a>
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
