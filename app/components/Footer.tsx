'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-gradient">Chinedum Akpala</span>
            </h3>
            <p className="text-dimWhite">
              Building digital experiences with modern web technologies
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <a 
                href="#about" 
                className="text-dimWhite hover:text-primary transition-colors"
              >
                About
              </a>
              <a 
                href="#projects" 
                className="text-dimWhite hover:text-primary transition-colors"
              >
                Projects
              </a>
              <a 
                href="#skills" 
                className="text-dimWhite hover:text-primary transition-colors"
              >
                Skills
              </a>
              <a 
                href="#contact" 
                className="text-dimWhite hover:text-primary transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
            <div className="flex justify-center md:justify-end gap-6">
              <motion.a
                href="https://github.com/cakpa"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="text-2xl hover:text-primary transition-colors"
              >
                <FiGithub />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="text-2xl hover:text-primary transition-colors"
              >
                <FiLinkedin />
              </motion.a>
              <motion.a
                href="mailto:your.email@example.com"
                whileHover={{ scale: 1.2 }}
                className="text-2xl hover:text-primary transition-colors"
              >
                <FiMail />
              </motion.a>
              <motion.a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="text-2xl hover:text-primary transition-colors"
              >
                <FiTwitter />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <motion.p 
            className="text-dimWhite text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            © {currentYear} Chinedum Akpala. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
} 