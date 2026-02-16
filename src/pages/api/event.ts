/**
 * Proxies Plausible Analytics event submissions through viewpo.io.
 * Serves at /api/event — generic path to avoid adblocker pattern matching.
 *
 * Strips cookies (Plausible is cookieless by design) and forwards the
 * event payload to Plausible's API.
 */
import type { APIRoute } from 'astro';

export const prerender = false;

const PLAUSIBLE_EVENT_URL = 'https://plausible.io/api/event';

export const POST: APIRoute = async ({ request }) => {
  const headers = new Headers(request.headers);
  headers.delete('cookie');
  headers.delete('host');

  // Forward the original client IP so Plausible can do country-level geo
  // (Plausible hashes IPs daily and never stores them)
  const clientIp =
    request.headers.get('cf-connecting-ip') ??
    request.headers.get('x-forwarded-for');
  if (clientIp) {
    headers.set('X-Forwarded-For', clientIp);
  }

  const body = await request.text();

  const upstream = await fetch(PLAUSIBLE_EVENT_URL, {
    method: 'POST',
    headers,
    body,
  });

  return new Response(upstream.body, {
    status: upstream.status,
    headers: {
      'Content-Type': upstream.headers.get('Content-Type') ?? 'text/plain',
    },
  });
};
