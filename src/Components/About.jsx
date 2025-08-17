import React from "react";
import { motion } from "framer-motion";

// Animation variants for reusability
const containerVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: -60, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.9, ease: "easeOut", delay: 0.3 },
  },
  hover: { scale: 1.03, transition: { duration: 0.3 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.25, ease: "easeOut" },
  }),
  hover: { scale: 1.02, y: -4, transition: { duration: 0.3 } },
};

const About = () => {
  return (
    <section className=" py-16 md:py-24 bg-[linear-gradient(to_right,_#b7c5eb,_#747e8f)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 tracking-tight font-sans"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            About Our Visa Services
          </motion.h2>
          <motion.p
            className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            We simplify the visa process with fast, secure, and reliable services.
            Our goal is to help you travel hassle-free with personalized support
            every step of the way.
          </motion.p>
        </motion.div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Image */}
          <motion.div
            className="lg:w-1/2"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2023/10/352043307/LC/SI/RB/47243651/international-visa-consultancy-service.jpg"
              alt="Visa Services"
              className="w-full h-auto max-h-[400px] object-cover rounded-2xl shadow-xl"
            />
          </motion.div>

          {/* Right Info Cards */}
          <motion.div
            className="lg:w-1/2 flex flex-col gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {[
              {
                icon: <i className="fas fa-globe text-blue-700 text-2xl sm:text-3xl"></i>,
                title: "Global Coverage",
                description:
                  "We assist with visa applications for countries worldwide, ensuring you meet all entry requirements.",
              },
              {
                icon: (
                  <i className="fas fa-user-shield text-green-700 text-2xl sm:text-3xl"></i>
                ),
                title: "Secure & Reliable",
                description:
                  "Your personal information and documents are handled with the highest security standards.",
              },
              {
                icon: <i className="fas fa-clock text-yellow-600 text-2xl sm:text-3xl"></i>,
                title: "Real-Time Tracking",
                description:
                  "Track your visa application progress online and receive instant updates.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
              >
                <div className="mt-1">{item.icon}</div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;