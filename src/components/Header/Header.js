import React from 'react';
import styles from './Header.module.css';
const Header = (props) => {
    return <header className={styles.header}>
        <div className={`wrapper ${styles.wrapperAddon}`}>
            <h1 className={styles.title}>UniCALc<sup>II</sup></h1>
        </div>
        <div className={styles.menu}>
            <span className={props.semester===1?styles.active:''} onClick={()=>props.setSemester(1)}>First semester</span>
            <span className={props.semester===2?styles.active:''} onClick={()=>props.setSemester(2)}>Second Semester</span>
        </div>
    </header>;
}
export default Header;
