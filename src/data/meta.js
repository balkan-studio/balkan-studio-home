import cloudinary from "cloudinary-core";

const videoSource = {
  desktop: "Balkan_Desktop_11.04.2020_mychcl",
  mobile: "Balkan_Desktop_11.04.2020_mychcl",
};

let cl = new cloudinary.Cloudinary({
  cloud_name: "dxlptabef",
  secure: true,
});

export const desktop = cl
  .videoTag(videoSource.desktop, {
    secure: true,
    controls: false,
    autoplay: true,
    muted: true,
    loop: true,
    style: "position: absolute; top: 0; left: 0; max-height: 100%;",
  })
  .transformation({
    eager_async: true,
  })
  .toHtml();
export const mobile = cl
  .videoTag(videoSource.mobile, {
    secure: true,
    controls: false,
    autoplay: true,
    muted: true,
    loop: true,
    playsInline: true,
    style:
      "position: absolute; top: 0; left: 0; width: 100%; margin: 0 auto; max-height: 100%;",
    eager_async: true,
  })
  .transformation({
    eager_async: true,
  })
  .toHtml();
