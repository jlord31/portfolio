import type { AboutData } from "@/types/about.types";
import type { Role } from "@/types/role.types";

export interface RoleAboutData extends AboutData {
  rolesRelevant: Role[];
}

export const aboutData: RoleAboutData[] = [
  {
    tag: "01 / ABOUT",
    heading: "About Me",
    bio: [
      "I'm Joseph Adepoju, an AI Software Engineer with 7+ years of software engineering experience across backend systems, cloud infrastructure, and AI platforms. I specialize in building intelligent applications powered by LLM frameworks, retrieval-augmented generation (RAG), and scalable systems.",
      "I excel at bridging research and production, designing sophisticated AI workflows, optimizing system performance, and engineering solutions that handle complex real-world problems. I focus on production-ready solutions that deliver measurable business impact.",
    ],
    stats: [
      { value: "2+", label: "Years in Applied AI Systems" },
      { value: "4", label: "LLM Providers Integrated" },
      { value: "7+", label: "Years Software Engineering" },
    ],
    rolesRelevant: ["ai-software-engineer"],
  },
  {
    tag: "01 / ABOUT",
    heading: "About Me",
    bio: [
      "I'm Joseph Adepoju, a Machine Learning Engineer with 7+ years of engineering experience. I specialize in developing and optimizing deep learning models for production systems, with expertise in computer vision, neural architecture design, and building ML pipelines that scale efficiently.",
      "My expertise spans PyTorch model development, training optimization, and deploying models in resource-constrained environments. I'm passionate about understanding model behavior at a fundamental level—from loss landscapes to gradient dynamics—and applying these insights to build more efficient and robust systems.",
    ],
    stats: [
      { value: "7+", label: "Years Engineering Experience" },
      { value: "20-30%", label: "Training Time Reduction" },
      { value: "15%", label: "Model Accuracy Improvement" },
      { value: "2", label: "Research Publications" },
    ],
    rolesRelevant: ["ml-engineer"],
  },
  {
    tag: "01 / ABOUT",
    heading: "About Me",
    bio: [
      "I'm Joseph Adepoju, a Fullstack Engineer with 7+ years of experience building complete web applications with modern technologies. I specialize in creating seamless user experiences with React while architecting robust backend services with Python and Node.js.",
      "I thrive at solving end-to-end problems—from database design and API architecture to interactive frontends and AI integration. My strength is understanding the complete system picture, identifying bottlenecks, and delivering solutions that are both performant and maintainable.",
    ],
    stats: [
      { value: "7+", label: "Years Fullstack Development" },
      { value: "~30%", label: "Database Size Reduction" },
      { value: "~20%", label: "API Response Improvement" },
      { value: "~30%", label: "Deployment Error Reduction" },
    ],
    rolesRelevant: ["fullstack-engineer"],
  },
  {
    tag: "01 / ABOUT",
    heading: "About Me",
    bio: [
      "I'm Joseph Adepoju, a prospective PhD researcher in AI with 7+ years of combined academic and industry experience. My research focuses on generative models, computer vision, and multimodal learning—with demonstrated applications in production systems.",
      "I'm driven by understanding the fundamentals—why models work, how to improve them, and how research findings translate to real-world impact. My approach bridges the gap between academic rigor and practical engineering, enabling innovations that are both theoretically sound and commercially viable.",
    ],
    stats: [
      { value: "2", label: "Research Publications" },
      { value: "20-30%", label: "Training Time Reduction" },
      { value: "3+", label: "Research Projects" },
    ],
    rolesRelevant: ["phd-student"],
  },
];
