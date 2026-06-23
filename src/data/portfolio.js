export const personal = {
  name: "Nikita Singh",
  title: "Full Stack Developer",
  tagline: "Node.js · React.js · AWS · TypeScript",
  email: "nikita03.sing@gmail.com",
  phone: "+91-7024487415",
  linkedin: "https://linkedin.com/in/nikita-singh-b8441516a",
  github: "https://github.com/Nikita-7024",
  leetcode: "https://leetcode.com/u/nikita_singh24/",
  location: "Bengaluru, India",
  summary:
    "Full Stack Developer with 4+ years of experience building and shipping scalable production systems across enterprise, healthcare, e-commerce, and ed-tech domains. At Deloitte, delivering clinical data infrastructure for Eli Lilly & Company — a global pharmaceutical leader — working with AWS Neptune DB, TypeScript, and REST microservices at enterprise scale. Previously at WeAddo, built 10+ client platforms end-to-end from scratch using the MERN stack, Redis caching, and AWS — reducing API latency by 60% and maintaining 99.9% uptime across all production systems. Hands-on experience with Generative AI, LLM APIs, RAG pipelines, and agentic AI workflows. Strong foundations in Data Structures & Algorithms (212+ LeetCode problems) and System Design (LLD & HLD).",
};

export const experience = [
  {
    company: "Deloitte",
    role: "Full Stack Developer (Consultant / AM)",
    period: "Nov 2025 – Present",
    location: "Bengaluru, India",
    tech: ["React.js", "Node.js", "TypeScript", "GraphQL", "AWS CDK", "Neptune DB", "Docker"],
    points: [
      "Building enterprise-scale clinical data platforms for Eli Lilly & Company (Global Pharmaceutical), managing complex distributed workflows across multi-tenant environments.",
      "Drove backend architecture shift towards scalable REST-based microservices, improving system maintainability and team velocity.",
      "Designed graph-based data models in AWS Neptune DB to represent and query complex clinical trial relationships efficiently.",
      "Standardised clinical data pipelines (USDM v4) across cross-functional teams, enabling reliable downstream system integration.",
      "Improved deployment efficiency through AWS CDK infrastructure-as-code and Docker-based CI/CD automation.",
    ],
  },
  {
    company: "WeAddo",
    role: "MERN Developer",
    period: "Aug 2022 – Nov 2025",
    location: "Gurugram, India",
    tech: ["Node.js", "Express.js", "MongoDB", "React.js", "Redis", "AWS EC2", "AWS S3", "MySQL"],
    points: [
      "Built and optimised 50+ REST APIs using Node.js and Express.js, cutting backend latency by 60% and improving throughput by 40%.",
      "Implemented Redis caching strategy for high-traffic endpoints, achieving a 50% reduction in response times under peak load.",
      "Architected CMS and CRM modules that reduced manual operational work by 30%, adopted across multiple client products.",
      "Managed and maintained AWS infrastructure (EC2, S3) ensuring 99.9% uptime across all production environments.",
      "Led end-to-end development of 10+ production platforms across e-commerce, healthcare, real estate, and ed-tech domains.",
    ],
  },
  {
    company: "FunctionUp",
    role: "Full Stack Web Development Trainee",
    period: "Jan 2022 – Jul 2022",
    location: "Bengaluru, India",
    tech: ["Node.js", "React.js", "MongoDB", "REST APIs", "Redis", "AWS S3"],
    points: [
      "Built full-stack applications using Node.js, React, and MongoDB with REST APIs and authentication flows.",
      "Gained hands-on experience with API testing (Postman), Redis caching, and AWS S3 file storage integrations.",
    ],
  },
];

// Project categories for the UI tabs
export const projectCategories = ["All", "Enterprise", "Healthcare", "E-commerce", "Real Estate", "Ed-Tech", "Personal"];

