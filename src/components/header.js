import React from "react";
import { Link } from "gatsby";
import {
  container,
  header,
  headerItem,
  headerLink,
} from "../styles/styles.module.css";

const Header = () => {
  return (
    <header className={container}>
      <ul className={header}>
        <li className={headerItem}>
          <Link className={headerLink} to="/">
            Home
          </Link>
        </li>
        <li className={headerItem}>
          <Link className={headerLink} to="/about">
            About
          </Link>
        </li>
        <li className={headerItem}>
          <Link className={headerLink} to="/gallery">
            Gallery
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
