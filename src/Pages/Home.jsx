import React from 'react';
import Hero from '../Components/Hero';
import About from '../Components/About';
import VisaTypes from '../Components/VisaTypes';


const Home = () => {
    return (
        <div>
            <Hero/>
            <About/>
            <VisaTypes/>
        </div>
    );
};

export default Home;