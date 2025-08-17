import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaHeart, FaPlane } from "react-icons/fa";

// Animation variants for the section container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Animation variants for each card
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Animation variants for the title and description
const textVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const VisaTypes = () => {
  return (
    <section className="py-1 md:py-28 bg-[linear-gradient(to_right,_#b7c5eb,_#747e8f)]">
      <div className="w-11/12 sm:container mx-auto">
        <motion.div
          className="text-center max-w-3xl mx-auto space-y-5 mb-10 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800  tracking-tight">
            Explore Visa Options
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Discover tailored visa solutions for travel, work, study, or family reunions. Start your global journey with confidence!
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div
            className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-blue-600 dark:text-blue-400 mb-5">
              <FaPlane className="mx-auto text-4xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Tourist Visa</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
              Perfect for short-term travel, vacations, and exploring new destinations.
            </p>
          </motion.div>
          <motion.div
            className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-green-600 dark:text-green-400 mb-5">
              <FaBriefcase className="mx-auto text-4xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Work Visa</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
              Unlock career opportunities with work permits for international employment.
            </p>
          </motion.div>
          <motion.div
            className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-orange-600 dark:text-orange-400 mb-5">
              <FaGraduationCap className="mx-auto text-4xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Student Visa</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
              Pursue your education abroad with visas for international students.
            </p>
          </motion.div>
          <motion.div
            className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-red-600 dark:text-red-400 mb-5">
              <FaHeart className="mx-auto text-4xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Family Visa</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
              Reunite with loved ones abroad through family sponsorship programs.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisaTypes;