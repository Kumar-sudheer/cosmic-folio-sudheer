
import React, { useState, useEffect } from 'react';
import WelcomeAnimation from '@/components/WelcomeAnimation';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutMe from '@/components/AboutMe';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Certificates from '@/components/Certificates';
import Hobbies from '@/components/Hobbies';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

const Index = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);
  
  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'hobbies', label: 'Hobbies' },
    { id: 'contact', label: 'Contact' }
  ];
  
  useEffect(() => {
    // Prevent scrolling during welcome animation
    document.body.style.overflow = showWelcome ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showWelcome]);
  
  const handleAnimationComplete = () => {
    setShowWelcome(false);
    setContentVisible(true);
  };

  return (
    <>
      <AnimatePresence>
        {showWelcome && (
          <WelcomeAnimation onAnimationComplete={handleAnimationComplete} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {contentVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar sections={sections} />
            <main>
              <Hero />
              <AboutMe />
              <Skills />
              <Projects />
              <Certificates />
              <Hobbies />
              <Contact />
              <Footer />
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Index;
