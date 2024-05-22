import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import WhatWeDo from './WhatWeDo';
import OurMission from './OurMission';
import WeOffer from './WeOffer';
import OurTeam from './OurTeam';
import AdvisoryTeam from './AdvisoryTeam';
import OurDifference from './OurDifference';
import Footer from './Footer';

const Homepage = () => {
    const [activeSection, setActiveSection] = useState('home');

    const handleNavigation = (sectionId) => {
        const section = document.getElementById(sectionId);
        const navbarHeight = document.querySelector('.fixed').offsetHeight;
        if (section) {
            const sectionTop = section.offsetTop - navbarHeight;
            window.scrollTo({
                top: sectionTop,
                behavior: 'smooth',
            });
            setActiveSection(sectionId);
        }
    };


    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const navbarHeight = document.querySelector('.fixed').offsetHeight;
            const sections = document.querySelectorAll('section[id]');

            sections.forEach((section) => {
                const sectionTop = section.offsetTop - navbarHeight;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    setActiveSection(sectionId);
                }
            });
        };

        document.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className="" >
            <Navbar activeSection={activeSection} handleNavigation={handleNavigation} />
            <section id='home' className='flex flex-col items-center justify-center h-screen'>
                <div className='flex flex-col text-2xl sm:text-6xl font-medium tracking-wide'>
                    <span className='text-customBlack'>
                        Unleashing the potential of
                    </span>
                    <span className='flex items-center justify-center mt-3 sm:mt-6 bg-custom-gradient text-transparent bg-clip-text min-w-max p-2 tracking-wider'>
                        ecosystems
                    </span>
                </div>
                <button
                    className='flex border-[3px] border-customBlue text-base sm:text-2xl font-medium text-customBlue w-max items-center justify-center py-1.5 px-3 sm:py-3 sm:px-5 rounded-2xl cursor-pointer mt-6 tracking-wider'
                    onClick={() => handleNavigation('difference')}>
                    Our Difference
                </button>
            </section>

            <WhatWeDo />

            <section id='about-us'>
                <OurMission />
            </section>

            <section id="services">
                <WeOffer />
            </section>

            <section id='difference'>
                <OurDifference />
            </section>

            <section id="our-team" className='mt-8 sm:mt-20'>
                <OurTeam />
            </section>

            <section>
                <AdvisoryTeam />
            </section>

            <section id='contact-us'>
                <Footer />
            </section>
        </div >
    );
};

export default Homepage;
