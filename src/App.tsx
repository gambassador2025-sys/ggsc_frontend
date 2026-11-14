import { useState } from 'react'

export default function App() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Team', href: '#team' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <div className="w-full bg-royal-dark text-beige selection:bg-beige selection:text-royal-dark">
      {/* Side opening navbar toggle button */}
      <button
        onClick={() => setIsNavOpen(true)}
        className="fixed top-5 right-5 z-40 p-3 rounded-xl bg-royal-navy/90 text-beige border border-beige/30 shadow-lg hover:bg-royal transition"
        aria-label="Open navigation menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Side opening navbar drawer & backdrop */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${isNavOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        <div
          onClick={() => setIsNavOpen(false)}
          className="absolute inset-0 bg-black/60 backdrop-blur-xs"
        />

        <nav
          className={`absolute top-0 right-0 h-full w-72 sm:w-80 bg-royal-navy border-l border-beige/20 shadow-2xl p-6 flex flex-col justify-between transform transition-transform duration-300 ease-in-out ${isNavOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-beige/10">
              <span className="font-bold text-lg tracking-wide text-beige">GGSC UEMK</span>
              <button
                onClick={() => setIsNavOpen(false)}
                className="p-2 text-beige/70 hover:text-beige rounded-lg hover:bg-royal transition"
                aria-label="Close navigation menu"
              >
                ✕
              </button>
            </div>

            <ul className="mt-8 space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsNavOpen(false)}
                    className="block px-4 py-2.5 rounded-lg text-beige/80 hover:text-beige hover:bg-royal text-base font-medium tracking-wide transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-6 border-t border-beige/10 text-xs text-beige/50 text-center">
            Google Gemini Student Chapter • UEM Kolkata
          </div>
        </nav>
      </div>

      {/* 1. Landing (Home) Section */}
      <section
        id="home"
        className="w-full min-h-screen bg-royal-dark text-beige flex flex-col justify-between items-center px-6 py-12"
      >
        <div className="text-center pt-2">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-widest text-beige/80 uppercase">
            GGSC UEMK
          </h2>
          <div className="w-12 h-0.5 bg-beige/40 mx-auto mt-2" />
        </div>

        <div className="max-w-4xl text-center flex flex-col items-center">
          <span className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-royal-navy border border-beige/20 text-beige mb-6">
            Official Google Gemini Student Chapter
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight mb-6">
            Innovate, Code & Conquer with <span className="text-beige underline decoration-royal-accent">GGSC UEMK</span>
          </h1>
          <p className="text-lg sm:text-xl text-beige/80 max-w-2xl mb-8">
            Empowering passionate tech enthusiasts and developers at University of Engineering & Management, Kolkata to build tomorrow&apos;s technology.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#events"
              className="px-6 py-3 rounded-lg font-semibold bg-beige text-royal-dark hover:bg-beige-muted transition shadow-md"
            >
              Explore Events
            </a>
            <a
              href="#about"
              className="px-6 py-3 rounded-lg font-semibold border border-beige/30 text-beige hover:bg-royal-navy transition"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="text-xs text-beige/60 uppercase tracking-widest animate-bounce">
          Scroll Down ↓
        </div>
      </section>

      {/* 2. About Section */}
      <section
        id="about"
        className="w-full min-h-screen bg-beige text-royal-dark flex flex-col justify-between items-center px-6 py-12"
      >
        <div className="text-center pt-2">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-wider uppercase">
            About Us
          </h2>
          <div className="w-16 h-1 bg-royal mx-auto mt-2 rounded-full" />
        </div>

        <div className="max-w-4xl w-full grid md:grid-cols-3 gap-6 my-auto">
          <div className="p-6 rounded-2xl bg-white/70 border border-beige-dark/40 shadow-sm flex flex-col">
            <h3 className="text-xl font-bold mb-3 text-royal-navy">Community</h3>
            <p className="text-sm text-royal-dark/80 leading-relaxed">
              A vibrant community of developers, problem solvers, and innovators collaborating and growing together at UEMK.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white/70 border border-beige-dark/40 shadow-sm flex flex-col">
            <h3 className="text-xl font-bold mb-3 text-royal-navy">Skill Building</h3>
            <p className="text-sm text-royal-dark/80 leading-relaxed">
              Hands-on workshops, competitive programming contests, and real-world tech stacks designed to accelerate tech careers.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white/70 border border-beige-dark/40 shadow-sm flex flex-col">
            <h3 className="text-xl font-bold mb-3 text-royal-navy">Leadership</h3>
            <p className="text-sm text-royal-dark/80 leading-relaxed">
              Mentorship opportunities, hackathon sponsorships, and industry networking powered by Google Gemini.
            </p>
          </div>
        </div>

        <div className="text-xs text-royal-dark/60 uppercase tracking-wider">
          GGSC UEMK • Learn • Lead • Succeed
        </div>
      </section>

      {/* 3. Events Section */}
      <section
        id="events"
        className="w-full min-h-screen bg-royal-navy text-beige flex flex-col justify-between items-center px-6 py-12"
      >
        <div className="text-center pt-2">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-wider uppercase">
            Events
          </h2>
          <div className="w-16 h-1 bg-beige mx-auto mt-2 rounded-full" />
        </div>

        <div className="max-w-5xl w-full grid md:grid-cols-3 gap-6 my-auto">
          <div className="p-6 rounded-2xl bg-royal-dark border border-beige/20 shadow-md">
            <span className="text-xs uppercase tracking-widest text-beige/60 font-semibold">Flagship</span>
            <h3 className="text-xl font-bold text-beige mt-2 mb-3">Annual Hackathon</h3>
            <p className="text-sm text-beige/75">
              36-hour hackathon bringing students across universities to build real-world software and hardware solutions.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-royal-dark border border-beige/20 shadow-md">
            <span className="text-xs uppercase tracking-widest text-beige/60 font-semibold">Competitive</span>
            <h3 className="text-xl font-bold text-beige mt-2 mb-3">Code Battles</h3>
            <p className="text-sm text-beige/75">
              Weekly algorithm challenges, DSA sprint contests, and leaderboard rewards powered by Google Gemini.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-royal-dark border border-beige/20 shadow-md">
            <span className="text-xs uppercase tracking-widest text-beige/60 font-semibold">Hands-on</span>
            <h3 className="text-xl font-bold text-beige mt-2 mb-3">Tech Bootcamps</h3>
            <p className="text-sm text-beige/75">
              Deep dives into Web Development, AI/ML, Cloud Computing, and open source contribution workshops.
            </p>
          </div>
        </div>

        <div className="text-xs text-beige/60 uppercase tracking-wider">
          Stay Tuned for Upcoming Announcements
        </div>
      </section>

      {/* 4. Team Section */}
      <section
        id="team"
        className="w-full min-h-screen bg-beige-light text-royal-dark flex flex-col justify-between items-center px-6 py-12"
      >
        <div className="text-center pt-2">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-wider uppercase">
            Our Team
          </h2>
          <div className="w-16 h-1 bg-royal mx-auto mt-2 rounded-full" />
        </div>

        <div className="max-w-4xl w-full grid sm:grid-cols-2 md:grid-cols-4 gap-6 my-auto">
          {['Chapter Lead', 'Technical Lead', 'Event Lead', 'Design & PR Lead'].map((role, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-beige-dark/40 text-center shadow-sm"
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-royal-dark text-beige flex items-center justify-center font-bold text-lg mb-4">
                UEMK
              </div>
              <h4 className="font-bold text-base text-royal-navy">Core Member</h4>
              <p className="text-xs text-royal-dark/70 mt-1">{role}</p>
            </div>
          ))}
        </div>

        <div className="text-xs text-royal-dark/60 uppercase tracking-wider">
          Dedicated Minds Behind GGSC UEMK
        </div>
      </section>

      {/* 5. Gallery Section */}
      <section
        id="gallery"
        className="w-full min-h-screen bg-royal-dark text-beige flex flex-col justify-between items-center px-6 py-12"
      >
        <div className="text-center pt-2">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-wider uppercase">
            Gallery
          </h2>
          <div className="w-16 h-1 bg-beige mx-auto mt-2 rounded-full" />
        </div>

        <div className="max-w-5xl w-full grid grid-cols-2 md:grid-cols-3 gap-4 my-auto">
          {[
            'Hackathon Kickoff',
            'DSA Masterclass',
            'Code Jam 2026',
            'Tech Orientation',
            'Project Showcase',
            'Annual Meetup',
          ].map((title, idx) => (
            <div
              key={idx}
              className="h-32 sm:h-40 rounded-xl bg-royal-navy border border-beige/20 flex flex-col items-center justify-center p-4 text-center hover:border-beige/50 transition"
            >
              <span className="text-xs text-beige/50 uppercase tracking-wider mb-1">Moment #{idx + 1}</span>
              <p className="font-semibold text-sm sm:text-base text-beige">{title}</p>
            </div>
          ))}
        </div>

        <div className="text-xs text-beige/60 uppercase tracking-wider">
          Capturing Milestones & Memories
        </div>
      </section>

      {/* 6. Reviews Section */}
      <section
        id="reviews"
        className="w-full min-h-screen bg-beige text-royal-dark flex flex-col justify-between items-center px-6 py-12"
      >
        <div className="text-center pt-2">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-wider uppercase">
            Reviews
          </h2>
          <div className="w-16 h-1 bg-royal mx-auto mt-2 rounded-full" />
        </div>

        <div className="max-w-4xl w-full grid md:grid-cols-3 gap-6 my-auto">
          {[
            {
              review: 'GGSC UEMK helped me crack my first coding contest with high-quality workshops.',
              author: 'Computer Science Student',
            },
            {
              review: 'The hackathons and peer mentoring provided the best real-world project experience.',
              author: 'Hackathon Finalist',
            },
            {
              review: 'An incredible tech chapter that fosters leadership, teamwork, and innovation.',
              author: 'Chapter Alumnus',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white/80 border border-beige-dark/40 shadow-sm flex flex-col justify-between"
            >
              <p className="text-sm italic text-royal-dark/90 leading-relaxed mb-4">
                &ldquo;{item.review}&rdquo;
              </p>
              <span className="text-xs font-bold text-royal uppercase tracking-wider">
                — {item.author}
              </span>
            </div>
          ))}
        </div>

        <div className="text-xs text-royal-dark/60 uppercase tracking-wider">
          Voices of Our Growing Community
        </div>
      </section>

      {/* 7. Contact Section */}
      <section
        id="contact"
        className="w-full min-h-screen bg-royal-navy text-beige flex flex-col justify-between items-center px-6 py-12"
      >
        <div className="text-center pt-2">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-wider uppercase">
            Contact Us
          </h2>
          <div className="w-16 h-1 bg-beige mx-auto mt-2 rounded-full" />
        </div>

        <div className="max-w-3xl w-full p-8 rounded-2xl bg-royal-dark border border-beige/20 shadow-xl text-center my-auto">
          <h3 className="text-2xl font-bold mb-3">Connect with GGSC UEMK</h3>
          <p className="text-sm text-beige/75 mb-6 max-w-lg mx-auto">
            Have queries, partnership proposals, or want to collaborate with our student chapter? Reach out to us.
          </p>

          <div className="space-y-3 text-sm text-beige/90 mb-8">
            <p>
              <span className="font-semibold text-beige">Campus:</span> University of Engineering & Management (UEM), Kolkata
            </p>
            <p>
              <span className="font-semibold text-beige">Email:</span> contact@ggscuemk.org
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {['LinkedIn', 'GitHub', 'Instagram', 'Discord'].map((platform) => (
              <span
                key={platform}
                className="px-4 py-2 rounded-lg bg-royal text-xs font-semibold uppercase tracking-wider text-beige border border-beige/20 cursor-pointer hover:bg-royal-light transition"
              >
                {platform}
              </span>
            ))}
          </div>
        </div>

        <div className="text-xs text-beige/60 uppercase tracking-wider">
          We are always excited to collaborate
        </div>
      </section>

      {/* Bottom Footer Section */}
      <footer className="w-full bg-black text-white py-6 px-4 text-center">
        <p className="text-sm font-medium tracking-wide">
          © 2026 GGSC UEMK. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
