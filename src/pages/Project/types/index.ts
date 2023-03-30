export interface ProjectFeaturesItems {
  feat: string;
}

export interface ProjectTechStackItems {
  badge: string;
}

export interface ProjectDataItems {
  id: string;
  icon: string;
  url: string;
  startDate: string;
  endDate: string;
  techStack: ProjectTechStackItems[];
  title: string;
  contributors: string;
  description: string;
  features: ProjectFeaturesItems[];
}

export interface ProjectDatas {
  title: string;
  data: ProjectDataItems[];
}
