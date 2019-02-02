import React from 'react';
import Input from './Input';
const inputsData = {
    nume: {
        type: 'text',
        required: false,
        text: 'Nume și prenume',
        credite: 0
    },
    mates2: {
        type: 'number',
        required: true,
        text: 'Matematici Speciale II',
        credite: 3
    },
	meto: {
        type: 'number',
        required: true,
        text: 'Metode Numerice',
        credite: 4
    },
	sd: {
        type: 'number',
        required: true,
        text: 'Structuri de date',
        credite: 4
    },
	deea: {
        type: 'number',
        required: true,
        text: 'DEEA / DCE',
        credite: 4
    },
	poo1: {
        type: 'number',
        required: true,
        text: 'POO I',
        credite: 5
    },
	lupu1: {
        type: 'number',
        required: true,
        text: 'Arhictectura calculatoarelor',
        credite: 4
    },
	eg: {
        type: 'number',
        required: true,
        text: 'Elemente de grafică',
        credite: 4
    },
	en3: {
        type: 'number',
        required: true,
        text: 'Limba Engleză III',
        credite: 2
    },
    submit: {
        type: 'submit',
        required: false,
        text: 'Calculează',
        credite: 0
    }
}
let credite = Object.keys(inputsData).reduce((acc, key)=>acc+inputsData[key].credite, 0);
class Form extends React.Component {
    recordInput = (event) => {
        this.setState({
            [event.target.name]: isNaN(Number(event.target.value))?event.target.value:Number(event.target.value)
        });
    }
    submit = (event) => {
        event.preventDefault();
        const sum = Object.keys(this.state).reduce((acc, key)=>acc+(this.state[key]*inputsData[key].credite), 0);
        const pAverage = sum / credite;
        this.props.passInfo(this.state, pAverage);
    }
    render(){
        return <form className="flex flex-column w-25 f4">
        {Object.keys(inputsData).map((key)=>{
            return (
                <Input 
                    name={key} 
                    type={inputsData[key].type} 
                    required={inputsData[key].required} 
                    text={inputsData[key].text} 
                    className="flex justify-between pa2"
                    key={key}
                    recordInput={this.recordInput}
                    submitInput={this.submit}
                />
            )
        })}
        </form>
    }
};
export default Form;