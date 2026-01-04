import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Database, Server, Workflow } from 'lucide-react'

const trackerMockupPhoto = '/vbs_login_page.png'
const ripplLoginScreen = '/rippl_login_page.png'
const ripplLandingScreen = '/rippl_waitlist_landing_page.png'
const portfolioPreview = '/preview.jpg'

const highlightStats = [
  { label: 'Vendors Onboarded', value: '350+', detail: 'migrated into a single source of truth' },
  { label: 'Operational Time Saved', value: '62%', detail: 'reduction in manual coordination' },
  { label: 'API Integrations', value: '12', detail: 'Zoho, SAP, Slack & internal tools' },
]

const ripplStats = [
  { value: '3 KM', label: 'Rippl Zone radius', detail: 'Ola Maps geofence rendered at 60fps with vector tiles' },
  { value: '50 Neighbors', label: 'Waitlist unlock threshold', detail: 'Redis counters ensure density before enabling feeds' },
  { value: 'SSE Fan-out', label: 'Realtime delivery', detail: 'Node.js + Express SSE streams hydrate feeds & notifications' },
]

const ripplFeatureCards = [
  {
    icon: Code2,
    title: 'Full-stack Development',
    description:
      'Mobile App + React/Next.js web console with Tailwind + Framer Motion to choreograph geo-fenced feeds and waitlist flows.',
  },
  {
    icon: Server,
    title: 'Backend & Deployment',
    description:
      'Node.js/Express microservices with SSE fan-out, Docker containers on Railway, GitHub Actions CI/CD, and Redis queues for waitlist + notification orchestration.',
  },
  {
    icon: Database,
    title: 'Database Management',
    description:
      'MongoDB 2dsphere indexes map ripples, Redis caches store zone counters, and Railway Buckets manage media + map thumbnails with signed URLs.',
  },
  {
    icon: Workflow,
    title: 'Advanced Features',
    description:
      'Rippl-bot auto post generator (Python services + OpenAI GPT-4) seeds verified prompts, with ChatGPT moderation, Ola Maps SDK, and PIN-gated parental controls.',
  },
]

const ripplTechStack = [
  'Mobile App Interface',
  'React/Next.js web platform',
  'Node.js + Express API gateway',
  'MongoDB 2dsphere geo indexes',
  'Redis caching & waitlist counters',
  'Docker containerization',
  'Railway hosting + Buckets media storage',
  'Ola Maps vector tiles',
  'SSE notifications pipeline',
  'ChatGPT moderation + Amplitude analytics',
  'Sentry error tracking',
  'Python automation services',
]

const ripplDeliveryHighlights = [
  'Launched Rippl-bot auto post generator using Python orchestrators + GPT-4 prompt workflows to bootstrap trusted local content at launch.',
  'Architected ripple propagation microservice using MongoDB aggregation pipelines + Redis fan-out caches.',
  'Built SSE notification layer on Express to stream feed updates, waitlist unlock events, and moderation verdicts in near real time.',
  'Integrated Ola Maps SDK with vector rendering pipeline for 3km geofences at 60fps plus Amplitude/Sentry observability.',
]

const TrackerWordmark = () => (
  <div className="flex items-baseline gap-1 text-2xl font-display tracking-tight">
    <span className="text-[#df1f26] font-semibold">TR</span>
    <span className="text-[#f4c300] font-semibold">A</span>
    <span className="text-[#009245] font-semibold">CK</span>
    <span className="text-[#1c9ad6] font-semibold">ER</span>
    <sup className="text-xs font-semibold text-gray-500">®</sup>
  </div>
)

const VBSTagline = () => (
  <p
    className="text-sky-500 text-sm font-semibold tracking-tight"
    style={{ fontFamily: "'Caveat', 'Comic Sans MS', cursive" }}
  >
    Drawing together
  </p>
)

const VBSLogo = ({ size = 64, className = '' }) => (
  <img
    src="/vbs_logo_img.jpg"
    alt="VirtualBuilding Studio logo"
    width={size}
    height={size * 0.45}
    className={`object-contain ${className}`}
    loading="lazy"
  />
)

const TrackerMockup = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.2 }}
  >
    <div className="rounded-[32px] border border-white/60 bg-white dark:bg-slate-900 dark:border-slate-800 shadow-[0_35px_70px_rgba(15,23,42,0.12)] p-4">
      <div className="relative rounded-[28px] bg-[#f7f9ff] dark:bg-slate-950 overflow-hidden">
        <img
          src={trackerMockupPhoto}
          alt="VBS Tracker login screen"
          className="w-full h-full object-contain"
          loading="lazy"
        />
        <div className="absolute inset-0 pointer-events-none border border-white/60 dark:border-slate-800 rounded-[28px]"></div>
      </div>
    </div>
  </motion.div>
)

const RipplWordmark = () => (
  <div className="text-3xl font-display font-semibold tracking-tight leading-tight">
    <span className="text-[#E86B4A]">Rippl</span>
    <span className="text-gray-900 dark:text-white"> Platform</span>
    <p className="text-xs uppercase tracking-[0.35em] text-gray-500 dark:text-gray-400 mt-2">Neighborhood release</p>
  </div>
)

