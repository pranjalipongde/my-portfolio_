import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import ContentCreator from './components/ContentCreator'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SocialBar from './components/SocialBar'

function App() {
  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('.reveal')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="graph-bg min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <SocialBar />
        <About />
        <SocialBar />
        <Projects />
        <SocialBar />
        <ContentCreator />
        <SocialBar />
        <Resume />
        <SocialBar />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
