export interface ProjectLink {
  label: string;
  url: string;
  type: 'github' | 'live';
}

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  fallbackImageUrl: string;
  stack: string[];
  links: ProjectLink[];
  isFeatured: boolean;
}
