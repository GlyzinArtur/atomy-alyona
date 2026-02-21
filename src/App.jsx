import { useEffect } from 'react'
import Hero from './components/Hero'
import AboutAtomy from './components/AboutAtomy'
import WhyMe from './components/WhyMe'
import HowToStart from './components/HowToStart'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import './App.css'

function App() {
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

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="app">
      <Hero />
      <AboutAtomy />
      <WhyMe />
      <HowToStart />
      <Contacts />
      <Footer />
    </div>
  )
}

export default App
