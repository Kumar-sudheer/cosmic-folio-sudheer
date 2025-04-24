
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MobileDrawer from './MobileDrawer';

interface NavbarProps {
  sections: { id: string; label: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 10);

      // Determine active section based on scroll position
      const sectionElements = sections.map(section => ({
        id: section.id,
        offsetTop: document.getElementById(section.id)?.offsetTop || 0
      }));

      const currentSection = sectionElements.reduce((acc, section) => {
        return scrollPosition >= section.offsetTop - 100 ? section.id : acc;
      }, 'home');

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        delay: 0.1 * i,
        duration: 0.5,
        ease: "easeOut" 
      }
    })
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setIsDrawerOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 3 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="text-xl font-bold cosmic-text-gradient">SK.</a>
          <div className="hidden md:flex space-x-6">
            {sections.map((section, index) => (
              <motion.button
                key={section.id}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={navItemVariants}
                onClick={() => scrollToSection(section.id)}
                className={`text-sm font-medium transition-colors relative px-1 py-1 ${
                  activeSection === section.id 
                    ? 'text-cosmic-purple' 
                    : 'text-gray-700 hover:text-cosmic-purple'
                }`}
              >
                {section.label}
                {activeSection === section.id && (
                  <motion.div
                    layoutId="navbar-active-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-cosmic-purple"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsDrawerOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </motion.nav>

      <MobileDrawer 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)} 
        sections={sections} 
        activeSection={activeSection}
        onSectionClick={scrollToSection}
      />
    </>
  );
};

export default Navbar;
