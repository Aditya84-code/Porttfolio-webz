import React, { useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import { NavBar } from './components/ui/nav-bar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { Footer } from './components/ui/footer';
import { Home, User, Briefcase, Code, Mail, Hexagon, Github, Instagram } from 'lucide-react';

function App() {
  useEffect(() => {
    document.title = 'Aditya Chauhan';
  }, []);

  const navItems = [
    { name: 'Home', url: '#home', icon: Home },
    { name: 'About', url: '#about', icon: User },
    { name: 'Projects', url: '#projects', icon: Briefcase },
    { name: 'Skills', url: '#skills', icon: Code },
    { name: 'Contact', url: '#contact', icon: Mail }
  ];

  const footerData = {
    logo: <Hexagon className="h-10 w-10 text-lavender" />,
    brandName: "Aditya",
    socialLinks: [
      {
        icon: <Instagram className="h-5 w-5" />,
        href: "https://www.instagram.com/webz_03?igsh=MTRjeDZ5YWxtNmN6Zw==",
        label: "Instagram",
      },
      {
        icon: <Github className="h-5 w-5" />,
        href: "https://github.com",
        label: "GitHub",
      },
    ],
    mainLinks: [
      { href: "#home", label: "Home" },
      { href: "#about", label: "About" },
      { href: "#projects", label: "Projects" },
      { href: "#skills", label: "Skills" },
      { href: "#contact", label: "Contact" },
    ],
    legalLinks: [
      { href: "#privacy", label: "Privacy" },
      { href: "#terms", label: "Terms" },
    ],
    copyright: {
      text: "© 2025 Aditya Chauhan",
      license: "All rights reserved",
    },
  };

  return (
    <div className="App">
      <CustomCursor />
      <NavBar items={navItems} />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer {...footerData} />
    </div>
  );
}

export default App;