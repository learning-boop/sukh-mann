import Reveal from "../components/Reveal.jsx";
import Curve from "../components/Curve.jsx";
import Icon from "../components/Icon.jsx";
import { Seo, PageHero } from "../components/Page.jsx";
import CoreValues from "../components/CoreValues.jsx";

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

      {/* Mission + core values cycle */}
      <section className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-b from-white via-[#f5f8ff] to-white">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <p className="eyebrow eyebrow-light">
                <span className="eyebrow-dot" />
                Our mission
              </p>
              <h2 className="font-display font-semibold text-[clamp(2rem,4.5vw,3.4rem)] leading-tight mt-4">
                Helping people<br className="hidden sm:block" />{" "}<span className="text-gradient">feel and live better.</span>
              </h2>
              <p className="mt-4 text-gray-500 text-lg">
                Seven core values guide every visit. Tap a circle to read about each one.
              </p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="mt-12 md:mt-16">
              <CoreValues />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Inside the clinic */}
      <section className="pb-4 md:pb-8">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <h2 className="font-display font-semibold text-[clamp(1.8rem,4vw,2.8rem)] text-center">
              Take a look <span className="text-gradient squiggle">inside.</span>
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
      <section className="relative overflow-hidden mt-20 md:mt-28 pt-24 pb-20 md:pt-40 md:pb-28 bg-[#0B0B0F] text-white">
        <Curve position="top" fill="#fff" />
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
            <div className="dark-card rounded-3xl p-8 md:p-10">
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

    </main>
  );
}