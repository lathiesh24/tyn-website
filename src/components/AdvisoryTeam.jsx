import React from 'react'
import Card from './Card';

const AdvisoryTeam = () => {
    return (
        <>
            <div className='flex flex-col justify-center pb-8 sm:pb-24'>
                <div className='flex justify-center items-center text-2xl text-customBlack sm:text-sky-600 font-medium  sm:-mt-32'>
                    Our Advisory team includes
                </div>
                <div className='flex flex-col sm:flex-row sm:gap-x-8 flex-wrap justify-center mx-4 mt-4 sm:mt-0 sm:mx-0 '>
                    <Card />
                </div>
            </div>
        </>
    )
}

export default AdvisoryTeam