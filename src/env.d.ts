/// <reference types="astro/client" />

interface Window {
  plausible: ((
    eventName: string,
    options?: { props: Record<string, string> },
  ) => void) | undefined;
}
