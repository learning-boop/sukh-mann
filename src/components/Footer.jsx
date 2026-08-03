import Reveal from "./Reveal.jsx";
import { PHONE, TEL, MAPS_URL, hours } from "../data/site.js";

export default function Footer() {
  return (
    <footer className="bg-[#0B0B0F] text-white pt-20 md:pt-28 pb-28 md:pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <h2 className="font-display font-semibold text-[clamp(2.6rem,7vw,5.5rem)] text-center leading-none">
            Feel better soon.
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <div className="text-center mt-8">
            <a
              href={TEL}
              className="inline-block bg-[#0071E3] hover:bg-[#0077ED] transition-colors text-white font-medium px-10 py-4 rounded-full text-lg"
            >
              Call {PHONE}
            </a>
          </div>
        </Reveal>

        <div className="mt-20 grid md:grid-cols-3 gap-12 border-t border-white/10 pt-12">
          <div>
            <h3 className="font-display font-semibold text-lg">Visit us</h3>
            <p className="text-gray-400 mt-3 leading-relaxed">
              202 – 10190 152A Street
              <br />
              Surrey, BC V3R 1J7
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-3 text-[#6EB4FF] text-sm hover:underline"
            >
              Get directions →
            </a>
            <div className="flex gap-4 mt-5 text-sm">
              <a
                href="https://www.facebook.com/DrSukhMann/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Facebook
              </a>
              <a
                href="https://www.linkedin.com/in/sukh-mann-6425b57/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-display font-semibold text-lg">Hours</h3>
            <ul className="mt-3 space-y-1.5">
              {hours.map(([d, h]) => (
                <li key={d} className="flex justify-between text-sm text-gray-400 max-w-[260px]">
                  <span>{d}</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display font-semibold text-lg">Dr. Sukh Mann, Chiropractor</h3>
            <p className="text-gray-400 mt-3 text-sm leading-relaxed">
              BSc, RMT, DC. Chiropractic care, massage therapy, and rehab. All in one place, in
              Surrey.
            </p>
            <p className="text-gray-600 mt-6 text-xs">
              © {new Date().getFullYear()} Dr. Sukh Mann. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
