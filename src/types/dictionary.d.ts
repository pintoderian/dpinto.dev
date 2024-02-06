export type Dictionary = {
  title: string;
  about: string;
  experience: string;
  project: string;
  skills: string;
  openToWork: string;
  visit: string;
  badge: string;
  summary: string;
  aboutme: string[];
  readmore: string;
  created: string;
  and: string;
  copyright: string;
  experiences: Experience[];
  projects: Project[];
};

export type Experience = {
  title: string;
  icon: string;
  company: string;
  employmentStatus: string;
  date: string;
  summary: string;
  activities: string[];
};

export type Project = {
  title: string;
  image: string;
  description: string;
  link: string;
  github: string;
  technologies: string[];
};
