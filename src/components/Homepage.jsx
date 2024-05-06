import React from 'react'
import Navbar from './Navbar'
import WhatWeDo from './WhatWeDo'
import OurMission from './OurMission'
import WeOffer from './WeOffer'
import OurTeam from './OurTeam'
import AdvisoryTeam from './AdvisoryTeam'
import OurDifference from './OurDifference'
import Footer from './Footer'

const Homepage = () => {
    return (
        <div className=''>
            <div className=''>
                <Navbar />
            </div>
            <div className='flex flex-col items-center h-screen justify-center'>
                <div className='flex flex-col md:text-6xl xl:text-7xl 2xl:text-8xl font-medium tracking-wide'>
                    <span className='text-black'>
                        Unleashing the potential  of
                    </span>
                    <span className='flex items-center justify-center mt-6 bg-gradient-to-r from-blue-500 via-cyan-500 to-green-300 text-transparent bg-clip-text min-w-max p-2 tracking-wider'>
                        ecosystems
                    </span>
                </div>
                <button className='flex border-4 border-sky-700 text-xl xl:text-2xl font-semibold text-sky-700 w-max items-center justify-center py-3 px-5 rounded-2xl cursor-pointer mt-12 tracking-wider'>
                    Our Difference
                </button>
            </div>

            <WhatWeDo />
          
            <OurMission />
         
            <div>
                <OurDifference/>
            </div>
            <div>
                <WeOffer />
            </div>
            <div className='mt-32'>
                <OurTeam />
            </div>
            <div className=''>
                <AdvisoryTeam />
            </div>
          
            <Footer/>
          
        </div>
    )
}

export default Homepage