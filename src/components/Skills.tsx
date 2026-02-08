import React, { useEffect, useRef, useState } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedBars, setAnimatedBars] = useState(false);
  const sectionRef = useRef(null);

  const skills = [
    { name: 'Python', level: 95 },
    { name: 'React/Next.js', level: 90 },
    { name: 'Java', level: 80 },
    { name: 'Power Bi', level: 75 },
    { name: 'MySql', level: 75 },
    { name: 'Excel', level: 80 },
  ];

  const technologies = [
    'Java','React','Python', 'Power Bi', 'MySql', 'Tailwind CSS' , 'Excel',
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setAnimatedBars(true), 500);
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
    <section id="skills" ref={sectionRef} className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Skills & Technologies
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Skill Bars */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-8">Proficiency</h3>
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-white to-gray-400 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: animatedBars ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 100}ms`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-8">Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <span
                    key={tech}
                    className={`px-4 py-2 bg-gray-800 text-gray-300 rounded-lg text-sm font-medium 
                               hover:bg-gray-700 transition-all duration-300 transform hover:scale-105
                               ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;