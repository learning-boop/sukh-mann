import Reveal from "../components/Reveal.jsx";
import { Seo, PageHero } from "../components/Page.jsx";
import { PHONE, TEL, timeline } from "../data/site.js";

export default function DrSukh() {
  return (
    <main>
      <Seo
        title="Dr. Sukh Mann BSc, RMT, DC | Sports Injury Chiropractor Surrey"
        description="Dr. Sukh Mann is a chiropractor and registered massage therapist who has worked with the BC Lions, Rowing Canada, and at the Olympic Games."
      />
      <PageHero
        eyebrow="Meet the doctor"
        title="Dr. Sukh Mann, Chiropractor."
        sub="BSc, RMT, DC. He has cared for Olympians and pro teams. He will care for you the same way."
      />

      {/* Photo + intro */}
      <section className="py-20 md:py-28 bg-[#0B0B0F] text-white -mt-px">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <Reveal>
            <div className="relative rounded-full overflow-hidden aspect-square w-full max-w-sm mx-auto bg-gradient-to-br from-[#12131a] to-[#1b2233] border border-white/10 shadow-[0_0_80px_rgba(0,113,227,0.2)]">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-gray-600 text-sm">[ Photo of Dr. Sukh Mann ]</span>
              </div>
              <img
                src="/images/dr-sukh.jpg"
                alt="Dr. Sukh Mann, Chiropractor"
                onError={(e) => (e.currentTarget.style.display = "none")}
                className="relative w-full h-full object-cover"
              />
            </div>
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