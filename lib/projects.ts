export type Metric = {
  value: string;
  label: string;
};

export type CaseSection = {
  /** kicker shown as a mono field-guide label */
  kicker: string;
  /** section heading */
  title: string;
  /** one or more paragraphs of prose */
  body: string[];
  /** optional bullet list rendered as field notes */
  notes?: string[];
  /** optional pull quote */
  pullQuote?: { quote: string; attribution?: string };
};

export type Project = {
  slug: string;
  title: string;
  /** short tagline for cards */
  tagline: string;
  industry: string;
  role: string;
  year: string;
  /** one-line summary of the outcome for the card */
  summary: string;
  /** accent label e.g. "Flagship case study" */
  flag?: string;
  /** is the full case study written, or template/teaser only */
  status: "full" | "teaser";
  /** disciplines exercised, drives the tag chips */
  disciplines: string[];
  /** headline metrics for the case study hero */
  metrics?: Metric[];
  /** the flagship case-study body, present when status === "full" */
  sections?: CaseSection[];
  /** quick facts sidebar */
  facts?: { label: string; value: string }[];
  /** what a teaser shows instead of full content */
  teaser?: string;
  /** optional cover image path (e.g. "/work/moody-cover.png"); falls back to a designed plate */
  image?: string;
  /** optional live/embeddable prototype URL, renders an interactive device frame */
  liveUrl?: string;
  /** optional real screenshots from the work, rendered as a figures gallery */
  gallery?: { src: string; caption: string; fullWidth?: boolean }[];
  /** optional embedded videos (e.g. Vimeo player URLs), rendered as motion studies */
  videos?: { src: string; caption: string }[];
  /** hand-drawn illustration key used on project cards (no screenshots on cards) */
  motif?:
    | "travel"
    | "wellbeing"
    | "energy"
    | "research"
    | "cycling"
    | "data"
    | "brew"
    | "coffee";
};

