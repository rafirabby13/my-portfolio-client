"use client"
import { motion } from "framer-motion";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="  border-t border-gray-800 w-[100%]">
      {/* Gradient Background */}
      <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 opacity-50"></div>
      
      <div className="relative z-10 container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Left Column - About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="text-[#E80F88]">Rafi</span> Ahmed
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              TypeScript Expert & Full-Stack Developer passionate about creating exceptional digital experiences with modern web technologies.
            </p>
            <div className="flex space-x-2">
              <div className="px-3 py-1 bg-gray-800/50 rounded-full text-xs text-pink-400 border border-gray-700/50">
                Available for Work
              </div>
            </div>
          </motion.div>

          {/* Middle Column - Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link, ) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-gray-400 hover:text-pink-400 transition-colors duration-300 text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300 text-sm">
                <FaEnvelope className="text-pink-500 flex-shrink-0" />
                <span>rafiahmedrabby282@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 text-sm">
                <FaPhone className="text-pink-500 flex-shrink-0" />
                <span>+880 1894 356001</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 text-sm">
                <FaMapMarkerAlt className="text-pink-500 flex-shrink-0" />
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex space-x-4"
            >
              {[
                { href: "https://www.facebook.com/rafiahmed.rabby.3/", icon: FaFacebook, color: "hover:text-blue-500" },
                { href: "https://github.com/rafirabby13", icon: FaGithub, color: "hover:text-gray-300" },
                { href: "https://www.linkedin.com/in/rafi-ahmed-rabby-1669b52b3/", icon: FaLinkedin, color: "hover:text-blue-600" },
                { href: "https://www.instagram.com/rafiahmedrabby/", icon: FaInstagram, color: "hover:text-pink-500" }
              ].map(({ href, icon: Icon, color }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`text-gray-400 ${color} transition-all duration-300 p-2 bg-gray-800/30 rounded-lg border border-gray-700/50 hover:border-pink-500/30`}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </motion.div>

            {/* Copyright */}
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-500 text-sm"
            >
              © 2025 Rafi Ahmed. All rights reserved.
            </motion.p>

            {/* Back to Top Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              onClick={scrollToTop}
              className="p-2 bg-gray-800/50 hover:bg-pink-500/20 border border-gray-700/50 hover:border-pink-500/50 rounded-lg transition-all duration-300 group"
            >
              <FaArrowUp className="text-gray-400 group-hover:text-pink-400 transition-colors duration-300" size={16} />
            </motion.button>
          </div>
        </div>

        {/* Tech Stack Mention */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-6 pt-4 border-t border-gray-800/50"
        >
          <p className="text-gray-600 text-xs">
            Built with <span className="text-pink-400">React.js</span>, <span className="text-blue-400">Tailwind CSS</span> & <span className="text-purple-400">Framer Motion</span>
          </p>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-pink-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl"></div>
    </footer>
  );
};

export default Footer;