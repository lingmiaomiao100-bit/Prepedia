export enum Category {
  DISASTER = 'DISASTER',
  HEALTH = 'HEALTH'
}

export interface Topic {
  id: string;
  title: string;
  category: Category;
  shortDescription: string;
  fullDescription: string;
  keyPoints: string[];
  imageUrl: string;
  color: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}