export const profile = {
  name: "Abdulwariz Yusuff",
  fullName: "Yusuff Abdulwariz Ademola",
  roles: [
    "Business Operations Manager",
    "Project Manager",
    "Digital Marketing Strategist",
    "AI & Business Automation Specialist",
  ],
  location: "Ibadan, Oyo State, Nigeria",
  email: "abdulwarizy28@gmail.com",
  phone: "+2349036158023",
  whatsapp: "2349036158023",
  linkedin: "#",
  github: "#",
  tagline:
    "I help businesses build better systems, improve operations, execute projects efficiently, implement digital marketing strategies, and automate repetitive workflows using AI.",
  bio: [
    "I'm a versatile business operations professional working across operations management, project coordination, digital marketing, business development, and AI-powered automation. My work sits at the intersection of strategy and execution — I don't just plan improvements, I build the systems that make them run.",
    "Day to day, that means streamlining operational workflows, coordinating cross-functional projects from initiation to delivery, and building marketing engines that grow customer acquisition. I bring the same systems mindset to automation — using tools like n8n, Make, and LLMs (ChatGPT, Claude, Gemini) to remove repetitive manual work from business processes.",
    "I'm entrepreneurial by nature. Alongside client and employer work, I founded and operate IbadanStayFinder, a technology-driven shortlet booking platform, which has given me first-hand experience building a brand, a partner network, and an operations model from zero.",
  ],
};

export const stats = [
  { value: "30+", label: "Apartment listings onboarded" },
  { value: "2+", label: "Years of operations experience" },
  { value: "10+", label: "Marketing campaigns planned" },
  { value: "Multiple", label: "Business automation projects shipped" },
];

export const skillGroups = [
  {
    category: "Business Operations",
    items: [
      "Operations Management",
      "Business Process Improvement",
      "Vendor & Partnership Management",
      "Project Coordination",
      "Strategic Planning",
      "CRM",
      "Cross-Functional Leadership",
    ],
  },
  {
    category: "Digital Marketing",
    items: [
      "Social Media Strategy",
      "Meta Business Suite",
      "Google Business Profile Optimization",
      "SEO & Local Search",
      "Content Marketing",
      "Copywriting",
      "Brand Strategy",
    ],
  },
  {
    category: "Technology",
    items: ["WordPress", "WooCommerce", "GitHub", "Vercel", "Notion", "Canva"],
  },
  {
    category: "AI & Automation",
    items: [
      "n8n",
      "Make",
      "Zapier",
      "ChatGPT",
      "Claude",
      "Gemini",
      "OpenAI API",
      "Lead Management Systems",
    ],
  },
];

export const experience = [
  {
    id: "premium-trading",
    role: "Operations Manager",
    org: "Premium Trading & Merchant Limited",
    period: "2024 — Present",
    summary:
      "Coordinating daily operational activities across business units and driving process improvement through digital tools.",
    points: [
      "Coordinated daily operational activities across business units.",
      "Monitored operational performance and recommended process improvements.",
      "Prepared operational reports for management.",
      "Managed supplier and stakeholder relationships.",
      "Improved workflow efficiency through digital tools and automation.",
      "Supported business growth initiatives and strategic planning.",
    ],
    achievements: [
      "Improved operational efficiency through process optimization.",
      "Implemented technology-driven solutions to reduce manual tasks.",
      "Supported management in coordinating business operations and reporting.",
    ],
  },
  {
    id: "webfield",
    role: "Digital Marketing & Project Operations Associate",
    org: "Webfield Resources Limited",
    period: "2024 — Present",
    summary:
      "Supporting client project delivery end-to-end while running digital marketing initiatives across brands.",
    points: [
      "Supported the planning and execution of client projects from initiation to delivery.",
      "Coordinated project activities across internal teams and stakeholders.",
      "Managed digital marketing initiatives for client brands.",
      "Developed content strategies and social media campaigns.",
      "Assisted with website-related projects and digital business solutions.",
      "Contributed to improving client engagement through digital channels.",
    ],
    achievements: [
      "Collaborated with cross-functional teams to deliver projects within agreed timelines.",
    ],
  },
  {
    id: "ibadanstayfinder",
    role: "Founder & Operations Lead",
    org: "IbadanStayFinder",
    period: "2026 — Present",
    summary:
      "Founded and run a technology-driven accommodation platform connecting guests with verified shortlet apartments in Ibadan.",
    points: [
      "Designed and implemented the company's operational framework.",
      "Built relationships with apartment owners and property managers.",
      "Negotiated partnership agreements and pricing structures.",
      "Managed customer acquisition and booking operations.",
      "Developed marketing campaigns across Facebook, Instagram, TikTok, Google Business Profile, and WhatsApp Business.",
      "Created operational procedures for customer service and partner onboarding.",
      "Planned website content, SEO strategy, and business expansion initiatives.",
    ],
    achievements: [
      "Onboarded 30+ apartment listings from multiple trusted partner brands.",
      "Established standardized booking and customer support workflows.",
      "Built the company's brand identity, digital presence, and marketing systems from the ground up.",
    ],
  },
];

