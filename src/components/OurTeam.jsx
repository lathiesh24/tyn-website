import React from 'react'

const OurTeam = () => {
    return (
        <>
            <div className='flex flex-col justify-center items-center bg-blue-50 px-24 pb-32 '>
                <div className='text-4xl text-sky-600 font-medium mt-12'>
                    Our Team
                </div>
                <div className='grid grid-cols-3 gap-8 mt-12'>
                    <div className='border bg-white rounded-lg p-6'>
                        <div className='text-black  text-xl font-medium'>Consulting Team</div>
                        <div className='mt-1.5 leading-loose font-light'>Owning the customer deliverables with full time responsibilities</div>
                    </div>
                    <div className='border bg-white rounded-lg p-6'>
                        <div className='text-black  text-xl font-medium'>Advisory Team</div>
                        <div className='mt-1.5 leading-loose font-light'>Shall work for growth of the network (experts from academia & CXOs from industry)</div>
                    </div>
                    <div className='border bg-white rounded-lg p-6'>
                        <div className='text-black  text-xl font-medium'>Evangelize Team</div>
                        <div className='mt-1.5 leading-loose font-light'>Shall work for our customer success by enabling connects with partners & other stakeholders from their networks (senior executives with strong connects in the industry)</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurTeam