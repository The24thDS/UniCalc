import React from 'react';
import Input from './Input';
import styles from './Form.module.css';

const inputsData = {
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
}
let credite = Object.keys(inputsData).reduce((acc, key)=>acc+inputsData[key].credite, 0);
class Form extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            mates2: 0,
            meto: 0,
            sd: 0,
            deea: 0,
            poo1: 0,
            lupu1: 0,
            eg: 0,
            en3: 0
        }
    }
    recordInput = (event) => {
        this.setState({
            [event.target.name]: isNaN(Number(event.target.value))?event.target.value:Number(event.target.value)
        });
    }
    submit = (event) => {
        event.preventDefault();
        const sum = Object.keys(this.state).reduce((acc, key)=>acc+(this.state[key]*inputsData[key].credite), 0);
        const pAverage = sum / credite;
        this.props.passInfo(Object.values(this.state), pAverage);
    }
    render(){
        return <form className={styles.form}>
            <div>
                {Object.keys(inputsData).map((key)=>{
                    return (
                        <Input 
                            name={key} 
                            type={inputsData[key].type}
                            text={inputsData[key].text}
                            key={key}
                            recordInput={this.recordInput}
                            submitInput={this.submit}
                        />
                    )
                })}
            </div>
        </form>
    }
};
export default Form;