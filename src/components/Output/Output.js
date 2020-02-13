import React from "react";
import styles from "./Output.module.css";

const Output = ({ subjects, grades }) => {
  if (grades.length > 0 && grades.length === subjects.length) {
    let creditsTimesGradesSum = 0;
    let creditsSum = 0;
    subjects.forEach((subject, index) => {
      creditsTimesGradesSum += Number(subject.credits) * Number(grades[index]);
      creditsSum += Number(subject.credits);
    });

    const average = creditsTimesGradesSum / creditsSum;
    return (
      <div className={`${styles.output} ${styles.average}`}>
        <h1>{Math.floor(average * 100) / 100}</h1>
      </div>
    );
  } else {
    return (
      <div className={styles.output}>
        <h1>Media ta va apărea aici.</h1>
      </div>
    );
  }
};

export default Output;
