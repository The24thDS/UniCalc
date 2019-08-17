import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import styles from "./App.module.css";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Output from "./components/Output/Output";
import { getSemesters } from "./firebase/firebase.utils";

class App extends Component {
  semesters = [];
  constructor() {
    super();
    this.state = {
      data: {},
      average: 0,
      semester: 0,
      loading: true
    };
  }

  passInfo = (marks, average) => {
    this.setState({
      data: marks,
      average: average
    });
  };

  setSemester = semester => {
    this.setState({ semester });
  };

  componentDidMount() {
    getSemesters().then(semesters => {
      semesters.forEach(el => {
        el.routeName = `/y${el.year}/s${el.semester}`;
      });
      this.semesters = semesters;
      this.setState({
        loading: false
      });
    });
  }

  render() {
    const { data, average, semester, loading } = this.state;
    return (
      <BrowserRouter>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <div className={styles.app}>
            <Header
              navigation={this.semesters.map(semester => semester.routeName)}
              semester={semester}
              setSemester={this.setSemester}
            />
            <section className={styles.section}>
              <div className={`wrapper ${styles.wrapperAddon}`}>
                {this.semesters.map((semester, index) => {
                  return (
                    <Route
                      key={index}
                      exact
                      path={semester.routeName}
                      render={() => <Form inputsData={semester} />}
                    />
                  );
                })}

                <Output chartData={data} average={average} />
                <q>
                  I would say our best <br /> time is now!
                </q>
              </div>
            </section>
          </div>
        )}

        {/* {semester === 1 ? (
              <Form
                inputsData={subjectCredits[0]}
                passInfo={this.passInfo}
                key="0"
              />
            ) : (
              <Form
                inputsData={subjectCredits[1]}
                passInfo={this.passInfo}
                key="1"
              />
            )} */}
      </BrowserRouter>
    );
  }
}

export default App;
