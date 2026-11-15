import { useNavigate } from "react-router-dom";
import homeAboutDivider from "../assets/section_divider/Home_About_section_divider-pc.png";

export default function Home() {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="w-full min-h-screen relative overflow-hidden flex flex-col justify-between items-center text-white bg-[#02066F]"
    >
      {/* Upper 70% video container with dark Navy blue #02066F background */}
      <div className="absolute top-0 left-0 w-full h-[70%] overflow-hidden -z-10 bg-[#02066F]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-90"
        >
          {/* Video source placeholder: replace or populate with home_page_video */}
          <source src="/home_page_video.mp4" type="video/mp4" />
        </video>
        {/* Soft vignette overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#02066F]/50 via-transparent to-[#02066F]/80" />
      </div>

      {/* Hero content aligned in the upper video area */}
      <div className="max-w-4xl text-center flex flex-col items-center pt-28 sm:pt-36 px-6 z-10">
        <span className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-md border border-white/20 text-white/90 mb-6 shadow-sm">
          Official Google Gemini Student Community
        </span>

        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 drop-shadow-md">
          Shaping the Future with Gemini
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-white/85 max-w-2xl mb-10 leading-relaxed font-light">
          Bringing together passionate minds to transform bold ideas into meaningful solutions. Empowering developers at UEM Kolkata to innovate and build tomorrow.
        </p>

        {/* Pill-shaped CTA buttons */}
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <button
            onClick={() => navigate("/events")}
            className="px-8 py-3 rounded-full font-semibold bg-white text-royal-dark hover:bg-white/90 transition shadow-lg text-sm tracking-wide cursor-pointer"
          >
            Explore Events
          </button>
          <button
            onClick={() => navigate("/about")}
            className="px-8 py-3 rounded-full font-semibold border border-white/40 text-white hover:bg-white/10 backdrop-blur-xs transition text-sm tracking-wide cursor-pointer"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Lower section divider asset shifted upwards with parabolic beige curve cut */}
      <div className="w-full relative z-10 -mt-24 sm:-mt-36 md:-mt-52 lg:-mt-66 translate-y-44 sm:translate-y-0 select-none pointer-events-none">
        {/* Parabolic beige cut aligned with the section divider curve */}
        <svg
          viewBox="0 0 2172 724"
          className="w-full h-full absolute inset-0 -z-10"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,220 Q 1086,760 2172,220 L 2172,724 L 0,724 Z"
            fill="#F5F2EB"
          />
        </svg>

        <img
          src={homeAboutDivider}
          alt="Home to About Section Divider"
          className="w-full h-auto object-cover object-bottom"
        />
      </div>

      {/* Area below the section divider with solid beige colour */}
      <div className="w-full bg-beige h-52 sm:h-32 md:h-48 -mt-1" />
    </section>
  );
}
