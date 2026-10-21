import { PHONE, TEL } from "../data/site.js";
import Icon from "./Icon.jsx";

/* Mobile-only floating call button */
export default function StickyCallBar() {
  return (
    <div className="md:hidden fixed bottom-4 inset-x-4 z-50">
      <a
        href={TEL}
        className="btn-primary call-pulse w-full py-4 text-base shadow-[0_16px_40px_rgba(0,113,227,0.45)]"
      >
        <span className="grid place-items-center w-8 h-8 rounded-full bg-white/20">
          <Icon name="phone" className="w-4 h-4" />
        </span>
        Call {PHONE}
      </a>
    </div>
  );
}
