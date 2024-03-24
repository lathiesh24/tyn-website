import React from 'react'

const WeOffer = () => {
    return (
        <div className='h-screenflex'>
            <div className='flex justify-center items-center text text-4xl text-black font-medium pt-24'>We Offer</div>
            <div className='grid grid-cols-2 gap-x-4 mt-20 mx-48'>
                <div className='border bg-blue-50 rounded-lg px-12 py-8'>
                    <div className='text-sky-600  text-2xl'>Enabling Alliances to Startups</div>
                    <div className='mt-3 leading-loose font-light'>Alliance as a service to growth B2B tech companies, to scale their business development through Global System Integrators (GSI) & established tech partners</div>
                    <div className='flex border-2 border-sky-700 text-lg bg-white font-semibold text-sky-700 w-40 items-center justify-center py-1.5 rounded-2xl cursor-pointer mt-4 tracking-wider'>Find out how</div>
                </div>
                <div className='border bg-blue-50 rounded-lg px-12 py-8'>
                    <div className='text-sky-600  text-2xl'>Enabling Co Innovation to Entreprises</div>
                    <div className='mt-3 leading-loose font-light'>Co Innovation as a service to enterprise & governments, to solve their complex requirements and cater their customer needs through ecosystems</div>
                    <div className='flex border-2 border-sky-700 text-lg bg-white font-semibold text-sky-700 w-40 items-center justify-center py-1.5 rounded-2xl cursor-pointer mt-4 tracking-wider'>Find out how</div>
                </div>
            </div>
        </div>
    )
}

export default WeOffer
