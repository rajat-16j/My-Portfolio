import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-8 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Rajat. All rights reserved.
          </div>
          
          <div className="flex items-center text-gray-400 text-sm">
            <span>Made with</span>
            <Heart className="mx-2 text-red-500" size={25} fill="currentColor" />
            <span> and lots of coffee</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;