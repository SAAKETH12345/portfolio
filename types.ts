
export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  sourceUrl?: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string[];
}
