import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const cardData = [
    {
        name: "Anandapadmanaban",
        role: "Innovation Evangelist",
        roleDescription: "Passionate problem solver, and tech enthusiast with an entrepreneurial mindset. Innovating solutions, driving efficiency, enhancing user experiences, and delivering value in business.",
        image: "/anand.png"
    },
    {
        name: "Sourish Ghosh",
        role: "Growth Manager",
        roleDescription: "Experienced sales/marketing pro committed to trust-based relationships. Transitioned from hospitality to innovation sector. Excited to disrupt post-COVID ecosystem with transparency and collaboration",
        image: "/sourish.jpeg"
    },
    {
        name: "Sudharshan",
        role: "Alliance Director",
        roleDescription: "Global IT leader with 25+ yrs experience in product units, AI, Digital Twin. Multicontinental, P&L ownership, presales, transformations. Passionate about development, scaling businesses, travel",
        image: "/sudharshan.png"
    },
    {
        name: "Ganapathy Gangadharan [GG]",
        role: "Founder",
        roleDescription: "Tech leader with 20 yrs experience in scaling businesses, innovation, ecosystem development, transformations, mentoring startups, NGO founder, nation-building advocate",
        image: "/ganapathy.png"
    },
    {
        name: "Senthilvelan Natarajan",
        role: "Co-Founder",
        roleDescription: "Global IT leader with 25+ yrs experience in product units, AI, Digital Twin. Multicontinental, P&L ownership, presales, transformations. Passionate about development, scaling businesses, travel",
        image: "/velan.png"
    },
    {
        name: "Bharthima",
        role: "Growth Lead",
        roleDescription: "A Entrepreneurial aspirant with appreciable knowledge in Marketing and Business development. With learnings & experiences across startups.",
        image: "/bharathi.png"
    },
    {
        name: "Rakesh Mahendran",
        role: "Software Developer",
        roleDescription: "Engineer with software development experience. Proficient in React, Typescript, Node.js. Eager to explore tech intersections, contribute to innovative projects",
        image: "/rakesh.png"
    },
    {
        name: "Lathiesh Mahendran",
        role: "Software Developer",
        roleDescription: "Engineer with software development experience. Proficient in React, Typescript, Node.js. Eager to explore tech intersections, contribute to innovative projects",
        image: "/lathiesh.png"
    },
];

const CardOurTeam = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const newIndex = (currentIndex === 0) ? (cardData.length - 1) : (currentIndex - 1);
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const newIndex = (currentIndex === cardData.length - 1) ? 0 : (currentIndex + 1);
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
                {[currentIndex, (currentIndex + 1) % cardData.length, (currentIndex + 2) % cardData.length].map((index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-lg px-4 pb-4 transition-transform transform w-3/4"
                    >
                        <div className="relative h-[78px] w-[120px] rounded-full mx-auto">
                            <img
                                className="absolute object-cover h-32 w-32 rounded-2xl -top-[66px] "
                                src={cardData[index].image}
                                alt=""
                            />
                        </div>
                        <div className="">
                            <div className="flex justify-center font-semibold text-xl">
                                <span>{cardData[index].name}</span>
                            </div>
                            <div className="font-normal text-base pt-1">
                                {cardData[index].role}
                            </div>
                            <p className="font-light pb-4 pt-1 tracking-wide">
                                {cardData[index].roleDescription}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="sm:hidden flex px-9 relative ">
                <div
                    key={currentIndex}
                    className="bg-white shadow-lg rounded-lg px-4 transition-transform transform w-full h-[380px]"
                >
                    <div className="relative h-[78px] w-[120px] rounded-full mx-auto">
                        <img
                            className="absolute object-cover h-32 w-32 rounded-2xl -top-[66px]"
                            src={cardData[currentIndex].image}
                            alt=""
                        />
                    </div>
                    <div className="">
                        <div className="flex justify-center items-center font-semibold text-[23px]">
                            <span>{cardData[currentIndex].name}</span>
                        </div>
                        <div className="font-normal text-[20px] py-2">
                            {cardData[currentIndex].role}
                        </div>
                        <p className="font-light pb-4 text-[18px] tracking-wide">
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