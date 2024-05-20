import React from 'react';
import { useNavigate } from 'react-router-dom'

const CoInnovation = () => {
    const navigate = useNavigate();

    const handleMainMenu = () => {
        navigate('/')
    }

    return (
        <>
            <div className='flex flex-col mx-20 2xl:mx-64 sm:pt-16 md:pt-12 2xl:pt-16 h-screen gap-6'>
                <div className='flex flex-row justify-between'>
                    <div className='text-2xl font-semibold'>Enabling Co Innovation to Enterprises</div>
                    <button
                        className='flex border-[3px] text-lg font-normal text-white bg-customBlue  w-max items-center justify-center py-1.5 px-4  rounded-xl cursor-pointer  tracking-wider shadow-md hover:text-customBlue hover:bg-white hover:border-white'
                        onClick={handleMainMenu}>
                        Main Menu
                    </button>
                </div>
                <div>
                    <div className="grid grid-flow-col gap-32 justify-center sm:pt-2 xl:pt-12">
                        <div className="relative">
                            <div className="absolute left-[18px] top-0 bottom-0 w-[3px] bg-gray-200 before:absolute before:top-0 before:bottom-[-16px] before:left-0 before:w-[3px] before:bg-gray-200 after:absolute after:top-[-12px] after:bottom-0 after:left-0 after:w-[3px] after:bg-gray-200"></div>
                            <div className="flex flex-col text-xl gap-12 pl-10">
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

                        <div className="relative flex items-center">
                            <div className="bg-blue-50 p-2 text-lg 2xl:text-xl leading-relaxed md:pr-8 2xl:pr-6 py-4 pl-10 rounded-lg">
                                For an enterprise & government, we orchestrate an end to end ecosystem for a theme, based on their vision & strategy
                            </div>
                            <div className="absolute border-[3px] border-customBlue rounded-full bg-white text-2xl font-semibold text-customBlue px-6 py-2 transform -rotate-90 left-0 translate-x-[-50%] translate-y-[-50%] top-1/2">
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
