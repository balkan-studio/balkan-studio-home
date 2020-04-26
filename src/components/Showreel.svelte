<script>
  import { onMount } from "svelte";
  import { desktop, mobile } from "../data/meta";
  import { platform, collaboratorsToggled as toggled } from "$stores";

  let paused = false;

  onMount(() => {
    let videoElem = document.getElementsByTagName("video")[0];
    videoElem.addEventListener("click", () => {
      if (paused) {
        videoElem.play();
      } else videoElem.pause();

      paused = !paused;
    });
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
  @media (max-width: 900px) {
    .video-wrap {
      pointer-events: none;
    }
  }
</style>

<div style="--opacity:{$toggled ? 0.5 : 1}" class="video-wrap">
  {#if $platform === 'mobile'}
    {@html mobile}
  {:else}
    {@html desktop}
  {/if}
</div>
