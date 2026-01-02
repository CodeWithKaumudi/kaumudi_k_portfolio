import React from 'react'
import { motion } from 'framer-motion'
import { Award, Trophy, Users, BookOpen } from 'lucide-react'

const Achievements = () => {
  const achievements = [
    {
      icon: Award,
      title: 'Face Recognition Application',
      organization: 'AI-India Initiative (AICTE)',
      description: 'Completed hands-on project on "Build a Face Recognition Application using Python" as part of the AI-India initiative',
      year: '2020',
    },
    {
      icon: Award,
      title: '2nd Prize - Solo Dance Competition',
      organization: 'D.R.D.Y Patil School of MCA, Pune',
      description: 'Awarded 2nd Prize in Solo Dance Competition',
      year: '2020',
    },
    {
      icon: Users,
      title: 'Volunteer - Equinox Event',
      organization: 'Thakurday, Mumbai',
      description: 'Volunteered in Equinox, a cultural event organized by Thakurday',
      year: '2019',
    },
    {
      icon: BookOpen,
      title: 'Agile Methodology Workshop',
      organization: 'Cognizant',
      description: 'Participated in Ready, Set, Agile! Technology Workshop organized by Cognizant, gaining practical insights into Agile practices',
      year: '2020',
    },
  ]

  return (
    <section id="achievements" className="section-padding bg-gradient-to-br from-gray-50 to-primary-50 dark:from-slate-950 dark:to-slate-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Achievements & <span className="text-gradient">Participation</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Recognition and active participation in various technical and cultural events
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-800 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-blue-100 dark:from-slate-800 dark:to-slate-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <achievement.icon className="text-primary-600 dark:text-primary-400" size={28} />
                  </div>
                </div>
                <div className="flex-1">
                  <span className="inline-block px-3 py-1 bg-primary-50 dark:bg-slate-800 text-primary-700 dark:text-primary-300 rounded-full text-xs font-semibold mb-2">
                    {achievement.year}
                  </span>
                </div>
              </div>

              <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {achievement.title}
              </h3>

              <p className="text-sm font-medium text-primary-600 dark:text-primary-400 mb-3">
                {achievement.organization}
              </p>

              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
