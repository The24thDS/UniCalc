import React, { Component } from 'react';
import styles from './App.module.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Output from './components/Output/Output';

const materiiCredite = [
  {
    deea: {
      type: 'number',
      text: 'Dispozitive Electronice și Electronică Analogică',
      credite: 4
    },
    eg: {
        type: 'number',
        text: 'Elemente de Grafică',
        credite: 4
    },
    en3: {
        type: 'number',
        text: 'Limba Engleză III',
        credite: 2
    },
    mates2: {
        type: 'number',
        text: 'Matematici Speciale II',
        credite: 3
    },
    meto: {
          type: 'number',
          text: 'Metode Numerice',
          credite: 4
      },
    poo1: {
          type: 'number',
          text: 'Programare Orientată pe Obiecte I',
          credite: 5
      },
    lupu1: {
          type: 'number',
          text: ' Structura și organizarea calculatoarelor',
          credite: 4
      },
    sd: {
          type: 'number',
          text: 'Structuri de Date',
          credite: 4
      },
    submit: {
        type: 'submit',
        text: 'Calculează',
        credite: 0
    }
  },
  {
    ts: {
      type: 'number',
      text: 'Teoria Sistemelor',
      credite: 4
    },
    bd: {
        type: 'number',
        text: 'Baze de Date',
        credite: 4
    },
    pa: {
        type: 'number',
        text: 'Proiectarea Algoritmilor',
        credite: 5
    },
    so: {
        type: 'number',
        text: 'Sisteme de Operare',
        credite: 4
    },
    asm: {
          type: 'number',
          text: 'Programare în Limbaj de Asamblare',
          credite: 3
      },
    poo2: {
          type: 'number',
          text: 'Programare Orientată pe Obiecte II',
          credite: 4
      },
    eng4: {
          type: 'number',
          text: ' Limba Engleza IV',
          credite: 2
      },
    pd: {
          type: 'number',
          text: 'Practică de Domeniu',
          credite: 4
      },
    submit: {
        type: 'submit',
        text: 'Calculează',
        credite: 0
    }
  }
]

class App extends Component {
  constructor(){
    super();
    this.state = {
      data: {},
      average: 0,
      semester: 1
    }
  }
  passInfo = (marks, average) =>
  {
    this.setState({
      data: marks,
      average: average
    })
  }

  setSemester = (semester) => {
    this.setState({semester})
  }

  render() {
    const {data, average, semester} = this.state;
    return (
      <div className={styles.app}>
        <Header semester={semester} setSemester={this.setSemester}/>
        <section className={styles.section}>
          <div className={`wrapper ${styles.wrapperAddon}`}>
          {
            semester===1?<Form inputsData={materiiCredite[0]} passInfo={this.passInfo} key="0" />:<Form inputsData={materiiCredite[1]} passInfo={this.passInfo} key="1"/>
          }
            
            <Output chartData={data} average={average}/>
            <q>I would say our best <br/> time is now!</q>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
