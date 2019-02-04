import React from 'react';
import styles from './Input.module.css';

const Input = ({ name, type, text, recordInput, submitInput}) => {
    if(type!=="submit"){
            return <label className={styles.label}>{text}<input onChange={recordInput} className={styles.input} name={name} min="1" placeholder={Math.floor(Math.random()*10+1)} max="10" type="text" required /></label>
    } else {
        return (
        <label className={styles.submit}>
            <input 
            name={name} 
            type={type} 
            value={text}
            onClick={submitInput}
            /></label>
        )
    }
}
export default React.memo(Input);