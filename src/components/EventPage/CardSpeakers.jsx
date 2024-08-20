import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const cardData = [
  {
    name: "Rohit.K",
    role: "CTO, HDFC Life",
    roleDescription:
      "With 25+ years across Europe, India, and Southeast Asia, HDFC Life's CTO leads their digital revolution. He drives fintech innovations like wealth platforms and digital lending, and mentors startups in deep tech and fintech.",
    image: "/rohit.jpeg",
  },
  {
    name: "Sujatha Gopal",
    role: "CTO, TCS Business Group",
    roleDescription:
      "Expert in Web3.0, Metaverse, FinOps, Hybrid Cloud, Generative AI, and AIOps. She excels in transforming futuristic concepts into practical technology solutions.",
    image: "/sujathagopal.jpg",
  },
  {
    name: "Dr.Somasundaram Balasubramaniam",
    role: "Head of Digital Transformation, ELGI",
    roleDescription:
      "Industry and academia bridge with expertise in Industry 4.0 and Six Sigma. He implements cutting-edge practices at multinationals and is a published researcher with 30+ works.",
    image: "/somasundharam.jpeg",
  },
  {
    name: "Andy David",
    role: "Advisor to Israel Innovation Minister",
    roleDescription:
      "International networking professional specializing in tech, innovation, and wealth creation through global investment and innovation collaborations.",
    image: "/AndyDavid.jpg",
  },
  {
    name: "Swetha Suresh",
    role: "Head of Innovations, Swissnex",
    roleDescription:
      "Dr. Swetha Suresh is the Head of Innovation at Swissnex India, connecting Switzerland’s innovation ecosystem to India. With expertise in healthtech, sustainability, and digitalization, she fosters market opportunities and bilateral initiatives. She holds a BTech in Industrial Biotechnology from Anna University and a PhD in Pharmacology from Cambridge University.",
    image: "/swethasuresh.jpg",
  },
];

const CardOurTeam = () => {
  const [currentIndex, setCurrentIndex] = useState(4);

  const goToPrevious = () => {
    const newIndex =
      currentIndex === 0 ? cardData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex =
      currentIndex === cardData.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full mt-24 sm:mt-32">
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 transform -translate-y-1/2 left-0 z-10"
      >
        <IoIosArrowBack size={36} />
      </button>
      <div className="hidden sm:flex px-16 space-x-4 relative">
        {[
          currentIndex,
          (currentIndex + 1) % cardData.length,
          (currentIndex + 2) % cardData.length,
        ].map((index) => (
          <div
            key={index}
            className="bg-white shadow-customAdCard rounded-[24px] px-4 pb-4 transition-transform transform w-3/4"
          >
            <div className="relative h-[78px] w-[120px] rounded-full mx-auto">
              <img
                className="absolute object-cover h-32 w-32 rounded-2xl -top-[66px] "
                src={cardData[index].image}
                alt=""
              />
            </div>
            <div className="flex flex-col gap-y-3">
              <div className="flex flex-col justify-center items-center h-full text-center ">
                <span className="font-medium text-xl text-customBlack">
                  {cardData[index].name}
                </span>
              </div>
              <div className="font-normal text-base pt-1 text-customBlack">
                {cardData[index].role}
              </div>
              <p className="font-light pb-4 pt-1 tracking-wide text-customGreyishBlack">
                {cardData[index].roleDescription}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Screen */}

      <div className="sm:hidden flex px-9 relative ">
        <div
          key={currentIndex}
          className="bg-white shadow-customAdCard rounded-[24px] px-4 transition-transform transform w-full "
        >
          <div className="relative w-[160px] rounded-full mx-auto">
            <img
              className="absolute object-cover h-40 w-40 rounded-2xl -top-[76px]"
              src={cardData[currentIndex].image}
              alt=""
            />
          </div>
          <div className="pt-32 pb-12">
            <div className="flex justify-center items-center h-full w-11/12">
              <span className="font-medium text-2xl text-customBlack text-center">
                {cardData[currentIndex].name}
              </span>
            </div>
            <div className="font-medium text-[21px] py-5 text-customBlack">
              {cardData[currentIndex].role}
            </div>
            <p className="font-light pb-4 text-xl text-customGreyishBlack leading-relaxed tracking-wide">
              {cardData[currentIndex].roleDescription}
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={goToNext}
        className="absolute top-1/2 transform -translate-y-1/2 right-0 z-10"
      >
        <IoIosArrowForward size={36} />
      </button>
    </div>
  );
};

export default CardOurTeam;
