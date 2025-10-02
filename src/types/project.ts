export interface Project {
  id: number;
  name: string;
  image: string;
  stack: string;
  description: string;
  liveLink: string;
  details: string;
  github: string;
  challenges: string;
  futurePlans: string;
  type?: string; // optional field if you want to categorize projects
}