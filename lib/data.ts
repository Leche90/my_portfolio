// -----------------------------------------------------------------------------
// lib/data.ts
// Single source of truth for portfolio content. Swap these mock values for
// your real projects, metrics, and copy — every component below reads from
// here, so editing this file is enough to re-skin the whole site.
// -----------------------------------------------------------------------------

import type { LucideIcon } from "lucide-react";
import {
  Boxes,
  Braces,
  Cloud,
  Database,
  GitBranch,
  Github,
  Layers,
  Linkedin,
  Mail,
  Server,
  ShieldCheck,
  Terminal,
  Workflow
} from "lucide-react";

// ---- Hero -------------------------------------------------------------------

export const heroContent = {
  eyebrowRoles: [
    "CUSTOM WEB & MOBILE APPS",
    "FULL-STACK SOLUTIONS",
    "FAST & SECURE SYSTEMS"
  ],
  headlineLines: ["I build and optimise websites and apps", "that work beautifully."],
  subhead:
    "I build high-performance web and mobile apps with clean, modern interfaces and bulletproof backend code. My focus is on creating responsive digital experiences that load instantly, work flawlessly on mobile, and deliver a seamless user experience.",
  metrics: [
    { label: "Years Experience", value: "3+" },
    { label: "Happy Users", value: "100k+" },
    { label: "Saved Infrastructure Costs", value: "25%" },
    { label: "Daily Customer Interactions", value: "2M+" }
  ]
};

// ---- Projects -----------------------------------------------------------

export type ArchitectureNode = {
  id: string;
  label: string;
  sublabel: string;
  icon: LucideIcon;
  x: number; // 0-100, percentage position on the mini-map canvas
  y: number; // 0-100
  tooltip: string;
};

export type ArchitectureEdge = {
  from: string;
  to: string;
};

export type PerfMetric = {
  label: string;
  before: number;
  after: number;
  unit: string;
  lowerIsBetter?: boolean;
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  size: "lg" | "md" | "sm"; // bento sizing hint
  accent: "indigo" | "cyan";
  metricBadge: string;
  architecture: {
    nodes: ArchitectureNode[];
    edges: ArchitectureEdge[];
  };
  performance: {
    lighthouseBefore: number;
    lighthouseAfter: number;
    metrics: PerfMetric[];
  };
  miniLab: {
    endpoint: string;
    method: "GET" | "POST";
    responseDelayMs: number;
    mockResponse: Record<string, unknown>;
  };
};

