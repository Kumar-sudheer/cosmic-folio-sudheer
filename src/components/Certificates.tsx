
import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credential?: string;
}

const Certificates: React.FC = () => {
  const certificates: Certificate[] = [
    {
      title: "Unsupervised Learning, Recommenders,Reinforcement Learning",
      issuer: "DeepLearning.AI",
      date: "March 2025",
    },
    {
      title: "Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      date: "April 2025",
    },
    {
      title: "Libraries and Frameworks for Frontend Development",
      issuer: "Board Infinity",
      date: "March 2025",
    },
    {
      title: "Cyber Security and Privacy",
      issuer: "NPTEL",
      date: "October 2024",
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
    <section id="certificates" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="mb-16 text-center"
        >
          <motion.h2 variants={itemVariants} className="text-sm font-medium uppercase tracking-wider text-cosmic-purple mb-2">
            My Achievements
          </motion.h2>
          <motion.h3 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
            <span className="cosmic-text-gradient">Certificates</span> & Credentials
          </motion.h3>
          <motion.div variants={itemVariants} className="w-20 h-1 bg-gradient-to-r from-cosmic-blue to-cosmic-purple mx-auto"></motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="max-w-4xl mx-auto relative"
        >
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cosmic-blue to-cosmic-purple"></div>
          
          {certificates.map((certificate, index) => (
            <motion.div 
              key={certificate.title} 
              variants={itemVariants}
              className={`flex mb-16 items-center relative ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-cosmic-purple z-10 shadow-lg"></div>
              
              {/* Content card with different positioning based on index */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}>
                <Card className="p-6 hover:shadow-lg transition-shadow duration-300 border-cosmic-purple/20">
                  <h4 className="text-lg font-semibold mb-1">{certificate.title}</h4>
                  <p className="text-cosmic-purple font-medium">{certificate.issuer}</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-gray-500 text-sm">{certificate.date}</span>
                    {certificate.credential && (
                      <span className="text-xs bg-cosmic-purple/10 text-cosmic-purple px-2 py-1 rounded">
                        Credential: {certificate.credential}
                      </span>
                    )}
                  </div>
                </Card>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
