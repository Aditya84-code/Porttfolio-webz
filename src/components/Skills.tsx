import React from 'react';
import { motion } from 'framer-motion';
import {
  BrainCircuit,
  Code2,
  Palette,
  Server,
  Layers,
  Smartphone,
  Database,
  Cloud,
  GitBranch,
  Terminal,
  Monitor,
  Cpu
} from 'lucide-react';


interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
  color: string;
}

const skills: Skill[] = [
  { name: "JavaScript", level: 85, icon: <Code2 size={32} />, color: "#4A90E2" },
  { name: "React", level: 80, icon: <BrainCircuit size={32} />, color: "#61DAFB" },
  { name: "UI/UX Design", level: 85, icon: <Palette size={32} />, color: "#FF7262" },
  { name: "HTML", level: 90, icon: <Server size={32} />, color: "#47B784" },
  { name: "CSS", level: 90, icon: <Cloud size={32} />, color: "#764ABC" },
  { name: "Python", level: 85, icon: <Code2 size={32} />, color: "#4A90E2" },
];

const tools = [
  { name: "Git", icon: <GitBranch size={24} />, color: "#F05032" },
  { name: "AI Tools", icon: <Layers size={24} />, color: "#2496ED" },
  { name: "Terminal", icon: <Terminal size={24} />, color: "#4D4D4D" },
  { name: "VS Code", icon: <Monitor size={24} />, color: "#007ACC" },
  { name: "Database", icon: <Database size={24} />, color: "#336791" },
  { name: "Sys. Design", icon: <Cpu size={24} />, color: "#FF6B6B" },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 screen-height relative overflow-hidden bg-gradient-to-br from-offWhite to-lavender/5">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute w-full h-full opacity-10">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-lavender/30"
              style={{
                width: `${Math.random() * 200 + 100}px`,
                height: `${Math.random() * 200 + 100}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                x: [0, Math.random() * 50 - 25, 0],
                y: [0, Math.random() * 50 - 25, 0],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Technical Expertise</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-8"
            >
              <div className="flex items-center mb-2">
                <div 
                  className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center mr-4"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-medium mb-1">{skill.name}</h3>
                  <div className="skill-bar bg-white/50">
                    <motion.div
                      className="skill-progress"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </div>
                <span className="ml-4 font-medium text-charcoal/80">{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <h3 className="text-2xl text-center mb-8 font-handwritten">Tools & Technologies</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-4 shadow-md flex flex-col items-center justify-center gap-2"
                whileHover={{ y: -5, boxShadow: "0 8px 30px rgba(0,0,0,0.12)" }}
                style={{ color: tool.color }}
              >
                {tool.icon}
                <span className="text-sm font-medium text-charcoal">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;