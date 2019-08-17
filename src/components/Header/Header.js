import React from "react";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";
const Header = ({ navigation, semester, setSemester }) => {
  return (
    <header className={styles.header}>
      <div className={`wrapper ${styles.wrapperAddon}`}>
        <h1 className={styles.title}>
          UniCALc<sup>III</sup>
        </h1>
      </div>
      <div className={styles.menu}>
        {navigation.map((route, index) => (
          <Link
            key={index}
            className={`${styles.semester} ${
              index === semester ? styles.active : ""
            }`}
            to={route}
            onClick={() => setSemester(index)}
          >
            {route
              .toUpperCase()
              .replace("/", "")
              .replace("/", " ")}
          </Link>
        ))}
      </div>
    </header>
  );
};
export default Header;
