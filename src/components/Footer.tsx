import React from 'react';
import { motion } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-white py-8 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <motion.a
              href="#home"
              className="font-handwritten text-2xl font-bold gradient-text clickable"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Aditya
            </motion.a>
          </div>
          
          <div className="flex space-x-6 mb-4 md:mb-0">
            {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item, index) => (
              <motion.a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="text-charcoal hover:text-lavender transition-colors duration-300 clickable"
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
          
          <motion.button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-white shadow-md clickable"
            whileHover={{ y: -3, boxShadow: "0 10px 15px -3px rgba(201, 182, 228, 0.4)" }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-100 text-center text-charcoal/60">
          <p>&copy; {new Date().getFullYear()} Aditya Chauhan.All rights reserved.</p>
          <p className="mt-2 text-sm">
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;