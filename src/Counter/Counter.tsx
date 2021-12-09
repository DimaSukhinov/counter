import React from 'react';
import '../App.css';
import Display from "./Display";
import Key from "./Button";

type CounterType = {
    value: number
    increasingTheValue: () => void
    resetValue: () => void
    maxValue: number
}

function Counter(props: CounterType) {
    return (
        <div className="Counter">
            <Display value={props.value}/>
            <Key increasingTheValue={props.increasingTheValue}
                 resetValue={props.resetValue}
                 maxValue={props.maxValue}
                 value={props.value}
            />
        </div>
    );
}

export default Counter;
