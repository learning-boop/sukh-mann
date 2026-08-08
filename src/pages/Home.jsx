import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import { PHONE, TEL, painCards, steps, featuredServices, testimonials } from "../data/site.js";
import heroImg from "../assets/hero-athlete.jpg";


/* Scroll parallax: image drifts horizontally as the card moves through the viewport.
   direction: 1 = left-to-right, -1 = right-to-left. Disabled for reduced motion. */
function ParallaxImg({ src, alt, direction = 1 }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(-1, (r.top + r.height / 2 - vh / 2) / (vh / 2 + r.height / 2)));
      el.style.transform = `translateX(${(-p * 28 * direction).toFixed(1)}px) scale(1.15)`;
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
  }, [direction]);
  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      loading="lazy"
      onError={(e) => (e.currentTarget.style.display = "none")}
      className="w-full h-full object-cover will-change-transform"
      style={{ transform: "scale(1.15)" }}
    />
  );
}


/* Expanding image accordion: hovered/tapped panel grows, others compress */
function ServicesAccordion() {
  const [active, setActive] = useState(0);
  return (
    <section className="py-20 md:py-32 bg-[#0B0B0F] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-[#6EB4FF] text-sm font-semibold tracking-widest uppercase">Our care</p>
            <h2 className="font-display font-semibold text-[clamp(2.2rem,5vw,3.8rem)] mt-3 leading-tight">
              Many ways to help.
              <br />
              <span className="text-gray-400">One plan for you.</span>
            </h2>
          </div>
          <Link
            to="/care"
            className="hidden md:inline-flex items-center gap-2 text-[#6EB4FF] font-medium hover:underline whitespace-nowrap pb-2"
          >
            All services &rarr;
          </Link>
        </div>

        <div className="mt-12 flex flex-col md:flex-row gap-3 h-[560px] md:h-[520px]">
          {featuredServices.map((s, i) => {
            const isActive = active === i;
            return (
              <div
                key={s.title}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                className="relative overflow-hidden rounded-3xl cursor-pointer bg-[#101318] transition-[flex-grow] duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
                style={{ flexGrow: isActive ? 5 : 1, flexBasis: 0 }}
              >
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div
                  className={`absolute inset-0 transition-colors duration-700 ${
                    isActive
                      ? "bg-gradient-to-t from-black/85 via-black/20 to-transparent"
                      : "bg-black/55"
                  }`}
                />

                {/* Collapsed label */}
                <div
                  className={`absolute inset-0 flex items-end md:items-end justify-start p-5 transition-opacity duration-500 ${
                    isActive ? "opacity-0 pointer-events-none" : "opacity-100"
                  }`}
                >
                  <span className="flex items-center gap-3 md:[writing-mode:vertical-rl] md:rotate-180">
                    <span className="text-white/40 font-display font-semibold text-sm">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display font-semibold text-white text-base md:text-lg whitespace-nowrap">
                      {s.title}
                    </span>
                  </span>
                </div>

                {/* Expanded content */}
                <div
                  className={`absolute inset-x-0 bottom-0 p-6 md:p-8 transition-all duration-500 delay-200 ${
                    isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                  }`}
                >
                  <p className="text-[#6EB4FF] font-display font-semibold text-sm">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-display font-semibold text-2xl md:text-3xl mt-1 whitespace-nowrap">
                    {s.title}
                  </h3>
                  <p className="text-gray-300 mt-2 leading-relaxed max-w-sm text-[15px] md:text-base">
                    {s.line}
                  </p>
                  <Link
                    to="/care"
                    onClick={(e) => e.stopPropagation()}
                    className="mt-5 inline-flex items-center gap-2 bg-white text-black text-sm font-medium px-6 py-2.5 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    Learn more <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/care"
            className="inline-flex items-center gap-2 border border-white/25 hover:border-white/70 transition-colors text-white font-medium px-8 py-3.5 rounded-full"
          >
            See all 7 services &amp; conditions <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      {/* ============ HERO ============ */}
      <section className="relative bg-[#0B0B0F] text-white overflow-hidden md:min-h-[100svh] md:flex md:items-center">
        {/* Desktop: full photo anchored right */}
        <img
          src={heroImg}
          alt=""
          aria-hidden="true"
          className="hidden md:block absolute inset-0 w-full h-full object-contain object-right"
        />
        {/* Desktop legibility overlays */}
        <div className="hidden md:block absolute inset-0 bg-black/35" />
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#0B0B0F]/85 via-[#0B0B0F]/35 to-transparent" />
        <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-[#0B0B0F]/55 via-transparent to-[#0B0B0F]/30" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pt-28 md:pt-24 md:pb-32">
          <div className="max-w-xl mx-auto md:mx-0 text-center md:text-left">
            <Reveal delay={100}>
              <h1 className="font-display font-semibold tracking-tight leading-[1.04] text-[clamp(3.2rem,8vw,5.8rem)]">
               Restore Movement               <br />
                Rebuild Confidence             </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-6 md:mt-8 text-lg text-gray-300 leading-relaxed max-w-sm mx-auto md:mx-0">
Trusted chiropractic care in Surrey—bringing the same high standard of care provided to professional athletes to you.              </p>
            </Reveal>
            <Reveal delay={340}>
              <a
                href={TEL}
                className="mt-10 inline-flex items-center gap-3 bg-white text-black text-base font-medium pl-8 pr-6 py-4 rounded-full hover:bg-gray-100 transition-colors"
              >
                Book Your Visit
                <span aria-hidden="true" className="text-lg leading-none">&rsaquo;</span>
              </a>
            </Reveal>
          </div>
        </div>
        {/* Mobile: full photo shown clearly below the text, blended into the dark bg */}
        <div className="md:hidden relative mt-10">
          <img
            src={heroImg}
            alt="Ice hockey player skating hard under arena lights"
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-black/25" />
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#0B0B0F] to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0B0B0F] to-transparent" />
          <p className="absolute bottom-4 inset-x-0 text-center text-gray-400 text-sm">
            Care with precision. Built around you.
          </p>
        </div>
        <div className="hidden md:block absolute bottom-10 left-6 md:left-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))] z-10 text-gray-400 text-sm leading-relaxed">
          Care with precision.
          <br />
          Built around you.
        </div>
        <div className="hidden md:flex absolute bottom-8 inset-x-0 justify-center z-10">
          <a href="#help" aria-label="Scroll to learn more" className="text-white/70 hover:text-white transition-colors text-2xl leading-none">
            &#x2304;
          </a>
        </div>
      </section>

      {/* ============ TRUST STRIP ============ */}
      <section className="border-b border-black/5">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            "Trusted by the BC Lions",
            "Served at the Olympics",
            "Open 6 days a week",
            "ICBC pays. You pay $0.",
          ].map((t, i) => (
            <Reveal key={t} delay={i * 90}>
              <p className="text-sm md:text-[15px] font-medium text-gray-700">{t}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ WHAT HURTS — BENTO GRID ============ */}
      <section id="help" className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <p className="text-[#0071E3] text-sm font-semibold tracking-widest uppercase">
                  What we treat
                </p>
                <h2 className="font-display font-semibold text-[clamp(2.2rem,5vw,3.8rem)] mt-3 leading-tight">
                 Where does it hurt?
                </h2>
              </div>
              <p className="text-gray-500 text-lg max-w-sm md:text-right">
                Find your condition. We’re here to help
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[220px] gap-4">
            {painCards.map((c, i) => {
              const span = [
                "sm:col-span-2 lg:col-span-2 lg:row-span-2", // Back Pain — hero card
                "", // Neck
                "", // Headaches
                "sm:col-span-2 lg:col-span-2", // Car Accident — wide
                "sm:col-span-1 lg:col-span-2", // Sports — wide
                "sm:col-span-1 lg:col-span-2", // Foot — wide
              ][i];
              return (
                <Reveal key={c.title} delay={i * 80} className={span}>
                  <a
                    href={TEL}
                    className="group relative block h-full rounded-[2rem] overflow-hidden bg-[#101318]"
                  >
                    {/* Icon fallback behind the photo */}
                    <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-40">
                      {c.icon}
                    </div>
                    <div className="absolute inset-0 overflow-hidden group-hover:scale-[1.03] transition-transform duration-700 ease-out">
                      <ParallaxImg src={c.img} alt={c.title} direction={i % 2 === 0 ? 1 : -1} />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10 group-hover:from-black/75 transition-colors duration-500" />
                    <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                      <h3 className="font-display font-semibold text-white text-2xl">
                        {c.title}
                      </h3>
                      <p className="text-gray-300 mt-1.5 text-[15px] leading-relaxed max-w-xs">
                        {c.line}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-2 text-white/0 group-hover:text-white text-sm font-medium translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                        Get help now <span aria-hidden="true">&rarr;</span>
                      </span>
                    </div>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <h2 className="font-display font-semibold text-[clamp(2.2rem,5vw,3.8rem)] text-center">
              Getting help is easy.
            </h2>
          </Reveal>
          <div className="mt-16 grid md:grid-cols-3 gap-10">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 120}>
                <div className="text-center md:text-left">
                  <div className="font-display text-6xl font-semibold text-[#0071E3]/20">{s.n}</div>
                  <h3 className="font-display font-semibold text-2xl mt-3">{s.title}</h3>
                  <p className="text-gray-500 mt-3 leading-relaxed">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SERVICES ACCORDION ============ */}
      <ServicesAccordion />

      {/* ============ MEET DR SUKH ============ */}
      <section className="py-20 md:py-32 bg-[#0B0B0F] text-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <Reveal>
            {/* Drop the real photo at:  public/images/dr-sukh.jpg
                Until the file exists, the placeholder below shows automatically. */}
            <div className="relative rounded-full overflow-hidden aspect-square w-full max-w-md mx-auto bg-gradient-to-br from-[#12131a] to-[#1b2233] border border-white/10 shadow-[0_0_80px_rgba(0,113,227,0.15)]">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-gray-600 text-sm">[ Photo of Dr. Sukh Mann ]</span>
              </div>
              <img
                src="/images/dr-sukh1.jpg"
                alt="Dr. Sukh Mann, Chiropractor"
                loading="lazy"
                onError={(e) => (e.currentTarget.style.display = "none")}
                className="relative w-full h-full object-cover"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <h2 className="font-display font-semibold text-[clamp(2.2rem,5vw,3.8rem)] leading-tight">
                He treats pro athletes.
                <br />
                <span className="text-gray-400">He will treat you the same way.</span>
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-7 text-gray-300 text-lg leading-relaxed">
                Dr. Sukh Mann is a chiropractor and a registered massage therapist. He works with
                the BC Lions. He has helped athletes at the Olympics and Paralympics. But most of
                his patients are people like you.
              </p>
            </Reveal>
            <Reveal delay={280}>
              <Link
                to="/dr-sukh-mann"
                className="inline-block mt-8 text-[#6EB4FF] font-medium hover:underline text-lg"
              >
                Meet Dr. Sukh →
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="py-20 md:py-28 overflow-hidden">
        <Reveal>
          <h2 className="font-display font-semibold text-[clamp(2rem,4.5vw,3.2rem)] text-center px-6">
            Real words from real patients.
          </h2>
        </Reveal>
        <div className="mt-12 relative">
          <div className="marquee-track flex gap-5 w-max px-5">
            {[...testimonials, ...testimonials].map((t, i) => (
              <figure
                key={i}
                className="w-[320px] md:w-[380px] shrink-0 rounded-3xl bg-gray-50 p-7 border border-black/5"
              >
                <blockquote className="text-gray-700 leading-relaxed text-[15px]">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-4 text-sm font-medium text-gray-900">
                  — {t.name}
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />
        </div>
      </section>

      

    </main>
  );
}