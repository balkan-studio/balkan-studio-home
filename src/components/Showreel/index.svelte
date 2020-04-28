<script>
  import { onMount } from "svelte";
  import DesktopVideo from "./desktop.svelte";
  import MobileVideo from "./mobile.svelte";
  import { platform, collaboratorsToggled as toggled } from "$stores";

  let paused = true;

  onMount(() => {
    let videoElem = document.getElementsByTagName("video")[0];
    if (videoElem) {
      videoElem.addEventListener("click", () => {
        if (paused) {
          videoElem.play();
        } else videoElem.pause();

        paused = !paused;
      });
    }
  });
</script>

<style lang="scss">
  .video-wrap {
    height: 100%;
    width: 100%;
    position: relative;
    opacity: var(--opacity);
    transition: opacity 0.2s;
  }
</style>

<div style="--opacity:{$toggled ? 0.5 : 1}" class="video-wrap">
  {#if $platform === 'mobile'}
    <MobileVideo />
  {:else if $platform === 'desktop'}
    <DesktopVideo />
  {/if}
</div>
