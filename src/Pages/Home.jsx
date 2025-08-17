import React from 'react';
import Hero from '../Components/Hero';
import About from '../Components/About';
import VisaTypes from '../Components/VisaTypes';
import WhyUS from '../Components/WhyUS';
import Testimonials from '../Components/Testimonials';


const Home = () => {
    return (
        <div>
            <Hero/>
            <About/>
            <VisaTypes/>
            <WhyUS/>
            <Testimonials />
        </div>
    );
};

export default Home;