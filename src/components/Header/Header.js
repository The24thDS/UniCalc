import React from 'react';
import styles from './Header.module.css';
const Header = () => {
    return <header className={styles.header}>
        <div className={`wrapper ${styles.wrapperAddon}`}>
            <h1 className={styles.title}>UniCALc<sup>II</sup></h1>
        </div>
    </header>;
}
export default Header;
