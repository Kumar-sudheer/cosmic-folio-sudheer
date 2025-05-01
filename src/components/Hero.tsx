
import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

const Hero: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Particles
        id="hero-particles"
        init={particlesInit}
        options={{
          fullScreen: false,
          background: {
            color: {
              value: "#f8fafc",
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
              opacity: 0.2,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 0.8,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 1000,
              },
              value: 60,
            },
            opacity: {
              value: 0.5,
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
          zIndex: 0,
        }}
      />
      <div className="container mx-auto px-6 md:px-12 z-10">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 3.2 }}
            className="text-lg md:text-xl text-cosmic-purple font-medium mb-3"
          >
            Hello, I'm
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 3.4 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Sudheer <span className="cosmic-text-gradient">Kumar</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 3.6 }}
            className="mb-8"
          >
            <p className="text-xl md:text-2xl text-gray-700">
              Aspiring Web Developer | Cloud Enthusiast
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 3.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button 
              className="bg-cosmic-purple hover:bg-cosmic-purple/90 px-6"
              onClick={() => {
                const element = document.getElementById("projects");
                if (element) {
                  const yOffset = -80;
                  const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
              }}
            >
              View My Work
            </Button>
            <a
              href="/Sudheer_CV_Specialized.docx"
              download="Sudheer_Kumar_Resume.docx"
              className="border border-cosmic-purple text-cosmic-purple hover:bg-cosmic-purple/10 px-6 py-2 rounded-lg text-center"
             >
              Resume
             </a>


          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 4 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full animate-float"
          onClick={() => {
            const element = document.getElementById("about");
            if (element) {
              const yOffset = -80;
              const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
              window.scrollTo({ top: y, behavior: 'smooth' });
            }
          }}
        >
          <ArrowDown className="h-6 w-6 text-cosmic-purple" />
        </Button>
      </motion.div>
    </section>
  );
};

export default Hero;
