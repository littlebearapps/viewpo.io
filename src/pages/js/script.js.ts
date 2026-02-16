/**
 * Proxies the Plausible Analytics script through viewpo.io.
 * Serves from /js/script.js — generic path to avoid adblocker pattern matching.
 *
 * The hashed script (pa-XnY0rOrxQvpStF2a1FD0y.js) is site-specific to viewpo.io
 * and includes all configured extensions (tagged events, outbound links, file
 * downloads, form submissions, engagement tracking).
 */
import type { APIRoute } from 'astro';

export const prerender = false;

const PLAUSIBLE_SCRIPT_URL =
  'https://plausible.io/js/pa-XnY0rOrxQvpStF2a1FD0y.js';

export const GET: APIRoute = async () => {
  const response = await fetch(PLAUSIBLE_SCRIPT_URL);
  if (!response.ok) {
    return new Response('Script unavailable', { status: 502 });
  }

  const body = await response.text();

  return new Response(body, {
    status: 200,
    headers: {
      'Content-Type': 'application/javascript',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
