export default function About() {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-beige text-royal-dark flex flex-col justify-between items-center px-6 py-12"
    >
      <div className="text-center pt-2">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-wider uppercase text-royal-dark">
          About Us
        </h2>
        <div className="w-16 h-1 bg-royal mx-auto mt-2 rounded-full" />
      </div>

      <div className="max-w-4xl w-full grid md:grid-cols-3 gap-6 my-auto">
        <div className="p-6 rounded-2xl bg-white/80 border border-beige-dark/50 shadow-sm flex flex-col">
          <h3 className="text-xl font-bold mb-3 text-royal-navy">Community</h3>
          <p className="text-sm text-royal-dark/80 leading-relaxed">
            A vibrant community of developers, problem solvers, and innovators collaborating and growing together at UEMK.
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-white/80 border border-beige-dark/50 shadow-sm flex flex-col">
          <h3 className="text-xl font-bold mb-3 text-royal-navy">Skill Building</h3>
          <p className="text-sm text-royal-dark/80 leading-relaxed">
            Hands-on workshops, competitive programming contests, and real-world tech stacks designed to accelerate tech careers.
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-white/80 border border-beige-dark/50 shadow-sm flex flex-col">
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
  )
}
