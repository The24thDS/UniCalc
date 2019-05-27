import React from 'react';
import Input from './Input';
import styles from './Form.module.css';


class Form extends React.Component {
    constructor(props)
    {
        super(props);
        const subjects = Object.values(this.props.inputsData)
        this.state = {
            [subjects[0].text]: 0,
            [subjects[1].text]: 0,
            [subjects[2].text]: 0,
            [subjects[3].text]: 0,
            [subjects[4].text]: 0,
            [subjects[5].text]: 0,
            [subjects[6].text]: 0,
            [subjects[7].text]: 0
        }
    }
    recordInput = (event) => {
        this.setState({
            [event.target.name]: isNaN(Number(event.target.value))?event.target.value:Number(event.target.value)
        });
    }
    submit = (event) => {
        event.preventDefault();
        const subjects = Object.values(this.props.inputsData)
        const credite = Object.keys(this.props.inputsData).reduce((acc, key)=>acc+this.props.inputsData[key].credite, 0);
        const sum = Object.keys(this.state).reduce((acc, key, idx)=>acc+(this.state[key]*subjects[idx].credite), 0);
        const pAverage = sum / credite;
        this.props.passInfo(this.state, pAverage);
    }

    render(){
        const {inputsData} = this.props;
        return <form className={styles.form}>
            <div>
                {Object.keys(inputsData).map((key)=>{
                    return (
                        <Input 
                            name={inputsData[key].text} 
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