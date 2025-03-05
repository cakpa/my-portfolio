'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

const basePath = '/my-portfolio';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className="fixed right-8 top-1/2 -translate-y-1/2 z-50"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col gap-6">
        {navItems.map(({ id, label }) => (
          <div key={id} className="nav-dot group">
            <a
              href={`${basePath}/#${id}`}
              className="relative flex items-center"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="fixed right-14 opacity-0 invisible group-hover:opacity-100 transition-all duration-300 text-sm text-white bg-primary px-2 py-1 rounded">
                {label}
              </span>
              <motion.div
                className={`w-3 h-3 rounded-full border-2 ${
                  activeSection === id ? 'bg-primary border-primary' : 'border-white'
                }`}
                whileHover={{ scale: 1.5 }}
                transition={{ duration: 0.2 }}
              />
            </a>
          </div>
        ))}
      </div>
    </motion.nav>
  );
} 