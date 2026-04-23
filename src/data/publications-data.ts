import type { Role } from "@/types/role.types";

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: number;
  type: "chapter" | "journal" | "conference" | "workshop" | "preprint";
  url?: string;
  abstract?: string;
  tags?: string[];
  status?: "published" | "under-review";
  contributorRole?: string;
}

export const publicationsData = {
  tag: "Publications",
  title: "Research Publications",
  rolesRelevant: ["phd-student"] as Role[],
  items: [
    {
      title:
        "A Stacked Ensemble Framework with GCViT Features Integration for Accurate Diabetic Retinopathy Detection",
      authors: "—",
      venue: "Under Review",
      year: 2025,
      type: "journal" as const,
      status: "under-review" as const,
      contributorRole: "Technical Contributor",
      tags: ["Diabetic Retinopathy", "Ensemble Learning", "Medical Imaging", "Vision Transformers"],
    },
    {
      title:
        "Automatic Food Recognition Using Deep Convolutional Neural Networks with Self-attention Mechanism",
      authors: "Rahib Abiyev, Joseph Adepoju",
      venue: "Human-Centric Intelligent Systems, 4(1):171–186",
      year: 2024,
      type: "journal" as const,
      url: "https://doi.org/10.1007/s44230-023-00057-9",
      tags: ["Food Recognition", "Self-Attention", "CNN", "Deep Learning"],
    },
    {
      title: "Deep Convolutional Network for Food Image Identification",
      authors: "Rahib Abiyev, Joseph Adepoju",
      venue:
        "Studies in Computational Intelligence · Machine Learning and the Internet of Things in Education",
      year: 2023,
      type: "chapter" as const,
      url: "https://doi.org/10.1007/978-3-031-42924-8_2",
      tags: ["Food Recognition", "CNN", "Computer Vision"],
    },
  ] satisfies Publication[],
};