const rawProjects: Project[] = [
  {
    slug: "switchfly-travel-platform",
    motif: "travel",
    title: "Switchfly",
    tagline: "Leading design on a living travel platform",
    industry: "Travel · Commerce platform",
    role: "Product Designer",
    year: "2020-2025",
    summary:
      "Product Designer on a deeply customizable travel commerce platform, booking flights, hotels, cars, and activities with points and cash for clients like American Express and JetBlue, across many markets, cobrands, and devices.",
    flag: "Travel platform · 5 years",
    status: "full",
    image:
      "https://images.squarespace-cdn.com/content/v1/5c80ca63815512bdebc4dff2/05eb9c65-cb71-4009-aaa2-99f9081facbe/tool-tip-example.png",
    disciplines: ["Product strategy", "Design leadership", "Design systems", "UX research", "UI"],
    metrics: [
      { value: "3 roles", label: "UX/UI → Senior → Lead in five years" },
      { value: "6", label: "Engineering teams supported as IC" },
      { value: "5×/yr", label: "Product Increments planned ahead (SAFe)" },
      { value: "1 : many", label: "One platform, many clients & markets" },
    ],
    facts: [
      { label: "Company", value: "Switchfly, customizable travel commerce platform" },
      { label: "My role", value: "Product Designer (grew UX/UI → Senior → Lead)" },
      { label: "Clients", value: "Airlines & card brands, e.g. JetBlue, American Express" },
      { label: "Scope", value: "IC for six engineering teams; managed one designer" },
      { label: "Process", value: "SAFe / Product Increments · JIRA stories & epics" },
      { label: "Tenure", value: "2020-2025" },
    ],
    gallery: [
      {
        src: "/work/switchfly-multiroom-hero.png",
        caption: "Multi-room hotel selection, comparing rooms, rates, and change policies across travelers",
      },
      {
        src: "https://images.squarespace-cdn.com/content/v1/5c80ca63815512bdebc4dff2/415bdbd0-394b-454b-86da-075ccdb2a5fa/scenarios.png",
        caption: "Designing the indicator framework across fare scenarios",
      },
      {
        src: "https://images.squarespace-cdn.com/content/v1/5c80ca63815512bdebc4dff2/1400a966-00d6-4079-a8c2-3ba3d5283c10/tooltips.png",
        caption: "The default tooltip system, concise labels and visual tags",
      },
      {
        src: "https://images.squarespace-cdn.com/content/v1/5c80ca63815512bdebc4dff2/1e4bd43d-f945-47b6-89d7-cdd925d0f621/Fare-Rules.png",
        caption: "Fare rules made scannable right at the decision point",
      },
    ],
    sections: [
      {
        kicker: "Business context",
        title: "One platform, a thousand different experiences",
        body: [
          "Switchfly is a highly customizable travel commerce platform. End users book flights, hotels, cars, and activities using loyalty points, cash, or both, but who that user is varies enormously. The platform powers travel for airlines like JetBlue, card brands like American Express, and other companies built on loyalty points.",
          "Every client runs any number of markets, US, Canada, Mexico, Australia, Japan and more, and each market carries its own configuration: which features are on, how they behave, how they look, the language, the content, the copy, and custom overrides. The same product can feel like a completely different app depending on the client, the cobrand, and the device.",
        ],
        notes: [
          "Clients: airlines (JetBlue), card brands (American Express), loyalty programs",
          "Each client runs multiple markets, each independently configured",
          "Configuration controls features, behavior, design, language, and copy",
          "The experience differs wildly by client, cobrand, and device",
        ],
      },
      {
        kicker: "Problem definition",
        title: "Consistency on top of inconsistent data",
        body: [
          "Beneath all that customization sat a harder problem. Every product is sourced from external connectors like Expedia, and each connector structures and names its data differently. Presenting an aggregated, trustworthy set of results meant first understanding those variations cold, then designing so they read as consistently as possible no matter where they came from.",
          "So the real design challenge was rarely “make this screen prettier.” It was: how do you create one coherent, scannable experience across inconsistent source data, dozens of market configurations, and clients who can override almost anything?",
        ],
        pullQuote: {
          quote:
            "The platform could look like almost anything for almost anyone. My job was to make sure it always felt clear.",
        },
      },
      {
        kicker: "Constraints",
        title: "What I designed around",
        body: [
          "Real constraints shaped every decision, and naming them early kept the work honest about trade-offs.",
        ],
        notes: [
          "Multi-client, multi-market: one change had to hold up across many configurations",
          "Connector data (e.g. Expedia) arrived structured and named inconsistently",
          "Clients could override copy, content, and interface, so defaults had to be robust",
          "SAFe delivery: work planned in Product Increments, 1-2 PIs ahead, across six engineering teams",
        ],
      },
      {
        kicker: "Process",
        title: "Designing at platform scale, and building the process to do it",
        body: [
          "I supported six engineering teams as an individual contributor while taking on manager and director-level duties, including managing another designer. Work was planned in SAFe Product Increments, five PIs a year, five sprints each, ten days a sprint, so I partnered with product owners one to two PIs ahead, writing stories and epics in JIRA, with a major release every PI plus minor releases throughout.",
          "To keep design coherent across that surface area, I built process, not just screens. I started twice-weekly “design forum” hours, 60-90 minutes open to Engineering, Product, QA, and Sales, to collaborate and surface insight across the company. And I introduced a new intake process for design requests, with a design story template product owners could actually use.",
        ],
        notes: [
          "IC across six engineering teams; managed one designer",
          "SAFe Product Increments, planned 1-2 PIs ahead in JIRA",
          "Founded twice-weekly cross-functional “design forum” hours",
          "Created a design-request process and a design story template for POs",
        ],
      },
      {
        kicker: "Collaboration",
        title: "Between six teams, internal stakeholders, and Amex",
        body: [
          "Platform work is relentless coordination. Beyond the six engineering teams, I met weekly with internal stakeholders and clients, primarily American Express, to walk through upcoming work, work in progress, and customer feedback on what we’d just shipped.",
          "Managing another designer and running the design forum meant I was as much a connector between disciplines as a maker. The request process and story template existed precisely so collaboration could scale without everything routing through me.",
        ],
        pullQuote: {
          quote:
            "Weekly time with Amex kept the work honest, I was never more than seven days from real client feedback.",
          attribution: "On working with enterprise clients",
        },
      },
      {
        kicker: "Featured work",
        title: "Flight indicator tooltips & fare rules",
        body: [
          "One representative slice: flight search results asked users to interpret fare flexibility, baggage inclusion, and change policies with almost no visual hierarchy. I introduced a clearer indicator framework, concise labels, visual tags, and contextual tooltips that surface the critical details right at the decision point, inside the search result cards.",
          "Because each client can edit the language, I wrote and designed the defaults to reduce ambiguity around fare rules and fees, provide immediate clarification without forcing deeper navigation, and stay visually consistent across the card. Better hierarchy and contextual disclosure lowered the cognitive load of comparing flights and helped users move to checkout with more confidence.",
        ],
        notes: [
          "Reduced time spent on the search results page",
          "Improved information clarity and scannability",
          "Supported a faster checkout through quicker, more confident decisions",
        ],
      },
      {
        kicker: "Scope & range",
        title: "From XL features to one-client fixes",
        body: [
          "The work ranged widely in size and scope, the goal, where possible, was always to make it available to every client. Some were brand-new features; some were redesigns of existing pages; some were small, surgical fixes for a single client.",
        ],
        notes: [
          "XL, Online Booking Management (new feature)",
          "L, Activity page redesign",
          "M, Enhanced multi-room selection (Room Unification)",
          "S, Handheld fix for an Amex air card",
        ],
      },
      {
        kicker: "Lessons learned",
        title: "What I’d carry forward",
        body: [
          "At platform scale, the highest-leverage design work is often invisible: the request process, the story template, the forum, the defaults robust enough to survive a hundred client overrides. Build those and quality compounds; skip them and you’re firefighting screens forever.",
          "I’d also protect the weekly client time even harder. Standing in front of Amex every week is what kept the abstraction, all those configs and connectors, anchored to a real person trying to book a real trip.",
        ],
      },
    ],
  },
  {
    slug: "moody",
    motif: "wellbeing",
    title: "Moody",
    tagline: "A calmer way to notice how you feel",
    industry: "Consumer · Wellbeing",
    role: "Solo designer & maker",
    year: "2026",
    summary:
      "A self-initiated mood-tracking app I designed and built on my own, sketching in Figma and deploying a real, working web app with Claude, GitHub, and Supabase.",
    flag: "Self-initiated · 0→1",
    status: "full",
    liveUrl: "https://dpapageorge.github.io/Moody/",
    disciplines: ["0→1 product", "Product design", "Prototyping", "AI-assisted build", "UI"],
    metrics: [
      { value: "Solo", label: "Designer, builder, and deployer" },
      { value: "0→1", label: "Sketch to working app" },
      { value: "Live", label: "Built & deployed a real web app" },
      { value: "4 tools", label: "Figma · Claude · GitHub · Supabase" },
    ],
    facts: [
      { label: "Project", value: "Moody, self-initiated, ongoing" },
      { label: "My role", value: "Sole designer & maker, design through deploy" },
      { label: "Built with", value: "Figma, Claude, GitHub, Supabase" },
      { label: "Type", value: "Personal wellbeing tool · side project" },
      { label: "Year", value: "2026" },
    ],
    sections: [
      {
        kicker: "Why I built it",
        title: "I wanted to take something all the way to deployed",
        body: [
          "After years of handing off designs for other people to build, I wanted to feel the whole loop again, from a sketch in a notebook to a working app I could actually open on my phone. Moody is that project: a small, calm mood-tracking app I designed and built entirely on my own.",
          "It’s a personal wellbeing tool, not a clinical or medical product. The goal was modest and human: make it easy to notice how you’re feeling, without the app turning it into homework or judgment.",
        ],
        notes: [
          "Self-initiated, my product, my call on every decision",
          "A way to keep my hands dirty with real building, not just specs",
          "Deliberately scoped small so it could actually go live",
        ],
      },
      {
        kicker: "Problem definition",
        title: "Most mood apps ask too much and moralize too often",
        body: [
          "I’d tried the existing apps. The good ones were clinical; the popular ones gamified your feelings into streaks and badges until logging a bad day felt like losing. Both made the same mistake: they treated a fragile, private moment like a data-entry task.",
          "So I framed the design problem narrowly: capture a feeling in a few seconds, in a way that feels calm and non-judgmental, and make the patterns gently visible over time. Nothing more until that core felt right.",
        ],
        pullQuote: {
          quote:
            "The hardest part of a mood tracker isn’t the chart. It’s designing the five seconds where someone tells the truth about how they feel.",
        },
      },
      {
        kicker: "Constraints",
        title: "One person, real software, emotional data",
        body: [
          "Working solo on nights and weekends shaped everything, and so did the fact that this is real software holding genuinely personal information.",
        ],
        notes: [
          "Team of one: every hour spent building wasn’t spent designing, and vice versa",
          "Real backend: Supabase for auth and storage, not a throwaway prototype",
          "Privacy: emotional data deserves a careful, minimal-by-default approach",
          "Scope discipline: get a calm v1 live before adding anything clever",
        ],
      },
      {
        kicker: "Process",
        title: "Design and build in the same week, on purpose",
        body: [
          "I sketched the core interaction by hand, then designed it in Figma until the daily check-in felt like a breath rather than a form. From there I built it for real, using Claude as a pair to move from design to working React and Supabase faster than I ever could alone, and GitHub to keep it honest.",
          "Designing and building in the same tight loop changed the work. When you have to implement your own ideas, you stop drawing things that feel nice and can’t exist. The design got simpler every time it hit real code.",
        ],
        notes: [
          "Hand sketch → Figma → working app, in days not months",
          "Claude as a build partner; I stayed the designer and decision-maker",
          "Supabase for auth + data; GitHub for version control",
          "Every round-trip through real code made the UI simpler",
        ],
      },
      {
        kicker: "Collaboration",
        title: "A team of one, plus AI, and I’m honest about which is which",
        body: [
          "There was no team, so I’ll be precise about the help. I made every product and design decision; Claude accelerated the parts that usually slow a designer down, scaffolding components, wiring up Supabase, untangling bugs at 11pm. It’s the difference between being able to build and deploy the real thing and only being able to spec it.",
          "That’s the part I’m most excited to bring to a team: I can now prototype in real, working software, not just pictures of software. It makes me a faster, more grounded collaborator with engineers.",
        ],
        pullQuote: {
          quote:
            "AI didn’t design Moody. It collapsed the distance between the idea and a thing I could actually hold.",
          attribution: "On building solo in 2026",
        },
      },
      {
        kicker: "Outcomes",
        title: "A real app I use, and a new way of working",
        body: [
          "The tangible outcome is a working v1 I actually open: a calm daily check-in, a quiet history of how things have been trending, and none of the streak-shaming. But the bigger outcome is what it did to my practice.",
          "I came out of it a designer who can take an idea all the way to a deployed, working web app. That changes the kinds of conversations I can have with engineering, and the kinds of bets a team can let me make.",
        ],
        notes: [
          "Built and deployed a working, private mood-tracking web app I use myself",
          "Proved I can design and build, not just hand off",
          "A repeatable solo loop: sketch → Figma → Claude + Supabase → deploy",
          "Ongoing, I keep iterating as I learn what helps",
        ],
      },
      {
        kicker: "Lessons learned",
        title: "What I’d carry forward",
        body: [
          "Designs get honest the moment you have to build them. Half of what looked elegant in Figma collapsed in real code, and the app was better for it. I’ll never fully trust a flow again until I’ve felt it run.",
          "And AI is a genuine force multiplier for a designer who knows what they want. It didn’t replace the judgment; it removed the friction between having an idea and seeing if it was any good.",
        ],
      },
    ],
  },
  {
    slug: "uplight-marketplace",
    motif: "energy",
    title: "Uplight",
    tagline: "A marketplace any utility can make its own",
    industry: "Energy · SaaS",
    role: "Product Designer",
    year: "2019-2020",
    summary:
      "Designed the configurable system that lets any utility brand Uplight’s Marketplace as its own store, and authored the onboarding guide that turned a bespoke setup into a repeatable, accessible launch.",
    flag: "White-label design system",
    status: "full",
    disciplines: ["Design systems", "White-label config", "Accessibility", "Onboarding", "UI"],
    metrics: [
      { value: "7", label: "Configurable brand elements" },
      { value: "WCAG AA", label: "Held across every utility brand" },
      { value: "2", label: "Brandable typefaces (headline + body)" },
      { value: "Onboarding", label: "Bespoke setup became a guide" },
    ],
    facts: [
      { label: "Company", value: "Uplight (clean-energy software)" },
      { label: "Product", value: "Marketplace, white-label store for utilities" },
      { label: "My role", value: "Product Designer, system + onboarding" },
      { label: "Utilities", value: "PSEG, BGE, ComEd, Focus on Energy" },
      { label: "Artifact", value: "Marketplace Configuration Guide v1.0 (2019)" },
    ],
    gallery: [
      {
        src: "/work/uplight-marketplace.png",
        caption: "Marketplace: utilities sell energy-efficient products with instant rebates",
      },
      {
        src: "/work/uplight-logo.png",
        caption: "Three logo layouts let any utility co-brand the store",
      },
      {
        src: "/work/uplight-nav.png",
        caption: "Every configurable region of the top navigation, mapped for clients",
      },
      {
        src: "/work/uplight-colors.png",
        caption: "A global color system: brand colors vary, the semantics stay fixed",
      },
      {
        src: "/work/uplight-rebates.png",
        caption: "Green means savings, instant-rebate pricing across cards, detail, and cart",
      },
      {
        src: "/work/uplight-sales.png",
        caption: "Orange means a sale, and drives the primary add-to-cart and checkout actions",
      },
      {
        src: "/work/uplight-type.png",
        caption: "Configurable typography, up to two typefaces on a fixed weight scale",
      },
    ],
    sections: [
      {
        kicker: "Business context",
        title: "One store, every utility’s brand",
        body: [
          "Uplight’s Marketplace is a white-label e-commerce platform that energy utilities use to sell efficiency products, smart thermostats, LED lighting, EV chargers, with instant rebates baked into the price. The catch is that it can’t look like Uplight: each utility runs the store as its own branded shop, from the logo down to the footer.",
          "I worked across Uplight’s product lines as a product designer, and owned the part of Marketplace that made that white-label promise real, the configurable system, and the onboarding that gets a new utility live on it.",
        ],
        notes: [
          "White-label store for energy utilities",
          "Sells efficiency products with instant rebates",
          "Each utility brands it as its own shop",
        ],
      },
      {
        kicker: "Problem definition",
        title: "Make it brandable without making it inconsistent",
        body: [
          "Every new utility meant re-skinning the store, and doing it by hand was slow, error-prone, and easy to get subtly wrong, an off-brand color here, a failed contrast check there. The design problem wasn’t a screen; it was a system: what exactly can a client change, and what has to stay fixed so the experience never breaks?",
          "And it had to be repeatable. Onboarding couldn’t depend on a designer hand-holding every launch, it needed to be something a project manager and a client could run together.",
        ],
        pullQuote: {
          quote:
            "White-label design isn’t about one beautiful screen. It’s about deciding what a hundred different brands are allowed to change, and what they aren’t.",
        },
      },
      {
        kicker: "Constraints",
        title: "The guardrails that keep every brand coherent",
        body: [
          "I designed the configuration around a tight set of rules, so brand freedom never came at the cost of usability or accessibility.",
        ],
        notes: [
          "Every configurable color must pass WCAG AA contrast on its background",
          "Brand colors must stay true to their semantic name, blue has to read as blue",
          "Logos cap at 350×70; dark navs require a light logo variant",
          "Font weights are fixed; clients may swap up to two typefaces (headline + body)",
        ],
      },
      {
        kicker: "Process",
        title: "A configurable system with fixed semantics",
        body: [
          "I broke the store into seven configurable elements, name, logo, top navigation, global colors, footer, typography, and a multi-typeface option, and defined exactly how each one behaves when a utility supplies its brand.",
          "The key move was separating brand from meaning. A utility can change its palette, but the semantic colors hold across every instance: green always signals savings and instant rebates; orange always signals a sale and drives the add-to-cart and checkout actions. That’s what lets the same UX feel native to PSEG, BGE, ComEd, or Focus on Energy without re-teaching customers what a color means.",
        ],
        notes: [
          "Seven configurable elements, each with clear behavior",
          "Semantic color held constant: green = savings, orange = sales/CTAs",
          "Up to two brand typefaces mapped to five headline regions",
          "Program pages slot into the nav for utility-specific content",
        ],
      },
      {
        kicker: "Featured work",
        title: "The Marketplace Configuration Guide",
        body: [
          "To make onboarding repeatable, I authored the Marketplace Configuration Guide, a single document that turns a bespoke setup into a clear, self-serve-ish process. It tells a utility exactly what to send (brand colors as Hex/RGB/CMYK, no Pantones; a vector logo; font files; any web style guide), walks through every configurable element with examples, and explains the semantic color and accessibility rules up front.",
          "It’s the artifact that streamlined client onboarding: instead of a back-and-forth discovery for every launch, a project manager and client can follow one guide and get a branded, accessible store live.",
        ],
        notes: [
          "Defines the exact brand assets a utility must provide",
          "Shows layout options and real examples (PSEG, BGE, Focus on Energy)",
          "Bakes accessibility and semantic color into the instructions",
          "Turned per-client discovery into a repeatable launch",
        ],
      },
      {
        kicker: "Outcomes",
        title: "A repeatable, accessible, on-brand launch",
        body: [
          "The result is a system where any utility can stand up its own Marketplace, fully branded, accessible by default, and consistent with the patterns customers already understand. The configuration guide gave product managers and clients a shared playbook, which is exactly what streamlined onboarding looks like in practice.",
        ],
        notes: [
          "Utilities run their own branded store on one shared system",
          "Accessibility (WCAG AA) guaranteed by the configuration rules",
          "Onboarding shifted from bespoke to guided and repeatable",
        ],
      },
      {
        kicker: "Lessons learned",
        title: "What I’d carry forward",
        body: [
          "White-label work taught me that the real deliverable is a system of constraints, not a comp. The hard, valuable decisions were about what to lock down, semantics and accessibility, so that everything else could safely flex.",
          "And documentation is design. The configuration guide did more to scale Marketplace than any single screen, because it let other people launch the experience correctly without me in the room.",
        ],
      },
    ],
  },
  {
    slug: "michael-j-fox-foundation",
    motif: "research",
    title: "Michael J. Fox Foundation",
    tagline: "From discovery to delivery for a Parkinson’s leader",
    industry: "Nonprofit · Healthcare",
    role: "Interaction Designer · Mondo Robot",
    year: "2016",
    summary:
      "Co-built the Michael J. Fox Foundation’s website at Mondo Robot: UX discovery at scale, a value-exchange strategy for two very different audiences, and the interactions and motion that brought it to life.",
    flag: "Discovery → delivery",
    status: "full",
    disciplines: ["UX research", "Product strategy", "Information architecture", "Workshops", "UI"],
    metrics: [
      { value: "269K", label: "Audience surveyed (patients + researchers)" },
      { value: "3,800+", label: "Survey responses synthesized" },
      { value: "7", label: "Discovery methods, audit to workshop" },
      { value: "3", label: "Strategic areas of opportunity" },
    ],
    facts: [
      { label: "Client", value: "The Michael J. Fox Foundation" },
      { label: "Studio", value: "Mondo Robot" },
      { label: "My role", value: "Interaction Designer" },
      { label: "Engagement", value: "UX discovery, strategy, design & motion" },
      { label: "Audiences", value: "B2C (patients, family) + B2B (researchers, clinicians)" },
      { label: "Year", value: "2016" },
    ],
    gallery: [
      {
        src: "https://images.squarespace-cdn.com/content/v1/5c80ca63815512bdebc4dff2/1584034695701-5KFXDGU7VE01L4XNRKVO/MJFF-Featured.jpg",
        caption: "MichaelJFox.org, the heart of the Foundation’s digital ecosystem",
      },
      {
        src: "/work/mjff-value-exchange.png",
        caption: "The value exchange: the site as catalyst between B2C and B2B audiences",
      },
      {
        src: "/work/mjff-audience.png",
        caption: "Audience types, from a survey of 269K supporters and researchers",
      },
      {
        src: "/work/mjff-challenge.png",
        caption: "The design challenge and the three strategic areas of opportunity",
      },
      {
        src: "/work/mjff-content.png",
        caption: "Content relationships, mapped across the Foundation’s six content types",
      },
      {
        src: "/work/mjff-architecture.png",
        caption: "A clear information architecture for a vast content ecosystem",
      },
      {
        src: "/work/mjff-workshop.png",
        caption: "The collaborative workshop: mapping flows and prioritizing How Might We notes",
      },
    ],
    videos: [
      {
        src: "https://player.vimeo.com/video/323259338?h=52b2ce250b&title=0&byline=0&portrait=0",
        caption: "Interaction & animation study, 01",
      },
      {
        src: "https://player.vimeo.com/video/323259351?h=7ca76b15b9&title=0&byline=0&portrait=0",
        caption: "Interaction & animation study, 02",
      },
      {
        src: "https://player.vimeo.com/video/323260879?h=a8f8f9ec17&title=0&byline=0&portrait=0",
        caption: "Interaction & animation study, 03",
      },
    ],
    sections: [
      {
        kicker: "Business context",
        title: "The heart of a Parkinson’s leader’s digital ecosystem",
        body: [
          "In July 2016, the Michael J. Fox Foundation sought a partner to co-build a new website that reflects its brand and its role as a visionary funder in the Parkinson’s field. The site sits at the heart of the Foundation’s digital ecosystem and is its primary channel to a large, diverse audience.",
          "It’s a platform for education, research tools, and action, and it had to empower in-house teams to manage a flexible, scalable system as the Foundation’s needs evolved. I joined the engagement at Mondo Robot to help figure out what we should build, and why.",
        ],
        notes: [
          "MichaelJFox.org: education, research tools, and action in one platform",
          "The Foundation’s primary channel to a large, diverse audience",
          "Co-built, with a flexible system for in-house teams to manage",
        ],
      },
      {
        kicker: "Problem definition",
        title: "One site, two audiences, and a value exchange to strengthen",
        body: [
          "The defining insight from discovery was structural. MichaelJFox.org is the catalyst for a value exchange between two very different audiences: B2C (patients, family, and friends) who give funding, action, and data, and B2B (researchers, clinicians, and industry) who give back research, results, and credibility.",
          "Analytics underlined the urgency: roughly 70% of visitors saw only a single page, and nearly half spent under a minute on the site. The design challenge became clear, improve the experience to engage both audiences, attract more advocates, and increase the effectiveness of that value exchange.",
        ],
        pullQuote: {
          quote:
            "Generally, I have to click around to get a sense of where information resides. The info is good when I find it, but it isn’t as well organized as it could be.",
          attribution: "Foundation site visitor, discovery survey",
        },
      },
      {
        kicker: "Process",
        title: "Seven ways of listening before designing",
        body: [
          "Discovery was deliberately broad, and it was real research rather than a checkbox. We ran a content audit, a competitive analysis, a comparative analysis of more than 30 organizations, stakeholder interviews, an analytics review across Google and Adobe, and a user survey sent to roughly 269,000 supporters and researchers that returned over 3,800 responses.",
          "We synthesized all of it, then met in person for a collaborative workshop in October 2016, mapping the existing flows step by step and capturing How Might We notes that we organized and prioritized as a team.",
        ],
        notes: [
          "Content audit, plus competitive and comparative analysis (30+ orgs)",
          "Stakeholder interviews and an analytics review (Google + Adobe)",
          "A survey to ~269K supporters and researchers, 3,800+ responses",
          "A collaborative workshop mapping real task flows",
        ],
      },
      {
        kicker: "Featured exercise",
        title: "Four journeys, framed as “How Might We”",
        body: [
          "We mapped four real journeys step by step and turned each into How Might We questions to steer the design:",
        ],
        notes: [
          "Patient searching for dystonia treatment: HMW personalize by location, improve on-site search, and eliminate dead ends?",
          "Family member looking to donate: HMW make giving easier across web, mobile, and wallet, and show where donations go?",
          "Researcher seeking an animal model: HMW reduce clicks and better organize the research-tools catalog?",
          "Patient seeking a new therapy: HMW explain the latest trials in layperson’s terms and convey real momentum?",
        ],
      },
      {
        kicker: "Strategy",
        title: "Three areas of opportunity, one vision",
        body: [
          "All of that synthesis pointed to three strategic areas of opportunity. First, architect an intentional content life cycle, so content is showcased, made comprehensible in plain language, and richly related to other content. Second, provide personalized wayfinding through a fragmented ecosystem of subdomains and separate properties: clear information architecture, better navigation, a consolidated experience. Third, create greater connection with the audience through personalization and a genuine sense that what people do has impact.",
          "These rolled up into a vision and a brand personality, approachable, optimistic, straight-forward, knowledgeable, innovative, that gave the whole team a shared compass for every decision that followed.",
        ],
        pullQuote: {
          quote:
            "MichaelJFox.org gives audiences a clear, guided journey through their Parkinson’s experience, empowering them to make a positive impact on PD research over time.",
          attribution: "Vision statement, from the discovery",
        },
      },
      {
        kicker: "Collaboration",
        title: "From strategy to subtle, brand-reinforcing motion",
        body: [
          "With the strategy set, I focused on the interactions and animations, intentionally subtle moments meant to reinforce the brand while improving clarity, flow, and usability.",
          "I worked closely with the front-end engineering team so the ideas translated cleanly into production, documenting each interaction with detailed notes and behavior guidelines to keep design intent and implementation aligned.",
        ],
        notes: [
          "Subtle, brand-reinforcing motion, not decoration",
          "Detailed interaction notes and behavior guidelines",
          "Tight partnership with front-end engineering",
        ],
      },
      {
        kicker: "Lessons learned",
        title: "What I’d carry forward",
        body: [
          "The most valuable thing I did here was reframe a website project as a value-exchange problem between two audiences. That single lens made the priorities obvious and gave a sprawling content ecosystem a reason to get organized.",
          "And broad, honest discovery earns the right to design. The survey, interviews, analytics, and workshop weren’t throat-clearing; they’re what made every later decision defensible, all the way down to the motion.",
        ],
      },
    ],
  },
  {
    slug: "brew-guru",
    motif: "brew",
    title: "Brew Guru",
    tagline: "A homebrewer’s app, refocused",
    industry: "Consumer · Mobile app",
    role: "Interaction Designer · Mondo Robot",
    year: "2019",
    summary:
      "Redesigned and rebuilt the American Homebrewers Association’s Brew Guru app in React Native, refocusing it around member deals and shipping a 4.0★ experience across iOS and Android.",
    flag: "iOS + Android · React Native",
    status: "full",
    disciplines: ["Mobile design", "UX research", "Design systems", "Interaction design", "UI"],
    metrics: [
      { value: "4.0★", label: "Avg across 5,760 ratings" },
      { value: "iOS + Android", label: "One React Native codebase" },
      { value: "20 → 11", label: "Text styles consolidated" },
      { value: "AA", label: "Color updated for WCAG" },
    ],
    facts: [
      { label: "Client", value: "American Homebrewers Association" },
      { label: "Studio", value: "Mondo Robot" },
      { label: "My role", value: "Interaction Designer" },
      { label: "Built with", value: "React Native (iOS + Android)" },
      { label: "Team", value: "Client, a PM, and one engineer" },
      { label: "Year", value: "2019 (retired 2023)" },
    ],
    gallery: [
      {
        src: "https://images.squarespace-cdn.com/content/v1/5c80ca63815512bdebc4dff2/1594754917363-IOAMKGWC0CIMKUSUD61A/Bru-Guru-Featured-3.jpg",
        caption: "Brew Guru, redesigned and rebuilt in React Native",
      },
      {
        src: "https://images.squarespace-cdn.com/content/v1/5c80ca63815512bdebc4dff2/1594747654901-QOVA9LO4GT0B3YL6T2J3/Navigation.jpg",
        caption: "A focused Deals experience replaces the overwhelming Home screen",
      },
      {
        src: "https://images.squarespace-cdn.com/content/v1/5c80ca63815512bdebc4dff2/1594748553895-XNW39W5C0UVYKUJN9ELI/Articles.jpg",
        caption: "Surfacing Articles to a smaller but highly engaged audience",
      },
      {
        src: "https://images.squarespace-cdn.com/content/v1/5c80ca63815512bdebc4dff2/1594749388065-4P0LYUTI1EH1301XEQ38/Recipes.jpg",
        caption: "Saved items embedded directly into the Recipes experience",
      },
      {
        src: "https://images.squarespace-cdn.com/content/v1/5c80ca63815512bdebc4dff2/1594750015479-CWOKQ1GUUU0ND5T76YK6/Recipes-2.jpg",
        caption: "Recipe categories with at-a-glance style and recipe counts",
      },
      {
        src: "https://images.squarespace-cdn.com/content/v1/5c80ca63815512bdebc4dff2/1594752604043-1SU5R02HLDSF1OSLJBJG/Map.jpg",
        caption: "One reusable location card across the map, list, and Deals",
      },
      {
        src: "https://images.squarespace-cdn.com/content/v1/5c80ca63815512bdebc4dff2/1594753098968-AEENY5KPSLVRBL21CBWC/Map-Icons.jpg",
        caption: "Enlarged, simplified location icons; gray means no member deal",
      },
      {
        src: "https://images.squarespace-cdn.com/content/v1/5c80ca63815512bdebc4dff2/1594753019660-ITSBR6DQJIY921BYGOK1/Location.jpg",
        caption: "Location detail pages reorganized around what users need",
      },
      {
        src: "https://images.squarespace-cdn.com/content/v1/5c80ca63815512bdebc4dff2/1594750492598-QW9TOWWT59SN80OR9L94/Colors.jpg",
        caption: "Primary orange and green updated to pass WCAG AA",
      },
      {
        src: "https://images.squarespace-cdn.com/content/v1/5c80ca63815512bdebc4dff2/1594751058045-11ANVKGWUIORTFSQTQD8/Type-Scale.jpg",
        caption: "20+ text styles consolidated to 11, aligned to iOS & Android",
      },
    ],
    sections: [
      {
        kicker: "Business context",
        title: "Rebuild the app, refocus the experience",
        body: [
          "In 2019 I partnered closely with our client, a product manager, and a single engineer to redesign and rebuild Brew Guru, the American Homebrewers Association’s mobile app, in React Native. The shared codebase let us lean on native, platform-specific patterns while supporting both iOS and Android at once.",
          "Throughout, I iterated on the design from user research, analytics, and mobile best practices, improving usability and performance as we went. The app was retired in 2023 once its core features moved into the AHA’s mobile-friendly website, and at retirement it held a 4.0 out of 5 average across 5,760 ratings.",
        ],
        notes: [
          "React Native, one codebase, iOS and Android",
          "Small team: client, one PM, one engineer, and me",
          "4.0★ across 5,760 ratings at retirement",
        ],
      },
      {
        kicker: "Problem definition",
        title: "The home screen was doing too much",
        body: [
          "Research showed users found the Home screen overwhelming, but they consistently valued two things: local deals, and quick access to the membership card they used to redeem them. Analytics agreed, Deals was already the most-used feature inside Home.",
          "So we replaced Home with a focused Deals experience: a clearer, more purposeful entry point that also set the pattern for how supporting content like Articles would be organized.",
        ],
        pullQuote: {
          quote:
            "When the data and the interviews both point at deals, you stop defending the home screen and start building the deals screen.",
        },
      },
      {
        kicker: "Process",
        title: "Sharpening the core flows",
        body: [
          "From there, each section earned its place against real usage. Articles had low overall engagement but a small, loyal audience that returned often, so we raised its visibility to test whether exposure could grow sustained adoption. Saved Items left the primary navigation and moved into the places it mattered, like Deals and Recipes, using native controls so saving felt familiar. And Recipes gained at-a-glance meta, how many styles and recipes sat under each beer category, so people could decide where to explore before diving in.",
        ],
        notes: [
          "Deals promoted to the app’s home",
          "Articles surfaced to grow an engaged niche",
          "Saved Items embedded into Deals & Recipes, not a separate tab",
          "Recipe categories show style and recipe counts up front",
        ],
      },
      {
        kicker: "Systems thinking",
        title: "One location card, reused everywhere",
        body: [
          "The most leverage came from a single component. I redesigned the map location card into one reusable card used across the map, the list view, and the Deals experience, communicating location type through iconography, plus name, distance, and any available member deal, all at a glance.",
          "Location icons were enlarged and simplified for scannability; locations without a member deal use the same shape in a neutral gray, so color alone signals deal availability while the system stays visually consistent.",
        ],
        notes: [
          "One card component across map, list, and Deals",
          "Type, name, distance, and deal status at a glance",
          "Color as the single indicator of deal availability",
        ],
      },
      {
        kicker: "Foundations",
        title: "Accessible color and a tighter type system",
        body: [
          "Underneath the features, I tightened the foundation. The app’s primary orange and green were updated to pass WCAG AA. And the type system, more than twenty styles, was consolidated down to eleven, with names aligned to iOS and Android platform guidelines.",
          "That shared language between design and engineering streamlined the React Native build and cut friction at handoff, leaving a system that was easier to reuse and evolve.",
        ],
        notes: [
          "Primary colors updated to meet WCAG AA",
          "20+ text styles consolidated to 11",
          "Style names aligned to iOS & Android for clean handoff",
        ],
      },
      {
        kicker: "Outcomes",
        title: "A focused app people kept rating well",
        body: [
          "The redesign traded a crowded home screen for a clear, deals-first experience backed by a more consistent system. Brew Guru ran for four more years and retired with a 4.0★ average across 5,760 ratings, its core features valuable enough to carry forward into the AHA’s website.",
        ],
      },
      {
        kicker: "Lessons learned",
        title: "What I’d carry forward",
        body: [
          "Let usage pick the home screen. The strongest decision here, leading with Deals, wasn’t a hunch; it was where research and analytics already agreed. The design just got out of the way.",
          "And on a tiny team, systems are a force multiplier. One reusable location card and a consolidated type scale did more for consistency and speed than any single screen ever could.",
        ],
      },
    ],
  },
  {
    slug: "specialized-bikes",
    motif: "cycling",
    title: "Specialized",
    tagline: "Power Cranks, setting up a new ride sensor",
    industry: "Consumer · Mobile app",
    role: "Interaction Designer · Mondo Robot",
    year: "2019",
    summary:
      "Designed the Power Cranks app for Specialized, the setup experience for a new power-and-cadence sensor, built for both riders and Independent Bike Dealers, and handed off as iOS and Android prototypes.",
    flag: "iOS + Android · 0→1",
    status: "full",
    disciplines: ["Mobile design", "UX flows", "Wireframing", "Prototyping", "UI"],
    metrics: [
      { value: "0→1", label: "New app for a new sensor" },
      { value: "iOS + Android", label: "Two prototypes handed to dev" },
      { value: "2 audiences", label: "Riders and bike dealers" },
      { value: "Flows → UI", label: "Wireframes to design, fast" },
    ],
    facts: [
      { label: "Client", value: "Specialized" },
      { label: "Studio", value: "Mondo Robot" },
      { label: "My role", value: "Interaction Designer" },
      { label: "Product", value: "Power Cranks, power & cadence sensor app" },
      { label: "Audiences", value: "Riders + Independent Bike Dealers (IBDs)" },
      { label: "Deliverables", value: "User flows, wireframes, iOS & Android prototypes" },
    ],
    gallery: [
      {
        src: "https://images.squarespace-cdn.com/content/v1/5c80ca63815512bdebc4dff2/1552678731880-HRZRU1BVJON1HG1EWWDV/powercranks-featured-lg.jpg",
        caption: "Power Cranks, the setup app for Specialized’s new sensor",
      },
      {
        src: "https://images.squarespace-cdn.com/content/v1/5c80ca63815512bdebc4dff2/1552680193728-G3XW6U3VD2JQ78W7MBVE/powercranks-wires.png",
        caption: "Wireframes for the device-setup flow",
      },
      {
        src: "https://images.squarespace-cdn.com/content/v1/5c80ca63815512bdebc4dff2/1552679485759-DIBXZW3Q09NXWJUORN1K/IBD-setup-2.png",
        caption: "User flow for Independent Bike Dealer setup",
      },
      {
        src: "https://images.squarespace-cdn.com/content/v1/5c80ca63815512bdebc4dff2/1552678493824-0I4LXBT6R039OZS1UEI4/powercranks-featured-small.jpg",
        caption: "The finished Power Cranks setup experience",
      },
    ],
    sections: [
      {
        kicker: "Business context",
        title: "A new sensor needs a setup app",
        body: [
          "Specialized launched a new sensor that tracks a rider’s power and cadence. To make it usable, they needed a mobile app that let two very different groups set the device up: everyday customers at home, and the Independent Bike Dealers (IBDs) who sell and service their bikes.",
          "It’s hardware-adjacent product design, the kind where the app is the difference between a sensor that feels effortless and one that gets returned.",
        ],
        notes: [
          "New power-and-cadence sensor from Specialized",
          "Two setup audiences: riders and Independent Bike Dealers",
          "Native apps for both iOS and Android",
        ],
      },
      {
        kicker: "Problem definition",
        title: "Two audiences, one setup that can’t feel clumsy",
        body: [
          "Hardware setup is where good products quietly lose people. The job was to make pairing and configuring the sensor feel simple for a rider doing it once at home, and efficient for a dealer doing it many times a day.",
          "That meant deciding early where the rider and dealer paths should diverge, and where they could safely share the same screens.",
        ],
        pullQuote: {
          quote:
            "With hardware, the setup flow is the product’s first impression. You design it for the most impatient person in the room.",
        },
      },
      {
        kicker: "Process",
        title: "Flows to wireframes to a clickable handoff",
        body: [
          "We moved quickly. I worked from user flows into wireframes and straight into design, keeping the path tight so the development teams could start building against something real as soon as possible.",
          "The output was two InVision prototypes, one for iOS and one for Android, handed off to their respective development teams, with the rider and dealer setup paths defined before a line of production code.",
        ],
        notes: [
          "User flows → wireframes → design, on a fast track",
          "A dedicated setup flow for Independent Bike Dealers",
          "Two InVision prototypes: iOS and Android",
          "Clear, clickable targets handed to each dev team",
        ],
      },
      {
        kicker: "Outcomes",
        title: "A clear target for both dev teams",
        body: [
          "The prototypes gave the iOS and Android teams an unambiguous, interactive spec to build from, the rider and dealer experiences resolved up front, so engineering could focus on bringing the sensor to life rather than untangling the flow.",
        ],
      },
      {
        kicker: "Lessons learned",
        title: "What I’d carry forward",
        body: [
          "When there’s hardware on the other end, the setup experience is the product. Speed mattered here, and going flows-to-wireframes-to-prototype kept us honest and fast without skipping the thinking.",
          "Designing for two audiences in one app is mostly about divergence: decide deliberately where the rider and the dealer need different things, and let them share everything else.",
        ],
      },
    ],
  },
  {
    slug: "heady-coffee-co",
    motif: "coffee",
    title: "Heady Coffee Co.",
    tagline: "Branding a coffee shop into an existing family",
    industry: "Hospitality · Brand identity",
    role: "Brand & Logo Designer",
    year: "2019",
    summary:
      "Created the brand identity and logo for Heady Coffee Co., a Boulder coffee shop and sister company to McDevitt Taco Supply, building a fresh mark that still reads as part of the same family.",
    flag: "Brand identity · Logo",
    status: "full",
    disciplines: [
      "Brand identity",
      "Logo design",
      "Visual systems",
      "Art direction",
    ],
    metrics: [
      { value: "Sister brand", label: "Visual sibling to McDevitt Taco Supply" },
      { value: "Steam mark", label: "One icon, instantly coffee" },
      { value: "Green + black", label: "Shared family palette" },
      { value: "Lockup set", label: "Square, circle, and boxed variants" },
    ],
    facts: [
      { label: "Client", value: "Heady Coffee Co." },
      { label: "Sister brand", value: "McDevitt Taco Supply" },
      { label: "My role", value: "Brand & logo designer" },
      { label: "Location", value: "Boulder, CO" },
      {
        label: "Deliverables",
        value: "Logo, icon system, lockup variants, type direction",
      },
      { label: "Type explored", value: "Avenir (final), Gotham Rounded" },
    ],
    gallery: [
      {
        src: "/work/heady-final.png",
        caption: "The final Heady Coffee Co. logo, a steam mark boxed beside the wordmark",
      },
      {
        src: "/work/heady-coffee-sister-figure.png",
        caption:
          "The family resemblance, the Heady mark beside its sister brand McDevitt Taco Supply, sharing one green-block, black-outline, icon-in-a-block system",
        fullWidth: true,
      },
      {
        src: "/work/heady-explorations-wide.png",
        caption:
          "Concept exploration, from a literal coffee cup to a playful third-eye take on the word heady before the steam mark won",
      },
      {
        src: "/work/heady-fonts.png",
        caption:
          "Two type directions tested across the lockup set, Gotham Rounded with rounded corners against Avenir with sharp corners, which Heady chose",
      },
    ],
    sections: [
      {
        kicker: "The brief",
        title: "A new coffee brand, born into a family",
        body: [
          "Heady Coffee Co. is a Boulder coffee shop and the sister company to McDevitt Taco Supply. That relationship was the whole brief. Heady needed its own identity, clearly a coffee brand and not a taco joint, but a customer who knew one had to feel the other in it right away.",
          "So this was less a blank-page logo and more a family-portrait problem: design a sibling. Find the shared features that make the two unmistakably related, then give Heady a personality of its own.",
          "There was even a verbal thread to pull on. McDevitt's own menu calls them super heady tacos, so the name Heady Coffee Co. let the two brands rhyme out loud, not just on the page.",
        ],
        notes: [
          "Sister company to McDevitt Taco Supply",
          "Must stand alone as a coffee brand",
          "Must read as part of the same family",
        ],
      },
      {
        kicker: "The shared DNA",
        title: "Inheriting the family features",
        body: [
          "I started by naming what made McDevitt look like McDevitt: a bright, almost electric green, a heavy black outline, and an icon tucked inside a bold container, the taco sitting in a chat-bubble block. That trio is the genetic code of the brand.",
          "Heady would keep all three. Same green, same confident black line weight, same idea of a single symbol living inside a strong shape. With the backbone settled, the only real question was the symbol and how to house it.",
        ],
        pullQuote: {
          quote:
            "Designing a sister brand is about resemblance, not repetition. Keep the bones, change the face.",
        },
      },
      {
        kicker: "Exploration",
        title: "From coffee cups to a third eye",
        body: [
          "I ran the symbol wide before narrowing it. A literal cup of coffee. A to-go box with a leaf for something more roastery and earthy. A hexagon for a badge-like, technical feel. Even a playful, knowing take on the word heady itself, a calm third-eye face, leaning into the double meaning of a heady aroma and a heady buzz.",
          "The literal options were safe but forgettable, and the punny ones were fun but pulled too far from the taco sibling. The winner was the quietest idea in the set: three rising waves of steam, the universal shorthand for a hot, fresh cup.",
        ],
        notes: [
          "Coffee cup, roast box, hexagon badge, third-eye pun",
          "Steam waves: simplest, most legible, most ownable",
        ],
      },
      {
        kicker: "The mark",
        title: "Steam, boxed like its sibling",
        body: [
          "The final mark is three steam waves inside a white circle, set into the family's green block with its black outline. It does a lot with very little. The steam says coffee instantly, it nods to the word heady, the rising head off a fresh pour, and the boxed-icon construction ties it straight back to McDevitt.",
          "Set the two side by side and the relationship is obvious without a word of explanation. A taco in a green block, a steam mark in a green block. Same family, different appetite.",
        ],
      },
      {
        kicker: "Type & finish",
        title: "Choosing the corners and the voice",
        body: [
          "I tested two typographic directions. Gotham Rounded with rounded corners gave a softer, friendlier read. Avenir with sharp corners felt cleaner and more grown-up, closer in posture to the McDevitt mark. Heady went with the sharp, Avenir-set version, approachable but composed.",
          "From there I built out the system: the icon as a standalone badge, a circle treatment, and the boxed lockup where the green block and the wordmark share one outlined bar. Every variant holds the same green, the same line weight, and the same calm confidence so the brand stays recognizable at any size.",
        ],
        notes: [
          "Avenir, sharp corners, over Gotham Rounded",
          "Standalone badge, circle, and boxed lockups",
          "One consistent green and outline weight throughout",
        ],
      },
      {
        kicker: "Why it works",
        title: "A sibling, not a clone",
        body: [
          "The identity gives Heady a clear, confident coffee personality while keeping the visual handshake with McDevitt intact. The connection is felt, not spelled out, which is exactly what a sister brand should do.",
          "It is also built to last: a simple, single-color-friendly mark that reads on a cup, a window, a sign, or an app icon, and a small kit of lockups that covers nearly any place the brand needs to show up.",
        ],
      },
    ],
  },
  {
    slug: "pellucid-analytics",
    motif: "data",
    title: "Pellucid Analytics",
    tagline: "From raw data to a credible chart, fast",
    industry: "Fintech · Financial analytics",
    role: "Product Designer",
    year: "2013-2015",
    summary:
      "Designed core product UI and data visualizations for a tablet and browser platform that helped advisory professionals turn raw financial data into credible charts and decks in a fraction of the usual time.",
    flag: "Tablet + browser · Data viz",
    status: "full",
    disciplines: [
      "Data visualization",
      "Systems thinking",
      "Wireframing",
      "Prototyping",
      "UI",
    ],
    metrics: [
      { value: "Tablet + browser", label: "One product, two surfaces" },
      { value: "Raw data → deck", label: "The full path, in one tool" },
      { value: "3 months", label: "Design ran ahead of development" },
      { value: "Agile sprints", label: "Shipping designs every cycle" },
    ],
    facts: [
      { label: "Company", value: "Pellucid Analytics" },
      { label: "My role", value: "Product Designer" },
      { label: "Industry", value: "Fintech, financial analytics" },
      { label: "Users", value: "Advisory professionals (bankers, analysts)" },
      { label: "Platform", value: "Tablet (iPad) and browser" },
      {
        label: "Deliverables",
        value: "Wireframes, prototypes, high-fidelity UI, data visualizations",
      },
    ],
    gallery: [
      {
        src: "/work/pellucid-hero.png",
        caption:
          "The core product on iPad, a dense chart-properties and data-audit view rendered legible",
      },
      {
        src: "/work/pellucid-library.png",
        caption:
          "The chart library, performance, valuation, and trading-volatility visualizations ready to drop into a deck",
      },
      {
        src: "/work/pellucid-wireframe-visual.png",
        caption:
          "Data Audit, from wireframe to high-fidelity UI, so every number could be traced to its source",
      },
    ],
    sections: [
      {
        kicker: "Overview",
        title: "Everything an advisor needs, in one place",
        body: [
          "Pellucid Analytics was building a tablet and browser-based software solution for advisory professionals, the bankers and analysts who live in financial charts and pitch decks. The goal was to pull every capability they rely on, business intelligence, data visualization, collaboration, and presentation, into a single integrated tool.",
          "The promise was speed without sacrificing rigor: users could go from raw data to powerful visualizations and compelling stories in a fraction of the time and effort it used to take. I designed core product UI and the data visualizations that carried that promise.",
        ],
        notes: [
          "Audience: advisory professionals, not casual users",
          "Two surfaces: tablet and browser, one coherent product",
          "Scope: raw data, visualization, collaboration, presentation",
        ],
      },
      {
        kicker: "The problem",
        title: "The old way was slow, manual, and hard to trust",
        body: [
          "Building the charts behind an advisory deck was painstaking. Pull data from multiple sources, wrangle it in spreadsheets, rebuild the same chart formats by hand, then paste it all into a presentation, and do it again the moment a number changed. The work was slow, easy to break, and difficult to audit.",
          "For this audience the stakes are real. A chart in a client deck has to be right, and it has to be defensible. So the design challenge was twofold: make the data legible at a glance, and make its provenance obvious, so a user could trust the number and prove where it came from.",
        ],
      },
      {
        kicker: "How we worked",
        title: "Agile sprints, design running ahead of build",
        body: [
          "We worked in agile sprints, delivering designs roughly three months ahead of development. That cadence kept a steady backlog of resolved, validated design in front of the engineering team, so build was never waiting on decisions and design had room to think a few steps out.",
          "My part of the work moved from wireframes into prototypes and high-fidelity UI, defining how dense financial information should be structured, navigated, and read on both tablet and browser.",
        ],
        notes: [
          "Designs delivered ~3 months ahead of development",
          "Wireframes → prototypes → high-fidelity UI",
          "Steady, validated handoff every sprint",
        ],
      },
      {
        kicker: "Data Audit",
        title: "Making every number traceable",
        body: [
          "The hardest and most rewarding piece was Data Audit, the part of the product that let users see exactly how a value was composed. A figure like Shareholders Equity is not one number, it is a stack of inputs, non-equity reserves, minority interest, preferred stock, common equity, each mapped to a source and open to comment.",
          "I designed this from wireframe through to high-fidelity UI. The interface had to expose operators, display names, source mappings, values, and revision history without drowning the user, so that trust was built into the screen rather than taken on faith. The high-fidelity version held that density in a calm, dark, focused layout that read clearly even when the table was full.",
        ],
        pullQuote: {
          quote:
            "For this audience the design problem was never the data. It was meaning, legibility, and proof.",
        },
        notes: [
          "Composition view: every input mapped to a source",
          "Comments and revision history kept with the data",
          "Density handled without losing legibility",
        ],
      },
      {
        kicker: "The chart library",
        title: "A deck's worth of visualizations, ready to use",
        body: [
          "Beyond the audit trail, the product offered a deep library of finance-specific visualizations, share price over time, trading volatility, valuation versus comparables, and many more, organized so a user could browse, preview, and pull the right chart into a story.",
          "Designing this meant building a visual system that stayed consistent across dozens of chart types and held up on both a tablet screen and a browser, so the output looked credible the moment it landed in front of a client.",
        ],
      },
      {
        kicker: "Lessons learned",
        title: "What I'd carry forward",
        body: [
          "With an expert audience, you design for trust as much as for clarity. The most valuable thing I built here was not a prettier chart, it was a way to see where a number came from, and that is what made the speed worth anything.",
          "Working three months ahead of development taught me to hold a long view and a short one at once: resolve the system far enough out that build never stalls, while keeping each sprint's handoff concrete enough to ship.",
        ],
      },
    ],
  },
];

/** Display order for cards across the site (Moody leads). */
const PROJECT_ORDER = [
  "switchfly-travel-platform",
  "moody",
  "uplight-marketplace",
  "michael-j-fox-foundation",
  "brew-guru",
  "heady-coffee-co",
  "specialized-bikes",
  "pellucid-analytics",
];

export const projects: Project[] = [...rawProjects].sort(
  (a, b) => PROJECT_ORDER.indexOf(a.slug) - PROJECT_ORDER.indexOf(b.slug)
);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFlagship(): Project {
  return projects.find((p) => p.status === "full") ?? projects[0];
}
