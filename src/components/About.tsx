import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Coffee, Code, BookOpen } from 'lucide-react';
import profile from "../assets/profile.jpg"

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const facts = [
    { icon: <Coffee className="w-6 h-6 text-lavender" />, text: "Always charged" },
    { icon: <Code className="w-6 h-6 text-pastelBlue" />, text: "Loves clean code" },
    { icon: <BookOpen className="w-6 h-6 text-lilac" />, text: "Always learning" },
    { icon: <Heart className="w-6 h-6 text-lavender" />, text: "Creates with passion" }
  ];

  return (
    <section id="about" className="py-24 screen-height relative overflow-hidden">
      {/* Background gradient variation */}
      <div className="absolute inset-0 bg-gradient-to-br from-offWhite to-lilac/10 z-[-1]"></div>
      <div className="blob w-96 h-96 bg-lavender/10 right-[-10%] top-[20%]"></div>
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">About Me</h2>
        </motion.div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Profile Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <img 
                  src={profile}
                  alt="Aditya"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-lavender/30 to-transparent"></div>
              </div>
              
              {/* Floating elements */}
              <motion.div 
                className="absolute w-16 h-16 bg-pastelBlue/30 rounded-full -top-8 -left-8 z-[-1]"
                animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute w-20 h-20 bg-lilac/20 rounded-full -bottom-10 -right-10 z-[-1]"
                animate={{ scale: [1, 1.1, 1], rotate: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
            </motion.div>
            
            {/* Bio Section */}
            <div>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <motion.p variants={itemVariants} className="text-lg mb-6 font-handwritten text-2xl leading-relaxed">
                  Hi there! I'm Aditya, a creative developer with a passion for building beautiful and functional web experiences.
                </motion.p>
                
                <motion.p variants={itemVariants} className="mb-6">
                  I specialize in front-end development, creating responsive and interactive websites
                  that provide exceptional user experiences. With a background in both design and
                  development, I bridge the gap between aesthetics and functionality.
                </motion.p>
                
                <motion.p variants={itemVariants} className="mb-8">
                  I built website that not only looks good but also works as your lead generating source.
                </motion.p>
                
                {/* Quirky Facts */}
                <motion.div 
                  variants={itemVariants}
                  className="grid grid-cols-2 gap-4"
                >
                  {facts.map((fact, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center p-3 bg-white/70 backdrop-blur-sm rounded-lg shadow-sm"
                      whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.9)" }}
                    >
                      <div className="mr-3">{fact.icon}</div>
                      <span>{fact.text}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;