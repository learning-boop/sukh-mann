import { useState } from "react";
import Reveal from "../components/Reveal.jsx";
import { Seo, PageHero } from "../components/Page.jsx";
import { PHONE, TEL, EMAIL, MAPS_URL, hours } from "../data/site.js";

const MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2607.675286466154!2d-122.80139118431399!3d49.187747979321095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf9abaa8207022998!2sDr+Sukh+Mann!5e0!3m2!1sen!2sus!4v1551127120084";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const send = () => {
    const subject = encodeURIComponent("Website message from " + (form.name || "a visitor"));
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\n\n${form.message}\n\n(Please do not include personal health details in email.)`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <main>
      <Seo
        title="Contact Us | Dr. Sukh Mann, Chiropractor Surrey BC | (604) 581-0232"
        description="Call (604) 581-0232 or visit Dr. Sukh Mann at 202-10190 152A Street, Surrey BC. Open late weekdays and Saturdays."
      />
      <PageHero
        eyebrow="Contact"
        title="Talk to a real person."
        sub="The fastest way to book is a phone call. Same-day visits are often possible."
      />

      {/* Big call CTA */}
      <section className="py-16 md:py-24 text-center px-6">
        <Reveal>
          <p className="text-gray-500 text-lg">Call us now</p>
          <a
            href={TEL}
            className="font-display font-semibold text-[clamp(2.4rem,8vw,5.5rem)] tracking-tight text-gray-900 hover:text-[#0071E3] transition-colors"
          >
            {PHONE}
          </a>
        </Reveal>
      </section>

      {/* Info grid */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          <Reveal>
            <div className="rounded-3xl bg-gray-50 border border-black/5 p-8 h-full">
              <h2 className="font-display font-semibold text-xl">Where we are</h2>
              <p className="text-gray-500 mt-3 text-lg leading-relaxed">
                202 – 10190 152A Street
                <br />
                Surrey, BC V3R 1J7
              </p>
              <p className="text-gray-500 mt-2">Free parking on site.</p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-4 text-[#0071E3] font-medium hover:underline"
              >
                Get directions →
              </a>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-3xl bg-gray-50 border border-black/5 p-8 h-full">
              <h2 className="font-display font-semibold text-xl">When we're open</h2>
              <ul className="mt-4 space-y-2">
                {hours.map(([d, h]) => (
                  <li key={d} className="flex justify-between text-gray-600">
                    <span>{d}</span>
                    <span className="text-gray-900">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="rounded-3xl bg-gray-50 border border-black/5 p-8 h-full">
              <h2 className="font-display font-semibold text-xl">Send a note</h2>
              <div className="mt-4 space-y-3">
                <input
                  value={form.name}
                  onChange={set("name")}
                  placeholder="Your name"
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-[#0071E3]"
                />
                <input
                  value={form.phone}
                  onChange={set("phone")}
                  placeholder="Your phone number"
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-[#0071E3]"
                />
                <textarea
                  value={form.message}
                  onChange={set("message")}
                  placeholder="How can we help?"
                  rows={3}
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-[#0071E3] resize-none"
                />
                <button
                  onClick={send}
                  className="w-full bg-[#0071E3] hover:bg-[#0077ED] transition-colors text-white font-medium py-3 rounded-full"
                >
                  Send email
                </button>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Email is not private. Please do not include personal health details.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="pb-20 md:pb-28 px-6">
        <Reveal>
          <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden border border-black/5 shadow-[0_8px_40px_rgba(0,0,0,0.08)]">
            <iframe
              title="Map to Dr. Sukh Mann's clinic"
              src={MAP_EMBED}
              className="w-full h-[380px] md:h-[460px] border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </section>
    </main>
  );
}
