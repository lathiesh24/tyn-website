import React, { useState } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const differenceData = [
    {
        differenceLogo: '/df2.jpg',
        differenceName: "Instant Scaling",
        differenceDescription: "Rapid onboarding facilitated by pre-identified stakeholders with established relationships."
    },
    {
        differenceLogo: `/df1.jpg`,
        differenceName: "Superior results through network effects",
        differenceDescription: "The entire network's industry connections/expertise work for the success of our customers rather than one individual."
    },
    {
        differenceLogo: `/df3.jpg`,
        differenceName: "Riskless option",
        differenceDescription: "Outcome-based engagement model with more than 50% of the payment upon realization of the committed results."
    },
    {
        differenceLogo: `/df4.jpg`,
        differenceName: "No Personal Dependency",
        differenceDescription: "Don't have to worry about attrition/loss of contacts due to attrition."
    },
    {
        differenceLogo: `/df5.jpg`,
        differenceName: "Overall cost-effective",
        differenceDescription: "Cheaper than hiring a full-time ecosystem manager in NA/Europe and not too much upfront."
    }
];
const OurDifference = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const newIndex = (currentIndex === 0) ? (differenceData.length - 1) : (currentIndex - 1);
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const newIndex = (currentIndex === differenceData.length - 1) ? 0 : (currentIndex + 1);
        setCurrentIndex(newIndex);
    };

    return (
        <div className='hidden sm:flex flex-col justify-center items-center'>
            <div className='flex justify-center items-center text-2xl sm:text-4xl text-black font-medium py-8 sm:py-16'>
                Our Difference
            </div>
            <div className="relative w-9/12 ">
                <button
                    onClick={goToPrevious}
                    className="absolute top-1/2 transform -translate-y-1/2 left-0 z-10"
                >
                    <IoIosArrowBack size={36} />
                </button>
                <div className="px-16 space-x-4 relative sm:flex hidden">
                    {[currentIndex, (currentIndex + 1) % differenceData.length].map((index) => (
                        <div
                            key={index}
                            className="bg-white flex flex-col gap-4 shadow-lg rounded-lg px-4 pb-4 transition-transform transform w-3/4 h-[180px]"
                        >
                            <div className="relative rounded-full">
                                <img src={differenceData[index].differenceLogo} alt='' className='h-8 w-8' />
                            </div>
                            <div className="">
                                <div className="flex text-customBlue font-semibold text-xl">
                                    <span>{differenceData[index].differenceName}</span>
                                </div>
                                <div className="font-normal text-base pt-1 leading-loose">
                                    {differenceData[index].differenceDescription}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="px-10 relative flex sm:hidden">
                    <div
                        key={currentIndex}
                        className="flex flex-col gap-y-2 justify-center items-center bg-white shadow-lg rounded-lg px-4 transition-transform transform h-64"
                    >
                        <div className="relative rounded-full flex flex-col gap-4 ">
                            <div className="relative  rounded-full " >
                                <img src={differenceData[currentIndex].differenceLogo} alt='' className='h-12 w-12' />
                            </div>
                        </div>
                        <div className="">
                            <div className="flex justify-center text-customBlue font-semibold text-xl pt-2">
                                <span>{differenceData[currentIndex].differenceName}</span>
                            </div>
                            <div className="font-normal text-lg pt-2">
                                {differenceData[currentIndex].differenceDescription}
                            </div>
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

export default OurDifference;