<script>
  import { onMount } from "svelte";
  import { videoSource } from "../data/meta";
  import cloudinary from "cloudinary-core";
  import { platform, collaboratorsToggled as toggled } from "$stores";

  let cl = new cloudinary.Cloudinary({
    cloud_name: "balkan-studio",
    secure: true
  });

  let paused = false;

  const videoDesktop = cl
    .videoTag(videoSource.desktop, {
      secure: true,
      controls: false,
      autoplay: true,
      muted: true,
      loop: true,
      style: "position: absolute; top: 0; left: 0; max-height: 100%;"
    })
    .transformation()
    .toHtml();
  const videoMobile = cl
    .videoTag(videoSource.mobile, {
      secure: true,
      controls: false,
      autoplay: true,
      muted: true,
      loop: true,
      style:
        "position: absolute; top: 0; left: 0; width: 100%; margin: 0 auto; max-height: 100%;"
    })
    .transformation()
    .toHtml();

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
</style>

<div style="--opacity:{$toggled ? 0.5 : 1}" class="video-wrap">
  {#if $platform === 'mobile'}
    {@html videoMobile}
  {:else}
    {@html videoDesktop}
  {/if}
</div>
