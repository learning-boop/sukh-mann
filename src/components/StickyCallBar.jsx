import { PHONE, TEL } from "../data/site.js";

export default function StickyCallBar() {
  return (
    <a
      href={TEL}
      className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-[#0071E3] text-white text-center py-4 font-medium text-base active:bg-[#0060c9]"
    >
      📞 Call {PHONE}
    </a>
  );
}
