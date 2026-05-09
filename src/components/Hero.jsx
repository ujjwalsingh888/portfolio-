import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { HiDownload } from 'react-icons/hi'
import { personal } from '../data/portfolio'
import RocketAnimation from './RocketAnimation'

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 md:px-16 lg:px-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto w-full">
        <div>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-blue-400 text-lg md:text-xl mb-3 font-medium"
          >
            {personal.greeting}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4"
          >
            {personal.name}.
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-400 mb-6"
          >
            I'm  {personal.titles[0]}.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-base md:text-lg text-slate-300 max-w-xl mb-8 leading-relaxed"
          >
            {personal.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a href="#contact" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition-all hover:scale-105">
              Contact me
            </a>

            <a href={personal.resumeUrl} className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 font-semibold px-6 py-3 rounded-lg transition-all flex items-center gap-2">
              <HiDownload /> Resume
            </a>

            <div className="flex gap-4 text-2xl ml-2">
              <a href={personal.github} target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href={personal.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href={`mailto:${personal.email}`} className="hover:text-blue-400 transition-colors" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </motion.div>
        </div>

       <motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, delay: 0.3 }}
  className="hidden md:flex justify-center items-center"
>
  <RocketAnimation />
</motion.div>
      </div>
    </section>
  )
}

export default Hero