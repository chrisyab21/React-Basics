
import PropType from 'prop-types'
import {useState} from 'react';

const EventoAfuera = (event, newvalue)=>{
    console.log(event);
    console.log(newvalue);
    
}


export const CounterApp = ({value, subtitle})=>{

    
    const inicial = value;

    const [counter, setCounter ] = useState(value)

    const ButtonSumar = (event)=>{
       // console.log(event);
        
        setCounter(counter+1);
    }

    
    const ButtonRestar = ()=>{
        
        setCounter((c)=> c-1);
        // setCounter(counter-1);
    }


    const ButtonReset = ()=>{
       
        setCounter(()=> inicial);
    }

    return (
        <>
        
        <h1>CounterApp</h1>

        <h2>{value}</h2>
        <h2>{subtitle}</h2>
        <h2>Contador: {counter}</h2>
        <button onClick={ButtonSumar}>
            +1
        </button>
        <button onClick={(event)=> ButtonRestar(event)}>
            -1
        </button>
        <button aria-label="btn-reset" onClick={()=> ButtonReset()}>
            Reset
        </button>
        </>
    );
}


CounterApp.propTypes = {

    value: PropType.number.isRequired
}


CounterApp.defaultProps = {

    value: 21
}