export const projects: Project[] = [
  {
    slug: "teachzenith",
    name: "TeachZenith",
    tagline: "AI-powered job matching platform for international teachers in Nigeria",
    description:
      "An automated global career connector built to intelligently match qualified teachers in Nigeria with verified global school openings using high-speed matching pipelines.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Redis", "Kafka", "AWS"],
    size: "md",
    accent: "indigo",
    metricBadge: "Instant Profile Matching",
    architecture: {
      nodes: [
        {
          id: "client",
          label: "Teacher Portal",
          sublabel: "Next.js Interface",
          icon: Layers,
          x: 10,
          y: 50,
          tooltip: "A beautiful application form allowing profiles to update dynamically."
        },
        {
          id: "gateway",
          label: "Job Filter",
          sublabel: "Core API Routing",
          icon: Workflow,
          x: 30,
          y: 20,
          tooltip: "Secures user data inputs and instantly directs match calculations."
        },
        {
          id: "db",
          label: "Data Storage",
          sublabel: "PostgreSQL Database",
          icon: Database,
          x: 90,
          y: 50,
          tooltip: "Stores user profiles, teacher documents, and matching lists securely."
        }       
      ],
      edges: [
        { from: "client", to: "gateway" },
        { from: "gateway", to: "service" },
        { from: "service", to: "db" }
      ]
    },
    performance: {
      lighthouseBefore: 65,
      lighthouseAfter: 99,
      metrics: [
        { label: "Search Speeds", before: 950, after: 120, unit: "ms" },
        { label: "Asset Size", before: 4.2, after: 1.1, unit: "MB" },
        { label: "Interactive Time", before: 5.1, after: 1.3, unit: "s" },
        { label: "Match Efficiency", before: 78, after: 99, unit: "ms" }
      ]
    },
    miniLab: {
      endpoint: "/api/jobs/match",
      method: "POST",
      responseDelayMs: 600,
      mockResponse: {
        match_status: "successful",
        matched_schools: 14,
        top_category: "International Science Teacher",
        processing_time: "120ms",
        profile_verified: true
      }
    }
  },
  {
    slug: "retofoods",
    name: "RetOFoods",
    tagline: "Custom brand catalog and digital ordering platform for healthy Nigerian snacks",
    description:
      "A fast, modern web menu built for an authentic snack brand. Showcases their premium signature products—including natural Tiger Nuts Drink, fresh Parfaits, crispy ChinChin, and real fruit Smoothies - making it simple for health-conscious customers to order healthy treats.",
    stack: ["TypeScript", "Vite", "Tailwind CSS", "Interactive UI"],
    size: "md",
    accent: "cyan",
    metricBadge: "Instant Product Ordering",
    architecture: {
      nodes: [
        {
          id: "shop",
          label: "Digital Menu",
          sublabel: "Vite Front-End",
          icon: Workflow,
          x: 15,
          y: 50,
          tooltip: "A modern design system crafted to look refreshing, highlight natural freshness, and make adding items to the cart easy."
        },
        {
          id: "styles",
          label: "Brand Visuals",
          sublabel: "Tailwind Styling",
          icon: Server,
          x: 50,
          y: 50,
          tooltip: "A modern design system crafted to look refreshing, highlight natural freshness, and make adding items to the cart easy."       
        },
        {
          id: "cloud",
          label: "Order Flow",
          sublabel: "Live Platform",
          icon: Cloud,
          x: 85,
          y: 50,
          tooltip: "Tracks the selected drinks and snacks in real-time, preparing customer selections for a seamless checkout."        
        }        
      ],
      edges: [
        { from: "shop", to: "styles" },
        { from: "styles", to: "cloud" }
      ]
    },
    performance: {
      lighthouseBefore: 70,
      lighthouseAfter: 97,
      metrics: [
        { label: "Menu Load Time", before: 1200, after: 240, unit: "ms" },
        { label: "Image Performance", before: 850, after: 45, unit: "KB" },
        { label: "Mobile Browsing Ease", before: 62, after: 97, unit: "pts" }
      ]
    },
    miniLab: {
      endpoint: "/api/v1/menu/items",
      method: "GET",
      responseDelayMs: 500,
      mockResponse: {
        company: "RetO Foods",
        philosophy: "Authentic Nigerian recipes adapted for modern, healthy lifestyles",
        quality_standard: "100% natural ingredients sourced fresh daily",
        signature_products: [
          { name: "Tiger Nuts Drink", detail: "Freshly made with natural ingredients", price: "₦2,500" },
          { name: "Premium Parfait", detail: "Creamy layers, fresh fruits, crunchy granola", price: "₦3,500" },
          { name: "Crispy ChinChin", detail: "Crispy, crunchy, tasty snack for any occasion", price: "₦2,000" },
          { name: "Fruit Smoothie", detail: "Delicious blend of fresh fruits with no preservatives", price: "₦3,000" }
        ],
        values: ["Quality First", "Authentic Taste", "Community Focus"]
      }
    }
  },
  {
    slug: "churchapp",
    name: "ChurchApp",
    tagline: "All-in-one community management and communications platform",
    description:
      "A centralized dashboard platform designed to organize community directories, manage member lists, and handle organizational updates smoothly.",
    stack: ["React", "TypeScript", "Vite", "CSS Systems", "Cloud Deployment"],
    size: "md",
    accent: "indigo",
    metricBadge: "Diverse People Connected",
    architecture: {
      nodes: [
        {
          id: "portal",
          label: "Admin Portal",
          sublabel: "React Framework",
          icon: Layers,
          x: 20,
          y: 50,
          tooltip: "Allows organizers to manage announcements and community data effortlessly."
        },
        {
          id: "security",
          label: "Access Engine",
          sublabel: "Data Validation",
          icon: ShieldCheck,
          x: 55,
          y: 50,
          tooltip: "Validates community contact fields and protects user directories."
        },
        {
          id: "host",
          label: "Cloud Live",
          sublabel: "Vercel Hosting",
          icon: Cloud,
          x: 85,
          y: 50,
          tooltip: "Ensures the system stays online 24/7 without configuration failures."
        }
      ],
      edges: [
        { from: "portal", to: "security" },
        { from: "security", to: "host" }
      ]
    },
    performance: {
      lighthouseBefore: 68,
      lighthouseAfter: 97,
      metrics: [
        { label: "Dashboard Ready", before: 1400, after: 310, unit: "ms" },
        { label: "Interaction Delay", before: 85, after: 4, unit: "ms" },
        { label: "Uptime Rate", before: 99.1, after: 100, unit: "%" }
      ]
    },
    miniLab: {
      endpoint: "/api/v1/community/status",
      method: "GET",
      responseDelayMs: 500,
      mockResponse: {
        platform: "ChurchApp Online",
        deployment: "production",
        directory_count: 1250,
        network_health: "perfect"
      }
    }
  }
];

