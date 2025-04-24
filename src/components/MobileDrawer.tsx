
import React from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { motion } from 'framer-motion';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  sections: { id: string; label: string }[];
  activeSection: string;
  onSectionClick: (id: string) => void;
}

const MobileDrawer: React.FC<MobileDrawerProps> = ({ 
  isOpen, 
  onClose, 
  sections, 
  activeSection,
  onSectionClick
}) => {
  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({ 
      opacity: 1, 
      x: 0, 
      transition: { 
        delay: 0.05 * i,
        duration: 0.3
      } 
    }),
    exit: { opacity: 0, x: -20 }
  };
  
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="left" className="w-[280px] p-0">
        <SheetHeader className="p-6 border-b">
          <SheetTitle className="cosmic-text-gradient">Sudheer Kumar</SheetTitle>
        </SheetHeader>
        <div className="drawer-content-body pt-6 flex flex-col">
          <motion.div 
            className="flex flex-col space-y-1"
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {sections.map((section, index) => (
              <motion.button
                key={section.id}
                custom={index}
                variants={listItemVariants}
                onClick={() => onSectionClick(section.id)}
                className={`px-6 py-3 text-left relative transition-colors ${
                  activeSection === section.id
                    ? 'text-cosmic-purple font-medium bg-cosmic-purple/5'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {section.label}
                {activeSection === section.id && (
                  <motion.div
                    layoutId="mobile-active-indicator"
                    className="absolute left-0 top-0 bottom-0 w-1 bg-cosmic-purple"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
          <div className="mt-auto p-6 text-center">
            <p className="text-sm text-gray-500">© 2025 | Sudheer Kumar</p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileDrawer;
