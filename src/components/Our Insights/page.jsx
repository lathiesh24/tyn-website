import React from 'react'
import WhitepaperOne from './WhitepaperOne'
import Navbar from '../Navbar'
import PartnerLandScape from './PartnerLandScape'
import Footer from '../Footer'

const page = () => {
 
    return (
        <div className='flex flex-col'>
            <div>
                <Navbar />
            </div>
            <div className=''>
                <WhitepaperOne />
            </div>
            <div className=''>
                <Footer/>
            </div>
        </div>
    )
}

export default page