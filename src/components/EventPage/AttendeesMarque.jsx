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
    <div className="relative  overflow-hidden whitespace-nowrap select-none">
      <motion.div className="flex scroll gap-24">
        {images.concat(images).map((item, index) => (
          <div key={index} className="flex-shrink-0 mx-2">
            <img
              src={item.src}
              alt={item.alt}
              className="w-32 h-32 object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AttendeesMarquee;
