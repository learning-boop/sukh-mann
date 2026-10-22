import { Link, useLocation } from "react-router-dom";
import Curve from "./Curve.jsx";
import Icon from "./Icon.jsx";
import { PHONE, TEL, EMAIL, MAPS_URL, hours } from "../data/site.js";

// Colour of the last section on each page, where it is light (dark endings get a plain divider)
const LIGHT_ENDING = { "/": "#f9fafb", "/contact": "#fff", "/dr-sukh-mann": "#fff" };

const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const pages = [
  { label: "About", to: "/about" },
  { label: "Dr. Sukh", to: "/dr-sukh-mann" },
  { label: "Care", to: "/care" },
  { label: "New Patients", to: "/new-patients" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  const today = DAYS[new Date().getDay()];
  const above = LIGHT_ENDING[useLocation().pathname];

  return (
    <footer
      className={`relative overflow-hidden bg-[#0B0B0F] text-white pb-32 md:pb-12 ${
        above ? "pt-24 md:pt-32" : "border-t border-white/10 pt-16 md:pt-20"
      }`}
    >
      {above && <Curve position="top" fill={above} />}
      <div className="aurora opacity-80" />

      <div className="relative max-w-6xl mx-auto px-6">

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo-mark.png"
                alt=""
                className="h-10 w-auto rounded-md"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
              <p className="font-display font-semibold uppercase tracking-wide leading-none">
                Dr. Sukh Mann
                <span className="block text-gray-400 font-normal text-[10px] tracking-[0.25em] mt-1">
                  BSc, RMT, DC
                </span>
              </p>
            </div>
            <p className="text-gray-400 mt-5 text-sm leading-relaxed">
              Chiropractic care, massage therapy, and rehab. All in one place, in Surrey.
            </p>
            <div className="flex gap-2 mt-5">
              {[
                ["Facebook", "https://www.facebook.com/DrSukhMann/"],
                ["LinkedIn", "https://www.linkedin.com/in/sukh-mann-6425b57/"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-gray-300 border border-white/10 rounded-full px-4 py-1.5 hover:border-[#6EB4FF]/60 hover:text-white transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg">Explore</h3>
            <ul className="mt-4 space-y-2.5">
              {pages.map((p) => (
                <li key={p.to}>
                  <Link
                    to={p.to}
                    className="group inline-flex items-center text-gray-400 hover:text-white transition-colors"
                  >
                    <span className="w-0 mr-0 group-hover:w-3 group-hover:mr-2 h-px bg-[#6EB4FF] transition-all duration-300" />
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg">Visit us</h3>
            <ul className="mt-4 space-y-4 text-gray-400">
              <li className="flex gap-3">
                <Icon name="pin" className="w-5 h-5 text-[#6EB4FF] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  202 – 10190 152A Street
                  <br />
                  Surrey, BC V3R 1J7
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="block mt-1 text-[#6EB4FF] text-sm hover:underline"
                  >
                    Get directions →
                  </a>
                </span>
              </li>
              <li>
                <a href={TEL} className="flex gap-3 hover:text-white transition-colors">
                  <Icon name="phone" className="w-5 h-5 text-[#6EB4FF] shrink-0" />
                  {PHONE}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="flex gap-3 hover:text-white transition-colors">
                  <Icon name="mail" className="w-5 h-5 text-[#6EB4FF] shrink-0" />
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg flex items-center gap-2">
              <Icon name="clock" className="w-5 h-5 text-[#6EB4FF]" />
              Hours
            </h3>
            <ul className="mt-4 space-y-1">
              {hours.map(([d, h]) => (
                <li
                  key={d}
                  className={`flex justify-between text-sm rounded-lg px-3 py-1.5 -mx-3 ${
                    d === today ? "bg-[#0071E3]/15 text-white font-medium" : "text-gray-400"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {d}
                    {d === today && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6EB4FF]" title="Today" />
                    )}
                  </span>
                  <span className="whitespace-nowrap">{h}</span>
                </li>
              ))}
              <li
                className={`flex justify-between text-sm rounded-lg px-3 py-1.5 -mx-3 ${
                  today === "Sunday" ? "bg-white/5 text-white" : "text-gray-500"
                }`}
              >
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Dr. Sukh Mann. All rights reserved.</p>
          <p>Proudly serving Surrey and nearby communities.</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            Back to top
            <span className="grid place-items-center w-8 h-8 rounded-full border border-white/15">
              <Icon name="arrowUp" className="w-4 h-4" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
