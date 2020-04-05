<script>
  import { onMount } from "svelte";
  import cloudinary from "cloudinary-core";
  let cl = new cloudinary.Cloudinary({
    cloud_name: "balkan-studio",
    secure: true
  });

  let paused = false;

  const video = cl
    .videoTag("mini-videos/16.03.Balkan_qalcjw", {
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
  }
</style>

<div id="video-wrap">
  {@html video}
</div>
