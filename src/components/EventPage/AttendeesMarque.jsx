import React from "react";
import { motion } from "framer-motion";
import "../../App.css";

const images = [
  { src: "/tcs.jpeg", alt: "TCS" },
  { src: "/tatatrusts.png", alt: "Tata Trusts" },
  { src: "/swissnex.png", alt: "Swissnex" },
  { src: "/Hdfclife.jpg", alt: "HDFC Life" },
  { src: "/tata.png", alt: "Tata" },
  { src: "/piramal.png", alt: "Piramal" },
  { src: "/ltrealty.jpeg", alt: "L&T Realty" },
];

const AttendeesMarquee = () => {
  return (
    <>
      {/* Regular div for larger screens */}
      <div className="relative sm:flex hidden overflow-hidden whitespace-nowrap select-none">
        <div className="flex scroll gap-24">
          {images.concat(images).map((item, index) => (
            <div key={index} className="flex-shrink-0 mx-2">
              <img
                src={item.src}
                alt={item.alt}
                className="w-32 h-32 object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Motion div for mobile screens */}
      <div className="flex sm:hidden overflow-hidden whitespace-nowrap select-none gap-12">
        <motion.div
          className="flex flex-shrink-0 gap-12"
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 10,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {images.map((item, index) => (
            <div key={index} className="mx-2">
              <img
                src={item.src}
                alt={item.alt}
                className="w-32 h-24 object-contain"
              />
            </div>
          ))}
        </motion.div>
        <motion.div
          className="flex flex-shrink-0 gap-12"
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 10,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {images.map((item, index) => (
            <div key={index} className="mx-2">
              <img
                src={item.src}
                alt={item.alt}
                className="w-32 h-24 object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AttendeesMarquee;
