import React from "react";
import styles from "./Input.module.css";

const Input = ({ name, type, text, onChange, onClick }) => {
  if (type !== "submit") {
    return (
      <label className={styles.label}>
        {text}
        <input
          onChange={onChange}
          className={styles.input}
          name={name}
          min="1"
          placeholder={Math.floor(Math.random() * 10 + 1)}
          max="10"
          type={type}
          required
        />
      </label>
    );
  } else {
    return (
      <label className={styles.submit}>
        <input name={name} type={type} value={text} onClick={onClick} />
      </label>
    );
  }
};
export default React.memo(Input);
