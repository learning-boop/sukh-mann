export const PHONE = "(604) 581-0232";
export const TEL = "tel:6045810232";
export const MAPS_URL = "https://maps.google.com/?cid=11867297383599268434";

// Bento grid cards (client-approved AI images in /public/images/conditions)
export const painCards = [
  { icon: "🦴", title: "Back Pain", line: "We find the cause. Then we treat it.",
    img: "/images/conditions/back.jpg" },
  { icon: "💆", title: "Neck Pain", line: "Gentle care to help you move again.",
    img: "/images/conditions/neck.jpg" },
  { icon: "🤕", title: "Headaches", line: "From tension headaches to migraines. Many people feel relief after a few visits.",
    img: "/images/conditions/headache.jpg" },
  { icon: "🚗", title: "Car Accident", line: "ICBC pays. You pay nothing.",
    img: "/images/conditions/car.jpg" },
  { icon: "🏃", title: "Sports Injury", line: "The same care pro athletes get.",
    img: "/images/conditions/sports.jpg" },
  { icon: "🦶", title: "Foot Pain", line: "Help for heel pain and sore feet.",
    img: "/images/conditions/foot.jpg" },
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
  { quote: "He's helped me recover from a car accident. I was having daily headaches, neck and back stiffness, wasn't able to work for 2 months. With his help I am as good as new.", name: "Pinder N." },
  { quote: "Dr. Mann listens well, gives you the time needed and demonstrates an almost intuitive skill in finding and treating the cause[s] of your pain.", name: "Dean A." },
  { quote: "Working with all those athletes and teams, why wouldn't I go and see him!", name: "Elizabeth L." },
  { quote: "Thanks for keeping us on the water.", name: "Canadian National Rowing team" },
  { quote: "My first visit with Dr. Mann determined the exact area of injury. We've been working ever since to get the injury healed and the improvement has been amazing. Highly recommend Dr. Mann!", name: "Jo H." },
  { quote: "He follows up with exercises or other suggestions that you can do to keep healthy and active. Definitely the best chiropractor that I have gone to in 40 years!", name: "Edith R." },
  { quote: "Dr. Mann is a gifted, knowledgeable chiropractor who spends the time to give you an excellent treatment each and every time.", name: "Toni P." },
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

// Full detail for the Care page. Paraphrased from the clinic's own pages. Simple English.
export const careDetails = [
  {
    title: "Chiropractic Care",
    img: "/images/services/chiro.jpg",
    what: "When a joint sits out of place, the muscles around it get tight. Dr. Sukh uses gentle adjustments plus muscle work to fix both. This takes pressure off your nerves and helps you move more. Don't like the classic adjustment? No problem. He offers gentler ways, like the Activator\u00ae tool, Drop Table, and Graston. Your choice always comes first.",
    helps: ["Neck pain", "Mid-back pain", "Sciatica", "Pinched nerves"],
    quote: { text: "Definitely the best chiropractor that I have gone to in 40 years!", name: "Edith R." },
  },
  {
    title: "Active Release Techniques\u00ae (ART)",
    img: "/images/services/art.jpg",
    what: "ART is a special, patented way to treat muscles, tendons, ligaments, nerves, and fascia. Old injuries can leave scar tissue that sticks things together. ART uses gentle tension to break these stuck spots free.",
    helps: ["Golfer's elbow", "Scar tissue", "Old injuries", "Overuse pain"],
    quote: { text: "Sukh has helped me with golfers elbow with the ART. I've had amazing results.", name: "Marie P." },
  },
  {
    title: "Registered Massage Therapy",
    img: "/images/services/massage.jpg",
    what: "Dr. Sukh is also a Registered Massage Therapist. He mixes muscle work into your care, so joints and muscles get help together \u2014 the best of both worlds in one visit.",
    helps: ["Tight muscles", "Sore back and shoulders", "Stiffness"],
    quote: null,
  },
  {
    title: "Active Rehab",
    img: "/images/services/rehab.jpg",
    what: "Care does not stop when you leave. You get simple home stretches and exercises, picked for you, that speed up your progress and help keep the problem from coming back.",
    helps: ["After car accidents", "After injuries", "Getting back to sport"],
    quote: { text: "He follows up with exercises or other suggestions that you can do to keep healthy and active.", name: "Edith R." },
  },
  {
    title: "Physiotherapy",
    img: "/images/services/physio.jpg",
    what: "Physiotherapy is part of the clinic's full-body approach. It helps your body move well again after pain or injury.",
    helps: ["Stiffness", "Weakness", "Recovery after injury"],
    quote: null,
  },
  {
    title: "Custom Orthotics",
    img: "/images/services/orthotics.jpg",
    what: "Your feet are your body's base. We take an impression of your foot and send it to a lab, where a 3D model is made. Your orthotics are then built to match your exact feet.",
    helps: ["Foot pain", "Heel pain", "Weak arches"],
    quote: { text: "My Plantar Fasciitis is completely gone and now I can get back to what I enjoy most\u2026 running!", name: "Ann H." },
  },
  {
    title: "Class IV Laser Therapy",
    img: "/images/services/laser.jpg",
    what: "The LiteCure laser sends light deep into your body. It gives your cells more energy to repair sore spots, and it may bring down swelling. It does not hurt.",
    helps: ["Sprained ankles", "Arthritis", "Bursitis", "Plantar fasciitis"],
    quote: { text: "My knee wouldn't bend and I was on crutches on 3 days, had some laser and treatment that helped a bunch.", name: "Jovan M." },
  },
  {
    title: "Movement Assessments",
    img: "/images/services/movement.jpg",
    what: "Dr. Sukh watches how you move through special test patterns (SFMA and FMS). If one area is not doing its job, he gives you exercises to make it strong and steady again.",
    helps: ["Finding weak spots", "Better movement", "Injury prevention"],
    quote: null,
  },
];

// Simple-English FAQs (paraphrased from the clinic's own answers)
export const faqs = [
  { q: "What happens on my first visit?", a: "We talk about your health story. Dr. Sukh does a careful check to find the cause. He explains what he found. Then, after your OK, your first treatment can start the same day." },
  { q: "How long does a visit take?", a: "Plan 30 to 45 minutes for your first visit. After that, most visits take about 20 to 30 minutes." },
  { q: "Do I need a doctor's referral?", a: "No. You can book with us directly. No referral is needed." },
  { q: "Do I need X-rays first?", a: "Usually not. Dr. Sukh only asks for X-rays when they are really needed." },
  { q: "Can I come in today?", a: "Often, yes. Same-day visits are often possible. Just call us." },
  { q: "I was in a car accident. What do I pay?", a: "If ICBC covers you, you pay nothing. We do the paperwork for you." },
  { q: "Do you take my insurance plan?", a: "Most extended health plans cover chiropractic care and orthotics. Many pay back 80% or more. We also work with WorkSafe BC, MSP, RCMP, and Veterans Affairs." },
  { q: "If I start, do I have to come forever?", a: "No. That is a myth. Some people like a visit each month because it feels good. But it is always your choice how long you come." },
];

// Dr. Sukh journey timeline (from his bio page)
export const timeline = [
  { year: "Growing up", title: "A love of sports", text: "Dr. Sukh played lots of sports as a kid. When he got hurt, a chiropractor always helped him get back in the game." },
  { year: "Training", title: "Registered Massage Therapist", text: "He trained at the West Coast College of Massage Therapy. He also earned a bachelor's degree in human biology." },
  { year: "Portland", title: "Doctor of Chiropractic", text: "He studied chiropractic at the University of Western States in Portland, Oregon." },
  { year: "2007", title: "Opening his practice", text: "He has been in practice since 2007, mixing muscle care and joint care in every visit." },
  { year: "Always learning", title: "New skills every year", text: "He keeps taking courses, like Active Release Techniques\u00ae and Dynamic Neuromuscular Stabilization." },
  { year: "Pro sports", title: "Team chiropractor", text: "He has worked with the CFL's BC Lions, the Vancouver Whitecaps, Rowing Canada, and the SFU hockey team." },
  { year: "World stage", title: "Big events, near and far", text: "The Olympics, Paralympics, Pan Am Games, IRONMAN\u00ae, World Police and Fire Games, the Vancouver Marathon, and more. His work has taken him across Canada, Europe, and Mexico." },
  { year: "Today", title: "Family first", text: "Off work, he loves family time, vacations, cycling, and playing hockey. He also coaches his kids' ice hockey team." },
];

// Featured services for the home-page accordion (client-approved AI images in /public/images/services)
export const featuredServices = [
  { title: "Chiropractic Care", line: "Gentle adjustments to help your spine and joints move right.",
    img: "/images/services/chiro.jpg" },
  { title: "Active Release (ART\u00ae)", line: "Hands-on care that finds tight spots and releases them.",
    img: "/images/services/art.jpg" },
  { title: "Registered Massage", line: "Massage from a trained expert. Helps muscles relax and heal.",
    img: "/images/services/massage.jpg" },
  { title: "Active Rehab", line: "Simple exercises that make you strong again. Step by step.",
    img: "/images/services/rehab.jpg" },
  { title: "Physiotherapy", line: "Care that helps you move well after pain or injury.",
    img: "/images/services/physio.jpg" },
];

// Conditions treated — the clinic's own list from its Chiropractic Care page
export const conditions = [
  "Neck pain", "Mid-back pain", "Headaches", "Whiplash",
  "Sciatica", "Disc issues", "Pinched nerves", "Numbness & tingling",
  "Shoulder pain", "Frozen shoulder", "Golfer's elbow", "Tennis elbow",
  "Carpal tunnel", "TMJ (jaw) issues", "Tendinitis", "Repetitive use injuries",
  "Sports injuries", "Sprained ankles", "Knee arthritis", "Foot pain",
  "Postural strain", "Pre- & post-surgery care",
];
