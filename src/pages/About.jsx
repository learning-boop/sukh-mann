import Reveal from "../components/Reveal.jsx";
import Icon from "../components/Icon.jsx";
import { Seo, PageHero } from "../components/Page.jsx";
import { PHONE, TEL } from "../data/site.js";

const pillars = [
  {
    icon: "home",
    title: "One place. Many ways to help.",
    text: "Chiropractic care, massage, rehab, and more. You get the best of all worlds in each visit — no running between clinics.",
  },
  {
    icon: "shield",
    title: "You stay in control.",
    text: "We explain what caused your problem in simple words. You make the choices. You always know why we do each step.",
  },
  {
    icon: "heart",
    title: "Care that comes home with you.",
    text: "You get easy stretches and exercises to do at home. If you sit at a computer all day, Dr. Sukh shows you how to sit right.",
  },
  {
    icon: "calendar",
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
              <div className="card-lift group relative overflow-hidden rounded-3xl bg-white p-8 md:p-10 h-full border border-black/5 shadow-[0_10px_40px_rgba(15,23,42,0.06)]">
                <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[#0071E3]/10 blur-2xl transition-transform duration-700 group-hover:scale-150" />
                <span className="icon-badge relative">
                  <Icon name={p.icon} className="w-6 h-6" />
                </span>
                <h2 className="relative font-display font-semibold text-2xl mt-6">{p.title}</h2>
                <p className="relative text-gray-500 mt-3 leading-relaxed text-lg">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Inside the clinic */}
      <section className="py-4 md:py-8">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <h2 className="font-display font-semibold text-[clamp(1.8rem,4vw,2.8rem)] text-center">
              Take a look <span className="text-gradient">inside.</span>
            </h2>
            <p className="text-center text-gray-500 text-lg mt-3 max-w-md mx-auto">
              A clean, calm space made for your comfort.
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { src: "/images/clinic/waiting-room.jpg", label: "The waiting room" },
              { src: "/images/clinic/treatment-room.jpg", label: "A treatment room" },
              { src: "/images/clinic/rehab-space.jpg", label: "The rehab space" },
            ].map((g, i) => (
              <Reveal key={g.label} delay={i * 90}>
                <figure className="group card-lift relative rounded-3xl">
                  <div className="relative rounded-3xl overflow-hidden aspect-square bg-gray-100 shadow-[0_12px_40px_rgba(0,0,0,0.10)]">
                    <img
                      src={g.src}
                      alt={g.label}
                      loading="lazy"
                      onError={(e) => (e.currentTarget.style.display = "none")}
                      className="w-full h-full object-cover group-hover:scale-[1.08] transition-transform duration-1000 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent" />
                    <figcaption className="absolute bottom-0 inset-x-0 p-5 flex items-center justify-between text-white font-medium">
                      {g.label}
                      <span className="grid place-items-center w-9 h-9 rounded-full bg-white/15 backdrop-blur-md border border-white/20 translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                        <Icon name="arrow" className="w-4 h-4" />
                      </span>
                    </figcaption>
                  </div>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How care works here */}
      <section className="relative overflow-hidden mt-20 md:mt-28 py-20 md:py-28 bg-[#0B0B0F] text-white">
        <div className="aurora opacity-60" />
        <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
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
            <div className="dark-card rounded-3xl p-8 md:p-10 backdrop-blur-md">
              <p className="eyebrow">
                <span className="eyebrow-dot" />
                Real stories
              </p>
              <ul className="mt-6 space-y-6">
                <li className="flex gap-4">
                  <span className="icon-badge w-9 h-9 rounded-xl shrink-0"><Icon name="check" className="w-4 h-4" strokeWidth={3} /></span>
                  <p className="text-white text-lg leading-relaxed">
                    A patient came in with dizziness. Dr. Sukh found a problem in their neck. After
                    a few visits, the dizziness went away.
                  </p>
                </li>
                <li className="flex gap-4">
                  <span className="icon-badge w-9 h-9 rounded-xl shrink-0"><Icon name="check" className="w-4 h-4" strokeWidth={3} /></span>
                  <p className="text-white text-lg leading-relaxed">
                    Athletes visit days before a big event with an ache. Care from Dr. Sukh has
                    helped many of them still compete.
                  </p>
                </li>
                <li className="flex gap-4">
                  <span className="icon-badge w-9 h-9 rounded-xl shrink-0"><Icon name="check" className="w-4 h-4" strokeWidth={3} /></span>
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
            <div className="relative overflow-hidden rounded-[2.5rem] border border-black/5 bg-gradient-to-br from-[#eef5ff] via-white to-[#f3efff] p-10 md:p-16 text-center shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <span className="icon-badge mx-auto mb-6">
                <Icon name="users" className="w-6 h-6" />
              </span>
              <h2 className="font-display font-semibold text-[clamp(1.8rem,4vw,2.8rem)]">
                Talks for offices and clubs.
              </h2>
              <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
                Dr. Sukh visits workplaces to teach healthy desk posture. He also speaks to running
                groups at community centres. Want a talk for your team?
              </p>
              <a
                href={TEL}
                className="btn-primary mt-8 px-9 py-3.5"
              >
                <Icon name="phone" className="w-4 h-4" />
                Call {PHONE}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}