export interface RoadmapItem {
  id: string;
  title: string;
  description: string;
  status: 'planned' | 'in-progress' | 'testing' | 'shipped';
  labels: RoadmapLabel[];
  checklistProgress: { completed: number; total: number } | null;
  votes: number;
}

export interface RoadmapLabel {
  name: string;
  color: string;
}

export interface RoadmapColumn {
  id: string;
  name: string;
  status: RoadmapItem['status'];
  items: RoadmapItem[];
}

export interface FeedbackSubmission {
  title: string;
  description: string;
  category: string;
  name?: string;
  email?: string;
}

export interface RoadmapAdapter {
  fetchColumns(): Promise<RoadmapColumn[]>;
  submitFeedback(submission: FeedbackSubmission): Promise<{ cardId: string }>;
}