export const projects = [
  // ── ENTERPRISE / CURRENT ──────────────────────────────────────
  {
    name: "Digital Trial Foundation – SDR",
    period: "2025 – Present",
    company: "Eli Lilly & Company (via Deloitte)",
    category: "Enterprise",
    domain: "🏥 Clinical / Pharma",
    tech: ["React.js", "Node.js", "TypeScript", "GraphQL", "REST APIs", "AWS CDK", "Neptune DB", "Vitest"],
    points: [
      "Migrated legacy GraphQL AppSync architecture to Node.js + REST APIs, improving backend control and scalability.",
      "Built interactive React dashboard with KPI metrics, pie charts, date range filters, and phase/version-based views for multi-dimensional clinical datasets.",
      "Wrote comprehensive unit and integration test suites using Vitest across critical data transformation layers.",
    ],
    github: null,
    highlight: true,
  },

  // ── HEALTHCARE ────────────────────────────────────────────────
  {
    name: "Marengo Asia Hospital",
    period: "2022 – 2025",
    company: "WeAddo",
    category: "Healthcare",
    domain: "🏥 Healthcare",
    tech: ["Node.js", "Express.js", "React.js", "MongoDB", "AWS EC2", "AWS S3", "Redis", "CMS Module"],
    points: [
      "Built full hospital website with patient inquiry flows, department pages, doctor profiles, and appointment request system.",
      "Developed CMS module enabling hospital admin team to manage content, news, and doctors without developer involvement.",
      "Integrated third-party APIs for appointment scheduling and implemented SEO best practices for organic traffic growth.",
    ],
    github: null,
    highlight: false,
  },
  {
    name: "BMH Hospital",
    period: "2022 – 2025",
    company: "WeAddo",
    category: "Healthcare",
    domain: "🏥 Healthcare",
    tech: ["Node.js", "Express.js", "React.js", "MongoDB", "AWS S3", "REST APIs"],
    points: [
      "End-to-end hospital platform with service listings, specialist profiles, and patient contact workflows.",
      "Built REST APIs for dynamic content management, form submissions, and media asset handling via AWS S3.",
      "Delivered responsive frontend with optimised load times and SEO-friendly page structure.",
    ],
    github: null,
    highlight: false,
  },
  {
    name: "Citizen Speciality Hospital",
    period: "2022 – 2025",
    company: "WeAddo",
    category: "Healthcare",
    domain: "🏥 Healthcare",
    tech: ["Node.js", "Express.js", "React.js", "MongoDB", "Redis", "AWS EC2"],
    points: [
      "Delivered full-stack web platform for a speciality hospital with multi-department structure and doctor directory.",
      "Implemented Redis caching for high-traffic pages, reducing server load and improving page response times.",
      "Built admin panel for managing doctors, departments, and patient inquiry leads.",
    ],
    github: null,
    highlight: false,
  },
  {
    name: "AOI Hospital",
    period: "2022 – 2025",
    company: "WeAddo",
    category: "Healthcare",
    domain: "🏥 Healthcare",
    tech: ["Node.js", "Express.js", "React.js", "MongoDB", "AWS S3", "REST APIs"],
    points: [
      "Built complete hospital web presence with service pages, team profiles, and contact management.",
      "Developed secure REST APIs for form submissions, media uploads, and content delivery.",
      "Maintained 99.9% uptime through AWS EC2 deployment and environment-level monitoring.",
    ],
    github: null,
    highlight: false,
  },

  // ── E-COMMERCE ────────────────────────────────────────────────
  {
    name: "Somany Tiles & Bathware",
    period: "2022 – 2025",
    company: "WeAddo",
    category: "E-commerce",
    domain: "🛍️ E-commerce",
    tech: ["Node.js", "Express.js", "React.js", "MongoDB", "MySQL", "Redis", "AWS EC2", "AWS S3", "CMS Module"],
    points: [
      "Built large-scale e-commerce platform for one of India's leading tile brands — product catalogue, search, filters, and dealer locator.",
      "Implemented Redis caching for product listing pages, cutting response times by 50% under peak load.",
      "Architected CMS module for the marketing team to manage products, banners, and promotions independently.",
      "Integrated AWS S3 for high-volume image asset storage and CloudFront for fast media delivery.",
    ],
    github: null,
    highlight: true,
  },
  {
    name: "WaterTec",
    period: "2022 – 2025",
    company: "WeAddo",
    category: "E-commerce",
    domain: "🛍️ E-commerce",
    tech: ["Node.js", "Express.js", "React.js", "MongoDB", "AWS S3", "REST APIs", "CMS Module"],
    points: [
      "Full-stack product catalogue and e-commerce platform for a water solutions brand.",
      "Built product listing, category management, and inquiry system with CMS-driven content.",
      "Developed admin dashboard for product management, orders, and customer inquiry tracking.",
    ],
    github: null,
    highlight: false,
  },

  // ── REAL ESTATE ───────────────────────────────────────────────
  {
    name: "Max India / Max Financial Services",
    period: "2022 – 2025",
    company: "WeAddo",
    category: "Real Estate",
    domain: "🏢 Real Estate",
    tech: ["Node.js", "Express.js", "React.js", "MongoDB", "Redis", "AWS EC2", "AWS S3", "CRM Integration"],
    points: [
      "Built enterprise real estate platform for Max India — property listings, lead capture, and CRM integration for sales team workflows.",
      "Implemented CRM module connecting web inquiries directly to the sales pipeline, reducing lead response time.",
      "Developed property search with filters (location, budget, type) backed by optimised MongoDB queries.",
      "Integrated third-party payment and document management APIs for transaction flows.",
    ],
    github: null,
    highlight: true,
  },
  {
    name: "AU Real Estate",
    period: "2022 – 2025",
    company: "WeAddo",
    category: "Real Estate",
    domain: "🏢 Real Estate",
    tech: ["Node.js", "Express.js", "React.js", "MongoDB", "AWS S3", "REST APIs"],
    points: [
      "End-to-end real estate listing platform with property search, detail pages, and agent contact flows.",
      "Built admin panel for property management — adding listings, managing media, and tracking inquiries.",
      "Responsive frontend with SEO optimisation for organic property search traffic.",
    ],
    github: null,
    highlight: false,
  },

  // ── ED-TECH ───────────────────────────────────────────────────
  {
    name: "AAFT – Asia's Largest Media University",
    period: "2022 – 2025",
    company: "WeAddo",
    category: "Ed-Tech",
    domain: "🎓 Ed-Tech",
    tech: ["Node.js", "Express.js", "React.js", "MongoDB", "Redis", "AWS EC2", "AWS S3", "CMS Module", "CRM Integration"],
    points: [
      "Built full university web platform for AAFT — course listings, admissions inquiry, student testimonials, and event management.",
      "Developed CRM-integrated lead management system to track and manage thousands of student admissions inquiries.",
      "Implemented CMS for the content team to manage courses, faculty, news, and media independently.",
      "Redis caching for high-traffic course pages; AWS S3 for large media and video asset storage.",
    ],
    github: "https://github.com/Nikita-7024/lead_management_AAFT",
    highlight: false,
  },
  {
    name: "ASB – Ed-Tech Platform",
    period: "2022 – 2025",
    company: "WeAddo",
    category: "Ed-Tech",
    domain: "🎓 Ed-Tech",
    tech: ["Node.js", "Express.js", "React.js", "MongoDB", "AWS S3", "REST APIs", "CMS Module"],
    points: [
      "Full-stack ed-tech platform with course catalogue, student inquiry system, and content management.",
      "Built REST APIs for course management, media uploads, and form submission handling.",
      "CMS module allowing the academic team to update courses, faculty profiles, and announcements.",
    ],
    github: null,
    highlight: false,
  },

  // ── PERSONAL PROJECTS ─────────────────────────────────────────
  {
    name: "AI Code Reviewer",
    period: "2024",
    company: "Personal Project",
    category: "Personal",
    domain: "🤖 AI / Developer Tools",
    tech: ["TypeScript", "Node.js", "Redis", "MongoDB", "GitHub API", "Claude AI"],
    points: [
      "GitHub App that automatically reviews pull requests using AI, providing inline code suggestions.",
      "Redis-backed queue system for processing review jobs asynchronously at scale.",
      "Full architecture with webhook handling, job processing, and AI integration.",
    ],
    github: "https://github.com/Nikita-7024/ai-code-reviewer",
    highlight: true,
  },
  {
    name: "MANUFAC Analytics REST API",
    period: "2023",
    company: "Personal Project",
    category: "Personal",
    domain: "⚙️ Backend / API",
    tech: ["Node.js", "PostgreSQL", "Prisma", "Docker", "Zod", "Express.js"],
    points: [
      "Production-grade REST API with Prisma ORM, PostgreSQL, and Docker containerisation.",
      "Input validation using Zod, retry logic, and structured error handling.",
      "Fully Dockerised setup for consistent local and production environments.",
    ],
    github: "https://github.com/Nikita-7024/MANUFAC_RESTAPI-NODE.JS-POSTGRESQL-",
    highlight: false,
  },
  {
    name: "Task Manager API",
    period: "2023",
    company: "Personal Project",
    category: "Personal",
    domain: "⚙️ Backend / API",
    tech: ["Node.js", "Express.js", "MongoDB", "JWT"],
    points: [
      "REST API with JWT authentication, role-based access control, and soft delete functionality.",
      "Clean architecture with modular routing and middleware layers.",
    ],
    github: "https://github.com/Nikita-7024/H2S_taskManager",
    highlight: false,
  },
];

