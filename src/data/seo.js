// Page titles and search descriptions, used by each page (<Seo />) and by the
// pre-render step that writes them into the static HTML.
// Keep titles under ~60 characters and descriptions under ~155 so search results don't cut them off.
export const seo = {
  "/": {
    title: "Dr. Sukh Mann | Surrey Chiropractor for Back & Neck Pain",
    description:
      "Chiropractor in Surrey, BC for back, neck and sports pain. ICBC and WorkSafe accepted. Book online or call (604) 581-0232.",
  },
  "/about": {
    title: "About Dr. Sukh Mann's Surrey Chiropractic Clinic",
    description:
      "Since 2007, Dr. Sukh Mann has combined chiropractic care and massage therapy in one Surrey clinic. Open late weekdays and Saturdays.",
  },
  "/dr-sukh-mann": {
    title: "Dr. Sukh Mann, BSc, RMT, DC | Chiropractor in Surrey",
    description:
      "Chiropractor and registered massage therapist who has cared for the BC Lions, Rowing Canada and athletes at the Olympic Games.",
  },
  "/care": {
    title: "Chiropractic Care in Surrey | Back, Neck & Sports Injury",
    description:
      "Chiropractic, Active Release Techniques®, massage, rehab, orthotics and laser therapy in Surrey, BC for back, neck and sports injuries.",
  },
  "/new-patients": {
    title: "New Patients | Your First Visit | Dr. Sukh Mann",
    description:
      "Your first visit takes 30–45 minutes. No referral needed. ICBC, WorkSafe BC, MSP, RCMP, Veterans Affairs and health plans accepted.",
  },
  "/contact": {
    title: "Contact & Book | Dr. Sukh Mann, Chiropractor Surrey",
    description:
      "Book online or call (604) 581-0232. Visit Dr. Sukh Mann at 202 – 10190 152A Street, Surrey, BC. Open late weekdays and Saturdays.",
  },
};

export const routes = Object.keys(seo);
