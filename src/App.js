import React, { Component } from 'react';
import styles from './App.module.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <section className={`${styles.section} w100 flex justify-around items-center`}>
          <Form/>
        </section>
      </div>
    );
  }
}

export default App;
