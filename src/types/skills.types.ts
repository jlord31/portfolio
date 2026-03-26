import type { Role } from "./role.types";

export interface Skill {
  name: string;
  rolesRelevant: Role[];
}

export interface SkillCategory {
  label: string;
  skills: Skill[];
}

export interface SkillsData {
  tag: string;
  title: string;
  categories: SkillCategory[];
}

export interface SkillCardProps {
  name: string;
  delay?: number;
}

export interface SkillCategoryProps {
  label: string;
  skills: Skill[];
  categoryDelay?: number;
}

export type SkillsProps = SkillsData;
