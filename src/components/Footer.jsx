import { personal } from '../data/portfolio'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-8 px-6 text-center">
      <p className="text-slate-400 text-sm">
        © {year} {personal.name}. Built with React + Tailwind CSS + Framer Motion.
      </p>
      <p className="text-slate-500 text-xs mt-2">
        Designed and developed from scratch.
      </p>
    </footer>
  )
}

export default Footer