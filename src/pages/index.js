import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { container } from "../styles/styles.module.css";

// markup
const IndexPage = () => {
  return (
    <main>
      <Header />
      <section className={container}>
        <h1>Home</h1>
      </section>
      <Footer />
    </main>
  );
};

export default IndexPage;
