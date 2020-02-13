import React, { useState } from "react";
import PropTypes from "prop-types";
import Input from "./Input";
import styles from "./Form.module.css";

const Form = ({ subjects, semesterName, setGrades }) => {
  const [state, setState] = useState({});
  return (
    <div className={styles.form}>
      <h1>{semesterName}</h1>
      <div>
        {subjects.map((subjectName, index) => {
          const name = index + subjectName.replace(/ /g, "");
          return (
            <Input
              key={name}
              name={name}
              type="number"
              text={subjectName}
              value={state[name]}
              onChange={({ target }) => {
                setState(prevState => ({
                  ...prevState,
                  [target.name]: Number(target.value)
                }));
              }}
            />
          );
        })}
        <Input type="submit" onClick={() => setGrades(Object.values(state))} />
      </div>
    </div>
  );
};

Form.propTypes = {
  subjects: PropTypes.arrayOf(PropTypes.string).isRequired,
  semesterName: PropTypes.string.isRequired,
  setGrades: PropTypes.func.isRequired
};

export default Form;
