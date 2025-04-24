
import React from 'react';
import { motion } from 'framer-motion';

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credential?: string;
}

const Certificates: React.FC = () => {
  const certificates: Certificate[] = [
    {
      title: "Machine Learning Fundamentals",
      issuer: "NPTEL",
      date: "September 2023",
      credential: "NPTEL23ML487"
    },
    {
      title: "Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      date: "July 2023",
      credential: "MS-AZ900-8742"
    },
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "May 2023",
      credential: "AWS-CP-2324968"
    },
    {
      title: "Python Programming",
      issuer: "Coursera",
      date: "February 2023",
      credential: "CRSRA-PY-6574891"
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
          className="max-w-3xl mx-auto"
        >
          <div className="timeline-container">
            {certificates.map((certificate, index) => (
              <motion.div 
                key={certificate.title} 
                className="timeline-item"
                variants={itemVariants}
              >
                <div className="bg-white p-6 rounded-lg shadow-md ml-8">
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
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
