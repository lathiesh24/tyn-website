import React from 'react';
import { IoExitOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom'

const CoInnovation = () => {
    const navigate = useNavigate();

    const handleMainMenu = () => {
        navigate('/')
    }

    return (
        <>
            <div className='flex flex-col  sm:mx-20 2xl:mx-64 sm:pt-6 xl:pt-16 sm:h-screen sm:gap-6 mt-2 sm:mt-0'>
                <div className='flex flex-row justify-between mx-2'>
                    <div className='text-lg sm:text-2xl font-medium sm:font-semibold'>Enabling Co Innovation to Enterprises</div>
                    <button
                        className='hidden sm:flex border-[3px] text-lg font-normal text-white bg-customBlue  w-max items-center justify-center py-1.5 px-4  rounded-xl cursor-pointer  tracking-wider shadow-md hover:text-customBlue hover:bg-white hover:border-white'
                        onClick={handleMainMenu}>
                        Main Menu
                    </button>
                    <button
                        className='text-customBlue sm:hidden'
                        onClick={handleMainMenu}>
                        <IoExitOutline size={30} />
                    </button>
                </div>
                <div>
                    <div className="flex flex-col-reverse sm:grid sm:grid-flow-col gap-12 sm:gap-32 justify-center sm:pt-2 xl:pt-12">
                        <div className="relative">
                            <div className="absolute left-[18px] top-0 bottom-0 w-[3px] bg-gray-200 before:absolute before:top-0 before:bottom-[-16px] before:left-0 before:w-[3px] before:bg-gray-200 after:absolute after:top-[-12px] after:bottom-0 after:left-0 after:w-[3px] after:bg-gray-200"></div>
                            <div className="flex flex-col sm:text-xl gap-6 sm:gap-12 pl-10">
                                <div className="relative flex items-center">
                                    <div className="absolute -left-[33px] top-[3px] w-6 h-6 rounded-full bg-gradient-to-br from-blue-300 via-white to-blue-300"></div>
                                    <span>Developing a holistic approach for a theme leveraging ecosystems, based on the customer requirements</span>
                                </div>
                                <div className="relative flex items-center">
                                    <div className="absolute -left-[33px] top-[3px] w-6 h-6 rounded-full bg-gradient-to-br from-blue-300 via-white to-blue-300"></div>
                                    <span>Identify the key stakeholders by leveraging the established existing ecosystem players</span>
                                </div>
                                <div className="relative flex items-center">
                                    <div className="absolute -left-[33px] top-[3px] w-6 h-6 rounded-full bg-gradient-to-br from-blue-300 via-white to-blue-300"></div>
                                    <span>Orchestrate & govern the entire engagement</span>
                                </div>
                                <div className="relative flex items-center">
                                    <div className="absolute -left-[33px] top-[3px] w-6 h-6 rounded-full bg-gradient-to-br from-blue-300 via-white to-blue-300"></div>
                                    <span>Deliver the desired results</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative flex flex-col-reverse sm:flex-row items-center">
                            <div className="bg-blue-50 p-2 text-base sm:text-lg 2xl:text-xl leading-relaxed mx-2 mt-3 sm:mt-0 sm:mx-0 md:pr-12 sm:pl-4 xl:pl-6 2xl:pr-12 pt-3 pb-6 sm:pb-0 sm:pt-0 sm:py-4 xl:py-6">
                                For an enterprise & government, we orchestrate an end to end ecosystem for a theme, based on their vision & strategy
                            </div>
                            <div className="absolute border-[3px] border-customBlue rounded-full bg-white sm:text-2xl font-semibold text-customBlue px-6 py-2 transform translate-y-1/2">
                                Our commitment
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default CoInnovation;
