import React from 'react'

const OurMission = () => {
    return (
        <>
            <div className='h-screenflex flex-col sm:gap-5 xl:gap-20 mt-4 sm:mt-8 mx-1 sm:mx-12'>
                <div className='flex-col xl:gap-5 items-center text-[15px] sm:text-4xl leading-loose tracking-wide font-semibold sm:flex hidden'>
                    <div className=''>
                        <span className='text-[18px] sm:text-[30px]'>Our Mission</span>
                        <span className='text-[18px] sm:text-[30px] font-extralight tracking-wider'> is to deliver </span>
                        <span className='bg-gradient-to-r from-blue-400 via-cyan-500 to-cyan-400 text-transparent bg-clip-text'>Noiseless Information </span>
                        &
                    </div>
                    <div className='bg-gradient-to-r from-blue-400 via-cyan-500 to-cyan-400 text-transparent bg-clip-text'>Frictionless Orchestration</div>
                </div>
                <div className='flex-col xl:gap-5 items-center text-[15px] sm:text-4xl leading-loose tracking-wide font-semibold flex sm:hidden'>
                    <div className=''>
                        <span className='text-[18px] sm:text-[30px]'>Our Mission</span>
                        <span className='text-[18px] sm:text-[30px] font-extralight tracking-wider'> is to deliver </span>
                    </div>
                    <div className='bg-gradient-to-r from-blue-400 via-cyan-500 to-cyan-400 text-transparent bg-clip-text text-xl sm:text-4xl mt-2'>Noiseless Information </div>
                    &
                    <div className='bg-gradient-to-r from-blue-400 via-cyan-500 to-cyan-400 text-transparent bg-clip-text text-xl sm:text-4xl'>Frictionless Orchestration</div>
                </div>
                <div className='grid grid-flow-row sm:grid-cols-2 gap-8 sm:gap-5 xl:gap-20 mt-8 sm:mt-16 sm:mx-10 xl:mx-20'>
                    <div className='flex justify-center items-center px-12 sm:px-0'>
                        <img src="/customerneedimage.jpg" alt="" className='' />
                    </div>
                    <div className='border bg-blue-50 rounded-lg px-2 sm:px-8 2xl:px-12 py-2 2xl:py-8 flex flex-col justify-start items-center mt-8 sm:mt-0 mx-2 sm:mx-0'>
                        <div className='text-xl sm:text-4xl xl:text-4xl 2xl:text-4xl'>Our Company</div>
                        <div className='mt-1 sm:mt-2 xl:mt-5  sm:leading-loose xl:leading-normal 2xl:leading-[40px] font-light text-lg sm:text-lg xl:text-lg 2xl:text-lg'>
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
