
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Camera, Book, Gamepad, Music, Dumbbell, Guitar, Pen } from 'lucide-react';

interface Hobby {
  name: string;
  icon: React.ReactNode;
  description: string;
  color: string;
}

const Hobbies: React.FC = () => {
  const orbitRef = useRef<HTMLDivElement>(null);
  
  const hobbies: Hobby[] = [
    {
      name: "Photography",
      icon: <Camera className="h-8 w-8" />,
      description: "Capturing moments through the lens",
      color: "from-purple-500 to-blue-500"
    },
    {
      name: "Poetry",
      icon: <Book className="h-8 w-8" />,
      description: "Expressing emotions through words",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Gaming",
      icon: <Gamepad className="h-8 w-8" />,
      description: "Exploring virtual worlds",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Lyricist",
      icon: <Music className="h-8 w-8" />,
      description: "Crafting melodious words",
      color: "from-pink-500 to-rose-500"
    },
    {
      name: "Gym",
      icon: <Dumbbell className="h-8 w-8" />,
      description: "Staying fit and healthy",
      color: "from-red-500 to-orange-500"
    },
    {
      name: "Music",
      icon: <Guitar className="h-8 w-8" />,
      description: "Playing and enjoying melodies",
      color: "from-yellow-500 to-amber-500"
    },
    {
      name: "Composing",
      icon: <Pen className="h-8 w-8" />,
      description: "Creating original music and lyrics",
      color: "from-indigo-500 to-violet-500"
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
          } else {
            orbitElement.classList.remove('animate-cosmic-spin');
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
    <section id="hobbies" className="section-padding min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-cosmic-light">
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

        <div className="relative h-[500px] md:h-[700px] flex items-center justify-center">
          {/* Sun in the center */}
          <div className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-cosmic-blue via-cosmic-purple to-cosmic-pink flex items-center justify-center z-10 shadow-lg shadow-cosmic-purple/30 animate-pulse-slow">
            <span className="text-white font-bold text-xl">My<br/>Hobbies</span>
          </div>
          
          {/* Orbit path */}
          <div ref={orbitRef} className="absolute w-[90%] h-[90%] rounded-full border-2 border-dashed border-cosmic-purple/50 flex items-center justify-center transition-transform duration-1000">
            {/* Planets (hobbies) */}
            {hobbies.map((hobby, index) => {
              const angle = (360 / hobbies.length) * index;
              const orbitRadius = Math.min(window.innerWidth * 0.35, 300); // Responsive radius
              
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
                  <div className="relative group">
                    <div className={`bg-gradient-to-br ${hobby.color} p-6 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-500 w-24 h-24 md:w-28 md:h-28 flex flex-col items-center justify-center cursor-pointer`}>
                      <div className="text-white">
                        {React.cloneElement(hobby.icon as React.ReactElement, { className: 'h-10 w-10 text-white' })}
                      </div>
                      <h4 className="text-xs font-medium text-center text-white mt-2">{hobby.name}</h4>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 absolute top-full left-1/2 transform -translate-x-1/2 mt-4 bg-white p-3 rounded-lg shadow-lg text-sm w-48 text-center transition-all duration-300 z-20">
                      <p className="font-medium text-gray-800">{hobby.name}</p>
                      <p className="text-gray-600">{hobby.description}</p>
                    </div>
                    
                    {/* Connection line */}
                    <div className="absolute top-1/2 left-1/2 w-[300px] h-0.5 bg-gradient-to-r from-transparent via-cosmic-purple/30 to-transparent origin-left -z-10"
                         style={{ transform: `rotate(${180 + angle}deg)` }}>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          {/* Inner glow effect */}
          <div className="absolute w-[80%] h-[80%] rounded-full bg-cosmic-light/30 blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
