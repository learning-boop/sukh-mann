import Reveal from "../components/Reveal.jsx";
import Icon from "../components/Icon.jsx";
import { Seo, PageHero } from "../components/Page.jsx";
import { PHONE, TEL, careDetails, faqs, conditions } from "../data/site.js";

export default function Care() {
  return (
    <main>
      <Seo
        title="Chiropractic Care Surrey | Back Pain, Sciatica & Sports Injury Treatment"
        description="Back pain treatment, sciatica care, whiplash and sports injury chiropractic in Surrey BC. Active Release Techniques®, massage, orthotics, Class IV laser and more."
      />
      <PageHero
        eyebrow="Our care"
        title="Many ways to help. One plan for you."
        sub="Dr. Sukh may use several of these in one visit — whatever your body needs."
      />

      {/* Conditions we treat */}
      <section className="relative overflow-hidden py-16 md:py-24 bg-[#0B0B0F] text-white -mt-px">
        <div className="grid-bg" />
        <div className="relative max-w-6xl mx-auto px-6">
          <Reveal>
            <h2 className="font-display font-semibold text-[clamp(1.8rem,4vw,2.8rem)]">
              Conditions we treat.
            </h2>
            <p className="text-gray-400 mt-3 text-lg max-w-xl">
              These are the problems we see every day. Don't see yours? Call and ask — we will tell
              you honestly if we can help.
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
            {conditions.map((c, i) => (
              <Reveal key={c} delay={i * 40}>
                <div className="dark-card card-lift h-full rounded-2xl px-4 py-4 flex items-center gap-3 font-medium">
                  <span className="grid place-items-center w-6 h-6 rounded-full bg-[#0071E3]/25 text-[#6EB4FF] shrink-0">
                    <Icon name="check" className="w-3.5 h-3.5" strokeWidth={3} />
                  </span>
                  {c}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services, alternating */}
      {careDetails.map((s, i) => (
        <section
          key={s.title}
          className={i % 2 === 0 ? "py-16 md:py-24" : "py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white"}
        >
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-10 md:gap-14 items-center">
            <Reveal className={`md:col-span-5 ${i % 2 === 1 ? "md:order-2" : ""}`}>
              <div className="group relative rounded-[2rem] overflow-hidden aspect-[4/3] bg-gray-100 shadow-[0_24px_60px_rgba(15,23,42,0.15)]">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                  className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute top-5 left-5 font-display font-semibold text-sm text-white bg-black/35 backdrop-blur-md border border-white/25 rounded-full px-3.5 py-1">
                  {String(i + 1).padStart(2, "0")} / {String(careDetails.length).padStart(2, "0")}
                </span>
              </div>
            </Reveal>
            <div className={`md:col-span-7 ${i % 2 === 1 ? "md:order-1" : ""}`}>
              <Reveal>
                <h2 className="font-display font-semibold text-[clamp(1.8rem,3.5vw,2.6rem)] leading-snug">
                  {s.title}
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <p className="mt-4 text-gray-600 text-lg leading-relaxed">{s.what}</p>
              </Reveal>
              <Reveal delay={180}>
                <div className="mt-6 flex flex-wrap gap-2">
                  {s.helps.map((h) => (
                    <span
                      key={h}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0062cc] bg-[#0071E3]/8 border border-[#0071E3]/15 px-4 py-1.5 rounded-full"
                    >
                      <Icon name="check" className="w-3.5 h-3.5" strokeWidth={3} />
                      {h}
                    </span>
                  ))}
                </div>
              </Reveal>
              {s.quote && (
                <Reveal delay={260}>
                  <blockquote className="relative mt-8 rounded-2xl bg-white border border-black/5 shadow-[0_10px_30px_rgba(15,23,42,0.06)] p-6 pl-7 text-gray-600 leading-relaxed overflow-hidden">
                    <span className="absolute left-0 inset-y-0 w-1 bg-gradient-to-b from-[#6EB4FF] to-[#0062cc]" />
                    “{s.quote.text}”
                    <footer className="mt-3 text-sm font-medium text-gray-900 not-italic">
                      — {s.quote.name}
                    </footer>
                  </blockquote>
                </Reveal>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* FAQ */}
      <section className="relative overflow-hidden py-20 md:py-28 bg-[#0B0B0F] text-white">
        <div className="aurora opacity-60" />
        <div className="relative max-w-3xl mx-auto px-6">
          <Reveal>
            <h2 className="font-display font-semibold text-[clamp(2rem,4.5vw,3.4rem)] text-center">
              Good <span className="text-gradient">questions.</span>
            </h2>
          </Reveal>
          <div className="mt-12 space-y-3">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 60}>
                <details className="group dark-card rounded-2xl open:border-[#6EB4FF]/50 open:bg-[#0071E3]/10 transition-colors">
                  <summary className="flex items-center justify-between cursor-pointer list-none px-6 py-5 font-medium text-lg">
                    {f.q}
                    <span className="grid place-items-center w-8 h-8 shrink-0 ml-4 rounded-full bg-white/10 text-[#6EB4FF] text-xl leading-none transition-all duration-300 group-open:rotate-45 group-open:bg-[#0071E3] group-open:text-white">
                      +
                    </span>
                  </summary>
                  <p className="px-6 pb-6 text-gray-300 leading-relaxed">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <p className="text-center mt-12">
              <a
                href={TEL}
                className="btn-primary px-9 py-3.5"
              >
                <Icon name="phone" className="w-4 h-4" />
                Still unsure? Call {PHONE}
              </a>
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}