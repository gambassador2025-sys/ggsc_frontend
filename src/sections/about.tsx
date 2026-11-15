import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import aboutDesign from "../assets/section_divider/About_design.png";
import ggscLogo from "../assets/icons/GGSC.png";
import aboutEventDivider from "../assets/section_divider/About_Event_section_divider_pc.png";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!headingRef.current || !paragraphRef.current) return;

    const splitHeading = new SplitType(headingRef.current, { types: "words,chars" });
    const splitParagraph = new SplitType(paragraphRef.current, { types: "words,chars" });

    const ctx = gsap.context(() => {
      if (splitHeading.chars) {
        gsap.from(splitHeading.chars, {
          opacity: 0,
          y: 25,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            end: "top 55%",
            scrub: true,
          },
        });
      }

      if (splitParagraph.chars) {
        gsap.fromTo(
          splitParagraph.chars,
          { opacity: 0.15 },
          {
            opacity: 1,
            stagger: 0.02,
            ease: "none",
            scrollTrigger: {
              trigger: paragraphRef.current,
              start: "top 80%",
              end: "top 40%",
              scrub: true,
            },
          }
        );
      }
    });

    return () => {
      ctx.revert();
      splitHeading.revert();
      splitParagraph.revert();
    };
  }, []);

  return (
    <section
      id="about"
      className="w-full min-h-screen bg-beige text-royal-dark relative z-20 flex flex-col justify-start items-center pt-0 sm:pt-10 pb-0 max-w-full"
    >
      {/* Content wrapper with kinetic marquee framing */}
      <div className="w-full relative flex flex-col items-center px-6 pb-8 sm:pb-12 -translate-y-12 sm:translate-y-0">
        {/* High-visibility continuous horizontal marquee banners */}
        <div className="absolute inset-x-0 top-0 bottom-0 pointer-events-none select-none z-10 flex flex-col justify-between w-full max-w-full">
        {/* Top Row: Shifted upwards, 100% unmasked with FoglihtenNo07 */}
        <div className="overflow-hidden w-full max-w-full -translate-y-16 sm:-translate-y-24 md:-translate-y-32 lg:-translate-y-40">
          <div className="animate-marquee-continuous font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-wider whitespace-nowrap opacity-100">
            {[0, 1].map((copyIdx) => (
              <div
                key={copyIdx}
                className="flex items-center gap-4 sm:gap-8 pr-4 sm:pr-8"
                aria-hidden={copyIdx === 1}
              >
                <span className="text-[#02066F]">LEARN</span>
                <span className="text-[#D4AF37]">▪</span>
                <span className="text-[#D4AF37]">CREATE</span>
                <span className="text-[#D4AF37]">▪</span>
                <span className="text-[#850101]">LEAD</span>
                <span className="text-[#D4AF37]">▪</span>
                <span className="text-[#D4AF37]">INSPIRE</span>
                <span className="text-[#D4AF37]">▪</span>
                <span className="text-[#02066F]">BUILD</span>
                <span className="text-[#D4AF37]">▪</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row: Inside visible viewport bounds, 100% unmasked with FoglihtenNo07 */}
        <div className="overflow-hidden w-full max-w-full py-2 translate-y-12 sm:translate-y-16 md:translate-y-20">
          <div className="animate-marquee-continuous-reverse font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-wider whitespace-nowrap opacity-100">
            {[0, 1].map((copyIdx) => (
              <div
                key={copyIdx}
                className="flex items-center gap-4 sm:gap-8 pr-4 sm:pr-8"
                aria-hidden={copyIdx === 1}
              >
                <span className="text-[#02066F]">DESIGN</span>
                <span className="text-[#D4AF37]">▪</span>
                <span className="text-[#D4AF37]">CODE</span>
                <span className="text-[#D4AF37]">▪</span>
                <span className="text-[#850101]">GEMINI</span>
                <span className="text-[#D4AF37]">▪</span>
                <span className="text-[#D4AF37]">AI</span>
                <span className="text-[#D4AF37]">▪</span>
                <span className="text-[#02066F]">INNOVATE</span>
                <span className="text-[#D4AF37]">▪</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top section: Ornamental flourish (fully unmasked, highest priority z-30) */}
      <div className="max-w-4xl w-full text-center flex flex-col items-center relative z-30 -mt-12 sm:-mt-20 md:-mt-28 lg:-mt-36">
        <img
          src={aboutDesign}
          alt="Ornamental Flourish"
          className="w-64 sm:w-80 md:w-[400px] lg:w-[460px] h-auto opacity-100 mb-1 sm:mb-2 select-none pointer-events-none drop-shadow-xs"
        />

        <h2
          ref={headingRef}
          className="hero-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-royal-dark -mt-3 sm:-mt-5 md:-mt-6 mb-4"
        >
          The next generation of AI builders starts here.
        </h2>

        <p
          ref={paragraphRef}
          className="hero-description max-w-3xl text-base sm:text-lg md:text-xl text-royal-dark/85 leading-relaxed font-light mx-auto"
        >
          GGSC is the official Google Gemini Student Community at UEM Kolkata — part of the Google Student Ambassador Program. We unite students across engineering, design, and research into a unified AI-learning community.
        </p>
      </div>

      {/* Community Spotlight & Metrics Card (Silver-Toned Translucent Glass with Hover Sheen) */}
      <div className="group max-w-2xl w-full mt-8 mb-8 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white/60 via-slate-100/35 to-slate-200/25 hover:from-white/75 hover:via-slate-100/50 hover:to-slate-200/40 backdrop-blur-xl border border-white/80 hover:border-white shadow-[0_8px_32px_0_rgba(148,163,184,0.25),inset_0_1px_2px_rgba(255,255,255,0.95)] hover:shadow-[0_20px_48px_0_rgba(180,195,215,0.45),inset_0_1px_3px_rgba(255,255,255,1)] hover:-translate-y-1 transition-all duration-500 ease-out text-center relative z-20 overflow-hidden cursor-default">
        {/* Silver Shimmer Beam on Hover */}
        <div className="absolute inset-0 -translate-x-[120%] group-hover:translate-x-[120%] transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />

        {/* Ambient Silver Corner Glow */}
        <div className="absolute -top-10 -right-10 w-28 h-28 bg-gradient-to-br from-white via-slate-200/50 to-transparent rounded-full blur-xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />

        {/* GGSC Community Logo */}
        <div className="flex items-center justify-center mb-4">
          <img
            src={ggscLogo}
            alt="GGSC Logo"
            className="w-12 h-12 sm:w-14 sm:h-14 object-contain drop-shadow-sm select-none pointer-events-none"
          />
        </div>

        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight mb-3">
          <span className="text-[#02066F] block">ONE COMMUNITY.</span>
          <span className="text-[#D4AF37] block">INFINITE POTENTIAL.</span>
        </h3>

        <p className="text-sm sm:text-base text-royal-dark/75 max-w-lg mx-auto mb-6 leading-relaxed">
          GGSC unites the builders, researchers, designers and dreamers of UEM Kolkata — all powered by Google Gemini.
        </p>

        {/* Key Community Metrics */}
        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-300/40">
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#4285F4]">
              200+
            </div>
            <div className="text-xs uppercase tracking-wider font-semibold text-royal-dark/60 mt-1">
              Members
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#EA4335]">
              12+
            </div>
            <div className="text-xs uppercase tracking-wider font-semibold text-royal-dark/60 mt-1">
              Events
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#FBBC05]">
              3
            </div>
            <div className="text-xs uppercase tracking-wider font-semibold text-royal-dark/60 mt-1">
              Awards
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* Section Divider between About and Events */}
      <div className="w-full relative z-20 select-none pointer-events-none -mt-6 sm:-mt-10 md:-mt-16 overflow-hidden">
        <img
          src={aboutEventDivider}
          alt="About to Events Section Divider"
          className="w-full h-auto object-cover object-bottom"
        />
      </div>
    </section>
  );
}
