import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'

const SplashScreen = ({ theme }) => (
  <div className="fixed inset-0 z-[60] flex items-center justify-center bg-white dark:bg-slate-950 transition-colors duration-500">
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="flex flex-col items-center gap-4"
    >
      <div className="relative">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-500 to-blue-600 blur-2xl opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 rounded-3xl bg-white dark:bg-slate-900 shadow-xl flex items-center justify-center border border-white/40 dark:border-slate-800">
            <span className="text-3xl font-display font-bold text-gradient">KK</span>
          </div>
        </div>
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-sm tracking-[0.5em] uppercase text-gray-500 dark:text-gray-400"
      >
        Loading
      </motion.p>
    </motion.div>
  </div>
)

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [theme, setTheme] = useState(() => localStorage.getItem('kk-theme') || 'light')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'achievements', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('kk-theme', theme)
  }, [theme])

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200)
    return () => clearTimeout(timer)
  }, [])

  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))

  return (
    <div className="min-h-screen transition-colors duration-500 bg-white dark:bg-slate-950 overflow-x-hidden">
      {isLoading && <SplashScreen theme={theme} />}
      <div className={`${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
        <Navbar activeSection={activeSection} theme={theme} onThemeToggle={toggleTheme} />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects theme={theme} />
        <Achievements />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
