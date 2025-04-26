
import React from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Linkedin, Mail, Phone, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact: React.FC = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    // Reset form
    (e.target as HTMLFormElement).reset();
  };

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

  const socialLinks = [
    {
      platform: "GitHub",
      icon: <Github className="h-5 w-5" />,
      url: "https://github.com/Kumar-sudheer",
      username: "Kumar-sudheer"
    },
    {
      platform: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://www.linkedin.com/in/sudheer-kumar-149b6524a",
      username: "Sudheer Kumar"
    },
    {
      platform: "Email",
      icon: <Mail className="h-5 w-5" />,
      url: "mailto:kumarsudheer0812@gmail.com",
      username: "kumarsudheer0812@gmail.com"
    },
    {
      platform: "Phone",
      icon: <Phone className="h-5 w-5" />,
      url: "tel:+916388852649",
      username: "+91-6388852649"
    }
  ];

  return (
    <section id="contact" className="section-padding cosmic-gradient">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="mb-16 text-center"
        >
          <motion.h2 variants={itemVariants} className="text-sm font-medium uppercase tracking-wider text-cosmic-purple mb-2">
            Get In Touch
          </motion.h2>
          <motion.h3 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
            <span className="cosmic-text-gradient">Contact</span> Me
          </motion.h3>
          <motion.div variants={itemVariants} className="w-20 h-1 bg-gradient-to-r from-cosmic-blue to-cosmic-purple mx-auto"></motion.div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={containerVariants}
            >
              <motion.h4 variants={itemVariants} className="text-2xl font-bold mb-6">Send Me a Message</motion.h4>
              <motion.form variants={itemVariants} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input placeholder="Your Name" required className="border-cosmic-purple/20 focus-visible:ring-cosmic-purple/30" />
                </div>
                <div>
                  <Input placeholder="Your Email" type="email" required className="border-cosmic-purple/20 focus-visible:ring-cosmic-purple/30" />
                </div>
                <div>
                  <Input placeholder="Subject" required className="border-cosmic-purple/20 focus-visible:ring-cosmic-purple/30" />
                </div>
                <div>
                  <Textarea 
                    placeholder="Your Message" 
                    required 
                    className="min-h-32 border-cosmic-purple/20 focus-visible:ring-cosmic-purple/30" 
                  />
                </div>
                <Button 
                  type="submit" 
                  className="bg-cosmic-purple hover:bg-cosmic-purple/90 w-full"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </motion.form>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={containerVariants}
              className="md:pl-8"
            >
              <motion.h4 variants={itemVariants} className="text-2xl font-bold mb-6">Connect With Me</motion.h4>
              <motion.p variants={itemVariants} className="text-gray-700 mb-6">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
                I'll try my best to get back to you!
              </motion.p>
              
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <motion.div key={link.platform} variants={itemVariants}>
                    <Card className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <a 
                          href={link.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          <div className="bg-cosmic-purple/10 p-2 rounded-full mr-3">
                            {link.icon}
                          </div>
                          <div>
                            <h5 className="text-sm font-semibold">{link.platform}</h5>
                            <p className="text-gray-500 text-sm">{link.username}</p>
                          </div>
                          <div className="ml-auto">
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <ExternalLink className="h-4 w-4" />
                            </Button>
                          </div>
                        </a>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Icon component since we're using it in the Contact component
const ExternalLink = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  );
};

export default Contact;
