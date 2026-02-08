import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Instagram, Linkedin, Mail } from 'lucide-react';
import resumePDF from '../RAJAT_RANJAN.pdf'; // Adjust the path as necessary
import photo from '../photo.jpg'; // Adjust the path as necessary

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Calculate moon opacity and blur based on scroll position
  const moonOpacity = Math.max(0, 1 - scrollY / 500);
  const moonBlur = Math.min(10, scrollY / 50);
  const moonScale = Math.max(0.5, 1 - scrollY / 1000);

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center relative overflow-hidden">
      {/* Animated Moon */}
      <div 
        className="absolute top-32 left-5 md:top-40 md:left-10 lg:left-20 z-0 transition-all duration-300"
        style={{
          opacity: moonOpacity,
          filter: `blur(${moonBlur}px)`,
          transform: `scale(${moonScale})`
        }}
      >
        {/* Moon glow effect */}
        <div className="absolute inset-0 w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-gradient-radial from-white/20 via-white/10 to-transparent rounded-full animate-pulse"></div>
        
        {/* Main moon */}
        <div className="relative w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full shadow-lg overflow-hidden">

  {/* YOUR IMAGE HERE */}
  <img
    src={photo}   // import your image at top
    alt="moon"
    className="w-full h-full object-cover rounded-full"
  />
          {/* Moon craters */}
          <div className="absolute top-2 left-3 w-2 h-2 bg-gray-400 rounded-full opacity-60"></div>
          <div className="absolute top-4 right-4 w-1.5 h-1.5 bg-gray-400 rounded-full opacity-50"></div>
          <div className="absolute bottom-3 left-5 w-1 h-1 bg-gray-400 rounded-full opacity-40"></div>
          <div className="absolute bottom-5 right-2 w-1.5 h-1.5 bg-gray-400 rounded-full opacity-50"></div>
          <div className="absolute top-6 left-1 w-1 h-1 bg-gray-400 rounded-full opacity-30"></div>
          
          {/* Moon highlight */}
          <div className="absolute top-1 left-2 w-3 h-3 bg-white rounded-full opacity-40 blur-sm"></div>
          
          {/* Subtle moon glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/20 to-transparent rounded-full animate-pulse"></div>
        </div>
        
        {/* Moon shine effect */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-2 h-8 bg-white/30 rounded-full blur-sm animate-twinkle"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-6 bg-white/20 rounded-full blur-sm animate-twinkle-delayed"></div>
        </div>
      </div>

      {/* Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.8 + 0.2
            }}
          ></div>
        ))}
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-gray-800/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-gray-700/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block">Hello, I'm</span>
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              RAJAT RANJAN
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-lg">
              View My Work
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105" onClick={() => window.open(resumePDF, '_blank')}>
              Download CV
            </button>
          </div>

          <div className="flex justify-center space-x-6 mb-16">
            <a href="https://www.instagram.com/rajj.atttt/" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
              <Instagram size={24} />
            </a>
            <a href="https://www.linkedin.com/in/rajattt/" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="mailto:rajatranjan5518@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
              <Mail size={24} />
            </a>
          </div>
        </div>

        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;