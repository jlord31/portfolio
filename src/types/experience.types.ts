import type { Role } from "./role.types";

export interface ExperienceItem {
  title: string;
  company: string;
  companyUrl?: string;
  location: string;
  type: string;
  period: string;
  duration: string;
  roleResponsibilities: Partial<Record<Role, string[]>>;
  rolesRelevant?: Role[];
}

export interface ExperienceDisplayItem
  extends Omit<ExperienceItem, "roleResponsibilities" | "rolesRelevant"> {
  responsibilities: string[];
}

export interface ExperienceData {
  tag: string;
  title: string;
  items: ExperienceItem[];
}

export interface ExperienceCardProps {
  item: ExperienceDisplayItem;
}

export interface ExperienceTimelineProps {
  items: ExperienceDisplayItem[];
}

export type ExperienceProps = ExperienceData;
