import { useState, useEffect } from 'react'
import * as ReactScroll from 'react-scroll'
import { HiMenu, HiX } from 'react-icons/hi'

const Link = ReactScroll.Link

// Custom hook: returns true when navbar should be hidden
function useHideOnScroll() {
  const [hidden, setHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      // hide if scrolling down past 80px, show if scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setHidden(true)
      } else {
        setHidden(false)
      }
      setLastScrollY(currentScrollY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return hidden
}

const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Achievements', to: 'achievements' },
  { name: 'Education', to: 'education' },
  { name: 'Contact', to: 'contact' },
]

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const hidden = useHideOnScroll()

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md
                  border-b border-slate-800 px-6 md:px-16 py-4
                  transition-transform duration-300
                  ${hidden ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="text-3xl md:text-4xl font-signature text-white cursor-pointer hover:text-blue-400 transition-colors"
        >
          {'<UjjwalSingh />'}
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                activeClass="text-blue-400"
                className="text-slate-300 hover:text-blue-400 transition-colors cursor-pointer font-medium"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {mobileOpen && (
        <ul className="md:hidden flex flex-col gap-4 mt-4 pb-4 border-t border-slate-800 pt-4">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => setMobileOpen(false)}
                className="text-slate-300 hover:text-blue-400 transition-colors cursor-pointer font-medium block"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}

export default Navbar