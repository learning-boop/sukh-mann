import { useEffect, useRef } from "react";
import Reveal from "../components/Reveal.jsx";
import PortraitCard from "../components/PortraitCard.jsx";
import { Seo } from "../components/Page.jsx";
import { PHONE, TEL, timeline } from "../data/site.js";

const stats = [
  { n: "2007", label: "In practice since" },
  { n: "2-in-1", label: "Chiropractor + RMT" },
  { n: "10", label: "Professional bodies" },
];

/* Full-bleed photo hero: image eases in, then drifts slower than the page (parallax). */
function PhotoHero() {
  const layer = useRef(null);
  useEffect(() => {
    const el = layer.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      el.style.transform = `translate3d(0, ${(window.scrollY * 0.35).toFixed(1)}px, 0)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section className="relative min-h-[92svh] md:min-h-screen flex items-end overflow-hidden bg-[#0B0B0F] text-white">
      <div ref={layer} className="absolute inset-0 md:left-[22%] will-change-transform">
        <img
          src="/images/dr-sukh-clinic.jpg"
          alt="Dr. Sukh Mann standing in his clinic"
          fetchpriority="high"
          className="hero-photo absolute inset-0 w-full h-full object-cover object-[50%_15%] md:object-[50%_30%]"
        />
      </div>
      {/* Readability overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F] via-[#0B0B0F]/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0F] from-25% via-[#0B0B0F]/40 via-50% to-transparent hidden md:block" />

      <div className="relative w-full max-w-6xl mx-auto px-6 pb-14 md:pb-24 pt-[58svh] md:pt-40">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 px-4 py-1.5 text-[#6EB4FF] text-xs md:text-sm font-semibold tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-[#6EB4FF] animate-pulse" />
            Meet the doctor
          </p>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="font-display font-semibold tracking-tight leading-[1.02] text-[clamp(2.6rem,7.5vw,5.6rem)] mt-5 max-w-3xl">
            Dr. Sukh Mann, <span className="text-shimmer">Chiropractor.</span>
          </h1>
        </Reveal>
        <Reveal delay={240}>
          <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed max-w-xl">
            BSc, RMT, DC. He has cared for Olympians and pro teams. He will care for you the same way.
          </p>
        </Reveal>
        <Reveal delay={360}>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={TEL}
              className="inline-flex items-center bg-[#0071E3] hover:bg-[#0077ED] text-white font-medium px-8 py-3.5 rounded-full shadow-[0_10px_30px_rgba(0,113,227,0.45)] transition-all hover:-translate-y-0.5"
            >
              Call {PHONE}
            </a>
            <a
              href="#story"
              className="inline-flex items-center bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-medium px-8 py-3.5 rounded-full transition-colors"
            >
              His story ↓
            </a>
          </div>
        </Reveal>
        <Reveal delay={480}>
          <dl className="mt-12 grid grid-cols-3 gap-3 max-w-xl">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl bg-white/[0.06] backdrop-blur-md border border-white/10 px-4 py-4"
              >
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display font-semibold text-2xl md:text-3xl">{s.n}</dd>
                <dd className="text-xs md:text-sm text-gray-400 mt-1">{s.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

export default function DrSukh() {
  return (
    <main>
      <Seo
        title="Dr. Sukh Mann BSc, RMT, DC | Sports Injury Chiropractor Surrey"
        description="Dr. Sukh Mann is a chiropractor and registered massage therapist who has worked with the BC Lions, Rowing Canada, and at the Olympic Games."
      />
      <PhotoHero />

      {/* Photo + intro */}
      <section id="story" className="py-20 md:py-28 bg-[#0B0B0F] text-white -mt-px overflow-hidden scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <Reveal>
            <PortraitCard
              src="/images/dr-sukh-portrait.jpg"
              alt="Close-up of Dr. Sukh Mann smiling"
              badges={[
                { icon: "🩺", title: "Chiropractor", sub: "Doctor of Chiropractic" },
                { icon: "💪", title: "Massage Therapist", sub: "Registered RMT" },
              ]}
            />
          </Reveal>
          <div>
            <Reveal>
              <h2 className="font-display font-semibold text-[clamp(1.9rem,4vw,3rem)] leading-tight">
                Two skills. One doctor.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 text-gray-300 text-lg leading-relaxed">
                Dr. Sukh is a chiropractor and a registered massage therapist. Because he knows both,
                every treatment can mix joint care and muscle care. You get the best of both worlds
                in one visit.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <p className="mt-4 text-gray-300 text-lg leading-relaxed">
                Patients say he listens well, takes his time, and puts you at ease with his calm,
                caring manner.
              </p>
            </Reveal>
            <Reveal delay={340}>
              <p className="mt-4 text-gray-400 leading-relaxed">
                He belongs to ten professional bodies, including the Canadian Chiropractic
                Association, the College of Massage Therapists of BC, the Royal College of
                Chiropractic Sports Sciences (Canada), and SportMed BC.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <Reveal>
            <h2 className="font-display font-semibold text-[clamp(2rem,4.5vw,3.4rem)] text-center">
              His journey.
            </h2>
          </Reveal>
          <div className="mt-16 relative">
            <div className="absolute left-[7px] md:left-1/2 md:-translate-x-px top-2 bottom-2 w-0.5 bg-gray-200" />
            <ul className="space-y-12">
              {timeline.map((t, i) => (
                <Reveal key={t.title} delay={80}>
                  <li className="relative md:grid md:grid-cols-2 md:gap-12">
                    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-1.5 w-4 h-4 rounded-full bg-[#0071E3] ring-4 ring-white" />
                    <div
                      className={`pl-10 md:pl-0 ${
                        i % 2 === 0 ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"
                      }`}
                    >
                      <p className="text-[#0071E3] text-sm font-semibold tracking-widest uppercase">
                        {t.year}
                      </p>
                      <h3 className="font-display font-semibold text-xl mt-2">{t.title}</h3>
                      <p className="text-gray-500 mt-2 leading-relaxed">{t.text}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 md:pb-28 px-6">
        <Reveal>
          <div className="max-w-6xl mx-auto rounded-3xl bg-[#0071E3] text-white p-10 md:p-16 text-center shadow-[0_20px_60px_rgba(0,113,227,0.35)]">
            <h2 className="font-display font-semibold text-[clamp(1.9rem,4.5vw,3.2rem)]">
              Ready to meet Dr. Sukh?
            </h2>
            <p className="mt-4 text-lg text-blue-100 max-w-md mx-auto">
              Call today. Same-day visits are often possible.
            </p>
            <a
              href={TEL}
              className="inline-block mt-8 bg-white text-[#0071E3] font-medium px-9 py-3.5 rounded-full hover:bg-blue-50 transition-colors"
            >
              Call {PHONE}
            </a>
          </div>
        </Reveal>
      </section>
    </main>
  );
}