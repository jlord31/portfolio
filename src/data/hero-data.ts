import type { HeroData } from "@/types/hero.types";
import type { Role } from "@/types/role.types";
import photo from "@/assets/images/joe_profile.jpeg";

const baseHeroData: Omit<HeroData, "title" | "subtitle" | "intro"> = {
  name: "Joseph Adepoju",
  photo,
  cta: [
    { label: "View Projects", section: "projects", variant: "default" },
    { label: "Contact Me", section: "contact", variant: "outline" },
  ],
  socials: [
    {
      platform: "github",
      href: "https://github.com/jlord31/",
      label: "GitHub",
    },
    {
      platform: "linkedin",
      href: "https://www.linkedin.com/in/joseph-adepoju-876574206/",
      label: "LinkedIn",
    },
  ],
};

export const heroData: Record<Role, HeroData> = {
  "ai-software-engineer": {
    ...baseHeroData,
    title: "AI Software Engineer",
    subtitle: "Python · LLM Workflows · RAG Systems · ML Infrastructure",
    intro:
      "AI Software Engineer with hands‑on expertise in designing and deploying intelligent agents powered by large language models. Skilled in tool‑using agents, memory architectures, and on‑premise AI deployments. Strong Python background with experience in scalable backend services, cloud infrastructure, and interactive frontends. Passionate about creating ethical, production‑ready AI solutions that drive meaningful impact.",
  },
  "ml-engineer": {
    ...baseHeroData,
    title: "ML Engineer",
    subtitle: "PyTorch · TensorFlow · Evaluation · Model Optimization",
    intro:
      "ML Engineer with experience building and optimizing ML pipelines across data preparation, training, and evaluation. Skilled in model adaptation, embedding workflows, and performance tuning for real-world constraints. Focused on reliable experimentation, measurable improvements, and deploying robust machine learning systems.",
  },
  "fullstack-engineer": {
    ...baseHeroData,
    title: "Fullstack Engineer",
    subtitle: "React · Vue · FastAPI · Laravel · Cloud Deployment",
    intro:
      "Fullstack Engineer with 7+ years of experience delivering end-to-end products across frontend, backend, and deployment workflows. Experienced in building scalable APIs, interactive interfaces, and production-ready systems using React, Vue, Python, and PHP/Laravel. Focused on maintainable architecture, usability, and reliable software delivery.",
  },
  "phd-student": {
    ...baseHeroData,
    title: "Prospective PhD Researcher",
    subtitle: "Deep Learning · Computer Vision · Experimental Evaluation",
    intro:
      "Prospective PhD researcher focused on applied AI, deep learning, and computer vision with an emphasis on rigorous experimentation and real-world relevance. Experienced in designing and evaluating ML pipelines, analyzing model behavior, and translating research into practical systems. Interested in advancing trustworthy, high-impact AI through methodical research and engineering.",
  },
};
