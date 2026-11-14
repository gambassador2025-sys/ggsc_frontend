import { useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Scrollbar from './components/scrollbar'
import BackToTop from './components/back-to-top'
import Home from './sections/home'
import About from './sections/about'
import Events from './sections/events'
import Team from './sections/team'
import Gallery from './sections/gallery'
import Reviews from './sections/reviews'
import Contact from './sections/contact'

function SinglePageContent() {
  const { pathname } = useLocation()
  const prevPathRef = useRef<string | null>(null)

  // Smoothly scrolls to the targeted section whenever route explicitly changes (e.g. /, /events, /contact)
  useEffect(() => {
    if (prevPathRef.current === pathname) return
    prevPathRef.current = pathname

    // Root '/' corresponds to 'home', other routes correspond to '/[id]'
    const sectionId = pathname === '/' ? 'home' : pathname.replace('/', '')
    const element = document.getElementById(sectionId)
    if (element) {
      const timer = setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' })
      }, 50)
      return () => clearTimeout(timer)
    }
  }, [pathname])

  return (
    <main>
      <Home />
      <About />
      <Events />
      <Team />
      <Gallery />
      <Reviews />
      <Contact />
    </main>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="w-full bg-beige text-royal-dark selection:bg-royal selection:text-beige min-h-screen">
        <Scrollbar />
        <BackToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<SinglePageContent />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/about" element={<SinglePageContent />} />
          <Route path="/events" element={<SinglePageContent />} />
          <Route path="/team" element={<SinglePageContent />} />
          <Route path="/gallery" element={<SinglePageContent />} />
          <Route path="/reviews" element={<SinglePageContent />} />
          <Route path="/contact" element={<SinglePageContent />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
