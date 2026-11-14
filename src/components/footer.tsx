import { useNavigate } from "react-router-dom";
import ggscLogo from "../assets/icons/GGSC.png";

export default function Footer() {
  const navigate = useNavigate();

  const bannerText = "GGSC UEMK";

  // The 4 official Google brand colors (Blue, Red, Yellow, Green)
  const googleColors = ["#4285F4", "#EA4335", "#FBBC05", "#34A853"];

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "Team", path: "/team" },
    { name: "Gallery", path: "/gallery" },
    { name: "Reviews", path: "/reviews" },
    { name: "Contact", path: "/contact" },
  ];

  // Social channels directly from GGSC Cydropreneur event matching screenshot order & styling
  const socialLinks = [
    {
      name: "WhatsApp",
      href: "https://chat.whatsapp.com/ImdIqwRXTdcHxy0LirVSQQ",
      hoverBorder: "hover:border-[#25D366]/60 hover:text-[#25D366]",
      icon: (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/ggsc_uemk",
      hoverBorder: "hover:border-[#E1306C]/60 hover:text-[#E1306C]",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/ggsc-uemk",
      hoverBorder: "hover:border-[#0A66C2]/60 hover:text-[#0A66C2]",
      icon: (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/share/1Cd7Y97m99/",
      hoverBorder: "hover:border-[#1877F2]/60 hover:text-[#1877F2]",
      icon: (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
  ];

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string,
  ) => {
    e.preventDefault();
    navigate(path);
  };

  // Pre-calculate letter Google colors
  let colorCounter = 0;

  return (
    <footer className="w-full bg-gradient-to-b from-beige via-[#ECE8DF] to-[#E2DED4] text-royal-dark pt-24 sm:pt-32 pb-12 px-6 sm:px-10 lg:px-16 select-none">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Info */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 pb-6 sm:pb-8">
          {/* Brand Section (Spans 6 cols) */}
          <div className="md:col-span-6 flex flex-col items-start">
            <div className="flex items-center gap-3.5 mb-5">
              <img
                src={ggscLogo}
                alt="GGSC UEMK Logo"
                className="w-11 h-11 object-contain"
              />
              <div>
                <span className="text-2xl sm:text-3xl font-black tracking-wider text-royal-dark block leading-none">
                  GGSC UEMK
                </span>
                <span className="text-xs uppercase tracking-widest text-royal font-bold block mt-1.5">
                  Google Gemini Student Community
                </span>
              </div>
            </div>

            <p className="text-sm text-royal-dark/75 leading-relaxed max-w-md mb-6">
              Empowering student developers and creators at the University of
              Engineering & Management, Kolkata through hands-on AI workshops,
              hackathons, and collaborative open-source projects.
            </p>

            <span className="text-xs text-royal-dark/60 font-medium">
              University of Engineering & Management, Kolkata · West Bengal,
              India
            </span>
          </div>

          {/* Quick Navigation (Spans 3 cols) */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-royal-navy mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    onClick={(e) => handleLinkClick(e, link.path)}
                    className="text-royal-dark/70 hover:text-royal hover:translate-x-0.5 inline-block transition-all duration-150 cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Social Squircles (Spans 3 cols) */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-royal-navy mb-4">
              Socials
            </h4>

            {/* 4 Squircle Buttons (matching uploaded screenshot style) */}
            <div className="flex items-center gap-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                  className={`w-11 h-11 rounded-2xl bg-white/60 border border-beige-dark/90 flex items-center justify-center text-royal-dark/80 hover:bg-white hover:scale-105 active:scale-95 transition-all duration-200 shadow-sm ${social.hoverBorder}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="text-xs text-royal-dark/70 space-y-1">
              <span className="block text-royal-dark/50 uppercase tracking-wider text-[10px] font-semibold">
                Get in Touch
              </span>
              <a
                href="mailto:ggscuemk@gmail.com"
                className="text-sm font-medium text-royal hover:underline block"
              >
                ggscuemk@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* 
            Interactive Typography Watermark ("GGSC UEMK"):
            - Balanced spacing directly below the footer columns
            - Each letter animates to an official Google Color on hover (Blue, Red, Yellow, Green)
            - Moves up slightly on PC only
          */}
        <div className="pt-2 sm:pt-4 pb-10 sm:pb-14 flex justify-center items-center overflow-hidden">
          <h2
            className="font-black text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] xl:text-[13rem] tracking-tight text-beige-dark/80 flex flex-wrap justify-center items-center text-center cursor-default leading-none"
            aria-label={bannerText}
          >
            {bannerText.split("").map((char, index) => {
              if (char === " ") {
                return (
                  <span
                    key={index}
                    className="inline-block w-6 sm:w-10 md:w-16"
                  >
                    &nbsp;
                  </span>
                );
              }

              const color = googleColors[colorCounter % googleColors.length];
              colorCounter++;

              return (
                <span
                  key={index}
                  className="footer-letter"
                  style={{ "--hover-color": color } as React.CSSProperties}
                >
                  {char}
                </span>
              );
            })}
          </h2>
        </div>

        {/* Bottom Sub-Footer: Minimal & Refined */}
        <div className="pt-6 border-t border-beige-dark/40 flex flex-col sm:flex-row items-center justify-between text-xs text-royal-dark/60 gap-4">
          <p>© 2026 GGSC UEMK. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-royal transition cursor-pointer">
              Code of Conduct
            </span>
            <span className="hover:text-royal transition cursor-pointer">
              Privacy
            </span>
            <span className="hover:text-royal transition cursor-pointer">
              Terms
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
