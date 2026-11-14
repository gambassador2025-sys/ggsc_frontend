export default function Events() {
  return (
    <section
      id="events"
      className="w-full min-h-screen bg-beige text-royal-dark flex flex-col justify-between items-center px-6 py-12"
    >
      <div className="text-center pt-2">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-wider uppercase text-royal-dark">
          Events
        </h2>
        <div className="w-16 h-1 bg-royal mx-auto mt-2 rounded-full" />
      </div>

      <div className="max-w-5xl w-full grid md:grid-cols-3 gap-6 my-auto">
        <div className="p-6 rounded-2xl bg-white/80 border border-beige-dark/50 shadow-sm">
          <span className="text-xs uppercase tracking-widest text-royal/70 font-semibold">Flagship</span>
          <h3 className="text-xl font-bold text-royal-navy mt-2 mb-3">Annual Hackathon</h3>
          <p className="text-sm text-royal-dark/80">
            36-hour hackathon bringing students across universities to build real-world software and hardware solutions.
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-white/80 border border-beige-dark/50 shadow-sm">
          <span className="text-xs uppercase tracking-widest text-royal/70 font-semibold">Competitive</span>
          <h3 className="text-xl font-bold text-royal-navy mt-2 mb-3">Code Battles</h3>
          <p className="text-sm text-royal-dark/80">
            Weekly algorithm challenges, DSA sprint contests, and leaderboard rewards powered by Google Gemini.
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-white/80 border border-beige-dark/50 shadow-sm">
          <span className="text-xs uppercase tracking-widest text-royal/70 font-semibold">Hands-on</span>
          <h3 className="text-xl font-bold text-royal-navy mt-2 mb-3">Tech Bootcamps</h3>
          <p className="text-sm text-royal-dark/80">
            Deep dives into Web Development, AI/ML, Cloud Computing, and open source contribution workshops.
          </p>
        </div>
      </div>

      <div className="text-xs text-royal-dark/60 uppercase tracking-wider">
        Stay Tuned for Upcoming Announcements
      </div>
    </section>
  )
}
