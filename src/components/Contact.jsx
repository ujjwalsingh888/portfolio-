import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa'
import { personal, contact } from '../data/portfolio'

function Contact() {
  // Strip non-digit characters from phone for the tel: link
  const phoneDigits = contact.phone.replace(/\s+/g, '')

  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-16 lg:px-24 bg-slate-900 text-white"
    >
      <div className="max-w-4xl mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold mb-4"
        >
          {contact.heading}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto"
        >
          {contact.subTitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center gap-8"
        >

          {/* Big email button */}
          <a
            href={`mailto:${contact.email}`}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg transition-all hover:scale-105 flex items-center gap-3 text-lg"
          >
            <FaEnvelope /> Say hello
          </a>

          {/* Three contact rows: each is a clickable link */}
          <div className="flex flex-col gap-4 text-slate-300">

            {/* Email */}
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-3 hover:text-blue-400 transition-colors group"
            >
              <span className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-2 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                <FaEnvelope />
              </span>
              <span>{contact.email}</span>
            </a>

            {/* Phone */}
            <a
              href={`tel:${phoneDigits}`}
              className="flex items-center gap-3 hover:text-blue-400 transition-colors group"
            >
              <span className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-2 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                <FaPhone />
              </span>
              <span>{contact.phone}</span>
            </a>

            {/* Location */}
            <div className="flex items-center gap-3">
              <span className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-2 text-blue-400">
                <FaMapMarkerAlt />
              </span>
              <span>{contact.location}</span>
            </div>

          </div>

          {/* Social icons */}
          <div className="flex gap-6 text-3xl mt-2">
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 hover:scale-110 transition-all"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 hover:scale-110 transition-all"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  )
}

export default Contact