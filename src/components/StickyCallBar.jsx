import { PHONE, TEL, BOOK_URL } from "../data/site.js";
import Icon from "./Icon.jsx";

/* Mobile-only floating bar: book online (main action) or call */
export default function StickyCallBar() {
  return (
    <div className="md:hidden fixed bottom-4 inset-x-4 z-50 grid grid-cols-[1fr_auto] gap-2">
      <a
        href={BOOK_URL}
        target="_blank" rel="noopener noreferrer"
        className="btn-primary call-pulse py-4 text-base shadow-[0_16px_40px_rgba(0,113,227,0.45)]"
      >
        <Icon name="calendar" className="w-4 h-4" />
        Book online
      </a>
      <a
        href={TEL}
        aria-label={`Call ${PHONE}`}
        className="btn-light px-5 py-4 text-base border border-black/5 shadow-[0_16px_40px_rgba(0,0,0,0.25)]"
      >
        <Icon name="phone" className="w-4 h-4" />
        Call
      </a>
    </div>
  );
}
