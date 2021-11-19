import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { container } from "../styles/styles.module.css";

import { graphql, StaticQuery } from "gatsby";

// markup
const IndexPage = () => {
  const data = StaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  console.log({ data });

  return (
    <main>
      <Header />
      <section className={container}>
        <h1>Home</h1>
        <h1>{data.site.siteMetadata.title}</h1>
      </section>
      <Footer />
    </main>
  );
};

export default IndexPage;
