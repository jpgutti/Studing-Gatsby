import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { container } from "../styles/styles.module.css";
import { StaticImage } from "gatsby-plugin-image";

import { graphql, useStaticQuery } from "gatsby";

// markup
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allFile(filter: { sourceInstanceName: { eq: "assets" } }) {
        nodes {
          name
          publicURL
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
        <title>{data.site.siteMetadata.title}</title>
        <img
          style={{
            width: "100%",
            height: "320px",
            objectFit: "cover",
            objectPosition: "0px -160px",
          }}
          src={
            data.allFile.nodes[0].publicURL ?? "https://picsum.photos/1920/1080"
          }
        />
      </section>
      <Footer />
    </main>
  );
};

export default IndexPage;
