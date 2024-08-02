import React from "react";
import { motion } from "framer-motion";
import "../../App.css";

const images = [
  { src: "/IndiaFirstLife.webp", alt: "India First Life" },
  { src: "/viacom18.png", alt: "Viacom 18" },
  { src: "/tafe.png", alt: "Tafe" },
  { src: "israelministry.jpg", alt: "Israel Foreign Ministry" },
  { src: "/axismutualfund.png", alt: "Axis Mutualfund" },
  { src: "/juliusbaer.jpeg", alt: "Julius Baer" },
  { src: "Godrej Capital.jpg", alt: "Godrej Capital" },
  { src: "/welspun.webp", alt: "Welspun" },
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
        <div className="flex gap-24 animate-marquee">
          {images.concat(images).map((item, index) => (
            <div key={index} className="flex flex-shrink-0 ">
              <img
                src={item.src}
                alt={item.alt}
                className="w-28 h-32 object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Motion div for mobile screens */}
      {/* Motion div for mobile screens */}
      <div className="flex sm:hidden overflow-hidden whitespace-nowrap select-none gap-12">
        <motion.div
          className="flex flex-shrink-0 gap-12"
          initial={{ x: "4%" }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {images.concat(images).map((item, index) => (
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
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {images.concat(images).map((item, index) => (
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
