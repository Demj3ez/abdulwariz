export const profile = {
  name: "Abdulwariz Yusuff",
  fullName: "Yusuff Abdulwariz Ademola",
  photo: "/images/profile/headshot.jpg",
  roles: [
    "Business Operations",
    "Business Development",
    "Digital Marketing",
    "AI Automation",
  ],
  location: "Ibadan, Oyo State, Nigeria",
  email: "abdulwarizy28@gmail.com",
  phone: "+2349036158023",
  whatsapp: "2349036158023",
  linkedin: "https://www.linkedin.com/in/abdulwariz-yusuff-2a9848288",
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
  image?: string;
  gallery?: { src: string; caption: string }[];
  problem: string;
  challenges: string[];
  approach: string;
  process: string[];
  results: string[];
  lessons: string;
};

export const projects: CaseStudy[] = [
  {
    slug: "premium-sneakers-operations",
    title: "Premium Sneakers — E-commerce Operations & Process Improvement",
    category: "Business Operations",
    summary:
      "Managing the full operational flow of an e-commerce footwear business — product, marketing, orders, fulfilment, and delivery — as one connected system.",
    tools: ["WooCommerce", "WhatsApp Business", "Meta Business Suite", "Google Workspace"],
    cover: "ops",
    image: "/images/projects/premium-sneakers-logo.jpg",
    gallery: [
      {
        src: "/images/projects/premium-sneakers-website.jpg",
        caption: "The Premium Sneakers storefront — product listings, pricing, and availability I manage directly.",
      },
      {
        src: "/images/projects/premium-sneakers-packaging.jpg",
        caption: "Order fulfilment and packaging — the handoff point between order processing and dispatch.",
      },
    ],
    problem:
      "E-commerce requires several moving parts to work in sync — accurate product listings, marketing aligned to real stock, fast customer communication, smooth order processing, reliable packaging and delivery, and consistent updates. Without coordination, gaps between these stages lead to delays, errors, and a poor customer experience.",
    challenges: [
      "Marketing could promote products faster than stock and listings could keep up with.",
      "Customer enquiries, confirmations, and payments needed a consistent path so nothing got lost between stages.",
      "Delivery needed to stay trackable and transparent, not a black box after dispatch.",
    ],
    approach:
      "Manage the business as one connected customer journey rather than separate departments — Product → Website → Marketing → Customer → Order → Payment → Fulfilment → Delivery → Follow-up — with the focus on smooth handoffs between each stage, not just performance within each one.",
    process: [
      "Product & website operations: listings, pricing, availability, and product presentation kept current and accurate.",
      "Digital marketing: social content, promotion, and customer engagement planned around what's actually in stock.",
      "Customer & order management: enquiry → confirmation → payment → order processing, handled as a single consistent path.",
      "Fulfilment & packaging: stock verification, packaging, and dispatch coordination for every order.",
      "Logistics & delivery: courier coordination, delivery tracking, and proactive customer updates.",
      "Post-purchase: delivery confirmation, feedback, and issue resolution to support retention, not just the sale.",
    ],
    results: [
      "Restructured the order workflow from an ad-hoc 'enquiry → manual communication → order → delivery' process into a clear 'enquiry → confirmation → payment → fulfilment → dispatch → tracking → delivery' pipeline.",
      "Reduced errors and lost information by giving every order a consistent path from enquiry to delivery.",
      "Improved delivery transparency through consistent courier coordination and customer updates.",
    ],
    lessons:
      "Most operational problems in e-commerce aren't inside any single stage — they're in the handoffs between stages. Fixing the gaps between marketing, orders, fulfilment, and delivery mattered more than optimizing any one of them in isolation.",
  },

  {
    slug: "ibadanstayfinder",
    title: "IbadanStayFinder",
    category: "Founder / Operations",
    summary:
      "A technology-driven shortlet booking platform built from the ground up — brand, operations, and partner network included.",
    tools: ["WordPress", "Google Business Profile", "Meta Business Suite", "WhatsApp Business", "Canva"],
    cover: "stay",
    image: "/images/projects/ibadanstayfinder-logo.jpg",
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
    slug: "digital-marketing-campaigns",
    title: "IbadanStayFinder WhatsApp Ad Campaigns",
    category: "Paid Marketing",
    summary:
      "Running and comparing Meta ad campaigns to turn ad spend into real WhatsApp booking conversations for IbadanStayFinder.",
    tools: ["Meta Business Suite", "WhatsApp Business", "Content Marketing", "Copywriting"],
    cover: "campaign",
    image: "/images/projects/ibsf-ad-3.jpg",
    gallery: [
      {
        src: "/images/projects/ibsf-ad-2.jpg",
        caption:
          "\"Promoting api.whatsapp.com/send\" — 34 conversations started at ₦555.46 each, ₦18,885.72 spent, 8,110 impressions.",
      },
      {
        src: "/images/projects/ibsf-ad-1.jpg",
        caption:
          "\"Ongoing send message promotion\" — a smaller-scale test campaign: 8 conversations at ₦523.26 each, ₦4,186.05 spent.",
      },
      {
        src: "/images/projects/ibsf-ad-3.jpg",
        caption:
          "\"IBSF | Stay Better | WhatsApp\" — a Leads-objective campaign: 41 leads at ₦151.91 per lead, ₦6,228.35 spent.",
      },
    ],
    problem:
      "IbadanStayFinder needed ad spend to reliably turn into booking conversations, not just impressions — and it wasn't yet clear which campaign objective would get there most efficiently.",
    challenges: [
      "WhatsApp click-to-chat campaigns were producing conversations at a fairly high cost, so the objective itself needed testing, not just the creative.",
      "Budget was intentionally kept tight (₦2,000/day per campaign), so every naira needed to be tracked against actual conversations or leads, not vanity reach.",
    ],
    approach:
      "Ran multiple campaigns in parallel with different objectives — direct \"Send Message\" versus a \"Leads\" form — on matched daily budgets, and let the cost-per-result data decide where to keep spending.",
    process: [
      "Launched a \"Send Message\" campaign promoting api.whatsapp.com/send directly and tracked cost per conversation.",
      "Ran a second, smaller-scale send-message campaign in parallel as a live comparison point.",
      "Tested a \"Leads\" objective campaign (IBSF | Stay Better) against both, capturing leads through a form instead of a direct chat.",
      "Reviewed cost-per-conversation and cost-per-lead regularly across all three to decide where budget should keep going.",
    ],
    results: [
      "83 total WhatsApp conversations and leads generated across three campaigns for a combined spend of roughly ₦29,300.",
      "The Leads campaign converted at ₦151.91 per lead — well under a third of the cost-per-conversation on the direct message campaigns.",
      "Reached a combined audience of 9,300+ people across all three campaigns on a modest daily budget.",
    ],
    lessons:
      "The Leads objective significantly outperformed direct \"Send Message\" campaigns on cost efficiency for this audience — a reminder to test the campaign objective itself, not just the creative, when a channel isn't converting as expected.",
  },

  {
    slug: "logistics-ai-automation",
    title: "Logistics AI Support & Notification System",
    category: "AI Automation",
    summary:
      "A dual-system AI solution for a logistics company: a RAG-powered support chatbot plus a proactive omnichannel shipment-notification engine.",
    tools: ["n8n", "Qdrant VectorDB", "Gemini LLM", "WhatsApp", "Telegram", "SMS", "Email"],
    cover: "flow",
    image: "/images/projects/logistics-automation-cover.jpg",
    gallery: [
      {
        src: "/images/projects/logistics-automation-cover.jpg",
        caption: "The RAG support chatbot, AI agent, and proactive notification workflows in n8n.",
      },
      {
        src: "/images/projects/logistics-automation-notification.jpg",
        caption: "An automated delivery update sent to a customer via Telegram.",
      },
    ],
    problem:
      "The logistics company was overwhelmed by high volumes of shipment status inquiries while simultaneously failing to proactively notify customers of delivery updates — leading to frustration, repeat contacts, and an overloaded support team.",
    challenges: [
      "Support was purely reactive — customers had to reach out to check on a shipment instead of being told automatically.",
      "Company knowledge (policies, FAQs) needed to stay current in the chatbot without manual re-training every time a document changed.",
      "Notifications needed to reach customers wherever they actually were — WhatsApp, Telegram, SMS, or email — not just one channel.",
    ],
    approach:
      "Built two tightly integrated systems instead of one: a RAG chatbot for the inbound question volume, and a separate proactive notification engine that removes the need for most of those questions to be asked in the first place.",
    process: [
      "Built a RAG chatbot that auto-ingests company documents from Google Drive into a Qdrant vector store, so knowledge updates without manual retraining.",
      "Connected the chatbot to Gemini LLM to answer customer queries 24/7 with context pulled from the vector store.",
      "Built a proactive tracking workflow that triggers on shipment status events and pulls the relevant order details.",
      "Wired the notification engine to send the same update simultaneously across WhatsApp, Telegram, SMS, and Email.",
    ],
    results: [
      "80% reduction in inbound support inquiries via proactive notifications.",
      "24/7 automated customer support with RAG-powered accuracy.",
      "Omnichannel delivery alerts across WhatsApp, Telegram, SMS & Email.",
    ],
    lessons:
      "Most 'support volume' problems are really 'proactive communication' problems in disguise — automating the update customers were going to ask for anyway removed far more support load than making the chatbot smarter did.",
  },

  {
    slug: "rag-knowledge-chatbot",
    title: "AI Knowledge-Base Chatbot (RAG)",
    category: "Automation",
    summary:
      "A Telegram support chatbot that answers customer questions using a self-updating knowledge base pulled straight from Google Drive.",
    tools: ["n8n", "Google Drive", "Gemini", "Telegram"],
    cover: "flow",
    image: "/images/projects/telegram-rag-chatbot.jpg",
    gallery: [
      {
        src: "/images/projects/telegram-rag-chatbot.jpg",
        caption:
          "Two connected n8n workflows: the knowledge-base ingestion pipeline (left) and the Telegram RAG chatbot agent (right).",
      },
    ],
    problem:
      "Company FAQs and policy documents lived in Google Drive but weren't accessible to the team's Telegram support channel, so the same repetitive questions kept landing on a human to answer.",
    challenges: [
      "The knowledge base needed to stay current without manually re-training the bot every time a document changed.",
      "Answers needed to be grounded in the actual source documents, not the model's general guesses.",
    ],
    approach:
      "Split the system into two connected workflows: one that keeps the knowledge base current, and one that answers questions using it — so updating a policy document never touches the live chat logic.",
    process: [
      "A Google Drive trigger watches for file updates and automatically downloads any changed document.",
      "Each document is chunked with a recursive character text splitter and embedded using Google Gemini.",
      "The embeddings are stored in a Pinecone vector store as the chatbot's live knowledge base.",
      "A Telegram-triggered AI Agent (Gemini chat model + short-term memory) retrieves relevant chunks from Pinecone to answer each incoming question, then replies over Telegram.",
    ],
    results: [
      "The knowledge base updates itself automatically whenever a source document changes in Google Drive.",
      "Delivered accurate, source-grounded answers to FAQs over Telegram without a human in the loop.",
    ],
    lessons:
      "Separating ingestion from the chat workflow made each half far easier to test on its own — and meant a bad edit to a source document couldn't take the whole chatbot down.",
  },

  {
    slug: "calendar-scheduling-agent",
    title: "Calendar & Scheduling AI Agent",
    category: "Automation",
    summary:
      "A Telegram-based AI agent that checks availability, books events, sets reminders, and logs everything to Google Sheets — with built-in error handling.",
    tools: ["n8n", "Telegram", "Google Calendar", "Google Sheets", "Gemini"],
    cover: "flow",
    image: "/images/projects/calendar-ai-agent.jpg",
    gallery: [
      {
        src: "/images/projects/calendar-ai-agent.jpg",
        caption:
          "The Calendar AI Agent in n8n, with its calendar, reminder, and sheet-logging tools, plus a dedicated error-handling branch.",
      },
    ],
    problem:
      "Scheduling requests — checking availability, booking a slot, setting a reminder — were handled through manual back-and-forth messaging, which was slow and easy to lose track of.",
    challenges: [
      "The agent needed to reliably pick the right action (check availability vs. create an event vs. set a reminder) from a natural-language message.",
      "A failed request needed to be reported back to the user, not silently dropped.",
    ],
    approach:
      "Build one Telegram-triggered agent with multiple connected tools rather than several separate bots, and give it a dedicated error branch so failures are still communicated, not hidden.",
    process: [
      "A Telegram trigger passes the incoming message to a central Calendar AI Agent node.",
      "The agent reasons over the request with a Gemini chat model, using short-term memory to keep context across a conversation.",
      "Based on intent, it calls the matching tool: check availability, create an event, get a daily briefing, or set a reminder.",
      "Successful actions are logged to Google Sheets and confirmed back to the user; failures route through a dedicated error handler that still replies over Telegram.",
    ],
    results: [
      "Automated scheduling requests that previously required manual back-and-forth messaging.",
      "Built-in error handling means a failed request still gets a response instead of going silent.",
    ],
    lessons:
      "The error-handling branch mattered as much as the happy-path tools — a scheduling assistant that goes quiet on failure is worse than one that's occasionally slow.",
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

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];
