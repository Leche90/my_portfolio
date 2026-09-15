import type { LucideIcon } from "lucide-react";
import {
  Boxes,
  Cloud,
  Database,
  GitBranch,
  Github,
  Layers,
  Linkedin,
  Mail,
  Server,
  ShieldCheck,
  Workflow,
  Code,
  Network
} from "lucide-react";

// ---- Hero ----

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
    description: "An automated global career connector built to intelligently match qualified teachers in Nigeria with verified global school openings using high-speed matching pipelines.",
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
    description: "A fast, modern web menu built for an authentic snack brand. Showcases their premium signature products—including natural Tiger Nuts Drink, fresh Parfaits, crispy ChinChin, and real fruit Smoothies - making it simple for health-conscious customers to order healthy treats.",
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
    description: "A centralized dashboard platform designed to organize community directories, manage member lists, and handle organizational updates smoothly.",
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
  category: "frontend" | "backend" | "database" | "frameworks" | "devops" | "architecture";
  dependsOn: string[]; // ids of related technologies, highlighted on hover
  useCase: string;
  mastery: "core" | "advanced" | "working";
};

export const techMatrix: TechItem[] = [  
  // ---- FRONTEND ----
  { id: "react",         
    label: "React",              
    category: "frontend",  
    dependsOn: [],                        
    useCase: "Building dynamic, highly interactive user interface components.", 
    mastery: "core" 
  },

  { id: "typescript",    
    label: "TypeScript",         
    category: "frontend",  
    dependsOn: [],                         
    useCase: "Enforcing strict type safety to prevent layout bugs before runtime.", 
    mastery: "core" 
  },

  { id: "nextjs",        
    label: "Next.js",            
    category: "frontend",  
    dependsOn: ["react", "typescript"],    
    useCase: "Production-ready framework for optimized web applications.", 
    mastery: "core" 
  },

  { id: "vue",           
    label: "Vue",                
    category: "frontend",  
    dependsOn: [],                         
    useCase: "Flexible interface tool for creating lightweight, responsive customer views.", 
    mastery: "core" 
  },

  { id: "tailwind",      
    label: "Tailwind CSS",       
    category: "frontend",  
    dependsOn: [],                         
    useCase: "Crafting modern, fluid, and conversion-optimized visual design systems.", 
    mastery: "core" 
  },

  { id: "framer-motion", 
    label: "Framer Motion",      
    category: "frontend",  
    dependsOn: ["react"],                  
    useCase: "Creating smooth, premium layout animations to enhance user engagement.", 
    mastery: "core" 
  },

  { id: "lucide",        
    label: "Lucide React",       
    category: "frontend",  
    dependsOn: ["react"],                  
    useCase: "Rendering clean, recognizable visual iconography across menus.", 
    mastery: "core" 
  },

  // ---- BACKEND ----
  { id: "nodejs",        
    label: "Node.js",            
    category: "backend",   
    dependsOn: [],                         
    useCase: "Fast runtime engine for running high-performance web applications.", 
    mastery: "core" 
  },

  { id: "express",       
    label: "Express",            
    category: "backend",   
    dependsOn: ["nodejs"],                 
    useCase: "Lightweight routing structure for handling fast API checkouts.", 
    mastery: "core" 
  },
    
  { id: "php",           
    label: "PHP",                
    category: "backend",   
    dependsOn: [],                         
    useCase: "Reliable programming language powering modern dynamic web projects.", 
    mastery: "core" 
  },

  { id: "ruby",          
    label: "Ruby",               
    category: "backend",   
    dependsOn: [],                         
    useCase: "Clean, object-oriented language optimized for rapid application building.", 
    mastery: "core" 
  },

  { id: "python",        
    label: "Python",             
    category: "backend",   
    dependsOn: [],                         
    useCase: "Versatile language utilized for system automation and data scripting tasks.", 
    mastery: "core" 
  },

  { id: "laravel",       
    label: "Laravel",            
    category: "backend",   
    dependsOn: ["php"],                    
    useCase: "Powerful web ecosystem for secure database routing and business logic.", 
    mastery: "core" 
  },

  // ---- DATABASE ----
  { id: "postgres",      
    label: "PostgreSQL",         
    category: "database",  
    dependsOn: [],                         
    useCase: "Primary relational storage for highly organized business data directories.", 
    mastery: "core" 
  },

  { id: "mongodb",       
    label: "MongoDB",            
    category: "database",  
    dependsOn: [],                         
    useCase: "Flexible, document-based NoSQL storage for rapid profile updates.", 
    mastery: "core" 
  },

  { id: "mysql",         
    label: "MySQL",              
    category: "database",  
    dependsOn: [],                         
    useCase: "Industry-standard relational system for tracking catalog assets securely.", 
    mastery: "core" 
  },

  { id: "mariadb",       
    label: "MariaDB",            
    category: "database",  
    dependsOn: [],                         
    useCase: "High-performance relational store optimized for speed and stability.", 
    mastery: "core" 
  },

  // ---- DEVOPS ----
  { id: "docker",        
    label: "Docker",             
    category: "devops",    
    dependsOn: [],                         
    useCase: "Packaging applications to run identically across all cloud setups.", 
    mastery: "core" 
  },

  { id: "render",        
    label: "Render",             
    category: "devops",    
    dependsOn: ["docker"],                 
    useCase: "Automated cloud hosting and continuous web service management.", 
    mastery: "core" 
  },

  { id: "github-actions",
    label: "GitHub Actions",     
    category: "devops",    
    dependsOn: [],                         
    useCase: "Automated test checking pipelines triggered on every code save.", 
    mastery: "core" 
  },

  { id: "vercel",        
    label: "Vercel",             
    category: "devops",    
    dependsOn: ["nextjs"],                 
    useCase: "Ultra-fast edge deployment platform for smooth user interfaces.", 
    mastery: "core" 
  },

  // ---- ARCHITECTURE ----
  { id: "ssr",               
    label: "Server-Side Rendering (SSR)",        
    category: "architecture", 
    dependsOn: ["nextjs", "nodejs"],              
    useCase: "Dynamically computing layouts on the host to reduce initial load times.", 
    mastery: "core" 
  },

  { id: "ssg",               
    label: "Static Site Generation (SSG)",       
    category: "architecture", 
    dependsOn: ["nextjs"],                        
    useCase: "Pre-compiling page assets to achieve maximum delivery speeds at the edge.", 
    mastery: "core" 
  },

  { id: "spa",               
    label: "Single Page Application (SPA)",      
    category: "architecture", 
    dependsOn: ["react", "vue"],                  
    useCase: "Decoupling view states to enable client-side routing with zero page reloads.", 
    mastery: "core" 
  },

  { id: "component-ui",      
    label: "Component-Based UI Architecture",    
    category: "architecture", 
    dependsOn: ["react", "vue", "nextjs"],        
    useCase: "Designing modular layout patterns that maintain predictable, clean data flows.", 
    mastery: "core" 
  },

  { id: "mvc",               
    label: "MVC Architecture",                   
    category: "architecture", 
    dependsOn: ["laravel", "express"],            
    useCase: "Separating data rules, layout interfaces, and routing logic systematically.", 
    mastery: "core" 
  },

  { id: "client-server",     
    label: "Client-Server Architecture",         
    category: "architecture", 
    dependsOn: ["nextjs", "express", "laravel"],  
    useCase: "Establishing clean operational boundaries between interfaces and backend databases.", 
    mastery: "core" 
  },

  { id: "relational-modeling",
    label:"Relational Database Modeling",       
    category: "architecture", 
    dependsOn: ["mysql", "postgres", "mariadb"],  
    useCase: "Structuring relational schemas that protect data integrity via strict mapping rules.", 
    mastery: "core" 
  },

  { id: "rest-api-design",   
    label: "RESTful API Architecture",           
    category: "architecture", 
    dependsOn: ["express", "laravel"],            
    useCase: "Exposing predictable stateless connections using explicit, standardized HTTP rules.", 
    mastery: "core" 
  },

  { id: "async-processing",  
    label: "Asynchronous Execution Flow",        
    category: "architecture", 
    dependsOn: ["nodejs", "python"],              
    useCase: "Offloading heavy database logic to background workers so interfaces never freeze.", 
    mastery: "core" 
  },

  { id: "auth-architecture", 
    label: "Token-Based Authentication",         
    category: "architecture", 
    dependsOn: ["express", "laravel"],             
    useCase: "Implementing stateless security patterns across application borders to protect sessions.", 
    mastery: "core" 
  }
]

export const stackCategoryMeta = {
  frontend: { label: "Frontend UI", icon: Layers },
  backend: { label: "Backend Runtimes", icon: Server },
  frameworks: { label: "Framework Ecosystems", icon: Code },
  database: { label: "Database Storage", icon: Database },
  devops: { label: "Cloud & DevOps", icon: Cloud },
  architecture: { label: "System Architecture", icon: Network }
};