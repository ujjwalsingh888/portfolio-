import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { projects } from '../data/portfolio'

const iconMap = { FaGithub, FaExternalLinkAlt }

function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-16 lg:px-24 bg-slate-900 text-white"
    >
      <div className="max-w-5xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold mb-4"
        >
          {projects.heading}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-300 mb-12"
        >
          {projects.subTitle}
        </motion.p>

        {/* Single-column stack */}
        <div className="space-y-10">
          {projects.items.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden hover:border-blue-400 transition-all duration-300 grid md:grid-cols-2 gap-0"
            >
              {/* LEFT: image — fixed height, image cropped to fill */}
              <div className="relative h-64 md:h-auto min-h-[280px] bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 overflow-hidden">
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    onError={(e) => { e.currentTarget.style.display = 'none' }}
                  />
                )}
              </div>

              {/* RIGHT: content */}
              <div className="p-6 md:p-8 flex flex-col">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h3>
                <p className="text-slate-300 mb-5 flex-1 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                {project.buttons && project.buttons.length > 0 && (
                  <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-700/50">
                    {project.buttons.map((btn) => {
                      const Icon = iconMap[btn.icon] || FaExternalLinkAlt
                      const baseStyles = "flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold transition-all hover:scale-105"
                      const primary = "bg-blue-500 hover:bg-blue-600 text-white"
                      const secondary = "border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900"
                      return (
                        <a
                          key={btn.label}
                          href={btn.url}
                          target="_blank"
                          rel="noreferrer"
                          className={`${baseStyles} ${btn.primary ? primary : secondary}`}
                        >
                          <Icon /> {btn.label}
                        </a>
                      )
                    })}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects
