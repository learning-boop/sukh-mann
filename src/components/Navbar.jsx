import { useState } from "react";
import { Link } from "react-router-dom";
import { PHONE, TEL } from "../data/site.js";

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

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-black/60 border-b border-white/10">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-5 h-16">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/images/logo-mark.png"
            alt=""
            className="h-9 w-auto"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
          <span className="font-display text-lg font-semibold tracking-wide text-white uppercase leading-none">
            Dr. Sukh Mann
            <span className="block text-gray-400 font-normal text-[10px] normal-case tracking-[0.25em] mt-1 uppercase">
              Chiropractor
            </span>
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className="text-[13px] text-gray-300 hover:text-white transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={TEL}
            className="text-[13px] font-medium bg-white text-black px-4 py-1.5 rounded-full hover:bg-gray-200 transition-colors"
          >
            Call Now
          </a>
        </div>
        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          className="md:hidden w-11 h-11 flex items-center justify-center text-white text-xl"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>
      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur-xl border-b border-white/10 px-6 py-4 space-y-3">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block text-gray-200 text-base py-1"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
