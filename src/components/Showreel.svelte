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
    .width("100%")
    .toHtml();
</script>

<style lang="scss">
  div {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    > video:focus {
      outline: none;
    }
  }
</style>

<div>
  {@html video}
</div>
