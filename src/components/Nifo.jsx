import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "@react-spring/web";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Nifo = () => {
  const activeSection = "nifo";
  const [wordsVisible, setWordsVisible] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const textArray = [
    "It provides ",
    <span className="text-customYellow">contextualized search</span>,
    " with curated insights tailored to specific business needs. ",
    <span className="text-customYellow">
      NiFo's Trends and Spotlights feature
    </span>,
    " keeps enterprises updated on emerging technologies and key industry players. The platform goes beyond discovery by facilitating ",
    <span className="text-customYellow">
      Secure Connections and Conversations
    </span>,
    ", allowing enterprises to engage with startups, SMEs, and experts in a safe, efficient environment. Whether you're a CIO seeking AI solutions or a consultant looking for innovation partners, NiFo acts as an ",
    <span className="text-customYellow">intelligent co-pilot</span>,
    ", guiding you from problem identification to execution.",
  ];

  const imageRef = useRef(null);

  const fadeSpring = useSpring({
    opacity: fadeOut ? 0 : 1,
    config: { duration: 500 },
  });

  const imageSpring = useSpring({
    transform: `translateY(${scrollY}px)`,
    config: { tension: 280, friction: 60 },
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const imageHeight = imageRef.current.offsetHeight;

      // Adjust words visibility based on scroll
      const newVisibleWords = Math.min(
        Math.floor(scrollPosition / 100),
        textArray.length
      );
      setWordsVisible(newVisibleWords);

      // Fade out effect based on the scroll position
      if (scrollPosition > imageHeight / 2) {
        setFadeOut(true);
      } else {
        setFadeOut(false);
      }

      // Set scrollY to create the effect of the image coming up
      setScrollY(Math.min(scrollPosition, imageHeight / 2)); // Limit to half of the image height
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar activeSection={activeSection} />
      <animated.div
        style={fadeSpring}
        className="fixed inset-0 bg-gradient-to-b from-white via-white to-sky-200 grid grid-flow-col grid-cols-5 px-48"
      >
        <div className="flex flex-col justify-center items-center px-8 col-span-3">
          <div className="font-semibold text-6xl text-customBlack">
            Your personalized innovation assistant
          </div>
          <div className="text-xl pt-4 leading-9 text-customGreyishBlack">
            AI-driven platform, designed to help enterprises solve business
            challenges by delivering Noiseless Information and enabling
            Frictionless Orchestration
          </div>
        </div>
        <div className="flex justify-center items-center col-span-2">
          <div className="flex justify-around items-center flex-col rounded-md h-[400px] w-[350px] bg-white shadow-lg border-2">
            <div className="w-32 mx-auto flex justify-center items-center py-2">
              <img src="/nifo.png" alt="Nifo Logo" />
            </div>
            <div className="-mt-4 mb-2">
              <animated.img
                ref={imageRef}
                style={imageSpring}
                src="/nifodesktopmobile.png"
                alt=""
                className="w-64"
              />
            </div>
            <a
              href="https://nifo.theyellow.network/"
              target="_blank"
              rel="noreferrer"
              className="text-base bg-customBlue opacity-80 w-max justify-center flex items-center px-4 py-1.5 rounded-md text-white cursor-pointer mb-8"
            >
              Get Started
            </a>
          </div>
        </div>
      </animated.div>
      <div className="flex justify-center items-center h-screen">
        <img src="/nifobg.png" alt="" className="w-3/4 mt-96" />
      </div>
      <div className="text-2xl font-medium px-60 leading-loose h-screen justify-center items-center flex">
        <div>
          {textArray.map((word, index) => (
            <span
              key={index}
              style={{
                opacity: index < wordsVisible ? 1 : 0.3, // Adjust opacity smoothly
                transition: "opacity 0.3s ease-in-out",
                marginRight: "0.25rem",
              }}
            >
              {word}
            </span>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Nifo;
