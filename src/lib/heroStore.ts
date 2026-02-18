import { writable } from 'svelte/store';

/** Shared active persona index between PersonaDock and PhoneDisplay */
export const activePersona = writable(0);
