import type { IconName } from "@/components/Icon";

export interface NavItem {
  href: string;
  label: string;
  icon: IconName;
}

export const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Home", icon: "home" },
  { href: "/services", label: "Services", icon: "grid_view" },
  { href: "/process", label: "Process", icon: "route" },
  { href: "/contact", label: "Contact", icon: "mail" },
];

export interface Service {
  icon: IconName;
  title: string;
  blurb: string;
  points: string[];
  image: string;
}

export const SERVICES: Service[] = [
  {
    icon: "strategy",
    title: "Business Strategy",
    blurb:
      "Where to play and how to win. We turn ambiguous markets into a focused, funded plan.",
    image: "/images/services/strategy.webp",
    points: [
      "Market & competitor mapping",
      "Positioning & value proposition",
      "3-year growth roadmap",
      "OKRs & operating cadence",
    ],
  },
  {
    icon: "tune",
    title: "Operations Excellence",
    blurb:
      "Find the friction, fix the flow. Leaner processes that give time back to your team.",
    image: "/images/services/operations.webp",
    points: [
      "Process audits & mapping",
      "Cost & capacity analysis",
      "SOPs and playbooks",
      "Performance dashboards",
    ],
  },
  {
    icon: "smart_toy",
    title: "Digital & AI",
    blurb:
      "Practical AI, not hype. We find the workflows where automation pays for itself.",
    image: "/images/services/digital-ai.webp",
    points: [
      "AI opportunity assessment",
      "Workflow automation",
      "Data foundations",
      "Team enablement & training",
    ],
  },
  {
    icon: "insights",
    title: "Financial Advisory",
    blurb:
      "Know your numbers cold. Pricing, margins, and unit economics you can act on.",
    image: "/images/services/financial.webp",
    points: [
      "Pricing strategy",
      "Unit economics & margins",
      "Forecasting & budgeting",
      "Investor & board reporting",
    ],
  },
  {
    icon: "trending_up",
    title: "Growth & Marketing",
    blurb:
      "A go-to-market engine tuned to your buyers — not a spray of tactics.",
    image: "/images/services/growth.webp",
    points: [
      "Go-to-market strategy",
      "Demand generation",
      "Conversion optimization",
      "Brand & messaging",
    ],
  },
  {
    icon: "groups",
    title: "Leadership & Teams",
    blurb:
      "The org behind the outcomes. Structure, roles, and rhythms that scale.",
    image: "/images/services/leadership.webp",
    points: [
      "Org design",
      "Leadership coaching",
      "Hiring & role clarity",
      "Culture & ways of working",
    ],
  },
];

export interface Step {
  id: string;
  index: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  duration: string;
}

export const STEPS: Step[] = [
  {
    id: "discover",
    index: "01",
    title: "Discover",
    tagline: "We listen first.",
    description:
      "Every engagement starts with understanding — your team, your customers, your numbers. We ask sharp questions, review what matters, and map where the real leverage is before proposing anything.",
    deliverables: ["Discovery readout", "Opportunity map", "Success metrics"],
    duration: "Week 1–2",
  },
  {
    id: "define",
    index: "02",
    title: "Define",
    tagline: "Decisions, on paper.",
    description:
      "We turn findings into a clear plan: priorities ranked by impact, owners named, and trade-offs made explicit. You leave this phase knowing exactly what we're doing and why — no 80-slide decks.",
    deliverables: ["Prioritized roadmap", "Decision log", "Resource plan"],
    duration: "Week 2–3",
  },
  {
    id: "deliver",
    index: "03",
    title: "Deliver",
    tagline: "Ship with you, not at you.",
    description:
      "We work inside your team in short weekly sprints — building, testing, and adjusting in the open. You see progress every Friday, not a reveal at the end.",
    deliverables: ["Weekly sprint demos", "Working playbooks", "Live dashboards"],
    duration: "Week 3–8",
  },
  {
    id: "scale",
    index: "04",
    title: "Scale",
    tagline: "Make it stick.",
    description:
      "We hand over the keys properly: your team trained, systems documented, and metrics wired into your operating rhythm — so the gains survive long after we leave.",
    deliverables: ["Handover docs", "Team training", "90-day sustain plan"],
    duration: "Week 8+",
  },
];

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const STATS: Stat[] = [
  { value: 120, suffix: "+", label: "Projects delivered" },
  { value: 98, suffix: "%", label: "Client retention" },
  { value: 12, suffix: "", label: "Years advising" },
  { value: 30, suffix: "+", label: "Industries served" },
];

export const CONTACT_EMAIL = "hello@sae.llc";
export const CONTACT_LOCATION = "Toronto, Ontario";
