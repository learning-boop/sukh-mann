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

/* Dark Apple-style page header used by every inner page */
export function PageHero({ eyebrow, title, sub }) {
  return (
    <section className="bg-[#0B0B0F] text-white pt-36 pb-16 md:pt-44 md:pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="text-[#6EB4FF] text-sm font-semibold tracking-widest uppercase">{eyebrow}</p>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="font-display font-semibold tracking-tight leading-[1.05] text-[clamp(2.6rem,7vw,5rem)] mt-4 max-w-3xl">
            {title}
          </h1>
        </Reveal>
        {sub && (
          <Reveal delay={200}>
            <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl">{sub}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
