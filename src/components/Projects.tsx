import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import mockupImage1 from '../assets/img1.jpg';
import mockupImage2 from '../assets/img2.jpg';
import mockupImage3 from '../assets/img3.png';
import mockupImage4 from '../assets/img4.jpg';
import mockupImage5 from '../assets/img5.jpg';
import mockupImage6 from '../assets/img6.jpg';
import mockupImage7 from '../assets/img7.jpg';


const projects = [
  {
    title: "Agency Website",
    description: "A comprehensive and modern agency website to showcase the services offered by them.",
    image: mockupImage1,
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://serviceweb02.netlify.app"
  },
  {
    title: "Modern Task Dashboard",
    description: "A beautiful ghibli style inspired task managing dashboard with chill and modern vibes.",
    image: mockupImage2,
    tags: ["React", "Progress Graph", "CSS Animation"],
    liveUrl: "https://ghibli-task-flow.vercel.app/"
  },
  {
    title: "Web Design Agency",
    description: "A professional web design course selling website with a modern layout and user-friendly interface.",
    image: mockupImage3,
    tags: ["React", "Tailwind CSS", "Integration"],
    liveUrl: "https://web-design-034.netlify.app/"
  },
  {
    title: "Restaurant Elegance",
    description: "A modern luuxury restaurant website with a focus on elegance and simplicity with proper layout.",
    image: mockupImage4,
    tags: ["React", "Tailwind", "Framer-Motion"],
    liveUrl: "https://restaurant-elegance.netlify.app/"
  },
  {
    title: "Futuristic VR Headset",
    description: "A modern futuristic VR website with a focus on elegance and tech theme with proper layout.",
    image: mockupImage5,
    tags: ["React", "Tailwind", "Framer-Motion"],
    liveUrl: "https://vrhead.netlify.app/"
  },
  {
    title: "Travel Website",
    description: "A modern travel website with 3D z-axis scrolling effect showcasing the best places to visit",
    image: mockupImage6,
    tags: ["React", "Tailwind", "Framer-Motion"],
    liveUrl: "https://travelvoyager.netlify.app/"
  },
  {
    title: "Product Service Website",
    description: "A modern video software tool website made with clean subtle look",
    image: mockupImage7,
    tags: ["React", "Tailwind", "Framer-Motion"],
    liveUrl: "https://glitter20.netlify.app/"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 screen-height relative overflow-hidden">
      {/* Background elements */}
      <div className="blob w-96 h-96 bg-pastelBlue/10 left-[-10%] bottom-[20%]"></div>
      <div className="blob w-80 h-80 bg-lavender/10 right-[-5%] top-[30%]"></div>
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-lg text-charcoal/80 max-w-2xl mx-auto">
            Here are some of my recent works that showcase my skills and passion for creating beautiful digital experiences.
          </p>
        </motion.div>

        <div className="overflow-hidden">
          <motion.div 
            className="flex flex-nowrap gap-6 py-8 px-4 overflow-x-auto scrollbar-hide"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="flex-none w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white rounded-2xl shadow-lg overflow-hidden"
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-charcoal/70 mb-4">{project.description}</p>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-lavender hover:text-lavender/80 transition-colors"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;