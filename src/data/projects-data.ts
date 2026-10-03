import type { ProjectsData } from "@/types/projects.types";
import cmndPreview from "@/assets/images/cmnd/cmnd_1.png";
import blinxPreview from "@/assets/images/blinx/bx_2.png";
import kolikPreview from "@/assets/images/kolik/kolik_1.png";
import skkidoPreview from "@/assets/images/skkido_hq/skkido_1.png";
import vobbPreview from "@/assets/images/vobb/vobb_1.png";
import mrOrderPreview from "@/assets/images/mr_order/mr_order_1.png";
import lawiPreview from "@/assets/images/lawi/lawi.png";
import tokocyPreview from "@/assets/images/toko_cy/tokocy.png";
import valendataPreview from "@/assets/images/valendata/valendata.png";
import fatsomaTabbPreview from "@/assets/images/tabb/tabb.png";
import afbfPreview from "@/assets/images/afbf/afbf.png";
import cretoscopePreview from "@/assets/images/cretoscope/cretoscope.png";
import dreepPreview from "@/assets/images/dreep/dreep.png";

export const projectsData: ProjectsData = {
  tag: "What I've built",
  title: "Projects",
  subtitle:
    "Selected production platforms across AI systems, enterprise workflows, and scalable enterprise platforms.",
  items: [
    {
      name: "CMND.AI Platform",
      type: "Enterprise AI Ecosystem",
      status: "In Production",
      liveUrl: "https://www.cmnd.ai/",
      description:
        "Comprehensive AI platform consolidating enterprise automation into one unified ecosystem. Features include an LLM Evaluation Studio for model optimization, RAG-powered Knowledge Base transforming documents and web pages into searchable AI repositories, Chatbot Creator for custom AI assistants, Autonomous Agents for task automation and workflow orchestration, Meeting Assistant for transcription and summarization, WhatsApp Bot for customer engagement, intelligent web scraping, and 150+ app integrations.",
      role:
        "Engineered full-stack AI platform architecture spanning RAG pipelines, autonomous agents, meeting automation, web scraping, and on-premise deployments. Integrated multiple LLM providers, optimized retrieval quality, and exposed platform capabilities via MCP adapters for agent-to-tool interoperability across enterprise automation workflows.",
      ownershipNote:
        "This is a unified portfolio case study that consolidates multiple production systems delivered within the same CMND platform.",
      tech: [
        "Python",
        "FastAPI",
        "Microservices",
        "LangChain",
        "RAG",
        "Vector Database",
        "OpenAI API",
        "Prompt Engineering",
        "Selenium",
        "NLP Preprocessing",
        "ETL Pipelines",
        "PostgreSQL",
        "Docker",
        "AWS",
        "React.js",
        "Node.js",
        "MySQL",
      ],
      featured: true,
      previewImage: cmndPreview,
      rolesRelevant: [
        "ai-software-engineer",
        "ml-engineer",
        "fullstack-engineer",
        "phd-student",
      ],
    },
    {
      name: "Blinx Healthcare Platform",
      type: "Healthcare Technology",
      status: "In Production",
      liveUrl: "https://www.blinxhealthcare.com/",
      description:
        "Digital health platform featuring NHS-integrated e-prescriptions, electronic consultations, unified patient records across care settings, real-time team communication, and PACO Assist for clinical decision support, deployable across NHS, private, and international providers.",
      role: "Architected and deployed the full-stack platform including real-time communication, secure patient data handling, NHS integration, and Paco Assist AI.",
      tech: [
        "React.js",
        "Node.js",
        "AI Integration",
        "PostgreSQL",
        "WebSocket",
        "AWS",
        "GraphQL",
        "NHS APIs",
      ],
      featured: true,
      previewImage: blinxPreview,
      rolesRelevant: ["fullstack-engineer", "ai-software-engineer", "ml-engineer"],
    },
    {
      name: "Valendata",
      type: "AI Browser Automation Platform",
      status: "In Production",
      liveUrl: "https://www.valendata.com/",
      description:
        "AI-powered browser automation platform that turns websites into reusable skills and multi-step pipelines. Users describe goals in plain language and the platform drives real browsers, records the steps as reusable skills, and chains them into persistent workflows. Features automation across JavaScript-heavy, authenticated, and dynamic sites; a visual workflow canvas; a Chrome extension for running automations in real browser sessions; real-time voice interaction; an AI-powered email inbox; instant REST API generation per skill; self-healing automations that adapt to site changes; 50+ integrations; and an MCP server for plugging workflows into external agent systems.",
      role:
        "Contributed across the full-stack platform spanning the browser automation core, AI orchestration layer, and multi-repo architecture. Built the natural language task interpreter, API generation pipeline, skill marketplace, and self-healing engine. Extended the platform with a visual workflow builder for multi-step automation pipelines, real-time voice interaction, an AI-powered mailbox, a Chrome extension for authenticated browser sessions, and an MCP server exposing workflows to external agents. Set up the CI/CD pipeline and managed deployment and server configuration on a dedicated VPS.",
      tech: [
        "React.js",
        "Vite",
        "TypeScript",
        "Zustand",
        "Mantine",
        "Python",
        "FastAPI",
        "SQLAlchemy",
        "Alembic",
        "PostgreSQL",
        "Redis",
        "OpenAI",
        "Anthropic",
        "Google Generative AI",
        "Groq",
        "LangChain",
        "PyTorch",
        "scikit-learn",
        "sentence-transformers",
        "Playwright",
        "Docker",
        "CI/CD",
      ],
      featured: true,
      previewImage: valendataPreview,
      rolesRelevant: [
        "ai-software-engineer",
        "ml-engineer",
        "fullstack-engineer",
      ],
    },
    {
      name: "Cretoscope",
      type: "AI Creator Sourcing Platform",
      status: "In Production",
      liveUrl: "https://www.cretoscope.com/",
      description:
        "AI-powered platform for discovering and activating creators across diverse social platforms including TikTok, Instagram, and YouTube. Uses autonomous AI agents to source creators by engagement rate, generate platform-specific campaign briefs, and draft multi-step outreach sequences. Includes campaign management, performance analytics, and webhook integrations with Slack, HubSpot, and Pipedrive.",
      role:
        "Built the full-stack platform end-to-end, including the autonomous AI agent layer with real Claude tool-use loops, a structured tool registry, and multiple specialised agents for creator sourcing, brief generation, and outreach sequencing. Designed the async task queue architecture for background agent execution. Exposed platform capabilities via an MCP server, enabling external agents to plug into creator sourcing and outreach workflows. Investigated LLM token cost management strategies and reduced token usage by over 50% through prompt caching and tool result optimisation. Set up the CI/CD pipeline and deployed the full system to a dedicated VPS.",
      tech: [
        "Python",
        "FastAPI",
        "PostgreSQL",
        "Redis",
        "Celery",
        "React",
        "TypeScript",
        "Anthropic Claude",
        "Docker",
      ],
      featured: true,
      previewImage: cretoscopePreview,
      rolesRelevant: ["ai-software-engineer", "ml-engineer", "fullstack-engineer"],
    },
    {
      name: "Skkido HQ",
      type: "Client Workspace & Service Operations Platform",
      status: "In Production",
      liveUrl: "https://www.skkido.com/",
      description:
        "Unified workspace for freelancers, consultants, agencies, and small service businesses. Consolidates CRM, project management, contracts, invoicing, payments, client communication, and AI-powered features to streamline the full client lifecycle from first contact to final payment.",
      role:
        "Led product engineering for a multi-module workspace platform integrating client operations, workflows, financial processes, and AI-powered automation into a single scalable experience.",
      tech: [
        "Vue.js",
        "Laravel",
        "MySQL",
        "PostgreSQL",
        "Vector Database",
        "Python",
        "CRM Workflows",
        "Invoicing & Payments",
        "Document Workflows",
        "REST APIs",
        "AI Integration",
      ],
      featured: true,
      previewImage: skkidoPreview,
      rolesRelevant: ["fullstack-engineer", "ai-software-engineer"],
    },
    {
      name: "Kolik HR Operations Platform",
      type: "HR Management & Workflow Automation",
      status: "In Production",
      liveUrl: "https://kolik.co/",
      description:
        "Centralized HR platform for managing employee records, leave workflows, payroll operations, support tickets, and payment orders. Includes AI-assisted recommendations and automation to reduce manual workload and improve response speed for HR teams.",
      role:
        "Built and integrated core HR modules across workforce data, approvals, payroll automation, and support workflows; designed dashboard experiences and AI-assisted operational flows.",
      tech: [
        "React.js",
        "Node.js",
        "MySQL",
        "Workflow Automation",
        "REST APIs",
        "Role-Based Access",
        "AI Assistant",
      ],
      featured: true,
      previewImage: kolikPreview,
      rolesRelevant: ["fullstack-engineer", "ai-software-engineer"],
    },
    {
      name: "Africa Food Basket Federation",
      type: "Pan-African NGO Platform",
      status: "In Production",
      liveUrl: "https://demo.africafbf.org/",
      description:
        "Digital home for a Pan-African non-profit federation dedicated to food sovereignty and intra-African agricultural trade. The platform serves farmers, agri-professionals, donors, and government partners across Africa with membership registration, a member portal, events, insights, donations, and multilingual support, built and deployed as a production system on custom infrastructure.",
      role:
        "Sole engineer across the entire stack and infrastructure. Built the frontend, REST API, and database layer, including the membership lifecycle, certificate generation, and role-based access control. Configured and deployed the full production environment with Nginx, SSL, Docker Compose, and an automated CI/CD pipeline to a self-managed VPS.",
      tech: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MySQL",
        "Cloudinary",
        "Resend",
        "Paystack",
        "Docker",
        "Nginx",
        "CI/CD",
      ],
      featured: true,
      previewImage: afbfPreview,
      rolesRelevant: ["fullstack-engineer", "ai-software-engineer"],
    },
    {

      name: "Fatsoma Tabb Platform",
      type: "e-Commerce & Ordering System",
      status: "In Production",
      liveUrl: "https://business.fatsoma.com/tabb",
      description:
        "Production food-ordering platform that lets users discover venues, customize orders, and complete checkout with a smooth end-to-end flow. Includes real-time order handling, menu customization, payment processing, analytics instrumentation, and customer feedback workflows.",
      role:
        "Contributed across frontend and backend services in a multi-repo architecture. Delivered user-facing and operational features (including tipping), improved platform stability through ongoing maintenance, and integrated analytics, feedback modules, and AI-assisted content capabilities.",
      tech: [
        "Golang",
        "React.js",
        "SAM",
        "AI Integration",
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "REST APIs",
        "CI/CD",
        "AWS",
        "Payment Integration",
        "Responsive Design",
      ],
      featured: false,
      previewImage: fatsomaTabbPreview,
      rolesRelevant: [
        "fullstack-engineer",
        "ai-software-engineer",
      ],
    },
    {
      name: "Dreep",
      type: "Cloud Media Processing Platform",
      status: "In Production",
      liveUrl: "https://dreep.cloud/",
      description:
        "Cloud media asset management and processing platform for uploading, transforming, and serving images and video at scale. Features AI-powered image tagging, background removal, OCR, image and video transformations, folder organisation, team collaboration, and BYOB storage with integrations for S3, Cloudflare R2, and Cloudinary. Available via REST API with usage-based billing across Free, Starter, and Pro plans.",
      role:
        "Contributed across image and video transformation pipelines, AI-powered image tagging, webhook delivery, BYOB storage integrations, and developer-facing API documentation.",
      tech: [
        "Node.js",
        "TypeScript",
        "Fastify",
        "PostgreSQL",
        "AWS S3",
        "AWS Rekognition",
        "Cloudflare R2",
        "Cloudinary",
        "FFmpeg",
        "Docker",
      ],
      featured: false,
      previewImage: dreepPreview,
      rolesRelevant: ["fullstack-engineer", "ai-software-engineer"],
    },
    {
      name: "LAWI Gourmet - Custom Dessert Platform",
      type: "e-Commerce & Ordering System",
      status: "In Production",
      liveUrl: "https://lawi.ng/",
      description:
        "Custom dessert ordering platform enabling customers to configure and order personalized gourmet desserts. Features real-time order management, ingredient customization, image galleries, and integrated payment system.",
      role: "Developed full-stack ordering platform with intuitive UI for dessert customization, integrated payment processing, and backend order management system.",
      tech: [
        "Vue.js",
        "Laravel",
        "MySQL",
        "REST APIs",
        "Payment Integration",
        "Responsive Design",
      ],
      featured: false,
      previewImage: lawiPreview,
      rolesRelevant: [
        "fullstack-engineer",
        "ai-software-engineer",
      ],
    },
    {
      name: "Tokocy - Digital Product Marketplace",
      type: "E-Commerce Platform",
      status: "In Production",
      liveUrl: "https://tokocy.com/",
      description:
        "Full-stack digital product marketplace connecting creators with customers. Platform features product listings, secure payment processing, inventory management, and real-time order notifications with responsive design across all devices.",
      role: "Built complete marketplace platform from database design through frontend UI, implemented payment gateway integration, and established scalable backend infrastructure.",
      tech: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Stripe API",
        "Docker",
        "AWS",
        "Responsive Design",
      ],
      featured: false,
      previewImage: tokocyPreview,
      rolesRelevant: ["fullstack-engineer", "ai-software-engineer"],
    },
    {
      name: "VOBB Travel Agent Platform",
      type: "Travel Operations Platform",
      status: "In Production",
      liveUrl: "http://vobb.io/",
      description:
        "All-in-one operational platform supporting travel agents in daily business workflows, customer handling, and booking-related processes. Designed to centralize fragmented operations into a reliable system for faster service delivery.",
      role:
        "Contributed to full-stack development, operational feature delivery, and workflow improvements for travel-business use cases.",
      tech: [
        "React.js",
        "NestJS",
        "MySQL",
        "JavaScript",
        "Bootstrap",
        "REST APIs",
      ],
      featured: false,
      previewImage: vobbPreview,
      rolesRelevant: [
        "fullstack-engineer",
        "ai-software-engineer",
      ],
    },
    {
      name: "MR Order",
      type: "Cross-Platform Ordering System",
      status: "In Production",
      description:
        "Scalable ordering platform with web and mobile interfaces, enabling real-time order management and seamless multi-device experiences. Exposed secure APIs consumed by Android and iOS applications.",
      role:
        "Engineered secure RESTful services in PHP/MySQL, built dynamic web modules with JavaScript/jQuery, and validated API reliability through systematic testing.",
      tech: [
        "PHP",
        "MySQL",
        "REST APIs",
        "JavaScript",
        "jQuery",
        "Android Integration",
        "iOS Integration",
        "Postman",
      ],
      featured: false,
      previewImage: mrOrderPreview,
      rolesRelevant: [
        "fullstack-engineer",
        "ai-software-engineer",
      ],
    },
  ],
};
