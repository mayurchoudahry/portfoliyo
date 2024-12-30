import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

const LandingPage = () => {
  return (
    <div className="bg-background text-black min-h-screen">
      {/* Navbar overlay */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="pt-24 px-6 py-16 max-w-screen-xl mx-auto bg-background">
        <motion.div
          className="text-center"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ amount: 0.8 }}
          variants={titleVariants}
        >
          <h1 className="text-6xl font-extrabold mb-4">Mayur Choudhary</h1>
          <p className="text-lg leading-relaxed">
            A passionate full-stack developer creating seamless, user-friendly applications with modern technologies.
          </p>
        </motion.div>

        {/* Add any additional content here */}
      </div>
    </div>
  );
};

const titleVariants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', bounce: 0.4, duration: 1 },
  },
};

export default LandingPage;
