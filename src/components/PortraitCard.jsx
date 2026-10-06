import { useEffect, useRef } from "react";

/* Premium portrait card: mouse-follow 3D tilt, cursor spotlight, rotating glow border,
   slow Ken Burns zoom, and floating credential badges. Motion is off for reduced-motion users. */
export default function PortraitCard({
  src,
  alt,
  position = "36% 28%",
  badges = [],
  className = "",
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(hover: hover)").matches) return;
    let raf = 0;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--rx", `${((0.5 - y) * 10).toFixed(2)}deg`);
        el.style.setProperty("--ry", `${((x - 0.5) * 12).toFixed(2)}deg`);
        el.style.setProperty("--mx", `${(x * 100).toFixed(1)}%`);
        el.style.setProperty("--my", `${(y * 100).toFixed(1)}%`);
      });
    };
    const onLeave = () => {
      cancelAnimationFrame(raf);
      el.style.setProperty("--rx", "0deg");
      el.style.setProperty("--ry", "0deg");
    };
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div className={`portrait-stage relative w-full max-w-md mx-auto ${className}`}>
      {/* Soft ambient glow behind the card */}
      <div className="absolute -inset-10 rounded-full bg-[#0071E3]/25 blur-3xl portrait-pulse" />

      <div ref={ref} className="portrait-tilt relative">
        {/* Rotating gradient border */}
        <div className="portrait-ring relative rounded-[2rem] p-[2px] overflow-hidden">
          <div className="relative rounded-[calc(2rem-2px)] overflow-hidden aspect-[4/5] bg-[#12131a]">
            <img
              src={src}
              alt={alt}
              loading="lazy"
              className="portrait-zoom absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: position }}
            />
            {/* Bottom fade + cursor spotlight */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="portrait-spot absolute inset-0" />
          </div>
        </div>

        {badges.map((b, i) => (
          <div
            key={b.title}
            className={`portrait-badge absolute flex items-center gap-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_10px_40px_rgba(0,0,0,0.4)] px-4 py-3 text-white ${
              i % 2 === 0 ? "-left-4 md:-left-10 top-[12%]" : "-right-4 md:-right-10 bottom-[14%]"
            }`}
            style={{ animationDelay: `${i * 1.6}s` }}
          >
            <span className="grid place-items-center w-9 h-9 rounded-xl bg-[#0071E3] text-lg shrink-0">
              {b.icon}
            </span>
            <span className="leading-tight">
              <span className="block font-display font-semibold text-sm">{b.title}</span>
              <span className="block text-xs text-white/70">{b.sub}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
