import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'Python Developer',
      company: 'Agile Key Team',
      period: 'July 2023 - till date',
      type: 'Current Position',
      responsibilities: [
        'Backend Development: Strong proficiency in Python and Django for building reliable and efficient backend systems, supporting seamless user experiences',
        'Frontend Development: Skilled in creating intuitive, responsive UIs with React, Next.js, and Tailwind CSS, ensuring optimal user experience across devices',
        'Web Scraping & Automation: Experienced in designing data extraction tools using Selenium, BeautifulSoup, and Pandas',
        'Database Management: Solid knowledge of PostgreSQL and MySQL for effective database design, query optimization, and data integrity',
        'Collaboration & Agile: Actively participated in agile sprints, daily stand-ups, and sprint reviews, fostering a culture of continuous improvement',
      ],
    },
    {
      title: 'Version Control & Code Quality',
      company: '',
      period: '',
      type: 'Technical Focus',
      responsibilities: [
        'Proficient in using Git for version control, contributing to code integrity, continuous integration, and adherence to clean code principles',
      ],
    },
    {
      title: 'End-to-End Solutions',
      company: '',
      period: '',
      type: 'Project Delivery',
      responsibilities: [
        'Delivered end-to-end solutions that meet user needs and organizational goals, ensuring feature delivery that meets user needs and organizational goals',
      ],
    },
  ]

  return (
    <section id="experience" className="section-padding bg-white dark:bg-slate-950">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Currently working as Python Developer at Agile Key Team
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary-600 to-blue-600"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
                }`}
              >
                <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-slate-800 hover:shadow-xl transition-all duration-300 ml-8 md:ml-0">
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>

                  {exp.company && (
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase size={20} className="text-primary-600" />
                      <span className="text-sm font-semibold text-primary-600 uppercase tracking-wide">
                        {exp.type}
                      </span>
                    </div>
                  )}

                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{exp.title}</h3>
                  
                  {exp.company && (
                    <>
                      <p className="text-lg text-gray-700 dark:text-gray-200 font-medium mb-2">{exp.company}</p>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
                        <Calendar size={16} />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                    </>
                  )}

                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex gap-3 text-gray-600 dark:text-gray-300">
                        <span className="text-primary-600 font-bold mt-1">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
