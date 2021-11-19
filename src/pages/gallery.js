import React from "react";
import Header from "../components/header";
import { container } from "../styles/styles.module.css";

const Gallery = () => {
  return (
    <main>
      <Header />
      <section className={container}>
        <h1>Gallery</h1>
      </section>
    </main>
  );
};

export default Gallery;