// ---- Tech Stack Matrix -------------------------------------------------

export type TechItem = {
  id: string;
  label: string;
  category: "frontend" | "backend" | "devops" | "architecture";
  dependsOn: string[]; // ids of related technologies, highlighted on hover
  useCase: string;
  mastery: "core" | "advanced" | "working";
};

export const techMatrix: TechItem[] = [
  // Frontend
  { id: "react", label: "React", category: "frontend", dependsOn: ["nextjs", "typescript"], useCase: "Primary UI library across all client work", mastery: "core" },
  { id: "nextjs", label: "Next.js", category: "frontend", dependsOn: ["react", "vercel"], useCase: "Default framework for production apps since 2021", mastery: "core" },
  { id: "typescript", label: "TypeScript", category: "frontend", dependsOn: ["react", "nodejs"], useCase: "Strict mode on every codebase, no exceptions", mastery: "core" },
  { id: "tailwind", label: "Tailwind CSS", category: "frontend", dependsOn: ["react"], useCase: "Design-system utility layer for rapid, consistent UI", mastery: "core" },
  { id: "framer", label: "Framer Motion", category: "frontend", dependsOn: ["react"], useCase: "Scroll-linked and gesture-driven interactions", mastery: "advanced" },

  // Backend
  { id: "nodejs", label: "Node.js", category: "backend", dependsOn: ["express", "typescript"], useCase: "API and service layer runtime", mastery: "core" },
  { id: "express", label: "Express", category: "backend", dependsOn: ["nodejs"], useCase: "Lightweight REST services and internal tooling", mastery: "core" },
  { id: "postgres", label: "PostgreSQL", category: "backend", dependsOn: ["nodejs", "redis"], useCase: "System of record for transactional data", mastery: "core" },
  { id: "redis", label: "Redis", category: "backend", dependsOn: ["postgres"], useCase: "Caching and rate-limiting hot paths", mastery: "advanced" },
  { id: "graphql", label: "GraphQL", category: "backend", dependsOn: ["nodejs", "postgres"], useCase: "Typed API layer for composite client queries", mastery: "advanced" },

  // DevOps
  { id: "docker", label: "Docker", category: "devops", dependsOn: ["kubernetes"], useCase: "Reproducible builds across every environment", mastery: "core" },
  { id: "kubernetes", label: "Kubernetes", category: "devops", dependsOn: ["docker", "terraform"], useCase: "Orchestration for multi-service production clusters", mastery: "advanced" },
  { id: "terraform", label: "Terraform", category: "devops", dependsOn: ["kubernetes", "vercel"], useCase: "Infrastructure as code across AWS accounts", mastery: "advanced" },
  { id: "github-actions", label: "GitHub Actions", category: "devops", dependsOn: ["docker"], useCase: "CI/CD pipelines with staged rollout gates", mastery: "core" },
  { id: "vercel", label: "Vercel", category: "devops", dependsOn: ["nextjs", "terraform"], useCase: "Edge deployment for front-end applications", mastery: "working" },

  // Architecture
  { id: "microservices", label: "Microservices", category: "architecture", dependsOn: ["kubernetes", "graphql"], useCase: "Domain-bounded services behind a gateway", mastery: "advanced" },
  { id: "event-driven", label: "Event-Driven Design", category: "architecture", dependsOn: ["microservices", "redis"], useCase: "Kafka-backed pipelines for async workflows", mastery: "advanced" },
  { id: "system-design", label: "System Design", category: "architecture", dependsOn: ["microservices", "postgres"], useCase: "Capacity planning and failure-mode analysis", mastery: "core" },
  { id: "security", label: "Application Security", category: "architecture", dependsOn: ["nodejs", "terraform"], useCase: "Threat modeling and secure-by-default APIs", mastery: "working" }
];

