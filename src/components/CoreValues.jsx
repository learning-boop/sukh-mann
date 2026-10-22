import { useEffect, useState } from "react";
import { coreValues } from "../data/site.js";

const R = 38; // ring radius, in % of the square stage

const pos = (i, n) => {
  const a = ((-90 + (i * 360) / n) * Math.PI) / 180;
  return { x: 50 + R * Math.cos(a), y: 50 + R * Math.sin(a), a };
};

/* Seven values arranged in a cycle. Hover/tap a circle to show it in the centre;
   the cycle steps on by itself until the visitor interacts. */
export default function CoreValues() {
  const n = coreValues.length;
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setActive((a) => (a + 1) % n), 4500);
    return () => clearInterval(t);
  }, [auto, n]);

  const pick = (i) => {
    setActive(i);
    setAuto(false);
  };
  const v = coreValues[active];

  return (
    <div className="mx-auto w-full max-w-[680px]">
      <div className="relative aspect-square w-full">
        {/* Ring with arrowheads between the circles */}
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" aria-hidden="true">
          <circle cx="50" cy="50" r={R} fill="none" stroke="#cbd5e1" strokeWidth="0.35" />
          {coreValues.map((_, i) => {
            const { a } = pos(i + 0.5, n);
            const x = 50 + R * Math.cos(a);
            const y = 50 + R * Math.sin(a);
            const deg = (a * 180) / Math.PI + 90;
            return (
              <path
                key={i}
                d="M -1.4 -1.1 L 0.4 0 L -1.4 1.1"
                transform={`translate(${x} ${y}) rotate(${deg})`}
                fill="none"
                stroke="#94a3b8"
                strokeWidth="0.45"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            );
          })}
        </svg>

        {/* Glowing dot travelling around the ring */}
        <div className="values-orbit absolute inset-0 pointer-events-none" aria-hidden="true">
          <span
            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#0071E3] shadow-[0_0_14px_4px_rgba(0,113,227,0.55)]"
            style={{ top: `${50 - R}%` }}
          />
        </div>

        {/* Centre: active value */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[46%] aspect-square rounded-full bg-white shadow-[0_20px_60px_rgba(15,23,42,0.12)] border border-black/5 grid place-items-center text-center p-[6%]"
          aria-live="polite"
        >
          <div key={active} className="values-fade">
            <p className="font-display font-semibold text-xs md:text-sm tracking-[0.2em] uppercase" style={{ color: v.color }}>
              Value {active + 1} of {n}
            </p>
            <h3 className="font-display font-semibold text-[clamp(1rem,3.2vw,1.45rem)] leading-tight mt-1.5 md:mt-2 text-gray-900">
              {v.title}
            </h3>
            <p className="hidden md:block mt-3 text-[13.5px] leading-relaxed text-gray-500">{v.text}</p>
          </div>
        </div>

        {/* The seven circles */}
        {coreValues.map((c, i) => {
          const { x, y } = pos(i, n);
          const on = i === active;
          return (
            <button
              key={c.title}
              type="button"
              onMouseEnter={() => pick(i)}
              onFocus={() => pick(i)}
              onClick={() => pick(i)}
              aria-pressed={on}
              aria-label={`${i + 1}. ${c.title}`}
              className={`absolute -translate-x-1/2 -translate-y-1/2 w-[23%] aspect-square rounded-full grid place-items-center text-center text-white p-[2%] transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
                on ? "scale-[1.14] z-10" : "scale-100 hover:scale-105"
              }`}
              style={{
                left: `${x}%`,
                top: `${y}%`,
                background: `radial-gradient(circle at 30% 25%, ${c.color}cc, ${c.color} 70%)`,
                boxShadow: on
                  ? `0 0 0 4px #fff, 0 0 0 7px ${c.color}55, 0 18px 40px ${c.color}66`
                  : `0 10px 24px ${c.color}40`,
              }}
            >
              <span className="leading-tight">
                <span className="block font-display font-semibold text-[clamp(0.85rem,2.6vw,1.25rem)]">
                  {i + 1}.
                </span>
                <span className="block font-display font-semibold uppercase tracking-wide text-[clamp(0.58rem,1.7vw,0.78rem)] mt-0.5">
                  <span className="sm:hidden">{c.short}</span>
                  <span className="hidden sm:inline">{c.title}</span>
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Phones: description under the ring */}
      <div
        key={`m-${active}`}
        className="values-fade md:hidden mt-6 rounded-3xl bg-white border border-black/5 shadow-[0_10px_30px_rgba(15,23,42,0.08)] p-6 text-center"
      >
        <span className="inline-block w-10 h-1 rounded-full mb-4" style={{ background: v.color }} />
        <h3 className="font-display font-semibold text-xl text-gray-900">{v.title}</h3>
        <p className="mt-2 text-gray-500 leading-relaxed">{v.text}</p>
      </div>
    </div>
  );
}
