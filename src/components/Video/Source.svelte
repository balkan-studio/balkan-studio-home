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
      loop: true
    })
    .transformation()
    .height("100%")
    .width("100%")
    .toHtml();
</script>

{@html video}
