import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Check, Loader2, Instagram, Github, Linkedin, Dribbble } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  
  const validateForm = () => {
    if (!formState.name.trim()) {
      setErrorMessage('Please enter your name');
      return false;
    }
    if (!formState.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      setErrorMessage('Please enter a valid email address');
      return false;
    }
    if (!formState.message.trim()) {
      setErrorMessage('Please enter your message');
      return false;
    }
    return true;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
    setErrorMessage('');
    setSubmitStatus('idle');
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');
    
    try {
      const response = await fetch('https://hook.us2.make.com/qnc16y4vlloes57agt8b1os86cwfw7kw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formState.name.trim(),
          email: formState.email.trim(),
          message: formState.message.trim(),
          timestamp: new Date().toISOString()
        })
      });
      
      if (!response.ok) throw new Error('Failed to send message');
      
      setSubmitStatus('success');
      setFormState({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-24 screen-height relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-offWhite to-white z-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="sparkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * -30, 0],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 3 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="section-title font-handwritten">Let's Connect</h2>
        </motion.div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1"
            >
              <h3 className="text-2xl font-handwritten mb-6">Get in Touch</h3>
              <p className="mb-8">
                I'm always open to new opportunities, collaborations, or just a friendly chat about web development and design.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-lavender mr-4" />
                  <span>contactwebz03@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-lavender mr-4" />
                  <span>Chandigarh, INDIA</span>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="text-xl font-handwritten mb-4">Find me on</h3>
                <div className="flex space-x-4">
                  <motion.a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center cursor-pointer"
                    whileHover={{ y: -3, backgroundColor: "#E7D5F7" }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center cursor-pointer"
                    whileHover={{ y: -3, backgroundColor: "#E7D5F7" }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Linkedin className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="https://www.instagram.com/webz_03?igsh=MTRjeDZ5YWxtNmN6Zw=="
                    className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center cursor-pointer"
                    whileHover={{ y: -3, backgroundColor: "#E7D5F7" }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Instagram className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center cursor-pointer invisible"
                    whileHover={{ y: -3, backgroundColor: "#E7D5F7" }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Dribbble className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-2"
            >
              <div className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-handwritten mb-6">Send me a message</h3>
                
                {submitStatus === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-lavender/20 mb-4">
                      <Check className="w-8 h-8 text-lavender" />
                    </div>
                    <h4 className="text-xl font-medium mb-2">Thank you!</h4>
                    <p>Your message has been sent successfully. I'll get back to you soon!</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-lavender/50"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-lavender/50"
                        placeholder="Your email"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-lavender/50"
                        placeholder="Your message"
                      />
                    </div>
                    
                    {errorMessage && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-red-500 text-sm"
                      >
                        {errorMessage}
                      </motion.p>
                    )}
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-lavender text-white py-2 px-6 rounded-lg flex items-center justify-center space-x-2 hover:bg-lavender/90 transition-colors disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;