export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  year: string;
  status?: string;
  stack: string[];
  projectUrl: {
    github: string;
    live?: string;
  };
};
