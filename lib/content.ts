export const site = {
  name: "Danny Papageorge",
  role: "Product Designer",
  email: "dannypapageorge@gmail.com",
  phone: "(561) 512-7123",
  location: "Available remote / hybrid",
  tagline:
    "I turn complex product platforms into clear, user-friendly experiences.",
  social: [
    { label: "Email", href: "mailto:dannypapageorge@gmail.com" },
    { label: "Portfolio", href: "https://dannypapageorge.com" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
  ],
};

export const nav = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

/** Sharp, defensible positioning line for the hero */
export const positioning = {
  kicker: "Product Designer · 15+ years · Travel · Energy · Fintech",
  intro:
    "I’m Danny, a product designer who came up through graphic design and illustration. For 15+ years I’ve turned complex platforms into clear products that ship continuously. I still sketch every system by hand before a single pixel exists.",
};

/** Real, interview-proof credibility, no invented percentages */
export const proofPoints = [
  { value: "15+", label: "Years shipping digital products" },
  { value: "IC → Lead", label: "Promoted twice in 5 years at Switchfly" },
  { value: "5+", label: "Industries, global leaders to startups" },
  { value: "10+", label: "Named brands shipped for" },
];

/** Real clients & employers, instant 15-second credibility */
export const clients = [
  "American Express",
  "JetBlue",
  "American Airlines",
  "Carvana",
  "Credit Suisse",
  "The Michael J. Fox Foundation",
  "Comcast",
  "Specialized",
  "Brewers Association",
  "Switchfly",
  "Uplight",
  "Pellucid Analytics",
  "Mondo Robot",
];

export const valueProps = [
  {
    n: "01",
    title: "Strategy before pixels",
    body: "I start with the business problem and the decision being made, not the screen. After 15+ years shipping features on living platforms, I know the best interface is often the one you delete.",
  },
  {
    n: "02",
    title: "Systems, not screens",
    body: "Wireframes, prototypes, design systems, and data visualization across products where new features ship constantly. I design the model first, so the UI mostly designs itself.",
  },
  {
    n: "03",
    title: "Comfortable in the mess",
    body: "Travel, energy, financial analytics, nonprofits, and consumer brands, from global leaders to startups. I’m at my best turning a vague, high-stakes ambiguity into a plan a team can ship.",
  },
];

export const philosophy = [
  {
    title: "Delete before you design",
    body: "The most valuable thing I shipped at Switchfly was often the step I removed. I hunt for what can disappear before I polish what’s left. It’s faster, cheaper, and kinder to the person using it.",
  },
  {
    title: "If you can’t draw it, you don’t get it",
    body: "Fifteen years in, I still sketch every system by hand before I open Figma. A pen finds the gaps in your thinking that pixels are happy to paper over.",
  },
  {
    title: "A design system is a settled argument",
    body: "On a platform that ships continuously, the system is the only thing keeping a thousand small decisions from drifting apart. I build the agreement, not just the components.",
  },
  {
    title: "Research is how you stop being wrong in public",
    body: "Wireframes and opinions get a team moving; testing keeps it honest. I’d rather be corrected by five users in a room than by the whole market after launch.",
  },
];

export type Job = {
  company: string;
  role: string;
  period: string;
  industry: string;
  blurb: string;
  highlights: string[];
};

export const experience: Job[] = [
  {
    company: "Freelance",
    role: "Independent Product Designer & Brand Consultant",
    period: "2025-Present",
    industry: "Product & brand",
    blurb:
      "Independent product and brand design since 2025, partnering with founders and teams from concept through shipped work.",
    highlights: [
      "Product design consulting: strategy, UX, prototyping, and design systems",
      "Designing and shipping new features for existing products, from problem framing to handoff",
    ],
  },
  {
    company: "Switchfly",
    role: "Product Designer",
    period: "2020-2025",
    industry: "Travel",
    blurb:
      "Led product design for a travel commerce platform, managing a team of designers while staying hands-on as an individual contributor. Promoted from UX/UI Designer to Senior to Lead across five years.",
    highlights: [
      "Managed a team of designers creating intuitive, engaging travel product experiences",
      "Delivered wireframes, prototypes, design mocks, and user research/testing as an IC",
      "Grew from UX/UI Designer (2020) to Senior (2022) to Lead (2023)",
    ],
  },
  {
    company: "Uplight",
    role: "Product Designer",
    period: "2019-2020",
    industry: "Energy",
    blurb:
      "Designed, implemented, and tested new features across multiple product lines in the clean-energy space, working alongside product owners, engineers, and scrum masters.",
    highlights: [
      "Collaborated cross-functionally to design and ship features across product lines",
      "Streamlined the client onboarding process for Uplight’s Marketplace product",
    ],
  },
  {
    company: "Mondo Robot",
    role: "Interaction Designer",
    period: "2015-2019",
    industry: "Agency · Various",
    blurb:
      "Designed digital products, from websites and mobile apps to platforms, for clients ranging from global industry leaders to startups at a Boulder creative agency.",
    highlights: [
      "Clients included The Michael J. Fox Foundation, Comcast, and Specialized Bikes",
      "Also shipped work for the Brewers Association, CoreDial, and Goldenvoice",
      "Where the graphic-design background and product practice fully merged",
    ],
  },
  {
    company: "Pellucid Analytics",
    role: "Designer",
    period: "2013-2015",
    industry: "Financial analytics",
    blurb:
      "Worked with product owners and development teams to solve complex problems in the financial analytics space.",
    highlights: [
      "Created wireframes, prototypes, and high-fidelity UI for core products",
      "Designed supporting data visualizations for financial analytics",
    ],
  },
];

export const skills = [
  {
    group: "Practice",
    items: ["Product & UX strategy", "Interaction design", "UI & visual design", "Information architecture", "End-to-end product design"],
  },
  {
    group: "Research",
    items: ["Discovery & user interviews", "Usability testing", "A/B testing", "Synthesis to design direction"],
  },
  {
    group: "Systems & delivery",
    items: ["Design systems", "Prototyping", "Wireframing", "Design-to-dev handoff", "Roadmap & iteration"],
  },
  {
    group: "Collaboration",
    items: ["Cross-functional partnership", "Storytelling & alignment", "Constructive pushback", "Mentorship & feedback"],
  },
  {
    group: "Tools & AI",
    items: ["Figma", "Claude & AI-assisted design", "Sketch", "Adobe Creative Suite"],
  },
];

/** How Danny uses AI in his actual practice, modern, grounded, not gimmicky */
export const aiWorkflow = {
  intro:
    "AI is part of how I work now, a force multiplier, not a gimmick. I stay the designer and the decision-maker; it removes the friction between having an idea and seeing a working version of it.",
  tools: [
    {
      name: "Claude",
      note: "Design thinking, writing, prototyping, and shipping real code, including Cowork and Code.",
    },
  ],
  proof:
    "I designed and built Moody, a mood-tracking app, pairing Figma with Claude, GitHub, and Supabase to go from sketch to a live, deployed web app entirely on my own.",
};

export const education = [
  {
    school: "BA, Graphic Design",
    detail: "Flagler College, the fine-arts foundation that still drives the product work",
  },
  {
    school: "Ongoing",
    detail: "Self-directed study in illustration, typography, and data visualization",
  },
];

/** little field-guide style facts for the About page */
export const fieldNotes = [
  "Snowboards, bikes, and does yoga, ideally all three on a good week.",
  "Explores the mountains with Banjo, the most senior member of the team (he’s a dog).",
  "Still draws, logos and illustrations are where the graphic-design degree shows.",
  "15+ years building websites, mobile apps, and complex product platforms.",
  "Has shipped for the Michael J. Fox Foundation, Comcast, Specialized, and more.",
  "Will happily argue about grid systems and the Oxford comma.",
];
