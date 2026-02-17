import type { RoadmapColumn } from './types';

const CACHE_KEY = 'https://viewpo.io/_cache/roadmap';
const FRESH_TTL = 600; // 10 minutes
const STALE_TTL = 3600; // 1 hour

interface CachedData {
  columns: RoadmapColumn[];
  timestamp: number;
}

export async function getCachedRoadmap(): Promise<{ data: CachedData | null; isStale: boolean }> {
  try {
    const cache = caches.default;
    const response = await cache.match(new Request(CACHE_KEY));
    if (!response) return { data: null, isStale: false };

    const data: CachedData = await response.json();
    const age = (Date.now() - data.timestamp) / 1000;

    if (age < FRESH_TTL) {
      return { data, isStale: false };
    }
    if (age < STALE_TTL) {
      return { data, isStale: true };
    }
    return { data: null, isStale: false };
  } catch {
    return { data: null, isStale: false };
  }
}

export async function setCachedRoadmap(columns: RoadmapColumn[]): Promise<void> {
  try {
    const cache = caches.default;
    const data: CachedData = { columns, timestamp: Date.now() };
    const response = new Response(JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': `public, max-age=${STALE_TTL}`,
      },
    });
    await cache.put(new Request(CACHE_KEY), response);
  } catch {
    // Cache write failures are non-fatal
  }
}
