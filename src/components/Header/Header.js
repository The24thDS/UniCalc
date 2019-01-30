import React from 'react';
import styles from './Header.module.css';
const Header = () => {
    return <header className={`${styles.header} flex items-center justify-between bg-dark-blue lightest-blue shadow-3`}>
        <h1 className="pl5 dim">UniCALc<sup>II</sup></h1>
    </header>;
}
export default Header;
