import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from 'react-icons/io5';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleNavigation = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const rect = section.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const top = rect.top + scrollTop - (window.innerHeight / 2) + (rect.height / 2);

            window.scrollTo({
                top: top,
                behavior: 'smooth'
            });
        }
        setIsOpen(false);
    };


    return (
        <>
            <div className='fixed flex flex-row bg-white z-50 py-6 w-full h-max items-center justify-between'>
                <div className="ml-8">
                    <img
                        src="/tyn-logo.png"
                        alt="The Yellow Network Logo"
                        width={200}
                        height={0}
                    />
                </div>
                <div className="hidden md:grid text-gray-800 grid-flow-col gap-x-16 mr-20 text-lg">
                    <div onClick={() => handleNavigation('home')} className='mt-2 cursor-pointer'>Home</div>
                    <div onClick={() => handleNavigation('about-us')} className='mt-2 cursor-pointer'>About Us</div>
                    <div onClick={() => handleNavigation('services')} className='mt-2 cursor-pointer'>Services</div>
                    <div onClick={() => handleNavigation('our-team')} className='mt-2 cursor-pointer'>Our Team</div>
                    <div onClick={() => handleNavigation('contact-us')} className='border bg-sky-600 text-white py-1.5 px-8 rounded-3xl cursor-pointer'>
                        Contact Us
                    </div>
                </div>
                <div className="sm:hidden flex items-center mr-8">
                    <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                        {isOpen ? <IoClose size={40} /> : <GiHamburgerMenu size={40} />}
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-20">
                    <div className="fixed top-0 right-0 w-full bg-white  flex flex-col items-center pt-32 pb-16 space-y-8">
                        <div onClick={() => handleNavigation('home')} className='mt-2 cursor-pointer text-xl'>Home</div>
                        <div onClick={() => handleNavigation('about-us')} className='mt-2 cursor-pointer text-xl'>About Us</div>
                        <div onClick={() => handleNavigation('services')} className='mt-2 cursor-pointer text-xl'>Services</div>
                        <div onClick={() => handleNavigation('our-team')} className='mt-2 cursor-pointer text-xl'>Our Team</div>
                        <div onClick={() => handleNavigation('contact-us')} className='flex justify-center items-center border bg-sky-600 text-white py-2 px-8 rounded-3xl cursor-pointer text-xl'>
                            Contact Us
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
