import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Header.module.css";
const Header = ({ navigation, semester, setSemester }) => {
  return (
    <header className={styles.header}>
      <div className={`wrapper ${styles.wrapperAddon}`}>
        <h1 className={styles.title}>UniCALc</h1>
      </div>
      <div className={styles.menu}>
        <NavLink
          className={styles.semester}
          to="/"
          activeClassName={styles.active}
          exact
        >
          Home
        </NavLink>
        <NavLink
          className={styles.semester}
          to="/new"
          activeClassName={styles.active}
        >
          Creare semestru
        </NavLink>
      </div>
    </header>
  );
};
export default Header;
