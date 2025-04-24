
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto px-6">
        <div className="border-t border-gray-200 pt-8 flex flex-col items-center justify-center">
          <p className="cosmic-text-gradient text-xl font-bold mb-2">Sudheer Kumar</p>
          <p className="text-gray-500 text-sm mb-4">Aspiring Software Engineer | Cloud Enthusiast</p>
          <p className="text-gray-400 text-xs">© {new Date().getFullYear()} | All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
