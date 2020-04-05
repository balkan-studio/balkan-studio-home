<script>
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
    .toHtml();
</script>

<style lang="scss">
  div {
    height: 65vh;
    width: auto;
  }
</style>

<div>
  {@html video}
</div>
