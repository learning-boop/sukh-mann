export const PHONE = "(604) 581-0232";
export const TEL = "tel:6045810232";
export const MAPS_URL = "https://maps.google.com/?cid=11867297383599268434";

// Placeholder photos from Unsplash — swap `img` URLs for real clinic photos any time.
export const painCards = [
  { icon: "🦴", title: "Back Pain", line: "We find the cause. Then we treat it.",
    img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=70&auto=format&fit=crop" },
  { icon: "💆", title: "Neck Pain", line: "Gentle care to help you move again.",
    img: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&q=70&auto=format&fit=crop" },
  { icon: "🤕", title: "Headaches", line: "Many people feel relief after a few visits.",
    img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=70&auto=format&fit=crop" },
  { icon: "🚗", title: "Car Accident", line: "ICBC pays. You pay nothing.",
    img: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=70&auto=format&fit=crop" },
  { icon: "🏃", title: "Sports Injury", line: "The same care pro athletes get.",
    img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=70&auto=format&fit=crop" },
  { icon: "🦶", title: "Foot Pain", line: "Help for heel pain and sore feet.",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=70&auto=format&fit=crop" },
];

export const steps = [
  { n: "1", title: "You call us", text: `Call ${PHONE}. Same-day visits are often possible.` },
  { n: "2", title: "We find the cause", text: "Dr. Sukh checks your whole body. Not just where it hurts." },
  { n: "3", title: "You get a plan", text: "A simple plan, made just for you. Step by step." },
];

export const testimonials = [
  { quote: "Sukh has helped me with golfers elbow with the ART. I've had amazing results.", name: "Marie P." },
  { quote: "Headaches have bothered me for years… Dr. Sukh has finally given me some hope in living headache free.", name: "Andrea B." },
  { quote: "My Plantar Fasciitis is completely gone and now I can get back to what I enjoy most… running!", name: "Ann H." },
  { quote: "He's helped me recover from a car accident. With his help I am as good as new.", name: "Pinder N." },
  { quote: "Dr. Mann listens well, gives you the time needed and demonstrates an almost intuitive skill in finding and treating the cause[s] of your pain.", name: "Dean A." },
  { quote: "Thanks for keeping us on the water.", name: "Canadian National Rowing Team" },
  { quote: "Definitely the best chiropractor that I have gone to in 40 years!", name: "Edith R." },
];

export const hours = [
  ["Monday", "9:00 am – 6:00 pm"],
  ["Tuesday", "8:00 am – 7:00 pm"],
  ["Wednesday", "9:00 am – 6:00 pm"],
  ["Thursday", "8:00 am – 7:00 pm"],
  ["Friday", "8:30 am – 6:00 pm"],
  ["Saturday", "8:00 am – 4:00 pm"],
];

export const services = [
  { title: "Chiropractic Care", line: "Gentle adjustments to help your spine and joints move right." },
  { title: "Active Release (ART\u00ae)", line: "Hands-on care that finds tight spots and releases them." },
  { title: "Registered Massage", line: "Massage from a trained expert. Helps muscles relax and heal." },
  { title: "Active Rehab", line: "Simple exercises that make you strong again. Step by step." },
  { title: "Physiotherapy", line: "Care that helps you move well after pain or injury." },
  { title: "Custom Orthotics", line: "Shoe inserts made just for your feet." },
  { title: "Laser Therapy", line: "A gentle light used on sore spots to help you feel better." },
];

export const EMAIL = "info@drsukhmann.com";

// Full detail for the Care page. Simple English, no cure promises.
export const careDetails = [
  {
    title: "Chiropractic Care",
    what: "Dr. Sukh checks how your spine and joints move. Then he uses gentle adjustments to help them move right again.",
    helps: ["Back pain", "Neck pain", "Stiff joints", "Poor posture"],
    quote: { text: "Definitely the best chiropractor that I have gone to in 40 years!", name: "Edith R." },
  },
  {
    title: "Active Release Techniques\u00ae (ART)",
    what: "A hands-on method. Dr. Sukh finds tight or scarred muscle spots and releases them while you move.",
    helps: ["Golfer's elbow", "Tight muscles", "Old injuries", "Overuse pain"],
    quote: { text: "Sukh has helped me with golfers elbow with the ART. I've had amazing results.", name: "Marie P." },
  },
  {
    title: "Registered Massage Therapy",
    what: "Dr. Sukh is also a trained massage therapist. Massage helps your muscles relax so other care works better.",
    helps: ["Muscle tension", "Stress", "Sore back and shoulders"],
    quote: null,
  },
  {
    title: "Active Rehab",
    what: "Simple exercises picked just for you. You get stronger step by step, at your own pace.",
    helps: ["After car accidents", "After injuries", "Getting back to sport"],
    quote: { text: "He follows up with exercises or other suggestions that you can do to keep healthy and active.", name: "Edith R." },
  },
  {
    title: "Physiotherapy",
    what: "Care that helps your body move well again after pain or injury.",
    helps: ["Stiffness", "Weakness", "Recovery after injury"],
    quote: null,
  },
  {
    title: "Custom Orthotics",
    what: "Shoe inserts made just for your feet. They support you with every step.",
    helps: ["Heel pain", "Flat feet", "Foot and knee strain"],
    quote: { text: "My Plantar Fasciitis is completely gone and now I can get back to what I enjoy most\u2026 running!", name: "Ann H." },
  },
  {
    title: "Laser Therapy",
    what: "A gentle light used on sore spots. It does not hurt. Many people find it soothing.",
    helps: ["Sore joints", "Soft tissue injuries"],
    quote: { text: "My knee wouldn't bend and I was on crutches on 3 days, had some laser and treatment that helped a bunch.", name: "Jovan M." },
  },
];

// Simple-English FAQs (based on the clinic's own answers)
export const faqs = [
  { q: "What happens on my first visit?", a: "We talk about your health. Dr. Sukh checks your body with care. Then you get a plan made just for you. Care may even start the same day." },
  { q: "How long does a visit take?", a: "Most visits take about 20 to 30 minutes." },
  { q: "Do I need X-rays first?", a: "Usually not. Dr. Sukh only asks for X-rays when they are really needed." },
  { q: "Can I come in today?", a: "Often, yes. Same-day visits are often possible. Just call us." },
  { q: "I was in a car accident. What do I pay?", a: "If ICBC covers you, you pay nothing. We do the paperwork for you." },
  { q: "Do you take my insurance plan?", a: "Many extended health plans cover this care. Call us and we will help you check." },
];

// Dr. Sukh journey timeline
export const timeline = [
  { year: "Growing up", title: "A love of sports", text: "Dr. Sukh played lots of sports as a kid. When he got hurt, a chiropractor always helped him get back in the game." },
  { year: "1999", title: "Registered Massage Therapist", text: "He trained at the West Coast College of Massage Therapy." },
  { year: "BSc", title: "Human Biology degree", text: "He earned a bachelor's degree in human biology." },
  { year: "2007", title: "Doctor of Chiropractic", text: "He studied at the University of Western States in Portland, then opened his practice." },
  { year: "Always learning", title: "New skills every year", text: "He keeps taking courses, like Active Release Techniques\u00ae and Dynamic Neuromuscular Stabilization." },
  { year: "Pro sports", title: "Team chiropractor", text: "He has worked with the BC Lions, Vancouver Whitecaps, Rowing Canada, and the SFU hockey team." },
  { year: "World stage", title: "Olympics and beyond", text: "He has helped at the Olympic and Paralympic Games, Pan Am Games, IRONMAN\u00ae, and the Vancouver Marathon." },
  { year: "Today", title: "Family first", text: "Off work, he loves family time, cycling, and playing hockey. He also coaches his kids' hockey team." },
];

// Featured services for the home-page accordion (placeholder photos - swap for clinic shots)
export const featuredServices = [
  { title: "Chiropractic Care", line: "Gentle adjustments to help your spine and joints move right.",
    img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1000&q=70&auto=format&fit=crop" },
  { title: "Active Release (ART\u00ae)", line: "Hands-on care that finds tight spots and releases them.",
    img: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=1000&q=70&auto=format&fit=crop" },
  { title: "Registered Massage", line: "Massage from a trained expert. Helps muscles relax and heal.",
    img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1000&q=70&auto=format&fit=crop" },
  { title: "Active Rehab", line: "Simple exercises that make you strong again. Step by step.",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1000&q=70&auto=format&fit=crop" },
  { title: "Physiotherapy", line: "Care that helps you move well after pain or injury.",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1000&q=70&auto=format&fit=crop" },
];

// Conditions treated (from the clinic's own site)
export const conditions = [
  "Back pain", "Neck pain", "Headaches", "Car accident injuries",
  "Sports injuries", "Plantar fasciitis", "Golfer's elbow", "Dizziness",
  "Muscle tension", "Stiff joints", "Poor posture", "Overuse injuries",
];
