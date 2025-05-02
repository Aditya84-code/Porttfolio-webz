import React from 'react';
import { motion } from 'framer-motion';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.8, ease: "easeOut" }
  })
};

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center">
      {/* Background Blobs */}
      <div className="blob w-96 h-96 bg-lavender left-[-10%] top-[20%]"></div>
      <div className="blob w-80 h-80 bg-pastelBlue right-[-5%] bottom-[10%]"></div>
      
      <div className="container mx-auto px-4 z-10 pt-28 md:pt-24">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div 
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={0}
            className="mb-2"
          >
            <span className="font-handwritten text-lg md:text-2xl text-lavender">Hello, I'm</span>
          </motion.div>
          
          <motion.h1
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={1}
            className="font-handwritten text-4xl md:text-7xl font-bold mb-3 md:mb-4"
          >
            <span className="gradient-text">Aditya Chauhan</span>
          </motion.h1>
          
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={2}
            className="mb-6 md:mb-8"
          >
            <h2 className="text-lg md:text-2xl text-charcoal/80">Creative Web Developer</h2>
          </motion.div>
          
          <motion.p
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={3}
            className="text-base md:text-lg mb-8 md:mb-10 max-w-xl mx-auto px-4"
          >
            I craft beautiful, interactive digital experiences with clean code and creative solutions.
          </motion.p>
          
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={4}
          >
            <motion.a
              href="#projects"
              className="cursor-pointer bg-gradient-primary text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full font-medium inline-block shadow-md"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(201, 182, 228, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
          </motion.div>
        </div>
      </div>
      
      {/* Floating elements */}
      <motion.div 
        className="floating-shape w-12 md:w-16 h-12 md:h-16 bg-lavender rounded-full left-[20%] top-[30%]"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="floating-shape w-10 md:w-12 h-10 md:h-12 bg-pastelBlue rounded-full right-[25%] bottom-[35%]"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div 
        className="floating-shape w-6 md:w-8 h-6 md:h-8 bg-lilac rounded-full left-[15%] bottom-[20%]"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
    </section>
  );
};

export default Hero;