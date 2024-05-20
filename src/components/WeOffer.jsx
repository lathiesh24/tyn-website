import React from 'react'
import { useNavigate } from 'react-router-dom'

const WeOffer = () => {
    const navigate = useNavigate();

    const handleInnovation = () => {
        navigate('/co-innovation');
    }

    const handleAlliance = () => {
        navigate('/alliance');
    }

    return (
        <div className='h-screenflex'>
            <div className='flex justify-center items-center text-2xl sm:text-4xl text-black font-medium py-8 sm:py-16'>We Offer</div>
            <div className='grid grid-flow-row sm:grid-cols-2 gap-y-4 sm:gap-x-4 sm:mt-0 sm:mx-48 mx-4'>
                <div className='border bg-blue-50 rounded-lg p-3 sm:px-12 sm:py-8'>
                    <div className='text-sky-600 text-xl sm:text-2xl'>Enabling Alliances to Startups</div>
                    <div className='mt-2 leading-loose text-[18px] sm:text-base  font-light'>Alliance as a service to growth B2B tech companies, to scale their business development through Global System Integrators (GSI) & established tech partners</div>
                    <div
                        onClick={handleAlliance}
                        className='flex border-2 border-customBlue text-lg bg-white font-medium text-customBlue sm:w-40 items-center justify-center py-1.5 rounded-xl cursor-pointer mt-4 tracking-wider shadow-sm'>
                        Find out how
                    </div>
                </div>
                <div className='border bg-blue-50 rounded-lg p-3 sm:px-12 sm:py-8'>
                    <div className='text-sky-600 text-xl sm:text-2xl'>Enabling Co Innovation to Entreprises</div>
                    <div className='mt-2 leading-loose text-[18px] sm:text-base font-light'>Co Innovation as a service to enterprise & governments, to solve their complex requirements and cater their customer needs through ecosystems</div>
                    <div
                        className='flex border-2 border-customBlue text-lg bg-white font-medium text-customBlue sm:w-40 items-center justify-center py-1.5 rounded-xl cursor-pointer mt-4 tracking-wider shadow-sm'
                        onClick={handleInnovation}>
                        Find out how
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeOffer
