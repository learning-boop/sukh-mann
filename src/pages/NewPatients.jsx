import Reveal from "../components/Reveal.jsx";
import Icon from "../components/Icon.jsx";
import { Seo, PageHero } from "../components/Page.jsx";
import { PHONE, TEL } from "../data/site.js";

const visitSteps = [
  {
    title: "A warm welcome",
    text: "Our office is friendly and light-hearted. Our staff greet you, chat with you, and truly listen.",
  },
  {
    title: "A real talk",
    text: "You meet Dr. Sukh. He asks what brought you in and learns your health story. Nothing is rushed.",
  },
  {
    title: "A careful check",
    text: "He does a full assessment to pinpoint the real cause of your problem. Then he explains what he found, in plain words.",
  },
  {
    title: "Your first treatment",
    text: "Once you understand the plan and say yes, your first treatment starts — often the very same day.",
  },
];

const bring = [
  "Loose, comfy clothes — or use the gown and shorts we supply",
  "Your care card number",
  "Your ICBC claim number, if you had a car accident",
  "Your WorkSafe BC claim number and approval, if you were hurt at work",
];

const coverage = [
  {
    tag: "Car accident",
    title: "ICBC — you pay $0",
    text: "Thanks to ICBC's program, there is no fee for ICBC-related injuries. We do the paperwork. If ICBC doesn't cover you, your lawyer sometimes can — ask us.",
    featured: true,
  },
  {
    tag: "Work & private plans",
    title: "Extended health plans",
    text: "Most plans cover chiropractic care and foot orthotics. Many pay back 80% or more. You pay at your visit, then send your receipt to your plan.",
  },
  {
    tag: "Hurt at work",
    title: "WorkSafe BC (WCB)",
    text: "Hurt on the job? WCB may cover your care with no cost to you. We bill them directly. Just bring your claim number and approval.",
  },
  {
    tag: "Low income",
    title: "MSP help",
    text: "Earn under about $28,000 a year? BC's Medical Services Plan can partly pay for 10 visits. We just need your care card number.",
  },
  {
    tag: "RCMP",
    title: "RCMP officers",
    text: "Officers can get 25 or more covered visits and one pair of custom orthotics each year. No fee — we bill directly.",
  },
  {
    tag: "Veterans",
    title: "Veterans (DVA)",
    text: "Veterans get chiropractic care with no fees. We bill Veteran Affairs directly for you.",
  },
];

