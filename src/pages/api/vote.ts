import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request, locals }) => {
  const env = (locals as { runtime: { env: Record<string, unknown> } }).runtime.env;
  const db = env.DB as D1Database;

  if (!db) {
    return new Response(JSON.stringify({ error: 'Voting unavailable' }), {
      status: 503,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  let body: { itemId?: string };
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const itemId = body.itemId;
  if (!itemId || typeof itemId !== 'string' || itemId.length > 100) {
    return new Response(JSON.stringify({ error: 'Invalid itemId' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Generate fingerprint from IP + User-Agent (never store raw IP)
  const ip = request.headers.get('cf-connecting-ip') ?? request.headers.get('x-forwarded-for') ?? 'unknown';
  const ua = request.headers.get('user-agent') ?? 'unknown';
  const encoder = new TextEncoder();
  const hashBuffer = await crypto.subtle.digest('SHA-256', encoder.encode(`${ip}:${ua}`));
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const fingerprint = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');

  const now = Math.floor(Date.now() / 1000);

  try {
    // Try inserting fingerprint — UNIQUE constraint prevents duplicates
    await db.prepare('INSERT INTO voter_fingerprints (fingerprint, item_id, voted_at) VALUES (?, ?, ?)').bind(fingerprint, itemId, now).run();

    // New vote — increment count
    await db.prepare('INSERT INTO votes (item_id, count) VALUES (?, 1) ON CONFLICT(item_id) DO UPDATE SET count = count + 1').bind(itemId).run();

    const row = await db.prepare('SELECT count FROM votes WHERE item_id = ?').bind(itemId).first<{ count: number }>();

    return new Response(JSON.stringify({ votes: row?.count ?? 1, alreadyVoted: false }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err: unknown) {
    // UNIQUE constraint violation = already voted
    const message = err instanceof Error ? err.message : '';
    if (message.includes('UNIQUE') || message.includes('constraint')) {
      const row = await db.prepare('SELECT count FROM votes WHERE item_id = ?').bind(itemId).first<{ count: number }>();

      return new Response(JSON.stringify({ votes: row?.count ?? 0, alreadyVoted: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ error: 'Vote failed' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

interface D1Database {
  prepare(query: string): D1PreparedStatement;
}

interface D1PreparedStatement {
  bind(...values: unknown[]): D1PreparedStatement;
  run(): Promise<D1Result>;
  first<T = unknown>(): Promise<T | null>;
}

interface D1Result {
  success: boolean;
}
