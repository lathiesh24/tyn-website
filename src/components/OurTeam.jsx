import React from 'react'
import CardOurTeam from './CardOurTeam'

const OurTeam = () => {

    return (
        <>
            <div className='flex flex-col justify-center items-center sm:bg-blue-50 pb-12 sm:pb-56 h-[100vh] sm:h-auto'>
                <div className='text-3xl sm:text-4xl text-customBlack sm:text-customBlue font-medium mt-6 sm:mt-12'>
                    Our Team
                </div>
                <div className='sm:pt-0 pt-12'>
                    <CardOurTeam />
                </div>
            </div>
        </>
    )
}

export default OurTeam