import Reveal from "../components/Reveal.jsx";
import { Seo, PageHero } from "../components/Page.jsx";
import { PHONE, TEL } from "../data/site.js";

const visitSteps = [
  {
    title: "A warm welcome",
    text: "We greet you and help you with a short form. Free parking is right on site.",
  },
  {
    title: "A real talk",
    text: "Dr. Sukh listens to your story. What hurts? When did it start? Nothing is rushed.",
  },
  {
    title: "A careful check",
    text: "He checks how you stand, move, and bend. He looks for the real cause — not just where it hurts.",
  },
  {
    title: "Your plan",
    text: "You get a plan made just for you, in plain words. Gentle care may even start the same day.",
  },
];

const bring = [
  "Your BC Services Card or photo ID",
  "Your ICBC claim number, if you had a car accident",
  "Comfortable clothes you can move in",
  "Any reports or X-rays you already have",
];

export default function NewPatients() {
  return (
    <main>
      <Seo
        title="New Patients | Dr. Sukh Mann, Chiropractor Surrey BC"
        description="What to expect on your first visit to Dr. Sukh Mann in Surrey. ICBC car accident patients pay no fee. Same-day visits often available."
      />
      <PageHero
        eyebrow="New patients"
        title="Your first visit, step by step."
        sub="No surprises. Here is exactly what happens when you come in."
      />

      {/* Stepper */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <ol className="relative border-l-2 border-gray-200 ml-3 md:ml-0 space-y-14">
            {visitSteps.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <li className="relative pl-10">
                  <span className="absolute -left-[21px] top-0 w-10 h-10 rounded-full bg-[#0071E3] text-white font-display font-semibold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <h2 className="font-display font-semibold text-2xl">{s.title}</h2>
                  <p className="text-gray-500 mt-2 text-lg leading-relaxed max-w-xl">{s.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
          <Reveal delay={200}>
            <p className="mt-14 text-gray-500 text-lg pl-10">
              Most visits take about <span className="text-gray-900 font-medium">20 to 30 minutes</span>.
            </p>
          </Reveal>
        </div>
      </section>

      {/* What to bring */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <Reveal>
            <h2 className="font-display font-semibold text-[clamp(2rem,4.5vw,3.4rem)] leading-tight">
              What to bring.
            </h2>
            <p className="mt-5 text-gray-500 text-lg leading-relaxed">
              Keep it simple. These four things are all we need.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <ul className="space-y-4">
              {bring.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-4 bg-white rounded-2xl border border-black/5 p-5 text-lg text-gray-700"
                >
                  <span className="text-[#0071E3] font-bold mt-0.5">✓</span>
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ICBC + insurance */}
      <section className="py-20 md:py-28 bg-[#0B0B0F] text-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6">
          <Reveal>
            <div className="rounded-3xl bg-[#0071E3] p-10 md:p-12 h-full">
              <p className="text-blue-200 text-sm font-semibold tracking-widest uppercase">
                Car accident?
              </p>
              <h2 className="font-display font-semibold text-3xl mt-3">
                ICBC pays. You pay $0.
              </h2>
              <p className="mt-4 text-blue-100 text-lg leading-relaxed">
                If ICBC covers your claim, your visits cost you nothing. We do all the paperwork for
                you. Just bring your claim number.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-3xl bg-white/5 border border-white/10 p-10 md:p-12 h-full">
              <p className="text-[#6EB4FF] text-sm font-semibold tracking-widest uppercase">
                Other plans
              </p>
              <h2 className="font-display font-semibold text-3xl mt-3">Extended health plans.</h2>
              <p className="mt-4 text-gray-300 text-lg leading-relaxed">
                Many work and private health plans help pay for chiropractic care and massage. Not
                sure about yours? Call us — we will help you check.
              </p>
            </div>
          </Reveal>
        </div>
        <Reveal delay={200}>
          <p className="text-center mt-12">
            <a
              href={TEL}
              className="inline-block bg-white text-black font-medium px-9 py-3.5 rounded-full hover:bg-gray-200 transition-colors"
            >
              Book your first visit — {PHONE}
            </a>
          </p>
        </Reveal>
      </section>
    </main>
  );
}
