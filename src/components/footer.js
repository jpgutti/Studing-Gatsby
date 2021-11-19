import React from "react";
import { container, madeBy } from "../styles/styles.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={container}>
        <span className={madeBy}>
          Made with &#x1F496; by{" "}
          <a href="https://github.com/jpgutti" rel="noreferrer" target="_blank">
            jpgutti
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
