import React from 'react'
import { useNavigate } from 'react-router-dom'

const Alliance = () => {
    const navigate = useNavigate();

    const handleMainMenu = () => {
        navigate('/')
    }

    return (
        <>
            <div className='flex flex-col  mx-20 2xl:mx-64 sm:pt-6 xl:pt-16 h-screen gap-6'>
                <div className='flex flex-row justify-between'>
                    <div className='text-2xl font-semibold'>Enabling Alliances to Startups </div>
                    <button
                        className='flex border-[3px] text-lg font-normal text-white bg-customBlue  w-max items-center justify-center py-1.5 px-4  rounded-xl cursor-pointer  tracking-wider shadow-md hover:text-customBlue hover:bg-white hover:border-white'
                        onClick={handleMainMenu}>
                        Main Menu
                    </button>
                </div>

                <div>
                    <div className='grid grid-flow-col gap-32 justify-center xl:pt-6'>
                        <div className='relative'>
                            <div className='bg-blue-50 p-2  text-lg 2xl:text-xl leading-relaxed md:pr-12 pl-4 xl:pl-6 2xl:pr-12 py-4 xl:py-6'>
                                Alliance GTM generates nonlinear repeatable growth but it takes time, specific expertise, constant governance & high cost to build and sustain the partnerships.
                                We shall be your extended alliance team, with an outcome based engagement for your growth. We start with building an ecosystem strategy in alignment with your organization business strategy followed by rolling out that strategy by effective implementation for tangible outcomes while ensuring those outcomes through effective governance & oversight framework
                            </div>
                            <div className='absolute border-[3px] border-customBlue rounded-full bg-white text-2xl font-semibold text-customBlue px-6 py-2 top-1/2 right-0 transform rotate-90 translate-x-1/2 -translate-y-1/2'>
                                Our commitment
                            </div>
                        </div>

                        <div className="relative flex justify-center items-center">
                            <div className="absolute left-[18px] top-0 w-[3px] h-full bg-gray-200 before:absolute before:top-0 before:bottom-auto before:left-0 before:w-[3px] before:bg-gray-200 after:absolute after:top-[-8px] after:bottom-0 after:left-0 after:w-[3px] after:bg-gray-200"></div>
                            <div className="flex flex-col text-xl gap-12 pl-10">
                                <div className="relative flex items-center">
                                    <div className="absolute -left-[33px] top-[3px] w-6 h-6 rounded-full bg-gradient-to-br from-blue-300 via-white to-blue-300"></div>
                                    <span>Cultivating a set of strategic partnership</span>
                                </div>
                                <div className="relative flex items-center">
                                    <div className="absolute -left-[33px] top-[3px] w-6 h-6 rounded-full bg-gradient-to-br from-blue-300 via-white to-blue-300"></div>
                                    <span>Conducting certain number of joint innovation days (workshop) with strategic customers</span>
                                </div>
                                <div className="relative flex items-center">
                                    <div className="absolute -left-[33px] top-[3px] w-6 h-6 rounded-full bg-gradient-to-br from-blue-300 via-white to-blue-300"></div>
                                    <span> Generating multi M$ joint pipeline with partners</span>
                                </div>
                                <div className="relative flex items-center">
                                    <div className="absolute -left-[33px] top-[3px] w-6 h-6 rounded-full bg-gradient-to-br from-blue-300 via-white to-blue-300"></div>
                                    <span>Achieving certain number of joint wins with partners</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Alliance