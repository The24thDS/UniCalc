import React from "react";
import { withRouter } from "react-router-dom";
import { getSemester } from "../../firebase/firebase.utils";
import Form from "../Form/Form";
import Output from "../Output/Output";

class Semester extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      subjects: [],
      grades: [],
      name: ""
    };
  }

  setSubjects = () => {
    getSemester(this.state.id).then(semester => {
      if (semester !== null) {
        this.setState({
          subjects: semester.subjects,
          name: semester.name
        });
      }
    });
  };

  setSemesterId = () => {
    this.setState(
      {
        id: this.props.match.params.id
      },
      this.setSubjects
    );
  };

  setGrades = grades => {
    this.setState({
      grades
    });
  };

  componentDidMount() {
    this.setSemesterId();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.setSemesterId();
    }
  }

  render() {
    return (
      <React.Fragment>
        <Form
          subjects={this.state.subjects.map(subject => subject.name)}
          semesterName={this.state.name}
          setGrades={this.setGrades}
        />
        <Output subjects={this.state.subjects} grades={this.state.grades} />
      </React.Fragment>
    );
  }
}

export default withRouter(Semester);
