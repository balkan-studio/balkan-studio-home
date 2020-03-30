<script>
  import cloudinary from "cloudinary-core";

  let cl = new cloudinary.Cloudinary({ cloud_name: "dgekvli3k", secure: true });

  const video = cl
    .videoTag("showreel_v0u19c", {
      secure: true,
      controls: false,
      autoplay: true,
      muted: true,
      style: "box-sizing: border-box; padding: 5% 10%;"
    })
    .transformation()
    .height("100%")
    .width("100%")
    .toHtml();
</script>

<style>
  div {
    width: 100%;
    object-fit: fill;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-content: center;
  }
</style>

<div id="video-wrap">
  {@html video}
</div>
