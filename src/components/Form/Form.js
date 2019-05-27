import React from 'react';
import Input from './Input';
import styles from './Form.module.css';


class Form extends React.Component {
    constructor(props)
    {
        super(props);
        const subjects = Object.keys(this.props.inputsData)
        this.state = {
            [subjects[0]]: 0,
            [subjects[1]]: 0,
            [subjects[2]]: 0,
            [subjects[3]]: 0,
            [subjects[4]]: 0,
            [subjects[5]]: 0,
            [subjects[6]]: 0,
            [subjects[7]]: 0
        }
    }
    recordInput = (event) => {
        this.setState({
            [event.target.name]: isNaN(Number(event.target.value))?event.target.value:Number(event.target.value)
        });
    }
    submit = (event) => {
        event.preventDefault();
        const credite = Object.keys(this.props.inputsData).reduce((acc, key)=>acc+this.props.inputsData[key].credite, 0);
        const sum = Object.keys(this.state).reduce((acc, key)=>acc+(this.state[key]*this.props.inputsData[key].credite), 0);
        const pAverage = sum / credite;
        this.props.passInfo(Object.values(this.state), pAverage);
    }

    render(){
        const {inputsData} = this.props;
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