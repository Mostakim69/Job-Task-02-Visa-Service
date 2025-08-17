import { FaBalanceScale, FaHeadset, FaLock, FaUserShield } from "react-icons/fa";
import { motion } from "framer-motion";

const WhyUS = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.3 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
    hover: { scale: 1.05, boxShadow: "0px 10px 25px rgba(0,0,0,0.15)" },
  };

  return (
    <section className="py-16 bg-[linear-gradient(to_right,#b7c5eb,#747e8f)]">
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-left"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Why Choose Us?
          </h2>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            With our services, you’ll find everything you need to apply for an
            e-visa right here. An easy and stress-free application process
            without navigating complex embassy websites. Simply provide basic
            information, and we’ll take care of the rest for a small service fee.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-dark-primary hover:bg-light-secondary cursor-pointer text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg"
          >
            Get Started!
          </motion.button>
        </motion.div>

        {/* Right Content (Cards) */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Card 1 */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="bg-white shadow-md rounded-xl p-6 text-center transition-all duration-300"
          >
            <div className="bg-yellow-100 p-3 rounded-full mb-4 inline-block">
              <FaBalanceScale className="text-yellow-500 text-3xl" />
            </div>
            <h3 className="text-lg font-bold text-gray-800">Transparency</h3>
            <p className="text-gray-600 mt-2">
              We provide clear, upfront details on fees and processes with no
              hidden costs.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="bg-white shadow-md rounded-xl p-6 text-center transition-all duration-300"
          >
            <div className="bg-red-100 p-3 rounded-full mb-4 inline-block">
              <FaLock className="text-red-500 text-3xl" />
            </div>
            <h3 className="text-lg font-bold text-gray-800">Data Security</h3>
            <p className="text-gray-600 mt-2">
              Your data is completely secure with our state-of-the-art SSL
              encryption.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="bg-white shadow-md rounded-xl p-6 text-center transition-all duration-300"
          >
            <div className="bg-green-100 p-3 rounded-full mb-4 inline-block">
              <FaUserShield className="text-green-500 text-3xl" />
            </div>
            <h3 className="text-lg font-bold text-gray-800">Privacy</h3>
            <p className="text-gray-600 mt-2">
              We follow GDPR and industry standards to safeguard your personal
              data.
            </p>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="bg-white shadow-md rounded-xl p-6 text-center transition-all duration-300"
          >
            <div className="bg-blue-100 p-3 rounded-full mb-4 inline-block">
              <FaHeadset className="text-blue-500 text-3xl" />
            </div>
            <h3 className="text-lg font-bold text-gray-800">Support</h3>
            <p className="text-gray-600 mt-2">
              Our 24/7 support ensures you’re never alone. Assistance is just a
              call or email away.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUS;