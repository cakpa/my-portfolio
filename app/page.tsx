'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import Image from 'next/image';

const basePath = process.env.NODE_ENV === 'production' ? '/my-portfolio' : '';

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Profile Picture */}
          <motion.div
            className="mb-8 relative"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-48 h-48 mx-auto relative rounded-full overflow-hidden border-4 border-primary">
              <Image
                src="/profile.jpg"
                alt="Chinedum Akpala"
                width={192}
                height={192}
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </motion.div>

          {/* Name and Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Chinedum Akpala
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gradient">Web Developer</span>
          </h2>
          <p className="text-dimWhite text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Crafting beautiful and functional web experiences with modern technologies
          </p>
          
          {/* Call to Action Buttons */}
          <div className="flex justify-center gap-6">
            <motion.a
              href="#contact"
              className="bg-primary hover:bg-blue-600 text-white px-8 py-3 rounded-full transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
            <motion.a
              href="#projects"
              className="border border-white hover:border-primary hover:text-primary px-8 py-3 rounded-full transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Work
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
        <motion.div
          className="max-w-4xl"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gradient">About Me</h2>
          <p className="text-dimWhite text-lg leading-relaxed mb-6">
            Hi, I'm Chinedum Akpala, a passionate web developer with expertise in modern web technologies.
            I specialize in creating responsive and user-friendly applications that solve real-world problems.
            My approach combines technical expertise with creative problem-solving to deliver exceptional web experiences.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-black/20 p-6 rounded-lg hover:bg-black/30 transition-colors">
              <h3 className="text-xl font-semibold mb-4">Frontend Development</h3>
              <p className="text-dimWhite">
                Expertise in React, Next.js, and modern CSS frameworks, creating responsive and interactive user interfaces
              </p>
            </div>
            <div className="bg-black/20 p-6 rounded-lg hover:bg-black/30 transition-colors">
              <h3 className="text-xl font-semibold mb-4">Backend Development</h3>
              <p className="text-dimWhite">
                Experience with Node.js, APIs, and database management, building robust and scalable applications
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20">
        <motion.div
          className="max-w-6xl w-full"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gradient">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <motion.div
                key={project}
                className="bg-black/20 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform"
                whileHover={{ y: -10 }}
              >
                <div className="h-48 bg-gray-800"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Project {project}</h3>
                  <p className="text-dimWhite mb-4">
                    Description of project {project} and its key features
                  </p>
                  <div className="flex gap-4">
                    <a href="#" className="text-primary hover:text-blue-400">View Demo</a>
                    <a href="#" className="text-primary hover:text-blue-400">Source Code</a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-20">
        <motion.div
          className="max-w-4xl w-full"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gradient">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind', 'MongoDB', 'Git', 'AWS'].map((skill) => (
              <motion.div
                key={skill}
                className="bg-black/20 p-4 rounded-lg text-center hover:bg-primary/20 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-lg font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
        <motion.div
          className="max-w-4xl w-full text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gradient">Get In Touch</h2>
          <p className="text-dimWhite text-lg mb-12">
            I'm always open to new opportunities and interesting projects
          </p>
          <div className="flex justify-center gap-8">
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-3xl hover:text-primary"
            >
              <FiGithub />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-3xl hover:text-primary"
            >
              <FiLinkedin />
            </motion.a>
            <motion.a
              href="mailto:your.email@example.com"
              whileHover={{ scale: 1.2 }}
              className="text-3xl hover:text-primary"
            >
              <FiMail />
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
} 