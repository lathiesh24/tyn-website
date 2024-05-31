import React, { useState } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const IdeologyData = [
    {
        IdeologyName: "Purpose",
        IdeologyDescription: "Believe in the power of ecosystems and enable collaborations."
    },
    {
        IdeologyName: "People",
        IdeologyDescription: "Invest in our associates, understanding that their growth fuels our collective success."
    },
    {
        IdeologyName: "Customer",
        IdeologyDescription: "Make customer lives easier by consistently providing better and more convenient solutions."
    },
    {
        IdeologyName: "Culture",
        IdeologyDescription: "Maintain integrity and foster innovation with a steadfast 'get things done' attitude in every transaction."
    },
    {
        IdeologyName: "Community",
        IdeologyDescription: "Pledge 5% of our profits to CSR efforts."
    }
];

const OurIdeology = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const newIndex = (currentIndex === 0) ? (IdeologyData.length - 1) : (currentIndex - 1);
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const newIndex = (currentIndex === IdeologyData.length - 1) ? 0 : (currentIndex + 1);
        setCurrentIndex(newIndex);
    };

    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='flex justify-center items-center text-3xl sm:text-4xl text-customBlack font-medium py-16 sm:py-16'>
                <div className='grid'>
                    <div className='relative'>
                        <div className='absolute -top-8 -right-8 h-8 w-8'>
                            <img src="doublequotes.jpg" alt='Double Quotes' />
                        </div>
                        <div className=''>
                            Our Ideology
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative sm:w-11/12">
                <button
                    onClick={goToPrevious}
                    className="absolute top-1/2 transform -translate-y-1/2 left-0 z-10"
                >
                    <IoIosArrowBack size={36} />
                </button>
                <div className="px-16 space-x-4 relative sm:flex hidden">
                    {[currentIndex, (currentIndex + 1) % IdeologyData.length].map((index) => (
                        <div
                            key={index}
                            className="bg-white flex flex-col gap-4 pt-4 shadow-customAdCard rounded-[8px] px-4 pb-4 transition-transform transform w-3/4 sm:h-[150px]"
                        >
                            <div className="">
                                <div className="flex text-customBlue font-medium text-xl">
                                    <span>{IdeologyData[index].IdeologyName}</span>
                                </div>
                                <div className="font-normal text-base pt-1 leading-loose text-customGreyishBlack">
                                    {IdeologyData[index].IdeologyDescription}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="px-10 relative flex sm:hidden h-[304px]">
                    <div
                        key={currentIndex}
                        className="flex flex-col  bg-white shadow-customAdCard rounded-[8px] px-4 transition-transform transform py-8 gap-y-5"
                    >
                        <div className="flex justify-center text-customBlue font-medium text-[22px]">
                            <span>{IdeologyData[currentIndex].IdeologyName}</span>
                        </div>
                        <div className="font-normal text-xl text-customBlack leading-loose">
                            {IdeologyData[currentIndex].IdeologyDescription}
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
        </div>
    );
};

export default OurIdeology;
