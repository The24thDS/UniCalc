import React from 'react';
import Input from './Input';
const inputsData = {
    nume: {
        type: 'text',
        required: false,
        text: 'Nume și prenume'
    },
    mates2: {
        type: 'number',
        required: true,
        text: 'Matematici Speciale II'
    },
	meto: {
        type: 'number',
        required: true,
        text: 'Metode Numerice'
    },
	sd: {
        type: 'number',
        required: true,
        text: 'Structuri de date'
    },
	deea: {
        type: 'number',
        required: true,
        text: 'DEEA / DCE'
    },
	poo1: {
        type: 'number',
        required: true,
        text: 'POO I'
    },
	lupu1: {
        type: 'number',
        required: true,
        text: 'Arhictectura calculatoarelor'
    },
	eg: {
        type: 'number',
        required: true,
        text: 'Elemente de grafică'
    },
	en3: {
        type: 'number',
        required: true,
        text: 'Limba Engleză III'
    },
    submit: {
        type: 'submit',
        required: false,
        text: ''
    }
}
const Form = () => {
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
            />
        )
    })}
    </form>
};
export default Form;