import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import styles from "./App.module.css";
import Header from "./components/Header/Header";
import NewSemester from "./components/NewSemester/NewSemester";
import Semester from "./components/Semester/Semester";
import Landing from "./components/Landing/Landing";

const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Header />
        <section className={styles.section}>
          <div className={`wrapper ${styles.wrapperAddon}`}>
            <Switch>
              <Route path="/" exact>
                <Landing />
              </Route>
              <Route path="/new">
                <NewSemester />
              </Route>
              <Route path="/semester/:id">
                <Semester />
              </Route>
              <Route path="*">
                <Redirect to="/" />
              </Route>
            </Switch>
            <q>
              I would say our best <br /> time is now!
            </q>
          </div>
        </section>
      </div>
    </BrowserRouter>
  );
};

export default App;
