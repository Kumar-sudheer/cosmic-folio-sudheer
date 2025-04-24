
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, Laptop } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const Skills: React.FC = () => {
  const categories: SkillCategory[] = [
    {
      title: "Languages",
      icon: <Code className="h-6 w-6 text-cosmic-purple" />,
      skills: ["C", "Java", "Python", "HTML/CSS", "JavaScript"]
    },
    {
      title: "Frameworks & Libraries",
      icon: <Laptop className="h-6 w-6 text-cosmic-purple" />,
      skills: ["React", "Spring Boot", "Express.js", "Bootstrap", "TailwindCSS"]
    },
    {
      title: "Tools & Platforms",
      icon: <Database className="h-6 w-6 text-cosmic-purple" />,
      skills: ["AWS", "Microsoft Azure", "Git", "Docker", "Kubernetes"]
    }
  ];

  const operatingSystems = ["Windows", "Linux", "macOS"];

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
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="mb-16 text-center"
        >
          <motion.h2 variants={itemVariants} className="text-sm font-medium uppercase tracking-wider text-cosmic-purple mb-2">
            What I Know
          </motion.h2>
          <motion.h3 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="cosmic-text-gradient">Skills</span>
          </motion.h3>
          <motion.div variants={itemVariants} className="w-20 h-1 bg-gradient-to-r from-cosmic-blue to-cosmic-purple mx-auto"></motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {categories.map((category, index) => (
            <motion.div key={category.title} variants={itemVariants}>
              <Card className="h-full border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-cosmic-purple/10 p-3 rounded-lg mr-3">
                      {category.icon}
                    </div>
                    <h4 className="text-xl font-semibold">{category.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map(skill => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-secondary text-gray-700 text-sm font-medium rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="mt-12"
        >
          <motion.h4 variants={itemVariants} className="text-xl font-semibold mb-4 text-center">
            Operating Systems
          </motion.h4>
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            {operatingSystems.map(os => (
              <div 
                key={os}
                className="px-5 py-2.5 bg-cosmic-purple/10 text-cosmic-purple font-medium rounded-lg"
              >
                {os}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
