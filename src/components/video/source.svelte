<script>
  // sourcing from cloudinary
  import cloudinary from "cloudinary-core";
  let cl = new cloudinary.Cloudinary({ cloud_name: "dgekvli3k", secure: true });
  const video = cl
    .videoTag("showreel_v0u19c", {
      secure: true,
      controls: false,
      autoplay: true,
      muted: true,
      style:
        "box-sizing: border-box; padding: 5% 10%; position: absolute; top: 0; left: 0;"
    })
    .transformation()
    .height("100%")
    .width("100%")
    .toHtml();
</script>

{@html video}
