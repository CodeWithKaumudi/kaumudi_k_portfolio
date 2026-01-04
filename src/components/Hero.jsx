import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, MapPin, Phone, Download, ArrowDown } from 'lucide-react'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>

      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0, y: [0, -20, 0] }}
          transition={{
            default: { duration: 0.8 },
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
          className="lg:order-2 w-64 lg:w-96 flex-shrink-0 relative"
        >
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 1.2, type: "spring" }}
              className="absolute -top-12 -left-6 bg-white dark:bg-slate-800 px-4 py-2 rounded-2xl rounded-br-none shadow-lg border border-gray-100 dark:border-slate-700 z-20"
            >
              <span className="text-2xl">✨</span>
              <span className="font-bold text-sm text-gray-800 dark:text-white ml-2">Turning Ideas into Reality</span>
            </motion.div>
            <img
              src="/preview.jpg"
              alt="Creative Portfolio Mascot"
              className="w-full h-auto object-contain mix-blend-multiply dark:mix-blend-normal dark:rounded-2xl dark:opacity-90 transition-all duration-500 hover:scale-110"
            />
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left max-w-3xl lg:order-1"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
              Python Developer
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold mb-6"
          >
            Hi, I'm{' '}
            <span className="text-gradient">
              Kaumudi Kalikar
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
          >
            Results-driven Python Developer with 2+ years of hands-on experience in building scalable web applications and automation solutions
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8 text-gray-600 dark:text-gray-300"
          >
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-primary-600" />
              <span>Pune, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={18} className="text-primary-600" />
              <span>+91 9766 516 480</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={18} className="text-primary-600" />
              <a href="mailto:kaumudikalikar6@gmail.com" className="hover:text-primary-600 transition-colors">
                kaumudikalikar6@gmail.com
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-12"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/Kaumudi_Kalikar_ATS_Resume.html"
                target="_blank"
                className="px-8 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <Download size={18} />
                View ATS Resume
              </a>
              <a
                href="/Kaumudi_Kalikar_Creative_CV.html"
                target="_blank"
                className="px-8 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-300 rounded-lg font-medium hover:bg-primary-50 dark:hover:bg-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Download size={18} />
                View / Print Creative CV
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center lg:justify-start gap-4"
          >
            <a
              href="https://github.com/kaumudi-kalikar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-200 hover:bg-primary-100 dark:hover:bg-slate-700 hover:text-primary-600 transition-all duration-300 transform hover:-translate-y-1"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/kaumudi-kalikar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-200 hover:bg-primary-100 dark:hover:bg-slate-700 hover:text-primary-600 transition-all duration-300 transform hover:-translate-y-1"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:kaumudikalikar6@gmail.com"
              className="p-3 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-200 hover:bg-primary-100 dark:hover:bg-slate-700 hover:text-primary-600 transition-all duration-300 transform hover:-translate-y-1"
            >
              <Mail size={24} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown size={32} className="text-primary-600" />
      </motion.div>
    </section>
  )
}

export default Hero
