import React, { Component } from 'react';
import styles from './App.module.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Output from './components/Output/Output';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data: {},
      average: 0
    }
  }
  passInfo = (marks, average) =>
  {
    this.setState({
      data: marks,
      average: average
    })
  }
  render() {
    const {data, average} = this.state;
    return (
      <div className={styles.app}>
        <Header/>
        <section className={styles.section}>
          <div className={`wrapper ${styles.wrapperAddon}`}>
            <Form passInfo={this.passInfo}/>
            <Output chartData={data} average={average}/>
            <q>I would say our best <br/> time is now!</q>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
