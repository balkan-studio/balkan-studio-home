<script>
  import { onMount } from "svelte";
  import { menuOpen } from "$stores";
  // sourcing from cloudinary
  import cloudinary from "cloudinary-core";
  let cl = new cloudinary.Cloudinary({ cloud_name: "dgekvli3k", secure: true });
  const video = cl
    .videoTag("showreel_v0u19c", {
      secure: true,
      controls: false,
      autoplay: true,
      muted: true,
      loop: true
    })
    .transformation()
    .height("100%")
    .width("100%")
    .toHtml();

  onMount(() => {
    let videoObject = document.getElementsByTagName("video")[0];
    menuOpen.subscribe(() => {
      if ($menuOpen) videoObject.pause();
      else videoObject.play();
    });
  });
</script>

{@html video}
