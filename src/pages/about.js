import React from "react";
import Header from "../components/header";
import { container } from "../styles/styles.module.css";

const About = () => {
  return (
    <main>
      <Header />
      <section className={container}>
        <h1>About</h1>
      </section>
    </main>
  );
};

export default About;
