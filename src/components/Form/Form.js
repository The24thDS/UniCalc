import React from "react";
import Input from "./Input";
import styles from "./Form.module.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    const { inputsData } = this.props;
    const subjects = inputsData.subjects;
    this.state = {
      [subjects[0].name]: 0,
      [subjects[1].name]: 0,
      [subjects[2].name]: 0,
      [subjects[3].name]: 0,
      [subjects[4].name]: 0,
      [subjects[5].name]: 0,
      [subjects[6].name]: 0,
      [subjects[7].name]: 0
    };
  }
  recordInput = event => {
    this.setState({
      [event.target.name]: isNaN(Number(event.target.value))
        ? event.target.value
        : Number(event.target.value)
    });
  };
  submit = event => {
    event.preventDefault();
    const { inputsData } = this.props;
    const subjects = inputsData.subjects;
    const credite = Object.keys(this.props.inputsData).reduce(
      (acc, key) => acc + this.props.inputsData[key].credite,
      0
    );
    const sum = Object.keys(this.state).reduce(
      (acc, key, idx) => acc + this.state[key] * subjects[idx].credite,
      0
    );
    const pAverage = sum / credite;
    this.props.passInfo(this.state, pAverage);
  };

  render() {
    const { inputsData } = this.props;
    return (
      <form className={styles.form}>
        <div>
          {inputsData.subjects.map((subject, idx) => {
            return (
              <Input
                name={subject.name}
                type="text"
                text={subject.name}
                key={idx}
                recordInput={this.recordInput}
                submitInput={this.submit}
              />
            );
          })}
        </div>
      </form>
    );
  }
}
export default Form;
