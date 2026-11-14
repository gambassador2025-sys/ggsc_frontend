export default function Contact() {
  const socialPlatforms = ["LinkedIn", "GitHub", "Instagram", "Discord"];

  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-beige text-royal-dark flex flex-col justify-between items-center px-6 py-12"
    >
      <div className="text-center pt-2">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-wider uppercase text-royal-dark">
          Contact Us
        </h2>
        <div className="w-16 h-1 bg-royal mx-auto mt-2 rounded-full" />
      </div>

      <div className="max-w-3xl w-full p-8 rounded-2xl bg-white/90 border border-beige-dark/50 shadow-md text-center my-auto">
        <h3 className="text-2xl font-bold mb-3 text-royal-navy">
          Connect with GGSC UEMK
        </h3>
        <p className="text-sm text-royal-dark/75 mb-6 max-w-lg mx-auto">
          Have queries, partnership proposals, or want to collaborate with our
          student community? Reach out to us.
        </p>

        <div className="space-y-3 text-sm text-royal-dark/90 mb-8">
          <p>
            <span className="font-semibold text-royal-navy">Campus:</span>{" "}
            University of Engineering & Management (UEM), Kolkata
          </p>
          <p>
            <span className="font-semibold text-royal-navy">Email:</span>{" "}
            ggscuemk@gmail.com
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {socialPlatforms.map((platform) => (
            <span
              key={platform}
              className="px-4 py-2 rounded-lg bg-royal text-xs font-semibold uppercase tracking-wider text-beige border border-royal/20 cursor-pointer hover:bg-royal-navy transition shadow-sm"
            >
              {platform}
            </span>
          ))}
        </div>
      </div>

      <div className="text-xs text-royal-dark/60 uppercase tracking-wider">
        We are always excited to collaborate
      </div>
    </section>
  );
}
