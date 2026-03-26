import type { SkillsData } from "@/types/skills.types";

export const skillsData: SkillsData = {
  tag: "What I work with",
  title: "Skills",
  categories: [
    {
      label: "Languages",
      skills: [
        { name: "Python", rolesRelevant: ["ai-software-engineer", "ml-engineer", "phd-student"] },
        { name: "TypeScript", rolesRelevant: ["ai-software-engineer", "fullstack-engineer"] },
        { name: "JavaScript (ES6+)", rolesRelevant: ["ai-software-engineer", "fullstack-engineer"] },
        { name: "PHP", rolesRelevant: ["fullstack-engineer"] },
        { name: "SQL", rolesRelevant: ["fullstack-engineer", "ai-software-engineer"] },
      ],
    },
    {
      label: "ML & AI Core",
      skills: [
        { name: "TensorFlow", rolesRelevant: ["ml-engineer", "phd-student"] },
        { name: "PyTorch", rolesRelevant: ["ml-engineer", "phd-student"] },
        { name: "LLM Workflows", rolesRelevant: ["ai-software-engineer"] },
        { name: "Prompt Engineering", rolesRelevant: ["ai-software-engineer"] },
        { name: "NLP Preprocessing", rolesRelevant: ["ml-engineer", "ai-software-engineer"] },
        { name: "RAG Systems", rolesRelevant: ["ai-software-engineer"] },
      ],
    },
    {
      label: "Machine Learning Practice",
      skills: [
        { name: "Deep Learning", rolesRelevant: ["ml-engineer", "phd-student"] },
        { name: "Image Classification", rolesRelevant: ["ml-engineer", "phd-student"] },
        { name: "Medical Image Segmentation", rolesRelevant: ["ml-engineer", "phd-student"] },
        { name: "Data Augmentation", rolesRelevant: ["ml-engineer"] },
        { name: "Hyperparameter Tuning", rolesRelevant: ["ml-engineer"] },
        { name: "Model Optimization", rolesRelevant: ["ml-engineer"] },
      ],
    },
    {
      label: "AI Infrastructure",
      skills: [
        { name: "Vector Databases", rolesRelevant: ["ai-software-engineer"] },
        { name: "Embeddings", rolesRelevant: ["ai-software-engineer"] },
        { name: "LangChain", rolesRelevant: ["ai-software-engineer"] },
        { name: "Multi-step Chaining", rolesRelevant: ["ai-software-engineer"] },
        { name: "RAG Pipelines", rolesRelevant: ["ai-software-engineer"] },
        { name: "Knowledge Grounding", rolesRelevant: ["ai-software-engineer"] },
      ],
    },
    {
      label: "Data & ML Operations",
      skills: [
        { name: "Data Pipelines", rolesRelevant: ["ai-software-engineer", "ml-engineer"] },
        { name: "Feature Engineering", rolesRelevant: ["ml-engineer", "ai-software-engineer"] },
        { name: "Web Scraping (Selenium)", rolesRelevant: ["fullstack-engineer"] },
        { name: "ETL Processes", rolesRelevant: ["ai-software-engineer", "ml-engineer"] },
        { name: "Experiment Tracking", rolesRelevant: ["ml-engineer"] },
        { name: "Data Versioning", rolesRelevant: ["ml-engineer"] },
      ],
    },
    {
      label: "DevOps & Cloud",
      skills: [
        { name: "Docker", rolesRelevant: ["ai-software-engineer", "fullstack-engineer"] },
        { name: "AWS (Batch, S3, etc.)", rolesRelevant: ["ai-software-engineer", "ml-engineer"] },
        { name: "CI/CD (GitHub Actions)", rolesRelevant: ["ai-software-engineer", "fullstack-engineer"] },
        { name: "GPU Optimization", rolesRelevant: ["ml-engineer"] },
        { name: "Mixed-Precision Training", rolesRelevant: ["ml-engineer"] },
        { name: "Distributed Computing", rolesRelevant: ["ml-engineer"] },
      ],
    },
    {
      label: "Databases",
      skills: [
        { name: "PostgreSQL", rolesRelevant: ["fullstack-engineer", "ai-software-engineer"] },
        { name: "MySQL", rolesRelevant: ["fullstack-engineer"] },
        { name: "MongoDB", rolesRelevant: ["fullstack-engineer", "ai-software-engineer"] },
        { name: "Vector Databases", rolesRelevant: ["ai-software-engineer"] },
      ],
    },
    {
      label: "Web Development",
      skills: [
        { name: "React.js", rolesRelevant: ["fullstack-engineer", "ai-software-engineer"] },
        { name: "Vue.js", rolesRelevant: ["fullstack-engineer"] },
        { name: "Bootstrap", rolesRelevant: ["fullstack-engineer"] },
        { name: "REST APIs", rolesRelevant: ["fullstack-engineer", "ai-software-engineer"] },
        { name: "Laravel", rolesRelevant: ["fullstack-engineer"] },
        { name: "WCAG 2.0AA Accessibility", rolesRelevant: ["fullstack-engineer"] },
      ],
    },
    {
      label: "Natural Languages",
      skills: [
        { name: "English (Native)", rolesRelevant: ["ai-software-engineer", "ml-engineer", "fullstack-engineer", "phd-student"] },
        { name: "German (B2)", rolesRelevant: ["ai-software-engineer", "ml-engineer", "fullstack-engineer", "phd-student"] },
        { name: "Turkish (B1)", rolesRelevant: ["ai-software-engineer", "ml-engineer", "fullstack-engineer", "phd-student"] },
      ],
    },
  ],
};