export default function NewPatients() {
  return (
    <main>
      <Seo
        title="New Patients | ICBC Chiropractor Surrey BC | Dr. Sukh Mann"
        description="Your first visit takes 30-45 minutes. No referral needed. ICBC, WorkSafe BC, MSP, RCMP, DVA and extended health plans accepted in Surrey BC."
      />
      <PageHero
        eyebrow="New patients"
        title="Your first visit, step by step."
        sub="No surprises. No doctor's referral needed. Here is exactly what happens when you come in."
      />

      {/* Stepper + photo */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 md:gap-20 items-start">
          <div>
            <ol className="relative border-l-2 border-[#0071E3]/20 ml-5 space-y-14">
              {visitSteps.map((s, i) => (
                <Reveal key={s.title} delay={i * 100}>
                  <li className="relative pl-10">
                    <span className="absolute -left-[21px] top-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#2b8cff] to-[#0062cc] text-white font-display font-semibold flex items-center justify-center ring-8 ring-white shadow-[0_8px_20px_rgba(0,113,227,0.35)]">
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
                Plan for <span className="text-gray-900 font-medium">30 to 45 minutes</span> on your
                first visit. After that, visits take about{" "}
                <span className="text-gray-900 font-medium">20 to 30 minutes</span>.
              </p>
            </Reveal>
          </div>

          <Reveal delay={150} className="md:sticky md:top-28">
            <div className="relative">
              {/* Swap for a real clinic photo: save as public/images/first-visit.jpg */}
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-gradient-to-br from-gray-100 to-gray-200 shadow-[0_24px_60px_rgba(0,0,0,0.12)]">
                <div className="absolute inset-0 flex items-center justify-center text-5xl">🤝</div>
                <img
                  src="images/new-patient.png"
                  alt="A friendly doctor ready to welcome you"
                  loading="lazy"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                  className="relative w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 left-6 flex items-center gap-4 bg-white/90 backdrop-blur-xl rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.18)] border border-black/5 px-5 py-4">
                <span className="icon-badge">
                  <Icon name="clock" className="w-6 h-6" />
                </span>
                <span>
                  <span className="block font-display font-semibold text-2xl text-gradient">30–45 min</span>
                  <span className="block text-gray-500 text-sm">for your first visit</span>
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* After your first visit */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6">
          <Reveal>
            <div className="card-lift rounded-3xl bg-white border border-black/5 shadow-[0_10px_40px_rgba(15,23,42,0.06)] p-8 md:p-10 h-full">
              <span className="icon-badge mb-6"><Icon name="activity" className="w-6 h-6" /></span>
              <h2 className="font-display font-semibold text-2xl">After your first visit</h2>
              <p className="text-gray-500 mt-3 text-lg leading-relaxed">
                At each follow-up, Dr. Sukh asks how you have been and what has changed. He checks
                how you move, treats you, and gives you a stretch or exercise to do at home.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="card-lift rounded-3xl bg-white border border-black/5 shadow-[0_10px_40px_rgba(15,23,42,0.06)] p-8 md:p-10 h-full">
              <span className="icon-badge mb-6"><Icon name="shield" className="w-6 h-6" /></span>
              <h2 className="font-display font-semibold text-2xl">You are in charge</h2>
              <p className="text-gray-500 mt-3 text-lg leading-relaxed">
                Some think that once you start, you must go forever. Not true. Some people enjoy a
                visit each month because it feels good — but how long you come is always your
                choice.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What to bring */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <Reveal>
            <h2 className="font-display font-semibold text-[clamp(2rem,4.5vw,3.4rem)] leading-tight">
              What to <span className="text-gradient">bring.</span>
            </h2>
            <p className="mt-5 text-gray-500 text-lg leading-relaxed">
              Keep it simple. Wear something loose, and bring the numbers that fit your situation.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <ul className="space-y-4">
              {bring.map((b) => (
                <li
                  key={b}
                  className="card-lift flex items-start gap-4 bg-white rounded-2xl border border-black/5 shadow-[0_6px_20px_rgba(15,23,42,0.05)] p-5 text-lg text-gray-700"
                >
                  <span className="grid place-items-center w-7 h-7 rounded-full bg-gradient-to-br from-[#2b8cff] to-[#0062cc] text-white shrink-0 mt-0.5">
                    <Icon name="check" className="w-4 h-4" strokeWidth={3} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Coverage */}
      <section className="relative overflow-hidden py-20 md:py-28 bg-[#0B0B0F] text-white">
        <div className="aurora opacity-60" />
        <div className="relative max-w-6xl mx-auto px-6">
          <Reveal>
            <h2 className="font-display font-semibold text-[clamp(2rem,4.5vw,3.4rem)] leading-tight">
              Who pays? <span className="text-gradient">Often, not you.</span>
            </h2>
            <p className="text-gray-400 mt-4 text-lg max-w-xl">
              Care can be covered in many ways. No doctor's referral is needed to see Dr. Sukh.
            </p>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {coverage.map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <div
                  className={`card-lift rounded-3xl p-8 h-full ${
                    c.featured
                      ? "bg-gradient-to-br from-[#2b8cff] to-[#0052b0] shadow-[0_20px_60px_rgba(0,113,227,0.4)]"
                      : "dark-card"
                  }`}
                >
                  <p
                    className={`text-sm font-semibold tracking-widest uppercase ${
                      c.featured ? "text-blue-200" : "text-[#6EB4FF]"
                    }`}
                  >
                    {c.tag}
                  </p>
                  <h3 className="font-display font-semibold text-2xl mt-3">{c.title}</h3>
                  <p
                    className={`mt-3 leading-relaxed ${
                      c.featured ? "text-blue-100" : "text-gray-300"
                    }`}
                  >
                    {c.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <p className="text-center mt-12">
              <a
                href={TEL}
                className="btn-light px-9 py-3.5"
              >
                <Icon name="phone" className="w-4 h-4" />
                Book your first visit — {PHONE}
              </a>
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}