// ---- Timeline -----------------------------------------------------------

export type TimelineEntry = {
  id: string;
  period: string;
  company: string;
  role: string;
  breakthrough: string;
  details: string[];
};

export const timeline: TimelineEntry[] = [  
  {
    id: "role-2",
    period: "Jan 2025 — June 2026",
    company: "Kingmakers International Ministries",
    role: "Full-Stack Web Developer",
    breakthrough: "Designed, rebuilt, and launched a premium, responsive church web platform that increased digital community engagement by 300%",
    details: [
      "Designed and developed a fully responsive website layout, ensuring a perfect browsing experience across all smartphones, tablets, and desktop computers.",
      "Optimized front-end code structures and image delivery to slash page loading times, ensuring visitors never bounce due to a slow website.",
      "Implemented modern SEO best practices and clean navigation paths to dramatically improve search visibility and make finding community information effortless."
    ]
  },
  {
    id: "role-1",
    period: "Jan 2020 — December 2022",
    company: "RetO Foods",
    role: "Web Developer",
    breakthrough: "Designed and launched the brand's custom digital ordering catalog, establishing a premium online home for their natural snacks and drinks",
    details: [
      "Built a beautiful, responsive digital menu showcasing signature items like Tiger Nuts Drink and fresh Parfaits with instant interactive pricing.",
      "Optimized front-end asset loading and food photography layouts to deliver a 96% faster ordering speed for health-conscious mobile users.",
      "Crafted a modern, user-friendly shopping cart experience that made browsing products simple and guided visitors naturally toward order checkouts."
    ]
  }
];

// ---- Contact / Socials ----------------------------------------------------

export const socials: {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon;
}[] = [
  { id: "github", label: "GitHub", href: "https://github.com/Leche90", icon: Github },
  { id: "linkedin", label: "LinkedIn", href: "https://linkedin.com/in/lanzemaleche", icon: Linkedin },
  { id: "email", label: "Email", href: "oldigital@gmail.com", icon: Mail }
];

export const stackCategoryMeta: Record<
  TechItem["category"],
  { label: string; icon: LucideIcon }
> = {
  frontend: { label: "Frontend", icon: Layers },
  backend: { label: "Backend", icon: Server },
  devops: { label: "DevOps", icon: Terminal },
  architecture: { label: "Architecture", icon: ShieldCheck }
};
