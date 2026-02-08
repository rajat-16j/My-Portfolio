import React, { useEffect, useRef, useState } from 'react';
import { Code, Palette, Globe } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a passionate full-stack developer eager to create impactful digital experiences. With a strong foundation in both front-end and back-end technologies, I thrive on 
                creating digital solutions that make a difference. My journey began 
                with a curiosity for how things work, which led me to explore the 
                fascinating world of web development.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                I specialize in building scalable web applications using modern 
                technologies and best practices. When I'm not coding, you'll find 
                me exploring new technologies, contributing to open-source projects, 
                or sharing knowledge with the developer community.
              </p>

              
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                <div className="p-3 bg-gray-700 rounded-lg">
                  <Code className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Full Stack Development</h3>
                  <p className="text-gray-300">Building end-to-end solutions with modern frameworks and technologies.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                <div className="p-3 bg-gray-700 rounded-lg">
                  <Palette className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">UI/UX Design</h3>
                  <p className="text-gray-300">Creating intuitive and beautiful user interfaces with great user experience.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                <div className="p-3 bg-gray-700 rounded-lg">
                  <Globe className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Web Technologies</h3>
                  <p className="text-gray-300">Expertise in modern web technologies and development practices.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;