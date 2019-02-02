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
  passInfo = (formState, average) =>
  {
    this.setState({
      data: formState,
      average: average
    },()=>console.log(this.state))
  }
  render() {
    const {data, average} = this.state;
    return (
      <div className="App">
        <Header/>
        <section className={`${styles.section} w100 flex justify-around items-center`}>
          <Form passInfo={this.passInfo}/>
          <Output chartData={data} average={average}/>
        </section>
      </div>
    );
  }
}

export default App;
