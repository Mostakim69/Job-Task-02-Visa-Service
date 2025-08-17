import React from 'react';
import Hero from '../Components/Hero';
import About from '../Components/About';
import VisaTypes from '../Components/VisaTypes';
import WhyUS from '../Components/WhyUS';
import Testimonials from '../Components/Testimonials';
import Contact from './Contact';


const Home = () => {
    return (
        <div>
            <Hero/>
            <About/>
            <VisaTypes/>
            <WhyUS/>
            <Testimonials />
            <Contact />
        </div>
    );
};

export default Home;