/* Soft curved edge between sections. Place it inside a `relative` section;
   `fill` is the colour of the neighbouring section it curves into. */
export default function Curve({ position = "bottom", fill = "#fff" }) {
  const d =
    position === "bottom"
      ? "M0 0C360 70 1080 70 1440 0V80H0Z"
      : "M0 80C360 10 1080 10 1440 80V0H0Z";
  return (
    <svg
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`absolute left-0 w-full h-8 md:h-16 pointer-events-none z-[1] ${
        position === "bottom" ? "-bottom-px" : "-top-px"
      }`}
    >
      <path d={d} fill={fill} />
    </svg>
  );
}
