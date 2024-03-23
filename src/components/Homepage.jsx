import React from 'react'
import Navbar from './Navbar'
import WhatWeDo from './WhatWeDo'

const Homepage = () => {
    return (
        <>
            <Navbar />
            <div className='flex flex-col items-center  h-screen mt-48'>
                <div className='flex flex-col text-6xl font-medium tracking-wide '>
                    <span className='text-black'>
                        Unleashing the potential  of
                    </span>
                    <span className='flex items-center justify-center mt-6 bg-gradient-to-r from-blue-500 via-cyan-500 to-green-300 text-transparent bg-clip-text min-w-max p-2 tracking-wider'>
                        ecosystems
                    </span>
                </div>
                <div className='flex border-2 border-sky-700 text-lg bg-white font-semibold text-sky-700 w-44 items-center justify-center py-1.5 rounded-2xl cursor-pointer mt-12 tracking-wider'>
                    Our Difference
                </div>
            </div>
            <WhatWeDo />
        </>
    )
}

export default Homepage