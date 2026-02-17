import type { APIRoute } from 'astro';

import { TrelloAdapter } from '@/lib/roadmap/adapter';
import { FEEDBACK_CATEGORIES } from '@utils/constants';

export const prerender = false;

const TURNSTILE_VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

function stripHtml(str: string): string {
  return str.replace(/<[^>]*>/g, '').trim();
}

export const POST: APIRoute = async ({ request, locals }) => {
  const env = (locals as { runtime: { env: Record<string, string> } }).runtime.env;

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return jsonResponse(400, { success: false, error: 'Invalid form data' });
  }

  // Honeypot — reject if filled (bots auto-fill hidden fields)
  const honeypot = formData.get('website');
  if (honeypot && String(honeypot).length > 0) {
    // Return success to not tip off bots
    return jsonResponse(200, { success: true });
  }

  // Extract and sanitise fields
  const rawTitle = String(formData.get('title') ?? '');
  const rawDescription = String(formData.get('description') ?? '');
  const rawCategory = String(formData.get('category') ?? '');
  const rawName = String(formData.get('name') ?? '');
  const rawEmail = String(formData.get('email') ?? '');
  const turnstileToken = String(formData.get('cf-turnstile-response') ?? '');

  const title = stripHtml(rawTitle).slice(0, 100);
  const description = stripHtml(rawDescription).slice(0, 5000);
  const category = stripHtml(rawCategory);
  const name = stripHtml(rawName).slice(0, 100) || undefined;
  const email = stripHtml(rawEmail).slice(0, 254) || undefined;

  // Validate required fields
  if (!title) return jsonResponse(400, { success: false, error: 'Title is required' });
  if (!description) return jsonResponse(400, { success: false, error: 'Description is required' });
  if (!category || !FEEDBACK_CATEGORIES.includes(category as typeof FEEDBACK_CATEGORIES[number])) {
    return jsonResponse(400, { success: false, error: 'Invalid category' });
  }

  // Verify Turnstile token
  if (!turnstileToken) {
    return jsonResponse(400, { success: false, error: 'Please complete the verification' });
  }

  const clientIp = request.headers.get('cf-connecting-ip') ?? '';
  const turnstileBody = new URLSearchParams({
    secret: env.TURNSTILE_SECRET_KEY ?? '',
    response: turnstileToken,
    remoteip: clientIp,
  });

  try {
    const turnstileRes = await fetch(TURNSTILE_VERIFY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: turnstileBody.toString(),
    });
    const turnstileData = await turnstileRes.json() as { success: boolean };
    if (!turnstileData.success) {
      return jsonResponse(400, { success: false, error: 'Verification failed. Please try again.' });
    }
  } catch {
    return jsonResponse(500, { success: false, error: 'Verification service unavailable' });
  }

  // Create Trello card via adapter
  const apiKey = env.TRELLO_API_KEY;
  const apiToken = env.TRELLO_API_TOKEN;
  const boardId = env.TRELLO_BOARD_ID;
  const ideasListId = env.TRELLO_IDEAS_LIST_ID;

  if (!apiKey || !apiToken || !boardId || !ideasListId) {
    return jsonResponse(503, { success: false, error: 'Feedback submissions are temporarily unavailable' });
  }

  const adapter = new TrelloAdapter({ apiKey, apiToken, boardId, ideasListId });

  try {
    await adapter.submitFeedback({ title, description, category, name, email });
    return jsonResponse(200, { success: true });
  } catch {
    return jsonResponse(500, { success: false, error: 'Failed to submit feedback. Please try again.' });
  }
};

function jsonResponse(status: number, body: Record<string, unknown>): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
