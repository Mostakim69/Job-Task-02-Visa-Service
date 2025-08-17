import React from 'react';
import Hero from '../Components/Hero';
import About from '../Components/About';
import VisaTypes from '../Components/VisaTypes';
import WhyUS from '../Components/WhyUS';


const Home = () => {
    return (
        <div>
            <Hero/>
            <About/>
            <VisaTypes/>
            <WhyUS/>
        </div>
    );
};

export default Home;