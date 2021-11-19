import React from "react";
import Header from "../components/header";
import { container, gallery, galleryImage } from "../styles/styles.module.css";
import { StaticImage } from "gatsby-plugin-image";

const Gallery = () => {
  return (
    <main>
      <Header />
      <section className={container}>
        <h1>Gallery</h1>
        <div className={gallery}>
          <StaticImage
            className={galleryImage}
            alt="a cat"
            src="https://64.media.tumblr.com/3c6b0e37a40f65e1d2afd2f3fe258046/8dca5a9f200eb29f-14/s500x750/146a5d54794359599c1544e92dd0a34945278db3.jpg"
          />
          <StaticImage
            className={galleryImage}
            alt="a woman"
            src="https://64.media.tumblr.com/cdbdc678228a8096a93bc870ef54c0e3/98bac0f7e6ce715b-61/s500x750/63181671f7d9f8cb8b2be977b1de03e63c8dacd1.jpg"
          />
          <StaticImage
            className={galleryImage}
            alt="a woman"
            src="https://64.media.tumblr.com/9a60b75bd8fb30d960eafefa3288d6d4/1a1a3ea6bb91c521-43/s1280x1920/07ab00782f03b6df14006146670bbb4f25818af0.jpg"
          />
          <StaticImage
            className={galleryImage}
            alt="a mouth"
            src="https://64.media.tumblr.com/8b29344f83cf20d1e58afbd29a674e3d/15efc4125fadcabd-e6/s1280x1920/0a45158fb61f0b0e0e7b30ed6d527a09a201a8e0.jpg"
          />
        </div>
      </section>
    </main>
  );
};

export default Gallery;
