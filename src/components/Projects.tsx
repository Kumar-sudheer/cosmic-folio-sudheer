import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github?: string;
  demo?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "AI-Powered Caretaking API",
      description: "An innovative API solution leveraging artificial intelligence to enhance caregiving services and support systems.",
      technologies: ["Python", "FastAPI", "Machine Learning", "Docker"],
      image: "https://drive.google.com/file/d/1Em5tTS0ctl0lja2TMalYEo2IJDk9kzGi/view?usp=drive_link",
      github: "#",
      demo: "#"
    },
    {
      title: "Personal Finance Tracker",
      description: "A web application for tracking personal expenses, creating budgets, and visualizing spending patterns.",
      technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      github: "#",
      demo: "#"
    },
    {
      title: "Human Following Robot",
      description: "An autonomous robot built with Arduino that can detect and follow human movement using computer vision.",
      technologies: ["Arduino", "Python", "OpenCV", "IoT"],
      image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      github: "#"
    },
    {
      title: "Cloud Resource Manager",
      description: "A tool to monitor and optimize cloud resources across AWS and Azure platforms.",
      technologies: ["AWS SDK", "Azure API", "React", "Express"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      github: "#",
      demo: "#"
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
    <section id="projects" className="section-padding cosmic-gradient">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="mb-16 text-center"
        >
          <motion.h2 variants={itemVariants} className="text-sm font-medium uppercase tracking-wider text-cosmic-purple mb-2">
            My Portfolio
          </motion.h2>
          <motion.h3 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="cosmic-text-gradient">Projects</span>
          </motion.h3>
          <motion.div variants={itemVariants} className="w-20 h-1 bg-gradient-to-r from-cosmic-blue to-cosmic-purple mx-auto"></motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={project.title} variants={itemVariants}>
              <Card className="overflow-hidden border-0 shadow-md h-full flex flex-col group">
                <div className="relative overflow-hidden h-52">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-60" />
                </div>
                <CardContent className="p-6 flex-grow">
                  <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-cosmic-purple/10 text-cosmic-purple text-xs font-medium rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex gap-3">
                  {project.github && (
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <Github className="h-4 w-4" />
                      <span>Code</span>
                    </Button>
                  )}
                  {project.demo && (
                    <Button size="sm" className="bg-cosmic-purple hover:bg-cosmic-purple/90 flex items-center gap-1">
                      <ExternalLink className="h-4 w-4" />
                      <span>Demo</span>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
