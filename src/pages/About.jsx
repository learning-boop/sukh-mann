import Reveal from "../components/Reveal.jsx";
import { Seo, PageHero } from "../components/Page.jsx";
import { PHONE, TEL } from "../data/site.js";

const pillars = [
  {
    title: "One place. Many ways to help.",
    text: "Chiropractic care, massage, rehab, and more. You get the best of all worlds in each visit — no running between clinics.",
  },
  {
    title: "You stay in control.",
    text: "We explain what caused your problem in simple words. You make the choices. You always know why we do each step.",
  },
  {
    title: "Care that comes home with you.",
    text: "You get easy stretches and exercises to do at home. If you sit at a computer all day, Dr. Sukh shows you how to sit right.",
  },
  {
    title: "Easy to visit.",
    text: "Open late on weekdays. Open Saturdays. Same-day visits are often possible. No doctor's referral needed.",
  },
];

export default function About() {
  return (
    <main>
      <Seo
        title="About Us | Dr. Sukh Mann, Chiropractor in Surrey BC"
        description="Since 2007, Dr. Sukh Mann has combined chiropractic care and massage therapy in one Surrey clinic. Free parking, open late and Saturdays."
      />
      <PageHero
        eyebrow="About us"
        title="Helping Surrey feel better since 2007."
        sub="Dr. Sukh is both a chiropractor and a registered massage therapist. That means your care covers muscles and joints — together."
      />

      {/* Pillars */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <div className="rounded-3xl bg-gray-50 p-8 md:p-10 h-full border border-black/5">
                <h2 className="font-display font-semibold text-2xl">{p.title}</h2>
                <p className="text-gray-500 mt-3 leading-relaxed text-lg">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* How care works here */}
      <section className="py-20 md:py-28 bg-[#0B0B0F] text-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <Reveal>
              <h2 className="font-display font-semibold text-[clamp(2rem,4.5vw,3.4rem)] leading-tight">
                First we find the cause.
                <br />
                <span className="text-gray-400">Then we treat it.</span>
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 text-gray-300 text-lg leading-relaxed">
                Dr. Sukh checks how your joints and muscles work. When he finds the problem, he uses
                gentle adjustments and adds simple exercises to keep your spine strong.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <p className="mt-4 text-gray-300 text-lg leading-relaxed">
                Every plan is made for one person: you. Your care may mix chiropractic, massage, and
                rehab — whatever your body needs.
              </p>
            </Reveal>
          </div>
          <Reveal delay={150}>
            <div className="rounded-3xl bg-gradient-to-br from-[#12131a] to-[#1b2233] border border-white/5 p-10">
              <p className="text-[#6EB4FF] text-sm font-semibold tracking-widest uppercase">
                Real stories
              </p>
              <ul className="mt-6 space-y-6">
                <li>
                  <p className="text-white text-lg leading-relaxed">
                    A patient came in with dizziness. Dr. Sukh found a problem in their neck. After
                    a few visits, the dizziness went away.
                  </p>
                </li>
                <li>
                  <p className="text-white text-lg leading-relaxed">
                    Athletes visit days before a big event with an ache. Care from Dr. Sukh has
                    helped many of them still compete.
                  </p>
                </li>
                <li>
                  <p className="text-white text-lg leading-relaxed">
                    People with daily headaches have found they get fewer of them with a series of
                    visits.
                  </p>
                </li>
              </ul>
              <p className="text-gray-500 text-xs mt-6">
                Every person is different. Results vary from person to person.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Talks CTA */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="rounded-3xl border border-black/5 bg-gray-50 p-10 md:p-16 text-center">
              <h2 className="font-display font-semibold text-[clamp(1.8rem,4vw,2.8rem)]">
                Talks for offices and clubs.
              </h2>
              <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
                Dr. Sukh visits workplaces to teach healthy desk posture. He also speaks to running
                groups at community centres. Want a talk for your team?
              </p>
              <a
                href={TEL}
                className="inline-block mt-8 bg-[#0071E3] hover:bg-[#0077ED] transition-colors text-white font-medium px-9 py-3.5 rounded-full"
              >
                Call {PHONE}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}