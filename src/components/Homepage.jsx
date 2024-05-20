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
            <div id='home' className='flex flex-col items-center sm:h-screen justify-center pt-40 pb-16 sm:py-0'>
                <div className='flex flex-col text-2xl sm:text-6xl font-medium tracking-wide '>
                    <span className='text-black'>
                        Unleashing the potential  of
                    </span>
                    <span className='flex items-center justify-center mt-3 sm:mt-6 bg-gradient-to-r from-blue-500 via-cyan-500 to-green-300 text-transparent bg-clip-text min-w-max p-2 tracking-wider'>
                        ecosystems
                    </span>

                </div>
                <button className='flex border-2 border-sky-700 text-base sm:text-2xl font-semibold text-sky-700 w-max items-center justify-center py-1.5 px-3 sm:py-3 sm:px-5 rounded-2xl cursor-pointer mt-6 sm:mt-12 tracking-wider'>
                    Our Difference
                </button>
            </div>

            <WhatWeDo />

            <div id='about-us'>
                <OurMission />
            </div>


            <div id="services">
                <WeOffer />
            </div>

            <div>
                <OurDifference />
            </div>
            <div id="our-team" className='mt-8 sm:mt-20'>
                <OurTeam />
            </div>

            <div className=''>
                <AdvisoryTeam />
            </div>

            <Footer />

        </div>
    )
}

export default Homepage