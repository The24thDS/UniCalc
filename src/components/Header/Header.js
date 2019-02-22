import React from 'react';
import styles from './Header.module.css';
const dark = () => {
    document.getElementsByTagName("body")[0].classList.add("black")
}
const light = () => {
    document.getElementsByTagName("body")[0].classList.remove("black")
}
const Header = () => {
    return <header className={styles.header}>
        <div className={`wrapper ${styles.wrapperAddon}`}>
            <h1 className={styles.title}>UniCALc<sup>II</sup></h1>
            <div className={styles.themes}>
                <div onClick={light}>Light</div>
                <div onClick={dark}>Dark</div>
            </div>
        </div>
    </header>;
}
export default Header;
