import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'C', 'C++', 'JavaScript (ES6+)'],
    },
    {
      title: 'Web Technologies',
      skills: ['Node.js', 'Express.js', 'Django', 'Flask', 'HTML5', 'CSS', 'Bootstrap', 'Tailwind CSS'],
    },
    {
      title: 'Databases',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB'],
    },
    {
      title: 'Web Scraping & Automation',
      skills: ['Selenium', 'BeautifulSoup', 'Pandas', 'NumPy'],
    },
    {
      title: 'Version Control',
      skills: ['Git'],
    },
    {
      title: 'Development Tools',
      skills: ['VS Code', 'PyCharm', 'Visual Studio', 'Windsurf', 'Antigravity', 'Jira'],
    },
    {
      title: 'AI & Automation',
      skills: ['AI Models', 'Automation Pipelines'],
    },
    {
      title: 'Data Visualization',
      skills: ['Matplotlib'],
    },
    {
      title: 'Other Tools',
      skills: ['MS Excel'],
    },
  ]

  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-gray-50 to-primary-50 dark:from-slate-950 dark:to-slate-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and frameworks I work with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-800"
            >
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-primary-50 dark:bg-slate-800 text-primary-700 dark:text-primary-300 rounded-lg text-sm font-medium hover:bg-primary-100 dark:hover:bg-slate-700 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
