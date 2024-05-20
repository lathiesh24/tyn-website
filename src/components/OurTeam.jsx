import React from 'react'
import CardOurTeam from './CardOurTeam'

const OurTeam = () => {

    return (
        <>
            <div className='flex flex-col justify-center items-center sm:bg-blue-50 pb-12 sm:pb-56'>
                <div className='text-2xl sm:text-4xl text-black sm:text-sky-600 font-medium mt-6 sm:mt-12'>
                    Our Team
                </div>
                <div className=''>
                    <CardOurTeam />
                </div>
            </div>
        </>
    )
}

export default OurTeam