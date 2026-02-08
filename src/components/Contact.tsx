import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section
      ref={sectionRef}
      className="py-20 bg-gray-900 flex flex-col items-center justify-center"
    >
      <div className="container mx-auto px-6 text-center">
        <h2
          className={`text-4xl font-bold text-white mb-10 transform transition-all duration-1000 ease-in-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Get In Touch
        </h2>

        <p
          className={`text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed transform transition-all duration-1000 delay-200 ease-in-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          I'm always open to discussing new opportunities, creative projects, or just having a chat about technology and development.
        </p>

        {/* Contact Info Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center mb-12">
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-700 text-center w-64">
            <Mail size={36} className="mx-auto text-white mb-3" />
            <div className="text-white font-medium"><a href="mailto:rajatranjan5518@gmail.com">Email</a></div>
            <div className="text-gray-400"><a href="mailto:rajatranjan5518@gmail.com">rajatranjan5518@gmail.com</a></div>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-700 text-center w-64">
            <Phone size={36} className="mx-auto text-white mb-3" />
            <div className="text-white font-medium"><a href="tel:+917488946520">Phone</a></div>
            <div className="text-gray-400"><a href="tel:+917488946520" target="_blank">+91 7488946520</a></div>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-700 text-center w-64">
            <MapPin size={36} className="mx-auto text-white mb-3" />
            <div className="text-white font-medium"><a href="https://www.google.com/maps/place/Nm+ganpati+solar+system/@25.6270465,85.1183316,19.3z/data=!4m15!1m8!3m7!1s0x39ed5832ee8583a3:0x71b64df2cd3834cc!2sSidheswar+Nagar,+Mainpura,+Patna,+Bihar+800001!3b1!8m2!3d25.6268949!4d85.1184751!16s%2Fg%2F11vxlknqbt!3m5!1s0x39ed59b45afe58c9:0x85d33fac41228adc!8m2!3d25.6274041!4d85.1184208!16s%2Fg%2F11xn58n24z?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D" target="_blank">Location</a></div>
            <div className="text-gray-400"><a href="https://www.google.com/maps/place/Nm+ganpati+solar+system/@25.6270465,85.1183316,19.3z/data=!4m15!1m8!3m7!1s0x39ed5832ee8583a3:0x71b64df2cd3834cc!2sSidheswar+Nagar,+Mainpura,+Patna,+Bihar+800001!3b1!8m2!3d25.6268949!4d85.1184751!16s%2Fg%2F11vxlknqbt!3m5!1s0x39ed59b45afe58c9:0x85d33fac41228adc!8m2!3d25.6274041!4d85.1184208!16s%2Fg%2F11xn58n24z?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D" target="_blank">Patna, India</a></div>
          </div>
        </div>

        {/* Social Links */}
        <h4 className="text-white font-semibold mb-4">Follow Me</h4>
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.instagram.com/rajit_attitu"
            className="p-4 bg-gray-800 rounded-lg text-gray-400 hover:text-pink-500 hover:bg-gray-700 transform transition duration-300 hover:scale-110"
          >
            <Instagram size={28} />
          </a>

          <a
            href="https://www.linkedin.com/in/rajattit"
            className="p-4 bg-gray-800 rounded-lg text-gray-400 hover:text-blue-500 hover:bg-gray-700 transform transition duration-300 hover:scale-110"
          >
            <Linkedin size={28} />
          </a>

          <a
            href="#"
            className="p-4 bg-gray-800 rounded-lg text-gray-400 hover:text-sky-400 hover:bg-gray-700 transform transition duration-300 hover:scale-110"
          >
            <Twitter size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