const RipplLogo = ({ size = 64, className = '' }) => (
  <img
    src="/Rbb.png"
    alt="Rippl logo"
    width={size}
    height={size}
    className={`object-contain drop-shadow-lg ${className}`}
    loading="lazy"
  />
)

const Projects = ({ theme = 'light' }) => {
  const isDarkTheme = theme === 'dark'
  const ripplCardWrapperClasses = `relative overflow-hidden rounded-[32px] p-6 lg:p-10 shadow-2xl border bg-gradient-to-br from-[#fff0ea] via-white to-[#f6fbff] border-white/60 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 dark:border-slate-800`
  const currentProject = {
    name: 'VBS Tracking App',
    type: 'Delivered Program',
    description: 'Developed the VBS Tracking App, a robust ERP solution tailored for managing vendor, buyer, and supplier workflows. The system streamlines business operations through advanced features and seamless integration.',
    features: [
      {
        icon: Code2,
        title: 'Full-stack Development',
        description: 'Designed and developed the application using Next.js, JavaScript, and Tailwind CSS for an intuitive user interface, ensuring optimal user experience across devices',
      },
      {
        icon: Server,
        title: 'Backend & Deployment',
        description:
          'Built modular micro services using Node.js/Express.js with Celery task runners and MQTT messaging to orchestrate business workflows and realtime updates',
      },
      {
        icon: Database,
        title: 'Database Management',
        description:
          'Implemented PostgreSQL alongside MongoDB and MySQL for hybrid storage needs, optimizing schemas and queries for vendor directories, workflows, and audit logs',
      },
      {
        icon: Workflow,
        title: 'Advanced Features',
        description:
          'Integrated Docker and CI/CD pipelines (e.g., GitHub Actions) to sync Docker images, automate testing, and ensure consistent environments across development, staging, and production',
      },
    ],
    additionalFeatures: [
      'Vendor Management: Comprehensive vendor profiles with document storage',
      'Service Workflow Automation: Automated data exchange to minimize manual entry and errors',
      'Role-Based Access Control: Secure data protection and user-specific access to modules',
      'Cross-functional Collaboration: Worked closely with product managers, QA team, and stakeholders to define business rules, refine UI/UX designs, and deliver regular feature updates',
    ],
    technologies: [
      'Next.js',
      'Node.js',
      'Express.js',
      'JavaScript',
      'Tailwind CSS',
      'MongoDB',
      'MySQL',
      'PostgreSQL',
      'Celery',
      'MQTT',
      'Docker',
      'CI/CD',
    ],
  }

  const otherProjects = [
    {
      title: 'Face Recognition Application',
      description:
        'Completed hands-on project on "Build a Face Recognition Application using Python" as part of the AI-India initiative (AICTE)',
      technologies: ['Python', 'OpenCV', 'Machine Learning'],
      category: 'AI/ML',
    },
  ]

  return (
    <section id="projects" className="section-padding bg-white dark:bg-slate-950">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Showcasing my work in building scalable applications and innovative solutions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className={ripplCardWrapperClasses}>
            <div className="absolute -top-12 -right-8 w-48 h-48 bg-[#fde1d8] blur-3xl rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-6 w-28 h-28 bg-[#dff0ff] blur-3xl rounded-full pointer-events-none"></div>

            <div className="flex items-center gap-3 mb-8">
              <span className="px-4 py-2 bg-[#E86B4A] text-white rounded-full text-sm font-bold tracking-wide">
                Current Launch
              </span>
              <h3 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 dark:text-white">Rippl Hyperlocal Platform</h3>
            </div>

            <div className="grid xl:grid-cols-[1.15fr,0.85fr] gap-10 items-center">
              <div className="space-y-6">
                <div className="flex flex-wrap items-center gap-4">
                  <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-gray-100 dark:border-slate-800 flex items-center gap-4">
                    <RipplLogo size={56} />
                    <RipplWordmark />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.4em] text-gray-500 font-semibold dark:text-gray-400">Hyperlocal social</p>
                    <p className="text-lg text-gray-600 dark:text-gray-300">Pune · Parents · Teens · Local Biz</p>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  Building Rippl’s ripple-first social graph: a geo-fenced network where posts start inside a 3km zone, spread via
                  trusted neighbors, and unlock new areas once 50 people join. I own the full-stack build—from mobile experiences
                  to Node/Express microservices, geo persistence, and launch analytics.
                </p>

                <div className="grid sm:grid-cols-2 gap-5">
                  {ripplFeatureCards.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.05 }}
                      className="group bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-2xl p-5 shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#fff5f2] dark:bg-slate-800 flex items-center justify-center mb-4 group-hover:bg-[#ffe9e1] dark:group-hover:bg-slate-700 transition-colors">
                        <feature.icon className="text-[#E86B4A]" size={22} />
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-md border border-gray-100 dark:border-slate-800">
                  <h4 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">Launch Metrics</h4>
                  <div className="grid gap-4 md:grid-cols-3">
                    {ripplStats.map((stat) => (
                      <div key={stat.label}>
                        <p className="text-2xl font-display font-semibold text-[#E86B4A]">{stat.value}</p>
                        <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{stat.label}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{stat.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-md border border-gray-100 dark:border-slate-800 space-y-4">
                  <h4 className="font-bold text-lg mb-1 text-gray-900 dark:text-white">Delivery Focus</h4>
                  <ul className="space-y-3">
                    {ripplDeliveryHighlights.map((item, index) => (
                      <li key={index} className="flex gap-3 text-gray-600 dark:text-gray-300">
                        <span className="text-[#E86B4A] font-bold mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-md border border-gray-100 dark:border-slate-800">
                  <h4 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">Architecture Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {ripplTechStack.map((item) => (
                      <span
                        key={item}
                        className="px-4 py-2 rounded-full border border-gray-200 dark:border-slate-700 text-xs font-medium tracking-wide text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-slate-800/70"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href="https://rippl.space/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[#E86B4A] px-5 py-2 text-white text-sm font-semibold shadow-lg hover:bg-[#d85c3c] transition-colors"
                    >
                      Visit Rippl waitlist
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-[28px] overflow-hidden border border-white/80 dark:border-slate-800 shadow-[0_25px_60px_rgba(15,23,42,0.15)] bg-white dark:bg-slate-900 p-4">
                  <img
                    src={ripplLandingScreen}
                    alt="Rippl waitlist landing page"
                    className="w-full h-full object-contain rounded-[20px] border border-gray-100 dark:border-slate-800"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-[28px] overflow-hidden border border-white/80 dark:border-slate-800 shadow-[0_25px_60px_rgba(15,23,42,0.15)] bg-white dark:bg-slate-900 p-4">
                  <img
                    src={ripplLoginScreen}
                    alt="Rippl app login screen"
                    className="w-full h-full object-contain rounded-[20px] border border-gray-100 dark:border-slate-800"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#fff7f3] via-white to-[#f0f7ff] dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 p-6 lg:p-10 shadow-2xl border border-white/60 dark:border-slate-800">
            <div className="absolute -top-16 -right-10 w-56 h-56 bg-primary-200/30 blur-3xl rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-6 w-24 h-24 bg-blue-200/40 blur-3xl rounded-full pointer-events-none"></div>

            <div className="flex items-center gap-3 mb-8">
              <span className="px-4 py-2 bg-primary-600 text-white rounded-full text-sm font-bold tracking-wide">
                {currentProject.type}
              </span>
              <h3 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 dark:text-white">{currentProject.name}</h3>
            </div>

            <div className="grid xl:grid-cols-[1.15fr,0.85fr] gap-10 items-center">
              <div className="space-y-6">
                <div className="flex flex-wrap items-center gap-4">
                  <div className="p-4 bg-white rounded-2xl shadow-lg">
                    <VBSLogo size={64} />
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-display font-semibold">
                      <span className="text-[#df1f26]">VirtualBuilding</span> <span className="text-gray-800 dark:text-white">studio</span>
                    </p>
                    <VBSTagline />
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  {currentProject.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-5">
                  {currentProject.features.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.05 }}
                      className="group bg-white/90 dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-2xl p-5 shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-slate-800 flex items-center justify-center mb-4 group-hover:bg-primary-100 dark:group-hover:bg-slate-700 transition-colors">
                        <feature.icon className="text-primary-600" size={22} />
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-md border border-gray-100 dark:border-slate-800">
                  <h4 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">Key Outcomes</h4>
                  <div className="grid gap-4 md:grid-cols-3">
                    {highlightStats.map((stat) => (
                      <div key={stat.label}>
                        <p className="text-2xl font-display font-semibold text-primary-700 dark:text-primary-500">{stat.value}</p>
                        <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{stat.label}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{stat.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-md border border-gray-100 dark:border-slate-800 space-y-4">
                  <div>
                    <h4 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">Strategic Highlights</h4>
                    <ul className="space-y-3">
                      {currentProject.additionalFeatures.map((feature, index) => (
                        <li key={index} className="flex gap-3 text-gray-600 dark:text-gray-300">
                          <span className="text-primary-600 font-bold mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href="https://www.virtualbuildingstudio.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary-700 hover:text-primary-900 transition-colors"
                  >
                    Visit project site
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 17 17 7m0 0H9m8 0v8" />
                    </svg>
                  </a>
                </div>

                <div className="flex flex-wrap gap-2">
                  {currentProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-white to-gray-50 dark:from-slate-800 dark:to-slate-800/70 border border-gray-100 dark:border-slate-700 text-primary-700 dark:text-gray-200 rounded-lg text-sm font-medium shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <TrackerMockup />
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-800 group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold">
                  {project.category}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 rounded-md text-xs font-medium"
                  >
                    {tech}
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

export default Projects
