import type { ExperienceData } from "@/types/experience.types";

export const experienceData: ExperienceData = {
  tag: "Where I've worked",
  title: "Experience",
  items: [
    {
      title: "ML Research Engineer",
      company: "Bahçeşehir Cyprus University",
      companyUrl: "https://baucyprus.edu.tr/",
      location: "Nicosia, Cyprus",
      type: "Part-Time",
      period: "Sep 2024 – Present",
      duration: "1 year 6 months+",
      roleResponsibilities: {
        "ml-engineer": [
          "Designed and optimized end-to-end ML data pipelines (ingestion, cleaning, feature engineering) in Python, enabling reliable model integration and accelerating experimentation cycles",
          "Automated experiment tracking, data versioning, and training pipelines using Docker and CI/CD (GitHub Actions), improving reproducibility and reducing setup time by ~40%",
          "Improved training efficiency of deep learning models in PyTorch/Keras through mixed-precision training, distributed GPU workloads, and optimized data loaders, cutting training time by 20–30%",
          "Enhanced dataset quality and downstream model accuracy by applying advanced NLP preprocessing techniques (tokenization, entity recognition, language-specific cleansing), reducing noise by 30%",
        ],
        "ai-software-engineer": [
          "Built production-ready Python components and pipeline services to operationalize ML research workflows for downstream AI applications.",
          "Implemented reproducible engineering workflows with Docker, CI/CD, and experiment tracking, improving reliability and reducing setup overhead by ~20%.",
          "Designed data preprocessing and validation utilities that improved input quality and model-readiness for AI/LLM systems.",
        ],
        "phd-student": [
          "Applied GAN-based augmentation strategies to address class imbalance in image datasets, improving representation of under-sampled categories for more reliable model learning.",
          "Conducted methodological optimization of deep learning workflows using mixed-precision and distributed GPU training in PyTorch/Keras, reducing training time by 20–30%.",
          "Designed reproducible experimentation pipelines with data versioning and tracked training workflows using Docker and CI/CD (GitHub Actions), reducing setup overhead by ~40%.",
          "Developed a Python visualization library for publication-ready figures, supporting clearer analysis, reporting, and research dissemination.",
        ],
      },
      rolesRelevant: ["ml-engineer", "ai-software-engineer", "phd-student"],
    },
    {
      title: "AI Software Engineer",
      company: "CMND.AI",
      companyUrl: "https://app.cmnd.ai/",
      location: "Nicosia, Cyprus",
      type: "Full-Time",
      period: "Jul 2024 – Mar 2026",
      duration: "20 months",
      roleResponsibilities: {
        "ai-software-engineer": [
          "Engineered agent workflows with advanced tool-usage capabilities, including API calls, database queries, dynamic routing, and MCP-compliant tool adapters, enabling intelligent automation and decision-making.",
          "Designed and deployed memory systems using vector databases and embeddings to power retrieval-augmented generation and improve agent reasoning.",
          "Implemented secure on-premise deployments of LLM agents, ensuring compliance with privacy requirements while maintaining production-level performance.",
          "Integrated multiple LLM providers, including GPT-4, Claude, DeepSeek, and Gemini, into scalable pipelines supported by Python (FastAPI), AWS Batch, and React-based interfaces.",
        ],
        "ml-engineer": [
          "Designed retrieval and embedding pipelines that improved knowledge grounding and contextual relevance of LLM outputs by over 40% in production workflows.",
          "Applied model adaptation and prompt optimization strategies to improve downstream performance across summarization, retrieval, and question-answering tasks.",
          "Built data preparation and preprocessing pipelines for web-sourced corpora, reducing dataset noise by 30% and improving data quality for LLM applications.",
          "Integrated vector search, evaluation workflows, and scalable Python services to support production-ready AI systems backed by AWS Batch and FastAPI.",
        ],
        "phd-student": [
          "Investigated agentic LLM architectures with tool-use, memory modules, dynamic routing, and MCP-based tool interfaces to improve robustness of autonomous workflow execution.",
          "Designed and evaluated retrieval-augmented reasoning pipelines using vector databases and embeddings to strengthen contextual grounding and response quality.",
          "Conducted comparative experimentation across multiple LLM providers (GPT-4, Claude, DeepSeek, Gemini) to assess capability trade-offs for applied research tasks.",
          "Implemented privacy-aware deployment patterns, including on-premise agent configurations, to study practical constraints in real-world AI systems.",
        ],
        "fullstack-engineer": [
          "Built production-ready interfaces and workflow modules for AI-powered business operations, improving usability across conversations, integrations, and knowledge-driven features.",
          "Engineered scalable backend services in Python (FastAPI) and database-backed APIs to support automation, meeting workflows, and retrieval-based application features.",
          "Integrated external systems, data sources, and internal services into a microservices architecture that enabled reliable end-to-end platform workflows.",
          "Containerized and deployed application services with Docker and AWS Batch, improving scalability, consistency, and operational reliability in production.",
        ],
      },
      rolesRelevant: ["ai-software-engineer", "ml-engineer", "phd-student", "fullstack-engineer"],
    },
    {
      title: "AI Research Intern",
      company: "Geekle AI Lab",
      location: "Nicosia, Cyprus",
      type: "Internship",
      period: "Jan 2024 - Jul 2024",
      duration: "7 months",
      roleResponsibilities: {
        "ai-software-engineer": [
          "Prototyped multi-agent reasoning strategies to improve task decomposition and retrieval workflows.",
          "Optimized prompt templates to enhance accuracy and coherence in LLM‑powered applications.",
          "Evaluated LLM use cases across summarization, classification, and generation to guide deployment strategies.",
        ],
        "ml-engineer": [
          "Evaluated LLM behavior across summarization, classification, and generation tasks to assess performance trade-offs and deployment suitability.",
          "Optimized prompt and chaining strategies to improve output consistency, relevance, and robustness in applied NLP workflows.",
          "Prototyped agent-oriented reasoning flows and retrieval patterns to support more reliable downstream model behavior.",
        ],
        "phd-student": [
          "Prototyped multi-agent reasoning strategies to improve task decomposition and retrieval workflows.",
          "Optimized prompt templates to enhance accuracy and coherence in LLM-powered applications.",
          "Evaluated LLM use cases across summarization, classification, and generation to guide deployment strategies.",
        ],
      },
      rolesRelevant: ["ai-software-engineer", "ml-engineer", "phd-student"],
    },
    {
      title: "Software Engineer",
      company: "VOBB.IO",
      location: "Nicosia, Cyprus",
      type: "Full-Time",
      period: "Mar 2021 - Jan 2024",
      duration: "3 years",
      roleResponsibilities: {
        "fullstack-engineer": [
          "Owned end-to-end feature delivery across frontend, backend, and deployment workflows, building responsive applications with HTML, CSS, JavaScript, Vue.js, React.js, and Bootstrap while maintaining WCAG 2.0AA accessibility standards.",
          "Designed and optimized MySQL-backed application workflows, reducing database size by 50% and improving query performance by 20% for more responsive user experiences.",
          "Developed REST APIs in PHP (Laravel) and Python (FastAPI), covering architecture design, endpoint implementation, and request-response handling to support scalable product features.",
          "Built and deployed dynamic web applications with Laravel, contributing to reliable releases, on-time delivery, and maintainable full-stack product development.",
        ],
        "ai-software-engineer": [
          "Contributed to the software development lifecycle by conducting comprehensive code reviews and implementing unit testing, ensuring code quality and stability.",
          "Developed backend services in Python (FastAPI) with PostgreSQL integration, improving scalability and reducing query response times by ~25%.",
          "Built interactive dashboards and user interfaces with Vue.js and React.js, increasing usability and reducing onboarding time for internal users.",
          "Containerized applications with Docker and set up automated deployment pipelines, cutting deployment errors by 30% and ensuring consistent performance across environments.",
        ],
      },
      rolesRelevant: ["fullstack-engineer", "ai-software-engineer"],
    },
    {
      title: "Research Assistant",
      company: "Near East University (NEU)",
      companyUrl: "https://neu.edu.tr/?lang=en",
      location: "Nicosia, Cyprus",
      type: "Part-Time",
      period: "Aug 2022 - Feb 2023",
      duration: "7 months",
      roleResponsibilities: {
        "ai-software-engineer": [
          "Applied fine-tuning techniques to adapt models to domain-specific tasks, improving performance in applied research projects.",
        ],
        "ml-engineer": [
          "Developed and optimized deep learning pipelines for multi-class image classification and medical image segmentation using Python, TensorFlow, and PyTorch",
          "Achieved 15% improvement in model accuracy through advanced data augmentation and automated hyperparameter tuning",
          "Contributed to research papers and presentations, clarifying complex technical concepts for diverse audiences",
        ],
        "phd-student": [
          "Developed and evaluated deep learning pipelines for multi-class image classification and medical image segmentation using Python, TensorFlow, and PyTorch.",
          "Conducted systematic experiments on data augmentation and automated hyperparameter tuning, achieving a 15% improvement in model accuracy.",
          "Contributed to research publications and presentations by analyzing results, documenting methodologies, and communicating findings to academic and technical audiences.",
        ],
      },
      rolesRelevant: ["ai-software-engineer", "ml-engineer", "phd-student"],
    },
    {
      title: "Web Developer",
      company: "Stark Logic Limited",
      location: "Lagos, Nigeria",
      type: "Full-Time",
      period: "Aug 2019 - Jan 2021",
      duration: "1.5 years",
      roleResponsibilities: {
        "fullstack-engineer": [
          "Integrated MySQL databases and built responsive web pages with HTML, CSS, JavaScript, and Bootstrap, increasing productivity by 40%",
          "Improved application stability through systematic unit and integration testing, reducing post-release defects and strengthening long-term maintainability.",
          "Optimized front-end performance and user experience, contributing to a 20% increase in sales and more efficient customer interactions.",
          "Implemented multiple payment methods (Stripe, PayPal, FlutterWave, PayStack), reducing consumer complaints by 70%",
        ],
      },
      rolesRelevant: ["fullstack-engineer"],
    },
    {
      title: "Information Technology Instructor",
      company: "National Institute of Information Technology",
      location: "Lagos, Nigeria",
      type: "Full-Time",
      period: "Jan 2016 - Jan 2018",
      duration: "2 years",
      roleResponsibilities: {
        "phd-student": [
          "Taught Python, C++, and web technologies to 50+ students through structured lectures and practical sessions.",
          "Provided individualized academic support and technical guidance to strengthen student learning outcomes.",
          "Designed hands-on exercises and project-based activities to build applied programming and problem-solving skills.",
        ],
      },
      rolesRelevant: ["phd-student"],
    },
  ],
};

