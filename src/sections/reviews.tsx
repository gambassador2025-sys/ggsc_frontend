export default function Reviews() {
  const testimonials = [
    {
      review:
        "GGSC UEMK helped me crack my first coding contest with high-quality workshops.",
      author: "Computer Science Student",
    },
    {
      review:
        "The hackathons and peer mentoring provided the best real-world project experience.",
      author: "Hackathon Finalist",
    },
    {
      review:
        "An incredible tech community that fosters leadership, teamwork, and innovation.",
      author: "Community Alumnus",
    },
  ];

  return (
    <section
      id="reviews"
      className="w-full min-h-screen bg-beige text-royal-dark flex flex-col justify-between items-center px-6 py-12"
    >
      <div className="text-center pt-2">
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-wider uppercase text-royal-dark">
          Reviews
        </h2>
        <div className="w-24 h-1.5 bg-royal mx-auto mt-3 rounded-full" />
      </div>

      <div className="max-w-4xl w-full grid md:grid-cols-3 gap-6 my-auto">
        {testimonials.map((item, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-white/90 border border-beige-dark/50 shadow-sm flex flex-col justify-between"
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
  );
}
