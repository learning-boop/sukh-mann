import { useEffect } from "react";
import Reveal from "./Reveal.jsx";

export function Seo({ title, description }) {
  useEffect(() => {
    document.title = title;
    let m = document.querySelector('meta[name="description"]');
    if (!m) {
      m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
    }
    m.setAttribute("content", description);
  }, [title, description]);
  return null;
}

/* Dark page header used by every inner page: aurora glow + faint grid */
export function PageHero({ eyebrow, title, sub }) {
  return (
    <section className="relative overflow-hidden bg-[#0B0B0F] text-white pt-36 pb-16 md:pt-48 md:pb-28">
      <div className="aurora" />
      <div className="grid-bg" />
      <div className="relative max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="eyebrow">
            <span className="eyebrow-dot" />
            {eyebrow}
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="font-display font-semibold tracking-tight leading-[1.04] text-[clamp(2.6rem,7vw,5.2rem)] mt-6 max-w-4xl bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent pb-2">
            {title}
          </h1>
        </Reveal>
        {sub && (
          <Reveal delay={200}>
            <p className="mt-5 text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl">{sub}</p>
          </Reveal>
        )}
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#6EB4FF]/40 to-transparent" />
    </section>
  );
}
