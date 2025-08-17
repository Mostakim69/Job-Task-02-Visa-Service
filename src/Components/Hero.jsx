import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

// Variants for staggered text animations
const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2, // Staggered delay for each element
      duration: 0.8,
      ease: 'easeOut',
    },
  }),
};

// Variants for image animation
const imageVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

// Variants for overlay animation
const overlayVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 0.5,
    transition: {
      duration: 1,
      ease: 'easeIn',
    },
  },
};

const Hero = () => {
  const shouldReduceMotion = useReducedMotion(); // Respect reduced motion preference

  // Disable animations if reduced motion is enabled
  const animationProps = shouldReduceMotion
    ? { initial: {}, animate: {}, whileInView: {} }
    : {
        initial: 'hidden',
        whileInView: 'visible',
        viewport: { once: true, amount: 0.3 }, // Trigger when 30% of section is in view
      };

  return (
    <motion.section
      className="relative bg-cover bg-center min-h-[500px] flex items-center"
      style={{ backgroundImage: "url('https://wallpapercat.com/w/full/2/a/2/1252422-1920x1080-desktop-1080p-visa-card-background-photo.jpg')" }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } },
      }}
      {...animationProps}
    >
      <motion.div
        className="absolute inset-0 bg-black"
        variants={overlayVariants}
        {...animationProps}
      />
      <div className="container mx-auto px-4 py-12 relative z-10 flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <motion.div
          className="md:w-1/2 text-center md:text-left space-y-6"
          variants={textVariants}
          {...animationProps}
        >
          <motion.h1
            className="text-3xl md:text-5xl font-extrabold text-white leading-tight"
            variants={textVariants}
            custom={0} // First item in stagger
          >
            Your Journey Starts Here
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-200 max-w-lg"
            variants={textVariants}
            custom={1} // Second item in stagger
          >
            Effortless visa applications with step-by-step guidance. Apply today and travel the world with confidence.
          </motion.p>
          <motion.a
            href="services"
            className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300"
            variants={textVariants}
            custom={2} // Third item in stagger
            whileHover={!shouldReduceMotion ? { scale: 1.05 } : {}} // Scale on hover
            whileTap={!shouldReduceMotion ? { scale: 0.95 } : {}} // Scale on click
          >
            Start Your Application
          </motion.a>
        </motion.div>
        {/* Image Section */}
        <motion.div
          className="md:w-1/2 mt-8 md:mt-0 flex justify-center"
          variants={imageVariants}
          {...animationProps}
        >
          <motion.img
            src="https://schengenvisainfo.com/news/wp-content/uploads/2023/07/Online-Visa-application-form-on-screen.-Country-Visit-permit..jpg"
            alt="Visa Application Process"
            className="rounded-lg shadow-xl max-w-full h-auto"
            variants={imageVariants}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;