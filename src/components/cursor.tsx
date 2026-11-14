import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const isVisibleRef = useRef(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isPointer, setIsPointer] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    // Disable custom cursor on touch/mobile devices
    const isTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window
    if (isTouch) {
      setIsTouchDevice(true)
      return
    }

    document.body.classList.add('custom-cursor-active')

    const cursorEl = cursorRef.current

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisibleRef.current) {
        isVisibleRef.current = true
        setIsVisible(true)
      }
      if (cursorEl) {
        cursorEl.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
      }
    }

    const handleMouseDown = () => setIsClicked(true)
    const handleMouseUp = () => setIsClicked(false)

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (
        target &&
        (target.closest('a, button, [role="button"], input, select, textarea, [data-cursor="pointer"]') ||
          window.getComputedStyle(target).cursor === 'pointer')
      ) {
        setIsPointer(true)
      } else {
        setIsPointer(false)
      }
    }

    const handleMouseLeave = () => {
      isVisibleRef.current = false
      setIsVisible(false)
    }

    const handleMouseEnter = () => {
      isVisibleRef.current = true
      setIsVisible(true)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('mouseover', handleMouseOver, { passive: true })
    document.documentElement.addEventListener('mouseleave', handleMouseLeave)
    document.documentElement.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      document.body.classList.remove('custom-cursor-active')
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('mouseover', handleMouseOver)
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave)
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [])

  if (isTouchDevice) return null

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform transition-opacity duration-150 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        transform: 'translate3d(-100px, -100px, 0)',
      }}
      aria-hidden="true"
    >
      <svg
        width="26"
        height="29"
        viewBox="0 0 100 112"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        shapeRendering="geometricPrecision"
        className="transition-transform duration-100 ease-out"
        style={{
          transform: isClicked ? 'scale(0.88)' : isPointer ? 'scale(1.12)' : 'scale(1)',
          transformOrigin: '0 0',
          marginLeft: '-1.5px',
          marginTop: '-1.5px',
        }}
      >
        <defs>
          <filter id="cursor-shadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="2.5" stdDeviation="3" floodColor="#000000" floodOpacity="0.25" />
          </filter>
        </defs>
        <path
          d="M 8 8 L 74 62 C 50 62, 30 67, 8 94 Z"
          fill="#213960"
          stroke="#000000"
          strokeWidth="7"
          strokeLinejoin="round"
          strokeLinecap="round"
          filter="url(#cursor-shadow)"
        />
      </svg>
    </div>
  )
}
