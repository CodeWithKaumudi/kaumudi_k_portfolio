import React from 'react'
import { Heart, Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 dark:bg-slate-950 text-white">
      <div className="container-custom px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-display font-bold mb-4 text-gradient-light dark:text-gradient">
              Kaumudi Kalikar
            </h3>
            <p className="text-gray-400 dark:text-gray-500 leading-relaxed">
              Python Developer passionate about building scalable web applications and innovative solutions.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white dark:text-gray-100">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 dark:text-gray-500 hover:text-primary-400 dark:hover:text-primary-300 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 dark:text-gray-500 hover:text-primary-400 dark:hover:text-primary-300 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 dark:text-gray-500 hover:text-primary-400 dark:hover:text-primary-300 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 dark:text-gray-500 hover:text-primary-400 dark:hover:text-primary-300 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 dark:text-gray-500 hover:text-primary-400 dark:hover:text-primary-300 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white dark:text-gray-100">Connect</h4>
            <div className="flex gap-4 mb-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 dark:bg-slate-800 rounded-lg hover:bg-primary-600 dark:hover:bg-primary-700 transition-all duration-300 hover:shadow-lg"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 dark:bg-slate-800 rounded-lg hover:bg-primary-600 dark:hover:bg-primary-700 transition-all duration-300 hover:shadow-lg"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:kaumudikalikar6@gmail.com"
                className="p-3 bg-gray-800 dark:bg-slate-800 rounded-lg hover:bg-primary-600 dark:hover:bg-primary-700 transition-all duration-300 hover:shadow-lg"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-gray-400 dark:text-gray-500 text-sm">
              kaumudikalikar6@gmail.com
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 dark:text-gray-500 text-sm text-center md:text-left">
              © {currentYear} Kaumudi Kalikar. All rights reserved.
            </p>

          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
