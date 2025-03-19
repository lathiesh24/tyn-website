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
            <div className='pt-16'>
                <WhitepaperOne />
            </div>
        </div>
    )
}

export default page