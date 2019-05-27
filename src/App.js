import React, { Component } from 'react';
import styles from './App.module.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Output from './components/Output/Output';

const subjectCredits = [
  {
    DEEA: {
      type: 'number',
      text: 'Dispozitive Electronice și Electronică Analogică',
      credite: 4
    },
    EG: {
        type: 'number',
        text: 'Elemente de Grafică',
        credite: 4
    },
    EN3: {
        type: 'number',
        text: 'Limba Engleză III',
        credite: 2
    },
    MATES2: {
        type: 'number',
        text: 'Matematici Speciale II',
        credite: 3
    },
    MN: {
          type: 'number',
          text: 'Metode Numerice',
          credite: 4
      },
    POO1: {
          type: 'number',
          text: 'Programare Orientată pe Obiecte I',
          credite: 5
      },
    SOC: {
          type: 'number',
          text: ' Structura și organizarea calculatoarelor',
          credite: 4
      },
    SD: {
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
    TS: {
      type: 'number',
      text: 'Teoria Sistemelor',
      credite: 4
    },
    BD: {
        type: 'number',
        text: 'Baze de Date',
        credite: 4
    },
    PA: {
        type: 'number',
        text: 'Proiectarea Algoritmilor',
        credite: 5
    },
    SO: {
        type: 'number',
        text: 'Sisteme de Operare',
        credite: 4
    },
    PLA: {
          type: 'number',
          text: 'Programare în Limbaj de Asamblare',
          credite: 3
      },
    POO2: {
          type: 'number',
          text: 'Programare Orientată pe Obiecte II',
          credite: 4
      },
    ENG4: {
          type: 'number',
          text: ' Limba Engleza IV',
          credite: 2
      },
    PD: {
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
            semester===1?<Form inputsData={subjectCredits[0]} passInfo={this.passInfo} key="0" />:<Form inputsData={subjectCredits[1]} passInfo={this.passInfo} key="1"/>
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
