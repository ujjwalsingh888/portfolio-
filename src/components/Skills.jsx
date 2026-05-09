import { motion } from 'framer-motion'
import {
  FaJava, FaPython, FaHtml5, FaCss3Alt, FaReact,
  FaNodeJs, FaNpm, FaDatabase, FaStackOverflow,
} from 'react-icons/fa'
import {
  SiJavascript, SiKaggle, SiOverleaf,
} from 'react-icons/si'
import { BsMicrosoft } from 'react-icons/bs'
import { HiLightningBolt } from 'react-icons/hi'
import { skills } from '../data/portfolio'

const iconMap = {
  FaJava, FaPython, FaHtml5, FaCss3Alt, FaReact, FaNodeJs,
  FaNpm, FaDatabase, FaStackOverflow,
  SiJavascript, SiKaggle, SiOverleaf,
  SiMicrosoftoffice: BsMicrosoft,
}

function Skills() {
  return (
    <section
      id="skills"
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
          {skills.heading}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-300 mb-12 max-w-3xl"
        >
          {skills.subTitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-8 md:gap-10 mb-16"
        >
          {skills.tech.map((t) => {
            const Icon = iconMap[t.icon]
            return (
              <div
                key={t.name}
                className="flex flex-col items-center group cursor-default w-20"
              >
                <div
                  className="text-5xl md:text-6xl text-slate-400
                             group-hover:text-blue-400
                             group-hover:scale-110
                             transition-all duration-300"
                >
                  {Icon ? <Icon /> : null}
                </div>
                <span className="text-xs md:text-sm text-slate-400
                                 group-hover:text-blue-400
                                 mt-2 transition-colors duration-300 text-center">
                  {t.name}
                </span>
              </div>
            )
          })}
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-4 max-w-4xl"
        >
          {skills.bullets.map((b, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-base md:text-lg text-slate-200"
            >
              <HiLightningBolt className="text-yellow-400 text-2xl flex-shrink-0 mt-1" />
              <span>{b}</span>
            </li>
          ))}
        </motion.ul>

      </div>
    </section>
  )
}

export default Skills