
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Engine } from 'tsparticles-engine';

interface WelcomeAnimationProps {
  onAnimationComplete: () => void;
}

const WelcomeAnimation: React.FC<WelcomeAnimationProps> = ({ onAnimationComplete }) => {
  const [loading, setLoading] = useState(true);
  const particlesInit = async (engine: Engine) => {
    await loadFull(engine);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(onAnimationComplete, 2000); // After fade out animation
    }, 2000);

    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: loading ? 1 : 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="fixed inset-0 flex items-center justify-center bg-white z-50"
    >
      <Particles
        id="welcome-particles"
        init={particlesInit}
        options={{
          fullScreen: false,
          background: {
            color: {
              value: "#ffffff",
            },
          },
          fpsLimit: 120,
          particles: {
            color: {
              value: ["#8B5CF6", "#60A5FA", "#EC4899"],
            },
            links: {
              color: "#8B5CF6",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.6,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      />
      <div className="text-center z-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <h1 className="cosmic-text-gradient text-5xl font-bold mb-2">Sudheer Kumar</h1>
          <p className="text-gray-700 text-xl">Portfolio</p>
        </motion.div>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative w-16 h-16 mx-auto"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cosmic-blue via-cosmic-purple to-cosmic-pink opacity-40 animate-pulse-slow"></div>
          <div className="absolute inset-1 rounded-full bg-white"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-2 w-2 bg-cosmic-purple rounded-full animate-cosmic-spin animate-pulse-slow" 
                 style={{ transformOrigin: "50% 100px" }}></div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WelcomeAnimation;
