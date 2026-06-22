import { motion } from 'framer-motion'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

const techLabels = [
  { label: 'Python', top: '5%', left: '0%', delay: 0, color: 'text-blue-300' },
  { label: 'React', top: '15%', left: '78%', delay: 0.5, color: 'text-cyan-300' },
  { label: 'Java', top: '40%', left: '88%', delay: 1, color: 'text-orange-300' },
  { label: 'OpenCV', top: '68%', left: '82%', delay: 1.5, color: 'text-green-300' },
  { label: 'Flask', top: '85%', left: '60%', delay: 2, color: 'text-slate-300' },
  { label: 'SQL', top: '88%', left: '15%', delay: 0.8, color: 'text-purple-300' },
  { label: 'C++', top: '60%', left: '0%', delay: 1.2, color: 'text-pink-300' },
  { label: 'Node.js', top: '30%', left: '5%', delay: 1.8, color: 'text-emerald-300' },
]

export default function RocketAnimation() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">

      {/* Floating tech labels */}
      {techLabels.map((tech, i) => (
        <motion.span
          key={tech.label}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: [0, 1, 1, 0], y: [-10, 0, 0, 20] }}
          transition={{
            duration: 4,
            delay: tech.delay,
            repeat: Infinity,
            repeatDelay: 1,
            ease: 'easeInOut',
          }}
          className={`absolute font-mono font-bold text-sm md:text-base ${tech.color} drop-shadow-lg select-none pointer-events-none`}
          style={{ top: tech.top, left: tech.left }}
        >
          {tech.label}
        </motion.span>
      ))}

      {/* Rocket */}
      <DotLottieReact
        src="https://lottie.host/55b0609a-25bf-40ed-a3cd-ae6398716973/yaXW0gv1px.lottie"
        loop
        autoplay
        style={{ width: '100%', height: '100%', maxWidth: '500px' }}
      />
    </div>
  )
}
