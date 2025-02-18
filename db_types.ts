export interface Person {
  id: number;
  name: string;
  photoIdentifier?: string;
  type: string;
  department: string;
  active: boolean;
  joined: Date;
  interests?: string;
  github?: string;
  linkedin?: string;
  projects: Project[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Project {
  id: number;
  name: string;
  tool: boolean;
  published: boolean;
  datePublished?: Date;
  logoUrl?: string;
  description: string;
  appLink?: string;
  sourceCodeLink?: string;
  publicationLink?: string;
  authors: string;
  topics: Topic[];
  createdAt: Date;
  updatedAt: Date;
  rigiContributors: Person[];
}

export interface Topic {
  id: number;
  name: string;
  label: string;
  colour: string;
  projects: Project[];
  createdAt: Date;
  updatedAt: Date;
}
