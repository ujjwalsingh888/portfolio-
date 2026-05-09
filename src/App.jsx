import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Education from './components/Education'

function App() {
  return (
    <div className="bg-slate-900 min-h-screen">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Achievements />
      <Education />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App