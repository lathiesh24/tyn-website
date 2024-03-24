import React from 'react'

const WhatWeDo = () => {
    return (
        <>
            <div className='h-screenflex flex flex-col justify-center items-center bg-blue-50 pt-16 pb-24 '>
                <div className='text-4xl text-sky-600 font-medium '>
                    What We Do?
                </div>
                <div className="flex justify-center space-x-32 mt-16">
                    <div className="relative h-[256px]">
                        <img className="rounded-lg cursor-pointer object-cover h-[256px] w-[270px]" src='/image1.png' alt='image1' />
                        <div className="absolute top-0 left-0 w-full h-full flex items-center  opacity-0 hover:opacity-100  duration-300 bg-white bg-opacity-100 rounded-lg cursor-pointer">
                            <p className="flex flex-col text-black pl-10 gap-y-2 text-2xl font-semibold text-left">
                                <span>We identify</span>
                                <span>Ecosystem</span>
                                <span>Stakeholders</span>
                            </p>
                        </div>
                    </div>
                    <div className="relative h-[256px]">
                        <img className="rounded-lg cursor-pointer object-cover h-[256px] w-[270px]" src='/image2.png' alt='image2' />
                        <div className="absolute top-0 left-0 w-full h-full flex items-center  opacity-0 hover:opacity-100  duration-300 bg-white bg-opacity-100 rounded-lg cursor-pointer">
                            <p className="flex flex-col text-black pl-10 gap-y-2 text-2xl font-semibold text-left">
                                <span>We define</span>
                                <span>Ecosystem</span>
                                <span>Strategy</span>
                            </p>
                        </div>
                    </div>
                    <div className="relative h-[256px]">
                        <img className="rounded-lg cursor-pointer object-cover h-[256px] w-[270px]" src='/image3.png' alt='image3' />
                        <div className="absolute top-0 left-0 w-full h-full flex items-center  opacity-0 hover:opacity-100 duration-300 bg-white bg-opacity-100 rounded-lg cursor-pointer">
                            <p className="flex flex-col text-black pl-10 gap-y-2 text-2xl font-semibold text-left">
                                <span>We build and</span>
                                <span>Orchestrate</span>
                                <span>System</span>
                            </p>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default WhatWeDo