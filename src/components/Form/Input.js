import React from 'react';

const Input = ({ name, type, required, text, className, recordInput, submitInput}) => {
    let styles = "br1 ba f4 b--black";
    if(name==="nume") styles += " w-50"; else styles += " w-10";
    if(type!=="submit"){
        if (required === true)
            return <label className={className}>{text}<input onChange={recordInput} className={styles} name={name} min="1" placeholder={Math.floor(Math.random()*10+1)} max="10" type={type} required /></label>
        else
            return <label className={className}>{text}<input onChange={recordInput} className={styles} name={name} type={type} /></label>
    } else {
        return (
        <label className="flex justify-center">
            <input 
            className="pa2 pl3 pr3 br2 bg-dark-blue ba b--black-60 white pointer shadow-3 grow" 
            name={name} 
            type={type} 
            value={text}
            onClick={submitInput}
            /></label>
        )
    }
}
export default React.memo(Input);