export default function Gallery() {
  const moments = [
    'Hackathon Kickoff',
    'DSA Masterclass',
    'Code Jam 2026',
    'Tech Orientation',
    'Project Showcase',
    'Annual Meetup',
  ]

  return (
    <section
      id="gallery"
      className="w-full min-h-screen bg-beige text-royal-dark flex flex-col justify-between items-center px-6 py-12"
    >
      <div className="text-center pt-2">
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-wider uppercase text-royal-dark">
          Gallery
        </h2>
        <div className="w-24 h-1.5 bg-royal mx-auto mt-3 rounded-full" />
      </div>

      <div className="max-w-5xl w-full grid grid-cols-2 md:grid-cols-3 gap-4 my-auto">
        {moments.map((title, idx) => (
          <div
            key={idx}
            className="h-32 sm:h-40 rounded-xl bg-white/80 border border-beige-dark/50 shadow-sm flex flex-col items-center justify-center p-4 text-center hover:border-royal/40 hover:shadow-md transition"
          >
            <span className="text-xs text-royal/60 uppercase tracking-wider mb-1">Moment #{idx + 1}</span>
            <p className="font-semibold text-sm sm:text-base text-royal-navy">{title}</p>
          </div>
        ))}
      </div>

      <div className="text-xs text-royal-dark/60 uppercase tracking-wider">
        Capturing Milestones & Memories
      </div>
    </section>
  )
}
