
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { User, Briefcase, BookOpen } from 'lucide-react';

const AboutMe: React.FC = () => {
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
    <section id="about" className="section-padding cosmic-gradient">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="mb-16 text-center"
        >
          <motion.h2 variants={itemVariants} className="text-sm font-medium uppercase tracking-wider text-cosmic-purple mb-2">
            Get To Know Me
          </motion.h2>
          <motion.h3 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="cosmic-text-gradient">Me</span>
          </motion.h3>
          <motion.div variants={itemVariants} className="w-20 h-1 bg-gradient-to-r from-cosmic-blue to-cosmic-purple mx-auto"></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="md:col-span-7"
          >
            <motion.h4 variants={itemVariants} className="text-2xl font-bold mb-4">Who am I?</motion.h4>
            <motion.p variants={itemVariants} className="text-gray-700 mb-4">
              I am a Computer Science and Engineering undergraduate student with a passion for building innovative software solutions
              and exploring cloud technologies. With a strong foundation in programming and problem-solving,
              I am constantly seeking opportunities to expand my knowledge and skills in the tech industry.
            </motion.p>
            <motion.p variants={itemVariants} className="text-gray-700 mb-6">
              My journey in technology began with a curiosity about how digital systems work, which led me to pursue
              formal education in Computer Science. I enjoy tackling complex problems and creating efficient, elegant solutions.
              Outside of academics, I'm interested in personal finance, robotics, and staying updated with emerging tech trends.
            </motion.p>
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold mb-2">Personal Interests</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Building and programming robots</li>
                <li>Financial technology and personal finance management</li>
                <li>Cloud computing and distributed systems</li>
                <li>Continuous learning and skill development</li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="md:col-span-5 space-y-5"
          >
            <motion.div variants={itemVariants}>
              <Card className="overflow-hidden border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="bg-cosmic-purple/10 p-3 rounded-lg mr-4">
                      <User className="h-6 w-6 text-cosmic-purple" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Education</h4>
                      <p className="text-gray-700 mb-2">Computer Science & Engineering</p>
                      <p className="text-sm text-gray-500">Lovely Professional University (LPU)</p>
                      <p className="text-sm text-gray-500">2021 - Present</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Card className="overflow-hidden border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="bg-cosmic-purple/10 p-3 rounded-lg mr-4">
                      <BookOpen className="h-6 w-6 text-cosmic-purple" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Previous Education</h4>
                      <p className="text-gray-700 mb-2">Stepping Stone Inter College</p>
                      <p className="text-sm text-gray-500">Intermediate • 2019-2021</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="overflow-hidden border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="bg-cosmic-purple/10 p-3 rounded-lg mr-4">
                      <Briefcase className="h-6 w-6 text-cosmic-purple" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Soft Skills</h4>
                      <ul className="text-gray-700 space-y-1">
                        <li>Problem Solving</li>
                        <li>Communication</li>
                        <li>Teamwork</li>
                        <li>Adaptability</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
