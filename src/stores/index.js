import { writable } from "svelte/store";

// scroll things
export const scrollPosY = writable(0);
export const scrolledPercentage = writable(0);

// menu
export const menuOpen = writable(false);
