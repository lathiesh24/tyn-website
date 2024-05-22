/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

const Footer = () => {
  return (
    <div className="h-min flex flex-col justify-center  sm:mx-28">
      {/* Footer part 1 */}
      <div className="hidden sm:grid  sm:grid-cols-4 sm:gap-20 text-lg">
        <div className="">
          <img
            src="/tynfooterimg.png"
            alt="tyn-footer-image"
            className="w-40 h-40"
          />
        </div>

        <div className="font-light">
          <div className="flex flex-col font-medium text-xl text-customBlack gap-1">Services
            <p className="font-normal text-lg text-customGreyishBlack">Alliance as a service</p>
            <p className="font-normal text-lg text-customGreyishBlack">Co Innovation as a service</p>
          </div>
        </div>

        <div className="font-light">
          <div className="flex flex-col font-medium text-xl text-customBlack gap-1">Company
            <p className="font-normal text-lg  text-customGreyishBlack">About us</p>
            <p className="font-normal text-lg  text-customGreyishBlack">Our Team</p>
            <p className="font-normal text-lg  text-customGreyishBlack">Difference</p>
          </div>
        </div>

        <div className="font-light">
          <div className="flex flex-col font-medium text-xl text-customBlack gap-1">Contact
            <p className="font-normal text-lg  text-customGreyishBlack">info@theyellownetwork.com</p>
          </div>

        </div>
      </div>
      <div className="flex flex-col-reverse gap-4 justify-center items-center sm:hidden text-lg ">
        <div className="">
          <img
            src="/tyn-logo.png"
            alt="tyn-footer-image"
            className="w-60"
          />
        </div>
        <div className="flex flex-col mx-4">
          <div className="grid grid-cols-2 place-items-center">
            <div className="font-light">
              <div className="font-medium text-lg">Services
                <p className="font-normal text-customGreyishBlack">Alliance as a service</p>
                <p className="font-normal text-customGreyishBlack">Co Innovation as a service</p>
              </div>
            </div>

            <div className="font-light">
              <div className="font-medium text-lg gap-4">Company
                <p className="font-normal text-customGreyishBlack">About us</p>
                <p className="font-normal text-customGreyishBlack">Our Team</p>
                <p className="font-normal text-customGreyishBlack">Difference</p>
              </div>
            </div>
          </div>
          <div className="font-light mt-2">
            <div className="font-semibold text-lg mb-2">Contact
              <p className="font-normal text-customGreyishBlack">info@theyellownetwork.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer part 2 */}

      {/* Footer last part */}
      <div className="font-light flex flex-col text-center justify-center items-center sm:flex-row mt-4 mb-1 text-[15px] sm:text-lg">
        <div className="sm:w-1/2 text-customBlack font-medium">Copyright © 2024 TYN Ecosystem Private Ltd</div>
        <div className=" gap-4 text-center sm:text-auto sm:gap-0 sm:w-1/2 flex sm:justify-around text-customGreyishBlack">
          <div>Terms of Service</div>
          <div>Privacy Policy</div>
          <div>Cookie Policy</div>
        </div>
      </div>
    </div>

  );
};

export default Footer;
