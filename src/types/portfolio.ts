export type ProjectStatus = 'COMPLETED' | 'IN PROGRESS' | 'PLANNED';

export type ProjectCategory = 
  | 'Business Analytics' 
  | 'Data Analysis' 
  | 'Business Intelligence' 
  | 'Financial Services' 
  | 'Healthcare Analytics';

export interface CaseStudyStep {
  title: string;
  subtitle: string;
  content: string;
  bullets?: string[];
  codeSnippet?: {
    language: string;
    code: string;
  };
  metrics?: { label: string; value: string; trend?: string }[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  tools: string[];
  status: ProjectStatus;
  isFeaturedAcademic?: boolean;
  academicTag?: string;
  shortDescription: string;
  githubUrl?: string;
  dashboardUrl?: string;
  datasetInfo?: string;
  impactHighlight?: string;
  caseStudy: {
    problem: CaseStudyStep;
    dataset: CaseStudyStep;
    approach: CaseStudyStep;
    visualisation: CaseStudyStep;
    insight: CaseStudyStep;
    recommendation: CaseStudyStep;
  };
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
  iconName: string;
}

export interface ToolItem {
  name: string;
  category: string;
  description: string;
  proficiencyNote: string;
  icon: string;
  featuredCode?: string;
}

export interface TimelineItem {
  period: string;
  title: string;
  institution: string;
  location: string;
  gradeOrType: string;
  isCurrent?: boolean;
  isSelfDirected?: boolean;
  description: string;
  highlights: string[];
}

export interface InsightArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  content: string[];
  tags: string[];
}
