import Reveal from "../components/Reveal.jsx";
import { Seo, PageHero } from "../components/Page.jsx";
import { PHONE, TEL, careDetails, faqs, conditions } from "../data/site.js";

export default function Care() {
  return (
    <main>
      <Seo
        title="Chiropractic Care & Services | Dr. Sukh Mann, Surrey BC"
        description="Chiropractic care, Active Release Techniques®, registered massage, active rehab, physiotherapy, custom orthotics, Class IV laser therapy and movement assessments in Surrey BC."
      />
      <PageHero
        eyebrow="Our care"
        title="Many ways to help. One plan for you."
        sub="Dr. Sukh may use several of these in one visit — whatever your body needs."
      />

      {/* Conditions we treat */}
      <section className="py-16 md:py-24 bg-[#0B0B0F] text-white -mt-px">
        <div className="max-w-6xl mx-auto px-6">
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
                <div className="rounded-2xl bg-white/5 border border-white/10 hover:border-[#0071E3]/60 hover:bg-[#0071E3]/10 transition-colors px-5 py-4 text-center font-medium">
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
          className={i % 2 === 0 ? "py-16 md:py-24" : "py-16 md:py-24 bg-gray-50"}
        >
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-10 items-start">
            <Reveal className="md:col-span-5">
              <p className="font-display text-6xl font-semibold text-[#0071E3]/15">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="font-display font-semibold text-[clamp(1.8rem,3.5vw,2.6rem)] mt-2 leading-snug">
                {s.title}
              </h2>
              <div className="group mt-6 rounded-3xl overflow-hidden aspect-[4/3] bg-gray-100 shadow-[0_12px_40px_rgba(0,0,0,0.10)]">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                  className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700 ease-out"
                />
              </div>
            </Reveal>
            <div className="md:col-span-7">
              <Reveal delay={100}>
                <p className="text-gray-600 text-lg leading-relaxed">{s.what}</p>
              </Reveal>
              <Reveal delay={180}>
                <div className="mt-6 flex flex-wrap gap-2">
                  {s.helps.map((h) => (
                    <span
                      key={h}
                      className="text-sm font-medium text-[#0071E3] bg-[#0071E3]/10 border border-[#0071E3]/15 px-4 py-1.5 rounded-full"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </Reveal>
              {s.quote && (
                <Reveal delay={260}>
                  <blockquote className="mt-7 border-l-2 border-[#0071E3] pl-5 text-gray-500 leading-relaxed">
                    “{s.quote.text}”
                    <footer className="mt-2 text-sm font-medium text-gray-900 not-italic">
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
      <section className="py-20 md:py-28 bg-[#0B0B0F] text-white">
        <div className="max-w-3xl mx-auto px-6">
          <Reveal>
            <h2 className="font-display font-semibold text-[clamp(2rem,4.5vw,3.4rem)] text-center">
              Good questions.
            </h2>
          </Reveal>
          <div className="mt-12 space-y-3">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 60}>
                <details className="group rounded-2xl bg-white/5 border border-white/10 open:border-[#0071E3]/50 transition-colors">
                  <summary className="flex items-center justify-between cursor-pointer list-none px-6 py-5 font-medium text-lg">
                    {f.q}
                    <span className="text-[#6EB4FF] text-2xl leading-none transition-transform duration-300 group-open:rotate-45">
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
                className="inline-block bg-[#0071E3] hover:bg-[#0077ED] transition-colors text-white font-medium px-9 py-3.5 rounded-full"
              >
                Still unsure? Call {PHONE}
              </a>
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}