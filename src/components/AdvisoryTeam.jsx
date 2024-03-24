import React from 'react'
import Card from './Card';

const AdvisoryTeam = () => {
    return (
        <>
            <div className='flex flex-col justify-center pb-32'>
                <div className='flex justify-center items-center text-2xl text-sky-600 font-medium -mt-40 '>
                    Our Advisory team includes
                </div>
                <div className='flex flex-row gap-x-8 flex-wrap justify-center mx-16'>
                    <Card />
                </div>
            </div>
        </>
    )
}

export default AdvisoryTeam