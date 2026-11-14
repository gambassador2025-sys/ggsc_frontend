export default function Team() {
  const roles = [
    "Community Lead",
    "Technical Lead",
    "Event Lead",
    "Design & PR Lead",
  ];

  return (
    <section
      id="team"
      className="w-full min-h-screen bg-beige text-royal-dark flex flex-col justify-between items-center px-6 py-12"
    >
      <div className="text-center pt-2">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-wider uppercase text-royal-dark">
          Our Team
        </h2>
        <div className="w-16 h-1 bg-royal mx-auto mt-2 rounded-full" />
      </div>

      <div className="max-w-4xl w-full grid sm:grid-cols-2 md:grid-cols-4 gap-6 my-auto">
        {roles.map((role, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-white/90 border border-beige-dark/50 text-center shadow-sm"
          >
            <div className="w-20 h-20 mx-auto rounded-full bg-royal text-beige flex items-center justify-center font-bold text-lg mb-4 shadow-xs">
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
  );
}
