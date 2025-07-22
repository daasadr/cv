export interface Project {
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  inProgress?: boolean;
  year: number;
}
