import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Database, Globe, Zap } from 'lucide-react'

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description: 'Expertise in Python, Django, React, and modern web technologies',
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'Proficient in PostgreSQL, MySQL, and efficient database architecture',
    },
    {
      icon: Globe,
      title: 'Web Scraping',
      description: 'Advanced skills in Selenium, BeautifulSoup, and data extraction',
    },
    {
      icon: Zap,
      title: 'API Integration',
      description: 'REST API development and third-party service integration',
    },
  ]

  return (
    <section id="about" className="section-padding bg-white dark:bg-slate-950">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-blue-500 dark:from-primary-700 dark:to-blue-800 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-800">
                <h3 className="text-2xl font-display font-bold mb-4 text-gray-900 dark:text-white">Career Profile</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  Results-driven Python Developer with 2+ years of hands-on experience in building scalable web 
                  applications using Django, Flask, Python, and modern JavaScript technologies. Proficient in 
                  web scraping (Selenium/Soup), Selenium, REST API integration, and PostgreSQL database design.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  Demonstrated expertise in understanding of full stack development, with a focus on delivering 
                  high-quality, maintainable code for both client-facing and internal projects across diverse, 
                  growth-oriented organizations.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Committed to continuous learning and technical excellence.
                </p>

                <div className="mt-8 p-6 bg-primary-50 dark:bg-slate-800/60 rounded-xl">
                  <h4 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">Education</h4>
                  <div className="space-y-2">
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Master of Computer Application (M.C.A.)</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">D.R.D.Y Patil School of MCA, Pune</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Aug 2019 - Oct 2022 | CGPA: 8.55</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-4 p-6 bg-gray-50 dark:bg-slate-900 rounded-xl border border-gray-100 dark:border-slate-800 hover:bg-primary-50 dark:hover:bg-slate-800 transition-all duration-300 group"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-primary-200 dark:group-hover:bg-slate-700 transition-colors">
                    <item.icon className="text-primary-600 dark:text-primary-300" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
