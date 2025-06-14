import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import HeroSection from './HeroSection';
import HowItWorks from './HowItWorks';
import StartupSpotlight from './StartupSpotlight';
import IndustryUseCases from './IndustryUseCases';
import CallToAction from './CallToAction';

const Homepage = () => {
  const handleNavigation = (id) => {
    const element = document.getElementById(id);
    const navbarHeight = document.querySelector('.fixed')?.offsetHeight || 0;
    if (element) {
      const top = element.offsetTop - navbarHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Navbar activeSection={''} />
      <HeroSection onCTAClick={() => handleNavigation('how-it-works')} />
      <HowItWorks />
      <StartupSpotlight />
      <IndustryUseCases />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Homepage;
