<script>
  import { onMount } from "svelte";
  import { videoSource } from "../data/meta";
  import cloudinary from "cloudinary-core";
  import { platform } from "$stores";

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
      loop: true
    })
    .transformation()
    .height("100%")
    .toHtml();
  const videoMobile = cl
    .videoTag(videoSource.mobile, {
      secure: true,
      controls: false,
      autoplay: true,
      muted: true,
      loop: true
    })
    .transformation()
    .height("100%")
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
  div {
    width: 100%;
    height: 65vh;
    top: 0;
    @media (max-width: 1500px) {
      height: 63vh;
    }
    @media (max-width: 900px) {
      display: flex;
      justify-content: center;
    }
  }
</style>

<div id="video-wrap">
  {#if $platform === 'mobile'}
    {@html videoMobile}
  {:else}
    {@html videoDesktop}
  {/if}
</div>
