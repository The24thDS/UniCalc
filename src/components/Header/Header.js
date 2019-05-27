import React from 'react';
import styles from './Header.module.css';
const Header = () => {
    return <header className={styles.header}>
        <div className={`wrapper ${styles.wrapperAddon}`}>
            <h1 className={styles.title}>UniCALc<sup>II</sup></h1>
        </div>
        <div className={styles.menu}>
            <span className={styles.active}>First semester</span>
            <span>Second Semester</span>
        </div>
    </header>;
}
export default Header;
