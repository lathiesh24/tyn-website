/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

const Footer = () => {
  return (
    <div className="h-min flex flex-col justify-center  sm:mx-28">
      {/* Footer part 1 */}
      <div className="hidden sm:grid  sm:grid-cols-4 sm:gap-20 text-lg xl:text-xl">
        <div className="">
          <img
            src="/tynfooterimg.png"
            alt="tyn-footer-image"
            className="w-40 h-40"
          />
        </div>

        <div className="font-light">
          <h3 className="font-semibold text-xl 2xl:text-2xl mb-2">Services</h3>
          <p>Alliance as a service</p>
          <p>Co Innovation as a service</p>
        </div>

        <div className="font-light">
          <h3 className="font-semibold text-xl 2xl:text-2xl mb-2">Company</h3>
          <p>About us</p>
          <p>Our Team</p>
          <p>Difference</p>
        </div>

        <div className="font-light">
          <h3 className="font-semibold text-xl 2xl:text-2xl mb-2">Contact</h3>
          <p>info@theyellownetwork.com</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 justify-center items-center sm:hidden text-lg ">
        <div className="">
          <img
            src="/tynfooterimg.png"
            alt="tyn-footer-image"
            className="w-40 h-40"
          />
        </div>
        <div className="flex flex-col mx-4">
          <div className="grid grid-cols-2 place-items-center">
            <div className="font-light">
              <h3 className="font-semibold text-xl 2xl:text-2xl mb-2">Services</h3>
              <p>Alliance as a service</p>
              <p>Co Innovation as a service</p>
            </div>

            <div className="font-light">
              <h3 className="font-semibold text-xl 2xl:text-2xl mb-2">Company</h3>
              <p>About us</p>
              <p>Our Team</p>
              <p>Difference</p>
            </div>
          </div>
          <div className="font-light mt-2">
            <h3 className="font-semibold text-xl 2xl:text-2xl mb-2">Contact</h3>
            <p>info@theyellownetwork.com</p>
          </div>
        </div>
      </div>

      {/* Footer part 2 */}

      {/* Footer last part */}
      <div className="font-light flex mx-4 my-4 text-[15px] sm:text-lg xl:text-xl">
        <div className="sm:w-1/2">Copyright © 2024 TYN Ecosystem Private Ltd</div>
        <div className="sm:w-1/2 flex sm:justify-around">
          <div>Terms of Service</div>
          <div>Privacy Policy</div>
          <div>Cookie Policy</div>
        </div>
      </div>
    </div>

  );
};

export default Footer;
