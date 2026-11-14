import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="w-full min-h-screen bg-beige text-royal-dark flex flex-col justify-center items-center px-6 py-16 relative"
    >
      <div className="max-w-4xl text-center flex flex-col items-center my-auto">
        <span className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/80 border border-beige-dark/60 text-royal-navy mb-6 shadow-xs">
          Official Google Gemini Student Community
        </span>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight mb-6 text-royal-dark">
          Innovate, Code & Conquer with{" "}
          <span className="text-royal underline decoration-royal-accent">
            GGSC UEMK
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-royal-dark/80 max-w-2xl mb-8">
          Empowering passionate tech enthusiasts and developers at University of
          Engineering & Management, Kolkata to build tomorrow&apos;s technology.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => navigate("/events")}
            className="px-6 py-3 rounded-lg font-semibold bg-royal text-beige hover:bg-royal-navy transition shadow-md cursor-pointer"
          >
            Explore Events
          </button>
          <button
            onClick={() => navigate("/about")}
            className="px-6 py-3 rounded-lg font-semibold border border-royal/30 text-royal hover:bg-beige-muted transition cursor-pointer"
          >
            Learn More
          </button>
        </div>
      </div>

      <button
        onClick={() => navigate("/about")}
        className="absolute bottom-8 text-xs text-royal-dark/60 uppercase tracking-widest animate-bounce hover:text-royal transition cursor-pointer"
      >
        Scroll Down ↓
      </button>
    </section>
  );
}
