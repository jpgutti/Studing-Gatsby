import * as React from "react";
import { graphql } from "gatsby";
import Header from "../components/header";

const Blog = ({ data }) => {
  console.log({ data });
  return (
    <main>
      <Header />
      <ul>
        {data.allFile.nodes.map((node) => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </main>
  );
};

export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
      nodes {
        name
      }
    }
  }
`;

export default Blog;
