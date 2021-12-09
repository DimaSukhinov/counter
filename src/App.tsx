import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./Counter/Counter";
import Settings from "./CounterSettings/Settings";

function App() {

    let [value, setValue] = useState(0)
    let [maxValue, setMaxValue] = useState(0)
    let [startValue, setStartValue] = useState(0)

    useEffect(() => {
        let valueAsString = localStorage.getItem('value')
        let maxValueAsString = localStorage.getItem('maxValue')
        let startValueAsString = localStorage.getItem('startValue')
        if(maxValueAsString && valueAsString && startValueAsString){
            setValue(JSON.parse(valueAsString))
            setMaxValue(JSON.parse(maxValueAsString))
            setStartValue(JSON.parse(startValueAsString))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('value', JSON.stringify(value))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('startValue', JSON.stringify(startValue))
    }, [value, maxValue, startValue])

    const incValue = () => {
        if (value < maxValue) {
            setValue(value + 1)
        }
    }

    const resetValue = () => {
        setValue(0)
    }

    const changeCounter = () => {
        if(startValue < maxValue) {
            setValue(startValue)
        }
    }

    return (
        <div className={'App'}>
            <Settings
                setValue={setValue}
                maxValue={maxValue}
                setMaxValue={setMaxValue}
                startValue={startValue}
                setStartValue={setStartValue}
                changeCounter={changeCounter}
            />
            <Counter
                value={value}
                increasingTheValue={incValue}
                resetValue={resetValue}
                maxValue={maxValue}
            />
        </div>
    );
}

export default App;