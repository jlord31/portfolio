import React, { type ReactNode } from "react";
import { SiOpenai } from "react-icons/si";
import { BiMath } from "react-icons/bi";
import { TbStack2 } from "react-icons/tb";
import { FaGraduationCap } from "react-icons/fa";

export type Role = 
  | "ai-software-engineer"
  | "ml-engineer"
  | "fullstack-engineer"
  | "phd-student";

export interface RoleContent {
  title: string;
  subtitle: string;
  description: string;
  icon?: ReactNode;
}

export const ROLES: Record<Role, RoleContent> = {
  "ai-software-engineer": {
    title: "AI Software Engineer",
    subtitle: "Agentic AI · RAG Systems · Production LLMs",
    description: "Building production-grade AI systems with state-of-the-art LLM architectures",
    icon: React.createElement(SiOpenai, { className: "w-5 h-5" }),
  },
  "ml-engineer": {
    title: "ML Engineer",
    subtitle: "Deep Learning · Computer Vision · Model Evaluation",
    description: "Building and optimizing machine learning models for production systems",
    icon: React.createElement(BiMath, { className: "w-5 h-5" }),
  },
  "fullstack-engineer": {
    title: "Fullstack Engineer",
    subtitle: "React & Vue · GraphQL & REST APIs · Cloud Deployment",
    description: "Building complete web solutions with AI integration from frontend to backend",
    icon: React.createElement(TbStack2, { className: "w-5 h-5" }),
  },
  "phd-student": {
    title: "Prospective PhD Researcher",
    subtitle: "Multimodal Learning · Data-Efficient AI · Responsible AI",
    description: "Conducting research in AI with demonstrated industry impact",
    icon: React.createElement(FaGraduationCap, { className: "w-5 h-5" }),
  },
};
