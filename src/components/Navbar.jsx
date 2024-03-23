import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className=' flex flex-row bg-white py-6 w-full h-max items-center justify-between shadow-sm'>
                <div className="ml-8">
                    <img
                        src="/tyn-logo.png"
                        alt="The Yellow Network Logo"
                        width={200}
                        height={0}
                    />
                </div>
                <div className="text-gray-800 grid grid-flow-col gap-x-16 mr-20 text-lg ">
                    <div className='mt-2 cursor-pointer'>Home</div>
                    <div className='mt-2 cursor-pointer'>About Us</div>
                    <div className='mt-2 cursor-pointer'>Services</div>
                    <div className='mt-2 cursor-pointer'>Our Team</div>
                    <div className='border bg-sky-600 text-white py-1.5 px-8 rounded-3xl cursor-pointer'>
                        Contact Us
                    </div>
                </div>
            </div >
        </>
    )
}

export default Navbar