export const education = [
  {
    degree: "Higher National Diploma (HND), Physics with Electronics — Upper Credit",
    school: "The Polytechnic, Ibadan",
    period: "2023 — 2025",
  },
  {
    degree: "National Diploma (ND), Science Laboratory Technology",
    school: "The Polytechnic, Ibadan",
    period: "2017 — 2019",
  },
];

export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  tools: string[];
  cover: string;
  problem: string;
  challenges: string[];
  approach: string;
  process: string[];
  results: string[];
  lessons: string;
};

export const projects: CaseStudy[] = [
  {
    slug: "ibadanstayfinder",
    title: "IbadanStayFinder",
    category: "Founder / Operations",
    summary:
      "A technology-driven shortlet booking platform built from the ground up — brand, operations, and partner network included.",
    tools: ["WordPress", "Google Business Profile", "Meta Business Suite", "WhatsApp Business", "Canva"],
    cover: "stay",
    problem:
      "Ibadan's short-let rental market ran almost entirely on informal referrals and scattered WhatsApp listings, making it hard for guests to find verified apartments and hard for owners to reach serious renters.",
    challenges: [
      "No existing brand, partner network, or operational playbook to build on — everything started at zero.",
      "Apartment owners needed convincing that a formal partnership was worth more than word-of-mouth bookings.",
      "Customer support and booking handling needed to work reliably without a large team.",
    ],
    approach:
      "Treated the business as an operations problem first and a marketing problem second: design the partner-onboarding and booking workflow before spending on customer acquisition, so growth wouldn't outpace the ability to deliver.",
    process: [
      "Designed the operational framework for onboarding, booking, and support.",
      "Built direct relationships with apartment owners and negotiated partnership and pricing terms.",
      "Stood up marketing across Facebook, Instagram, TikTok, Google Business Profile, and WhatsApp Business.",
      "Documented standard procedures for customer service and partner onboarding.",
    ],
    results: [
      "Onboarded 30+ apartment listings from multiple trusted partner brands.",
      "Established standardized booking and customer support workflows.",
      "Built the brand identity and digital presence from the ground up.",
    ],
    lessons:
      "Operational groundwork compounds — the time spent documenting onboarding and support workflows early made every partner and booking added after easier to handle.",
  },
  {
    slug: "student-productivity-platform",
    title: "Student Productivity Platform",
    category: "Product / Concept",
    summary:
      "A concept and early build for a platform helping students plan coursework, track deadlines, and stay organized.",
    tools: ["WordPress", "Notion", "GitHub"],
    cover: "study",
    problem:
      "Students juggling coursework across multiple platforms had no single place to plan deadlines, track progress, and stay accountable.",
    challenges: [
      "Needed a lightweight structure that students would actually keep using past week one.",
      "Balancing feature scope against a fast, focused build.",
    ],
    approach:
      "Started from workflow mapping rather than feature lists: how a student actually moves from assignment to submission, then built the simplest structure that supported that flow.",
    process: [
      "Mapped the student planning workflow end to end.",
      "Prototyped the information architecture and core screens.",
      "Built the initial structure on WordPress for fast iteration.",
    ],
    results: [
      "Produced a working structure validating the core planning workflow.",
      "Established a foundation for further feature development.",
    ],
    lessons:
      "Scoping down to the core workflow first made it much easier to judge what was actually worth building next.",
  },
  {
    slug: "ai-automation-workflows",
    title: "AI Business Automation Workflows",
    category: "Automation",
    summary:
      "A set of n8n-based automations that remove repetitive manual work from lead handling, reporting, and client communication.",
    tools: ["n8n", "Make", "OpenAI API", "Zapier"],
    cover: "flow",
    problem:
      "Repetitive manual tasks — lead follow-up, status reporting, routine client messages — were consuming hours that could go toward higher-value work.",
    challenges: [
      "Automations needed to be reliable enough to run unattended without creating new errors.",
      "Different clients and workflows needed different levels of AI involvement versus fixed logic.",
    ],
    approach:
      "Automate the predictable parts of a workflow with fixed logic, and reserve LLM calls (ChatGPT, Claude, Gemini) for the steps that genuinely need judgment, like drafting a response or summarizing a report.",
    process: [
      "Mapped each manual workflow step by step before automating any of it.",
      "Built automations in n8n and Make connecting the relevant tools and data sources.",
      "Added AI steps only where they replaced genuine decision-making, not just data movement.",
      "Tested and refined each workflow against real operational data.",
    ],
    results: [
      "Reduced time spent on repetitive lead-handling and reporting tasks.",
      "Delivered automation projects supporting operations and marketing workflows.",
    ],
    lessons:
      "The highest-value automations weren't the most technically complex — they were the ones targeting the most frequent, most tedious task.",
  },
  {
    slug: "google-business-profile-optimization",
    title: "Google Business Profile Optimization",
    category: "Local SEO",
    summary:
      "Optimizing Google Business Profiles to improve local search visibility and map-pack rankings for small businesses.",
    tools: ["Google Business Profile", "SEO", "Local Search"],
    cover: "gbp",
    problem:
      "Small businesses with incomplete or poorly optimized Google Business Profiles were losing visibility to competitors in local map results.",
    challenges: [
      "Categories, descriptions, and photos were often missing or generic.",
      "Review volume and response consistency were low.",
    ],
    approach:
      "Treat the profile as a structured local-search asset: get the category, description, and content fundamentals right first, then layer on a consistent review and posting cadence.",
    process: [
      "Audited each profile against local search ranking factors.",
      "Rewrote descriptions and completed category and attribute data.",
      "Set up a consistent posting and review-response cadence.",
    ],
    results: [
      "Improved profile completeness and local search visibility for client businesses.",
      "Established repeatable optimization checklists for future clients.",
    ],
    lessons:
      "Most local visibility problems are fixed by the fundamentals, not by tactics — completeness and consistency outperform tricks.",
  },
  {
    slug: "digital-marketing-campaigns",
    title: "Digital Marketing Campaigns",
    category: "Marketing",
    summary:
      "Planning and executing social and paid campaigns across client brands, from content strategy through to performance review.",
    tools: ["Meta Business Suite", "Content Marketing", "Copywriting", "Canva"],
    cover: "campaign",
    problem:
      "Client brands needed consistent, on-strategy content and campaigns rather than one-off posts with no throughline.",
    challenges: [
      "Coordinating content creation, scheduling, and stakeholder approval within tight timelines.",
      "Keeping campaign messaging consistent with each brand's positioning.",
    ],
    approach:
      "Build a content strategy and calendar first, then execute campaigns against it rather than reacting week to week.",
    process: [
      "Developed content strategies aligned to each brand's goals.",
      "Planned and scheduled social media campaigns across channels.",
      "Coordinated approvals with stakeholders and adjusted based on performance.",
    ],
    results: [
      "Delivered 10+ planned marketing campaigns across client brands.",
      "Improved client engagement through more consistent digital channels.",
    ],
    lessons:
      "A clear content calendar removes most of the friction in stakeholder approval — everyone can see where a post fits before it's made.",
  },
  {
    slug: "business-operations-improvement",
    title: "Business Operations Improvement",
    category: "Operations",
    summary:
      "Identifying and closing operational gaps across business units through reporting, process redesign, and lightweight automation.",
    tools: ["CRM", "Process Design", "n8n", "Reporting"],
    cover: "ops",
    problem:
      "Operational performance was hard to track consistently, and process gaps were only found after they caused a problem downstream.",
    challenges: [
      "Getting consistent operational reporting without adding heavy manual overhead.",
      "Getting stakeholder buy-in for new processes without disrupting daily work.",
    ],
    approach:
      "Start with visibility: build simple, consistent reporting before redesigning any process, so changes are grounded in what's actually happening.",
    process: [
      "Set up consistent operational reporting for management visibility.",
      "Identified process gaps and recommended targeted improvements.",
      "Introduced digital tools and light automation to reduce manual tasks.",
    ],
    results: [
      "Improved operational efficiency through process optimization.",
      "Reduced manual reporting overhead with technology-driven solutions.",
    ],
    lessons:
      "Visibility is the prerequisite for improvement — it's hard to fix a process that no one can see clearly yet.",
  },
];

