import React, {useState} from 'react';
import './App.css';
import Counter from "./Counter";

function App() {

    let [value, setValue] = useState(0)

    const maxValue = 5

    const increasingTheValue = () => {
        if (value < maxValue) {
            setValue(value + 1)
        }
    }

    const resetValue = () => {
        setValue(0)
    }

    return (
        <Counter value={value} increasingTheValue={increasingTheValue} resetValue={resetValue}/>
    );
}

export default App;
