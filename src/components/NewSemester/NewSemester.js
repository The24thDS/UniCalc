import React, { useReducer } from "react";
import { useHistory } from "react-router-dom";
import { createSemesterWithSubjects } from "../../firebase/firebase.utils";

import styles from "./styles.module.css";

const NewSemester = () => {
  const history = useHistory();

  const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        return {
          ...state,
          subjects: {
            ...state.subjects,
            [action.payload]: { name: "", credits: 1 }
          },
          nextSubjectId: state.nextSubjectId + 1
        };
      case "changeName":
        return {
          ...state,
          subjects: {
            ...state.subjects,
            [action.payload.key]: {
              ...state.subjects[action.payload.key],
              name: action.payload.name
            }
          }
        };
      case "changeCredits":
        return {
          ...state,
          subjects: {
            ...state.subjects,
            [action.payload.key]: {
              ...state.subjects[action.payload.key],
              credits: Number(action.payload.credits)
            }
          }
        };
      case "changeSemesterName":
        return {
          ...state,
          name: action.payload
        };
      default:
        throw new Error("Action doesn't exists");
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    nextSubjectId: 2,
    subjects: {
      subject0: { name: "", credits: 1 },
      subject1: { name: "", credits: 1 }
    },
    name: ""
  });

  const returnInputs = () => {
    const keys = Object.keys(state.subjects);
    const inputs = Object.values(state.subjects).map((subject, index) => (
      <span key={index} className={styles.subject}>
        <input
          type="text"
          name={keys[index]}
          value={subject.name}
          placeholder="Nume disciplină"
          onChange={({ target }) =>
            dispatch({
              type: "changeName",
              payload: { key: target.name, name: target.value }
            })
          }
          required
        />
        <input
          type="number"
          name={keys[index]}
          value={subject.credits}
          onChange={({ target }) =>
            dispatch({
              type: "changeCredits",
              payload: { key: target.name, credits: target.value }
            })
          }
          min="1"
          max="10"
          required
        />
      </span>
    ));
    return inputs;
  };

  const validateInputs = () => {
    let isValid = true;
    if (state.name === "") {
      isValid = false;
    }
    Object.values(state.subjects).forEach(subject => {
      if (subject.name === "" || subject.credits < 1 || subject.credits > 10) {
        isValid = false;
      }
    });
    return isValid;
  };

  const createNewSemester = e => {
    e.preventDefault();
    if (!validateInputs()) {
      return false;
    }
    createSemesterWithSubjects(Object.values(state.subjects), state.name).then(
      semesterId => {
        if (semesterId) {
          history.push("/semester/" + semesterId);
        }
      }
    );
  };

  return (
    <div className={styles.formWrapper}>
      <form onSubmit={createNewSemester}>
        <input
          type="text"
          name="semesterName"
          value={state.name}
          placeholder="A creative semester name"
          onChange={({ target }) =>
            dispatch({
              type: "changeSemesterName",
              payload: target.value
            })
          }
          className={styles.subjectName}
          required
        />
        <div className={styles.subjects}>
          <div
            className={styles.subject}
            style={{ textAlign: "center", fontSize: "20px" }}
          >
            <span>Disciplină</span>
            <span>Credite</span>
          </div>
          {returnInputs()}
          <input
            type="button"
            value="Disciplină nouă"
            onClick={() =>
              dispatch({
                type: "add",
                payload: `subject${state.nextSubjectId}`
              })
            }
            className={styles.newSubject}
          />
        </div>
        <input type="submit" value="Creează" />
      </form>
    </div>
  );
};

NewSemester.propTypes = {};

export default NewSemester;
