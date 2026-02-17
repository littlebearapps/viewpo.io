import type { RoadmapAdapter, RoadmapColumn, FeedbackSubmission } from './types';

export class MockAdapter implements RoadmapAdapter {
  async fetchColumns(): Promise<RoadmapColumn[]> {
    return [
      {
        id: 'mock-planned',
        name: 'Planned',
        status: 'planned',
        items: [
          {
            id: 'mock-1',
            title: 'Android app',
            description: 'Native Android app with the same viewport viewer and provider integrations as iOS.',
            status: 'planned',
            labels: [{ name: 'Feature', color: 'blue' }],
            checklistProgress: null,
            votes: 24,
          },
          {
            id: 'mock-2',
            title: 'Railway provider support',
            description: 'Connect Railway deployments alongside Cloudflare Pages, Vercel, and Netlify.',
            status: 'planned',
            labels: [{ name: 'Integration', color: 'sky' }],
            checklistProgress: null,
            votes: 18,
          },
          {
            id: 'mock-3',
            title: 'Custom device presets',
            description: 'Save your own viewport sizes as named presets for quick switching.',
            status: 'planned',
            labels: [{ name: 'Enhancement', color: 'green' }],
            checklistProgress: null,
            votes: 12,
          },
        ],
      },
      {
        id: 'mock-in-progress',
        name: 'In Progress',
        status: 'in-progress',
        items: [
          {
            id: 'mock-4',
            title: 'Branch pinning',
            description: 'Pin specific branches to your dashboard so you always see the latest deploy for that branch.',
            status: 'in-progress',
            labels: [{ name: 'Feature', color: 'blue' }],
            checklistProgress: { completed: 3, total: 5 },
            votes: 31,
          },
          {
            id: 'mock-5',
            title: 'Dark mode improvements',
            description: 'Refine dark mode colours across all screens for better contrast and readability.',
            status: 'in-progress',
            labels: [{ name: 'UI/UX', color: 'black' }],
            checklistProgress: { completed: 2, total: 4 },
            votes: 9,
          },
        ],
      },
      {
        id: 'mock-testing',
        name: 'Testing',
        status: 'testing',
        items: [
          {
            id: 'mock-6',
            title: 'Share links & QR codes',
            description: 'Generate shareable links and QR codes for any deployment preview.',
            status: 'testing',
            labels: [{ name: 'Feature', color: 'blue' }],
            checklistProgress: { completed: 6, total: 7 },
            votes: 27,
          },
        ],
      },
      {
        id: 'mock-shipped',
        name: 'Shipped',
        status: 'shipped',
        items: [
          {
            id: 'mock-7',
            title: 'GitHub Pages support',
            description: 'Connect your GitHub account and see GitHub Pages deploys in your dashboard.',
            status: 'shipped',
            labels: [{ name: 'Integration', color: 'sky' }],
            checklistProgress: { completed: 8, total: 8 },
            votes: 42,
          },
          {
            id: 'mock-8',
            title: 'Viewport viewer',
            description: 'See any preview at any screen size — from a 27-inch desktop to a small phone.',
            status: 'shipped',
            labels: [{ name: 'Feature', color: 'blue' }],
            checklistProgress: null,
            votes: 56,
          },
        ],
      },
    ];
  }

  async submitFeedback(_submission: FeedbackSubmission): Promise<{ cardId: string }> {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    return { cardId: `mock-feedback-${Date.now()}` };
  }
}
