import { motion } from 'framer-motion'
import { FaCar, FaBolt, FaBrain, FaCertificate } from 'react-icons/fa'
import { achievements } from '../data/portfolio'

const iconMap = { FaCar, FaBolt, FaBrain, FaCertificate }

function Achievements() {
  return (
    <section
      id="achievements"
      className="py-20 px-6 md:px-16 lg:px-24 bg-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold mb-4"
        >
          {achievements.heading}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-300 mb-12"
        >
          {achievements.subTitle}
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.items.map((item, i) => {
            const Icon = iconMap[item.icon] || FaCertificate
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:border-blue-400 hover:-translate-y-2 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-3 text-blue-400 text-2xl flex-shrink-0">
                    <Icon />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold leading-snug">{item.title}</h3>
                    <p className="text-sm text-slate-400 mt-1">{item.date}</p>
                  </div>
                </div>

                <p className="text-sm text-blue-300 mb-3 font-medium">
                  {item.organization}
                </p>

                <p className="text-slate-300 mb-4 flex-1 text-sm leading-relaxed">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-700/50">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium px-2 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Achievements