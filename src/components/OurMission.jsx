import React from 'react'

const OurMission = () => {
    return (
        <>
            <div className='h-screen'>
                <div className='flex flex-col  items-center text-4xl leading-loose tracking-wide font-semibold pt-24'>
                    <div>
                        <span className='text-[26px]'>Our Mission</span>
                        <span className='text-[26px] font-extralight tracking-wider'> is to deliver </span>
                        <span className='bg-gradient-to-r from-blue-500 via-cyan-500 to-green-300 text-transparent bg-clip-text'>Noiseless Information </span>
                        &
                    </div>
                    <div className='bg-gradient-to-r from-blue-500 via-cyan-500 to-green-300 text-transparent bg-clip-text'>Frictionless Orchestration</div>
                </div>
                <div className='grid grid-cols-2 mx-64 mt-8'>
                    <div className=''>
                        Customer needs
                    </div>
                    <div className='border bg-blue-50 rounded-lg px-12 py-8'>
                        <div className='text-sky-600  text-3xl'>Our Company</div>
                        <div className='mt-5 leading-loose font-light'>
                            We believe, when businesses or government shift their focus from their products or services to holistic customer needs, barriers break, an ecosystem economy emerges & a tremendous value is created for all stakeholders.
                            We partner with organizations & governments to succeed in the ecosystem economy by being an ecosystem orchestrator (from strategy to implementation & governance).
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurMission
