import React from "react";
import { motion } from "framer-motion";
import "../../App.css";

const images = [
  { src: "/cybermind.jpeg", alt: "Cybermind" },
  { src: "/thirdai.png", alt: "Third AI" },
  { src: "/gnani.png", alt: "Gnani" },
  { src: "/profit.co.png", alt: "Profit.co" },
  {src: "/Netix.png", alt: "Netix AI" },
  {src:"/Pulralsight.png", alt:"Pluralsight"}
];

const AttendeesMarquee = () => {
  return (
    <>
      <div className="relative sm:flex hidden justify-between items-center whitespace-nowrap select-none mx-32">
          {images.map((item, index) => (
            <div key={index} className="">
              <img
                src={item.src}
                alt={item.alt}
                className="w-48 full"
              />
            </div>
          ))}
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
                className="h-24 w-full"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AttendeesMarquee;
