import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { PHONE, TEL } from "../data/site.js";
import Icon from "./Icon.jsx";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Dr. Sukh", to: "/dr-sukh-mann" },
  { label: "Care", to: "/care" },
  { label: "New Patients", to: "/new-patients" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const bar = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      setScrolled(y > 24);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (bar.current) bar.current.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-[#0B0B0F]/75 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
          : "bg-gradient-to-b from-black/50 to-transparent border-b border-transparent"
      }`}
    >
      <nav
        className={`max-w-6xl mx-auto flex items-center justify-between px-5 transition-[height] duration-500 ${
          solid ? "h-16" : "h-20"
        }`}
      >
        <Link to="/" className="group flex items-center gap-3">
          <img
            src="/images/logo-mark.png"
            alt=""
            className="h-9 w-auto rounded-md transition-transform duration-500 group-hover:scale-105"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
          <span className="font-display text-lg font-semibold tracking-wide text-white uppercase leading-none">
            Dr. Sukh Mann
            <span className="block text-gray-400 font-normal text-[10px] tracking-[0.25em] mt-1 uppercase">
              Chiropractor
            </span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.label}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `relative text-[13px] px-3.5 py-2 rounded-full transition-colors ${
                  isActive
                    ? "text-white bg-white/10"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <a href={TEL} className="btn-primary ml-3 text-[13px] px-5 py-2">
            <Icon name="phone" className="w-3.5 h-3.5" />
            Call Now
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="md:hidden w-11 h-11 flex items-center justify-center text-white rounded-full hover:bg-white/10 transition-colors"
        >
          <Icon name={open ? "close" : "menu"} className="w-6 h-6" />
        </button>
      </nav>

      {open && (
        <div className="menu-in md:hidden bg-[#0B0B0F]/95 backdrop-blur-xl border-t border-white/10 px-5 pt-3 pb-6">
          {links.map((l) => (
            <NavLink
              key={l.label}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `flex items-center justify-between text-base py-3.5 border-b border-white/5 ${
                  isActive ? "text-white font-medium" : "text-gray-300"
                }`
              }
            >
              {l.label}
              <Icon name="arrow" className="w-4 h-4 text-gray-500" />
            </NavLink>
          ))}
          <a href={TEL} className="btn-primary w-full mt-5 py-3.5 text-base">
            <Icon name="phone" className="w-4 h-4" />
            Call {PHONE}
          </a>
        </div>
      )}

      {/* Scroll progress */}
      <div className="absolute left-0 right-0 bottom-0 h-[2px] overflow-hidden pointer-events-none">
        <div ref={bar} className="scroll-progress h-full w-full" style={{ transform: "scaleX(0)" }} />
      </div>
    </header>
  );
}
