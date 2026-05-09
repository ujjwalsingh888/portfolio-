import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { education } from '../data/portfolio'

const statusMap = {
  0: { label: 'ACTIVE_NODE', color: 'text-green-400', dot: 'bg-green-400' },
  1: { label: 'ARCHIVED_DATA', color: 'text-blue-400', dot: 'bg-blue-400' },
  2: { label: 'ARCHIVED_DATA', color: 'text-blue-400', dot: 'bg-blue-400' },
}

export default function Education() {
  const [active, setActive] = useState(null)

  return (
    <section id="education" className="py-20 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16"
        >
          {education.heading}
        </motion.h2>

        <div className="relative flex gap-8 md:gap-16">

          {/* LEFT COLUMN — cards */}
          <div className="flex-1 flex flex-col gap-10">
            {education.items.map((item, i) => {
              const status = statusMap[i] || statusMap[1]
              const isActive = active === i

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative"
                >
                  {/* Card */}
                  <div
                    className={`rounded-2xl border cursor-pointer transition-all duration-300 overflow-hidden
                      ${isActive
                        ? 'border-blue-400/60 bg-slate-800'
                        : 'border-slate-700 bg-slate-800/40 hover:border-slate-500 hover:bg-slate-800/70'
                      }`}
                    onMouseEnter={() => setActive(i)}
                    onMouseLeave={() => setActive(null)}
                  >
                    {/* Card header */}
                    <div className="p-5 pb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-slate-400 text-sm font-mono">{item.duration}</span>
                        <span className={`text-xs font-mono ${status.color}`}>
                          {isActive ? status.label : '[ INITIALIZE SCAN ]'}
                        </span>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-white leading-snug">{item.school}</h3>
                      <p className="text-slate-400 text-sm mt-1">{item.degree}</p>
                    </div>

                    {/* Expanded content on hover */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 border-t border-slate-700/60 pt-4">
                            {/* Terminal path */}
                            <p className="font-mono text-xs text-slate-500 mb-3">
                              ~/education/<span className="text-blue-400">{item.school.toLowerCase().replace(/[^a-z0-9]+/g, '_')}</span>
                            </p>
                            {/* Summary */}
                            <p className="text-slate-300 text-sm leading-relaxed mb-4">
                              <span className="text-green-400 mr-2">&gt;</span>
                              {item.summary}
                            </p>
                            {/* Tags */}
                            {item.tags && item.tags.length > 0 && (
                              <div className="flex flex-wrap gap-2">
                                {item.tags.map((tag, j) => (
                                  <span key={j} className="text-xs font-mono px-2 py-1 rounded bg-slate-700 text-slate-300 border border-slate-600">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* RIGHT COLUMN — curved SVG timeline */}
          <div className="hidden md:block w-16 relative flex-shrink-0">
            <svg
              className="absolute top-0 left-1/2 -translate-x-1/2 h-full"
              width="40"
              viewBox="0 0 40 700"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Curved path */}
              <path
                d="M20 0 C 40 100, 0 200, 20 300 C 40 400, 0 500, 20 700"
                stroke="#3b82f6"
                strokeWidth="1.5"
                strokeOpacity="0.4"
                fill="none"
              />
              {/* Dots at each node */}
              {[0, 0.33, 0.67].map((pct, i) => {
                const y = pct * 700
                const isOn = active === i
                return (
                  <circle
                    key={i}
                    cx="20"
                    cy={y + 60}
                    r={isOn ? 7 : 5}
                    fill={isOn ? '#3b82f6' : '#1e40af'}
                    stroke="#3b82f6"
                    strokeWidth="1.5"
                    style={{ transition: 'all 0.2s' }}
                  />
                )
              })}
            </svg>
          </div>

        </div>
      </div>
    </section>
  )
}
