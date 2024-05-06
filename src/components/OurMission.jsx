import React from 'react'

const OurMission = () => {
    return (
        <>
            <div className='h-screen flex flex-col gap-5 xl:gap-20  my-10'>
                <div className='flex flex-col xl:gap-5 items-center text-4xl xl:text-5xl 2xl:text-6xl leading-loose tracking-wide font-semibold'>
                    <div>
                        <span className='text-[30px]'>Our Mission</span>
                        <span className='text-[30px] font-extralight tracking-wider'> is to deliver </span>
                        <span className='bg-gradient-to-r from-blue-400 via-cyan-500 to-cyan-400 text-transparent bg-clip-text'>Noiseless Information </span>
                        &
                    </div>
                    <div className='bg-gradient-to-r from-blue-400 via-cyan-500 to-cyan-400 text-transparent bg-clip-text'>Frictionless Orchestration</div>
                </div>
                <div className='grid grid-cols-2 gap-5 xl:gap-20 mx-10 xl:mx-20'>
                    <div className=''>
                        <img src="/customerneedimage.jpg" alt="" />
                    </div>
                    <div className='border bg-blue-50 rounded-lg px-12 py-8 flex flex-col justify-start items-center'>
                        <div className='text-2xl xl:text-4xl 2xl:text-6xl'>Our Company</div>
                        <div className='mt-2 xl:mt-5 xl:leading-normal 2xl:leading-[60px] font-light  xl:text-lg 2xl:text-2xl'>
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
