import { writable, readable } from "svelte/store";

// scroll things
export const scrollPosY = writable(0);
export const scrolledPercentage = writable(0);

// menu
export const menuOpen = writable(false);

// platform detection
// https://svelte.dev/tutorial/custom-stores
function createPlatform() {
  const { subscribe, set } = writable(undefined);

  return {
    subscribe,
    detect: (w) => {
      if (w) {
        if (w <= 667) set("mobile");
        else set("desktop");
      }
    },
  };
}

export const platform = createPlatform();

// are we in landscape or portrait
function createVideoSwitch() {
  const { subscribe, set } = writable(undefined)

  return {
    subscribe,
    detect: (w, h) => {
      if (w && h) {
        if (w <= 1000) {
          if (w > h * 1.5) set("landscape")
          else set("portrait")
        }
        else set("landscape")
      }
    }
  }
}

export const videoSwitch = createVideoSwitch()

export const collaboratorsToggled = writable(false)

export const animationDelay = readable("1.5s")