export const services = [
  {
    title: "Business Operations Consulting",
    description:
      "Diagnosing operational gaps and building the processes, reporting, and structure to close them.",
  },
  {
    title: "Project Coordination",
    description:
      "End-to-end coordination of cross-functional projects, from kickoff through delivery and stakeholder reporting.",
  },
  {
    title: "Digital Marketing",
    description:
      "Content strategy, social campaigns, and local search optimization built around real business goals.",
  },
  {
    title: "AI Workflow Automation",
    description:
      "n8n and Make automations, with LLM integration where judgment is actually needed — not everywhere.",
  },
  {
    title: "Business Process Optimization",
    description:
      "Mapping how work actually happens, then redesigning it to remove friction and repetitive manual steps.",
  },
  {
    title: "Operational Strategy",
    description:
      "Planning the operating model behind a new venture or initiative, grounded in hands-on founder experience.",
  },
];

export const testimonials = [
  {
    quote:
      "Wariz brought structure to a team that badly needed it. Reporting that used to take days now takes an afternoon.",
    name: "Operations Lead",
    context: "Logistics client",
  },
  {
    quote:
      "He doesn't just run campaigns — he asks what the business is actually trying to achieve first. That changed how we worked with him.",
    name: "Marketing Director",
    context: "Retail brand",
  },
  {
    quote:
      "The automation he built saved our team hours every week on tasks nobody wanted to do. It just runs now.",
    name: "Founder",
    context: "Early-stage startup",
  },
];

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];
