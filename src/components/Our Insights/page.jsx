import React from 'react'
import WhitepaperOne from './WhitepaperOne'
import Navbar from '../Navbar'
import PartnerLandScape from './PartnerLandScape'

const page = () => {
 
    return (
        <div className='flex flex-col'>
            <div>
                <Navbar />
            </div>
            <div className='pt-20'>
                <WhitepaperOne />
            </div>

            <div className='mt-10'>
                <PartnerLandScape/>
            </div>
        </div>
    )
}

export default page