import type { RoadmapAdapter, RoadmapColumn, RoadmapItem, FeedbackSubmission, RoadmapLabel } from './types';

const LIST_STATUS_MAP: Record<string, RoadmapItem['status']> = {
  'Planned': 'planned',
  'In Progress': 'in-progress',
  'Testing': 'testing',
  'Shipped': 'shipped',
};

const HIDDEN_LISTS = new Set(['Ideas']);

function stripHtml(str: string): string {
  return str.replace(/<[^>]*>/g, '').trim();
}

function truncate(str: string, max: number): string {
  if (str.length <= max) return str;
  return str.slice(0, max - 3).trimEnd() + '...';
}

interface TrelloChecklist {
  checkItems: { state: string }[];
}

interface TrelloLabel {
  name: string;
  color: string;
}

interface TrelloCard {
  id: string;
  name: string;
  desc: string;
  labels: TrelloLabel[];
  checklists?: TrelloChecklist[];
}

interface TrelloList {
  id: string;
  name: string;
  cards: TrelloCard[];
}

export class TrelloAdapter implements RoadmapAdapter {
  private apiKey: string;
  private apiToken: string;
  private boardId: string;
  private ideasListId: string;

  constructor(env: { apiKey: string; apiToken: string; boardId: string; ideasListId: string }) {
    this.apiKey = env.apiKey;
    this.apiToken = env.apiToken;
    this.boardId = env.boardId;
    this.ideasListId = env.ideasListId;
  }

  private url(path: string, params: Record<string, string> = {}): string {
    const searchParams = new URLSearchParams({
      key: this.apiKey,
      token: this.apiToken,
      ...params,
    });
    return `https://api.trello.com/1${path}?${searchParams.toString()}`;
  }

  async fetchColumns(): Promise<RoadmapColumn[]> {
    const listsUrl = this.url(`/boards/${this.boardId}/lists`, {
      cards: 'open',
      card_fields: 'name,desc,labels,idChecklists',
      card_checklists: 'all',
    });

    const response = await fetch(listsUrl);
    if (!response.ok) {
      throw new Error(`Trello API error: ${response.status} ${response.statusText}`);
    }

    const lists: TrelloList[] = await response.json();

    return lists
      .filter((list) => !HIDDEN_LISTS.has(list.name) && list.name in LIST_STATUS_MAP)
      .map((list) => {
        const status = LIST_STATUS_MAP[list.name];
        return {
          id: list.id,
          name: list.name,
          status,
          items: (list.cards || []).map((card): RoadmapItem => {
            let checklistProgress: RoadmapItem['checklistProgress'] = null;
            if (card.checklists && card.checklists.length > 0) {
              let completed = 0;
              let total = 0;
              for (const cl of card.checklists) {
                for (const item of cl.checkItems) {
                  total++;
                  if (item.state === 'complete') completed++;
                }
              }
              if (total > 0) checklistProgress = { completed, total };
            }

            return {
              id: card.id,
              title: card.name,
              description: truncate(stripHtml(card.desc || ''), 150),
              status,
              labels: card.labels.map((l): RoadmapLabel => ({
                name: l.name,
                color: l.color,
              })),
              checklistProgress,
              votes: 0,
            };
          }),
        };
      });
  }

  async submitFeedback(submission: FeedbackSubmission): Promise<{ cardId: string }> {
    const sanitisedTitle = stripHtml(submission.title).slice(0, 100);
    const sanitisedDesc = stripHtml(submission.description).slice(0, 5000);
    const submitterName = submission.name ? stripHtml(submission.name).slice(0, 100) : 'Anonymous';

    const cardDesc = `${sanitisedDesc}\n\n---\n*Submitted via viewpo.io/roadmap by ${submitterName}*`;

    // Resolve label ID by name
    const labelsUrl = this.url(`/boards/${this.boardId}/labels`);
    const labelsRes = await fetch(labelsUrl);
    const allLabels: { id: string; name: string }[] = labelsRes.ok ? await labelsRes.json() : [];
    const matchedLabel = allLabels.find((l) => l.name === submission.category);

    const cardParams: Record<string, string> = {
      idList: this.ideasListId,
      name: sanitisedTitle,
      desc: cardDesc,
    };
    if (matchedLabel) {
      cardParams.idLabels = matchedLabel.id;
    }

    const createUrl = this.url('/cards', cardParams);
    const createRes = await fetch(createUrl, { method: 'POST' });
    if (!createRes.ok) {
      throw new Error(`Trello card creation failed: ${createRes.status}`);
    }

    const card: { id: string } = await createRes.json();

    // If email provided, add as a private comment (visible to board members only)
    if (submission.email) {
      const commentText = `**Contact email**: ${submission.email}\n*(Submitted with consent to be contacted about this feedback)*`;
      const commentUrl = this.url(`/cards/${card.id}/actions/comments`, {
        text: commentText,
      });
      await fetch(commentUrl, { method: 'POST' });
    }

    return { cardId: card.id };
  }
}
