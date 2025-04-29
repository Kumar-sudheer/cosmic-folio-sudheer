
import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Book, Gamepad, Music, Dumbbell, Guitar, Pen } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface Hobby {
  name: string;
  icon: React.ReactNode;
  description: string;
  color: string;
  size: string;
}

const Hobbies: React.FC = () => {
  const hobbies: Hobby[] = [
    {
      name: "Photography",
      icon: <Camera className="h-6 w-6 text-white" />,
      description: "Capturing moments through the lens",
      color: "bg-cyan-500",
      size: "w-12 h-12 md:w-16 md:h-16"
    },
    {
      name: "Poetry",
      icon: <Book className="h-6 w-6 text-white" />,
      description: "Expressing emotions through words",
      color: "bg-blue-400",
      size: "w-14 h-14 md:w-20 md:h-20"
    },
    {
      name: "Gaming",
      icon: <Gamepad className="h-6 w-6 text-white" />,
      description: "Exploring virtual worlds",
      color: "bg-amber-400",
      size: "w-20 h-20 md:w-32 md:h-32"
    },
    {
      name: "Lyricist",
      icon: <Music className="h-6 w-6 text-white" />,
      description: "Crafting melodious words",
      color: "bg-orange-500",
      size: "w-24 h-24 md:w-40 md:h-40"
    },
    {
      name: "Gym",
      icon: <Dumbbell className="h-6 w-6 text-white" />,
      description: "Staying fit and healthy",
      color: "bg-blue-300",
      size: "w-10 h-10 md:w-14 md:h-14"
    },
    {
      name: "Music",
      icon: <Guitar className="h-6 w-6 text-white" />,
      description: "Playing and enjoying melodies",
      color: "bg-gray-400",
      size: "w-8 h-8 md:w-12 md:h-12"
    },
    {
      name: "Composing",
      icon: <Pen className="h-6 w-6 text-white" />,
      description: "Creating original music and lyrics",
      color: "bg-gray-500",
      size: "w-6 h-6 md:w-10 md:h-10"
    }
  ];

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
    <section id="hobbies" className="section-padding min-h-screen flex items-center justify-center overflow-hidden bg-white">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="mb-16 text-center"
        >
          <motion.h2 variants={itemVariants} className="text-sm font-medium uppercase tracking-wider text-gray-600 mb-2">
            WHAT I ENJOY
          </motion.h2>
          <motion.h3 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            My <span className="text-blue-600">Hobbies</span>
          </motion.h3>
          <motion.div variants={itemVariants} className="w-20 h-1 bg-blue-500 mx-auto"></motion.div>
        </motion.div>

        <div className="relative w-full h-[280px] flex items-center">
          {/* The Sun */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
            <div className="w-64 h-64 rounded-full bg-gray-100 shadow-lg -mr-32"></div>
          </div>
          
          {/* Solar System Line */}
          <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-gray-300"></div>
          
          {/* Planets (Hobbies) with Tooltips */}
          <div className="relative w-full flex items-center justify-between px-4 md:px-10">
            <TooltipProvider>
              {hobbies.map((hobby, index) => (
                <motion.div
                  key={hobby.name}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  className="group"
                >
                  <Tooltip>
                    <TooltipTrigger>
                      <div 
                        className={`${hobby.color} ${hobby.size} rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 relative z-10`}
                        style={{
                          transform: `translateY(-50%)`,
                          position: "relative",
                        }}
                      >
                        <div className="text-white">
                          {hobby.icon}
                        </div>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{hobby.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </motion.div>
              ))}
            </TooltipProvider>
          </div>
          
          {/* Stars in the background - more subtle in light theme */}
          <div className="absolute inset-0 overflow-hidden -z-10">
            {[...Array(30)].map((_, i) => {
              const size = Math.random() * 2 + 1;
              const top = Math.random() * 100;
              const left = Math.random() * 100;
              return (
                <div 
                  key={i} 
                  className="absolute bg-gray-200 rounded-full"
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    top: `${top}%`,
                    left: `${left}%`,
                    opacity: Math.random() * 0.5 + 0.1,
                  }}
                />
              );
            })}
          </div>
        </div>
        
        {/* Show hobby names with appropriate spacing */}
        <div className="relative w-full flex justify-between px-4 md:px-10 mt-6">
          {hobbies.map((hobby) => (
            <div 
              key={`name-${hobby.name}`}
              className="text-xs md:text-sm text-gray-700 text-center"
              style={{ width: hobby.size.split(' ')[0] }}
            >
              {hobby.name}
            </div>
          ))}
        </div>
        
        {/* Hobby descriptions cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {hobbies.map((hobby) => (
            <motion.div 
              key={`card-${hobby.name}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm"
            >
              <div className="flex items-center mb-4">
                <div className={`${hobby.color} p-3 rounded-full mr-4`}>
                  {hobby.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-800">{hobby.name}</h4>
              </div>
              <p className="text-gray-600">{hobby.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
