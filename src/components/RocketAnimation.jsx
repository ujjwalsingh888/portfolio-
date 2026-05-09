function RocketAnimation() {
  return (
    <div className="relative w-full max-w-md lg:max-w-lg aspect-square mx-auto">

      {/* Glowing background blob */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse" />

      {/* Stars */}
      <div className="absolute top-[10%] left-[20%] text-white text-2xl animate-twinkle">✦</div>
      <div className="absolute top-[20%] right-[15%] text-white text-xl animate-twinkle-slow">✦</div>
      <div className="absolute bottom-[25%] left-[15%] text-white text-lg animate-twinkle">✦</div>
      <div className="absolute bottom-[15%] right-[25%] text-white text-2xl animate-twinkle-slow">✦</div>
      <div className="absolute top-[50%] right-[10%] text-blue-300 text-sm animate-twinkle">✦</div>
      <div className="absolute top-[70%] left-[8%] text-blue-300 text-base animate-twinkle-slow">✦</div>

      {/* Rocket SVG */}
      <div className="absolute inset-0 flex items-center justify-center animate-float">
        <svg
          viewBox="0 0 200 280"
          className="w-2/5 h-2/5 drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]"
        >
          {/* Body */}
          <path
            d="M100 20 C 70 20, 55 60, 55 120 L 55 200 L 145 200 L 145 120 C 145 60, 130 20, 100 20 Z"
            fill="#e2e8f0"
            stroke="#3b82f6"
            strokeWidth="3"
          />
          {/* Window */}
          <circle cx="100" cy="100" r="22" fill="#0f172a" stroke="#3b82f6" strokeWidth="3" />
          <circle cx="100" cy="100" r="15" fill="#3b82f6" opacity="0.6" />
          <circle cx="93" cy="93" r="5" fill="#fff" opacity="0.9" />

          {/* Left fin */}
          <path d="M55 160 L 25 220 L 55 220 Z" fill="#ec4899" stroke="#a855f7" strokeWidth="2" />
          {/* Right fin */}
          <path d="M145 160 L 175 220 L 145 220 Z" fill="#ec4899" stroke="#a855f7" strokeWidth="2" />

          {/* Stripe */}
          <rect x="55" y="135" width="90" height="6" fill="#3b82f6" />

          {/* Bottom ring */}
          <rect x="60" y="200" width="80" height="12" fill="#475569" rx="3" />

          {/* Flame */}
          <g className="origin-center" style={{ animation: 'flicker 0.3s infinite alternate' }}>
            <path
              d="M75 212 Q 100 280, 125 212 Q 100 240, 75 212 Z"
              fill="#fbbf24"
            />
            <path
              d="M85 212 Q 100 260, 115 212 Q 100 230, 85 212 Z"
              fill="#f97316"
            />
            <path
              d="M92 212 Q 100 245, 108 212 Q 100 220, 92 212 Z"
              fill="#fef3c7"
            />
          </g>
        </svg>
      </div>

      {/* Floating tech labels (like the reference) */}
      <div className="absolute top-[15%] right-[5%] text-purple-400 font-bold text-lg animate-float-slow">HTML</div>
      <div className="absolute bottom-[20%] left-[5%] text-purple-400 font-bold text-lg animate-float-slow-2">C++</div>
      <div className="absolute bottom-[8%] right-[15%] text-purple-400 font-bold text-base animate-float-slow">Python</div>

    </div>
  )
}

export default RocketAnimation