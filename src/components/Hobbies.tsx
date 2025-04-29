
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Camera, Book, Gamepad, Music, Dumbbell, Guitar, Compose } from 'lucide-react';

interface Hobby {
  name: string;
  icon: React.ReactNode;
  description: string;
}

const Hobbies: React.FC = () => {
  const orbitRef = useRef<HTMLDivElement>(null);
  
  const hobbies: Hobby[] = [
    {
      name: "Photography",
      icon: <Camera className="h-8 w-8 text-cosmic-purple" />,
      description: "Capturing moments through the lens"
    },
    {
      name: "Poetry",
      icon: <Book className="h-8 w-8 text-cosmic-blue" />,
      description: "Expressing emotions through words"
    },
    {
      name: "Gaming",
      icon: <Gamepad className="h-8 w-8 text-cosmic-pink" />,
      description: "Exploring virtual worlds"
    },
    {
      name: "Lyricist",
      icon: <Music className="h-8 w-8 text-cosmic-purple" />,
      description: "Crafting melodious words"
    },
    {
      name: "Gym",
      icon: <Dumbbell className="h-8 w-8 text-cosmic-blue" />,
      description: "Staying fit and healthy"
    },
    {
      name: "Music",
      icon: <Guitar className="h-8 w-8 text-cosmic-pink" />,
      description: "Playing and enjoying melodies"
    },
    {
      name: "Composing",
      icon: <Compose className="h-8 w-8 text-cosmic-purple" />,
      description: "Creating original music and lyrics"
    }
  ];

  useEffect(() => {
    const orbitElement = orbitRef.current;
    if (!orbitElement) return;

    // Add animation start on scroll into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            orbitElement.classList.add('animate-cosmic-spin');
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(orbitElement);

    return () => {
      observer.disconnect();
    };
  }, []);

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="hobbies" className="section-padding overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="mb-16 text-center"
        >
          <motion.h2 variants={itemVariants} className="text-sm font-medium uppercase tracking-wider text-cosmic-purple mb-2">
            What I Enjoy
          </motion.h2>
          <motion.h3 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="cosmic-text-gradient">Hobbies</span>
          </motion.h3>
          <motion.div variants={itemVariants} className="w-20 h-1 bg-gradient-to-r from-cosmic-blue to-cosmic-purple mx-auto"></motion.div>
        </motion.div>

        <div className="relative h-[500px] md:h-[600px] flex items-center justify-center">
          {/* Sun in the center */}
          <div className="absolute w-24 h-24 rounded-full bg-gradient-to-r from-cosmic-blue to-cosmic-purple flex items-center justify-center z-10">
            <span className="text-white font-bold">Hobbies</span>
          </div>
          
          {/* Orbit path */}
          <div ref={orbitRef} className="absolute w-[80%] h-[80%] rounded-full border border-dashed border-cosmic-purple/30 flex items-center justify-center transition-transform duration-1000">
            {/* Planets (hobbies) */}
            {hobbies.map((hobby, index) => {
              const angle = (360 / hobbies.length) * index;
              const orbitRadius = Math.min(window.innerWidth * 0.3, 250); // Responsive radius
              
              return (
                <motion.div
                  key={hobby.name}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                  className="absolute"
                  style={{
                    transform: `rotate(${angle}deg) translateX(${orbitRadius}px) rotate(-${angle}deg)`,
                  }}
                >
                  <div className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 w-20 h-20 md:w-24 md:h-24 flex flex-col items-center justify-center cursor-pointer">
                    <div className="bg-cosmic-purple/10 p-2 rounded-full mb-1">
                      {hobby.icon}
                    </div>
                    <h4 className="text-xs font-medium text-center">{hobby.name}</h4>
                    <div className="opacity-0 hover:opacity-100 absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white p-2 rounded shadow-md text-xs w-32 text-center pointer-events-none transition-opacity duration-300">
                      {hobby.description}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
