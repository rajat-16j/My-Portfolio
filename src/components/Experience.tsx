import React, { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const experiences = [
    {
      title: 'Analyst Intern',
      company: 'Tech Solutions Inc.',
      location: 'Patna, Bihar',
      period: 'april 2025 - may 2025',
      description: 'Leading Analyst of scalable web applications and mentoring junior Analysts.',
      achievements: ['Increased performance by 40%', 'Led team of 5 members',]
    },
  ];

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
    <section id="experience" ref={sectionRef} className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Experience
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-700 transform md:-translate-x-0.5"></div>

            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-white rounded-full transform -translate-x-2 md:-translate-x-2 z-10"></div>

                <div
                  className={`ml-12 md:ml-0 p-6 bg-gray-900 rounded-lg shadow-xl hover:shadow-2xl 
                             transition-all duration-500 transform hover:scale-105
                             ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                             ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                      <h4 className="text-lg text-gray-300 font-semibold">{exp.company}</h4>
                    </div>
                    <div className="text-sm text-gray-400 mt-2 md:mt-0">
                      <div className="flex items-center mb-1">
                        <Calendar size={16} className="mr-2" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                  <div className="space-y-2">
                    <h5 className="text-white font-semibold text-sm">Key Achievements:</h5>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-400 text-sm flex items-start">
                          <span className="w-2 h-2 bg-gray-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;