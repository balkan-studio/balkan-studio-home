import { writable } from "svelte/store";

// scroll things
export const scrollPosY = writable(0);
export const scrolledPercentage = writable(0);

// menu
export const menuOpen = writable(false);

// platform detection
// https://svelte.dev/tutorial/custom-stores
function createPlatform() {
  const { subscribe, set, update } = writable(0);

  return {
    subscribe,
    increment: () => update((n) => n + 1),
    detect: (w) => {
      if (w <= 900) set("mobile");
      else set("desktop");
    },
    reset: () => set(0),
  };
}

export const platform = createPlatform();
