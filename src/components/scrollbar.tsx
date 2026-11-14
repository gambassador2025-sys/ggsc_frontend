import { useEffect, useState } from 'react'

export default function Scrollbar() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    let animationFrameId: number

    const updateScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      if (totalHeight > 0) {
        const currentScroll = window.scrollY
        const progress = Math.min(Math.max(currentScroll / totalHeight, 0), 1)
        setScrollProgress(progress)
      }
    }

    const handleScroll = () => {
      cancelAnimationFrame(animationFrameId)
      animationFrameId = requestAnimationFrame(updateScroll)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })
    updateScroll()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[3px] z-50 bg-gradient-to-r from-royal-navy via-royal to-royal-accent origin-left pointer-events-none transition-transform duration-75 ease-out"
      style={{ transform: `scaleX(${scrollProgress})` }}
      aria-hidden="true"
    />
  )
}