export const skills = {
  Languages: ["JavaScript", "TypeScript"],
  Frontend: ["React.js", "HTML5", "CSS3"],
  Backend: ["Node.js", "Express.js", "GraphQL", "REST APIs"],
  Databases: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
  "Cloud & DevOps": ["AWS EC2", "AWS S3", "AWS Lambda", "AWS CDK", "AWS SQS", "AWS SNS", "AWS CloudWatch", "AWS RDS", "AWS CloudFront", "AWS KMS", "Docker", "CI/CD"],
  Testing: ["Vitest", "Postman"],
  "API & Docs": ["OpenAPI / Swagger", "Postman"],
  Concepts: ["System Design (LLD & HLD)", "Microservices", "Distributed Systems", "Caching", "Load Balancing", "DSA"],
  Tools: ["Git", "GitHub", "GitLab"],
  Integrations: ["CMS Modules", "CRM Integration", "Third-party APIs"],
  "AI & GenAI": ["Generative AI", "LLM APIs", "Prompt Engineering", "RAG Pipelines", "AI Agents", "LangChain", "LlamaIndex", "Vector Databases", "Embeddings", "Agentic Workflows", "Claude API", "OpenAI API", "Pinecone", "Hugging Face"]
};

export const education = {
  degree: "B.Tech in Mechanical Engineering",
  university: "Barkatullah University",
  period: "2016 – 2020",
  location: "Bhopal, India",
  cgpa: "8.0",
};

export const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "10+", label: "Production Projects" },
  { value: "50+", label: "REST APIs Built" },
  { value: "60%", label: "API Latency Reduced" },
];
