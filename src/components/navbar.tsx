import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate();

  // Explicit route paths for each section (root '/' for Home)
  const leftLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "Team", path: "/team" },
  ];

  const rightLinks = [
    { name: "Gallery", path: "/gallery" },
    { name: "Reviews", path: "/reviews" },
    { name: "Contact", path: "/contact" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string,
  ) => {
    e.preventDefault();
    setIsNavOpen(false);
    navigate(path);
  };

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsNavOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* Top left brand text */}
      <a
        href="/"
        onClick={(e) => handleNavClick(e, "/")}
        className="fixed top-5 left-5 sm:left-8 z-50 font-black text-2xl tracking-wider text-black select-none hover:opacity-80 transition cursor-pointer"
        aria-label="Home"
      >
        GGSC
      </a>

      {/* 
        Navbar toggle button (Hamburger <-> X):
        - Same fixed position for both states
        - Flips 180 degrees smoothly on open/close
        - Animates the stepped bars into an 'X'
        - Uses mix-blend-difference so it dynamically inverts against light or dark elements
      */}
      <button
        onClick={() => setIsNavOpen(!isNavOpen)}
        className="fixed top-5 right-5 sm:top-7 sm:right-8 z-50 p-2 cursor-pointer focus:outline-none select-none text-white transition-transform duration-300 hover:scale-105"
        style={{ mixBlendMode: "difference" }}
        aria-label={
          isNavOpen ? "Close navigation menu" : "Open navigation menu"
        }
      >
        <div
          className={`relative w-8 h-6 sm:w-9 sm:h-7 transition-transform duration-700 ease-in-out ${
            isNavOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          {/* Hamburger bars (visible when closed) */}
          <svg
            className={`absolute inset-0 w-full h-full transition-all duration-500 ease-in-out ${
              isNavOpen
                ? "opacity-0 scale-75 rotate-90"
                : "opacity-100 scale-100 rotate-0"
            }`}
            viewBox="0 0 32 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Top bar (indented start, ends early) */}
            <rect
              x="7"
              y="3"
              width="16"
              height="3"
              rx="1.5"
              fill="currentColor"
            />
            {/* Middle bar (longest full span) */}
            <rect
              x="2"
              y="10.5"
              width="27"
              height="3"
              rx="1.5"
              fill="currentColor"
            />
            {/* Bottom bar (indented start, right-aligned) */}
            <rect
              x="12"
              y="18"
              width="14"
              height="3"
              rx="1.5"
              fill="currentColor"
            />
          </svg>

          {/* X icon (visible when open) */}
          <svg
            className={`absolute inset-0 w-full h-full transition-all duration-500 ease-in-out ${
              isNavOpen
                ? "opacity-100 scale-100 rotate-0"
                : "opacity-0 scale-75 -rotate-90"
            }`}
            viewBox="0 0 32 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="7"
              y1="4"
              x2="25"
              y2="20"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <line
              x1="25"
              y1="4"
              x2="7"
              y2="20"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </button>

      {/* 
        Full page popup layout matching SS2 with radial circular animation:
        - Expands outward in a circle directly from top-right corner to bottom-left corner
        - Background: off-white shade (#FAF9F6)
        - 2 columns of large typography with smooth #103AA0 hover & left-to-right underline animation (SS3)
      */}
      <div
        className={`fixed inset-0 z-40 bg-cream text-black overflow-y-auto flex flex-col justify-between p-8 sm:p-12 md:p-16 radial-popup ${
          isNavOpen ? "radial-open pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Top Spacer leaving room for fixed top-left GGSC and top-right toggle button */}
        <div className="w-full h-6 sm:h-8" />

        {/* 2-Column Links Grid (SS2 Style) */}
        <div className="max-w-5xl w-full mx-auto my-auto grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-16 md:gap-24 py-10">
          {/* Left Column */}
          <div className="flex flex-col space-y-4 sm:space-y-6 md:space-y-8">
            {leftLinks.map((link, idx) => (
              <div key={link.name} className="overflow-hidden py-1">
                <div
                  className="transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{
                    transform: isNavOpen
                      ? "translateY(0%)"
                      : "translateY(120%)",
                    opacity: isNavOpen ? 1 : 0,
                    transitionDelay: isNavOpen
                      ? `${280 + idx * 90}ms`
                      : `${(6 - idx) * 45}ms`,
                  }}
                >
                  <a
                    href={link.path}
                    onClick={(e) => handleNavClick(e, link.path)}
                    className="group relative inline-block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-neutral-900 transition-colors duration-300 hover:text-[#103AA0] select-none py-1 cursor-pointer"
                  >
                    <span>{link.name}</span>
                    {/* Smooth underline animation left to right (SS3) */}
                    <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#103AA0] scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col space-y-4 sm:space-y-6 md:space-y-8">
            {rightLinks.map((link, idx) => {
              const globalIdx = leftLinks.length + idx;
              return (
                <div key={link.name} className="overflow-hidden py-1">
                  <div
                    className="transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{
                      transform: isNavOpen
                        ? "translateY(0%)"
                        : "translateY(120%)",
                      opacity: isNavOpen ? 1 : 0,
                      transitionDelay: isNavOpen
                        ? `${280 + globalIdx * 90}ms`
                        : `${(6 - globalIdx) * 45}ms`,
                    }}
                  >
                    <a
                      href={link.path}
                      onClick={(e) => handleNavClick(e, link.path)}
                      className="group relative inline-block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-neutral-900 transition-colors duration-300 hover:text-[#103AA0] select-none py-1 cursor-pointer"
                    >
                      <span>{link.name}</span>
                      {/* Smooth underline animation left to right (SS3) */}
                      <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#103AA0] scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Tagline (SS2 Style) */}
        <div
          className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between pt-6 border-t border-black/10 gap-2 transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            transform: isNavOpen ? "translateY(0%)" : "translateY(20px)",
            opacity: isNavOpen ? 1 : 0,
            transitionDelay: isNavOpen ? "880ms" : "0ms",
          }}
        >
          <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-neutral-600">
            WHERE INNOVATION MEETS IMPACT
          </p>
          <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-neutral-600">
            GOOGLE GEMINI STUDENT COMMUNITY • UEMK
          </p>
        </div>
      </div>
    </>
  );
}
