export enum Category {
  DISASTER = 'DISASTER',
  HEALTH = 'HEALTH'
}

export interface Citation {
  name: string;
  url: string;
}

export interface Topic {
  id: string;
  title: string;
  category: Category;
  shortDescription: string;
  fullDescription: string;
  keyPoints: string[];
  before: string[];
  during: string[];
  after: string[];
  wikipediaUrl: string;
  youtubeUrl: string;
  citations: Citation[];
  imageUrl: string;
  color: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}