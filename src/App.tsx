import React, {useState} from 'react';
import './App.css';
import Counter from "./Counter/Counter";
import Settings from "./CounterSettings/Settings";

function App() {

    let [startValue, setStartValue] = useState<number>(2)
    let [value, setValue] = useState(startValue)
    let [maxValue, setMaxValue] = useState<number>(5)

    const increasingTheValue = () => {
        if (value < maxValue) {
            setValue(value + 1)
        }
    }

    const resetValue = () => {
        setValue(0)
    }

    return (
        <div className={'App'}>
            <Settings
                setMaxValue={setMaxValue}
                setStartValue={setStartValue}
                maxValue={maxValue}
                startValue={startValue}
            />
            <Counter
                value={value}
                increasingTheValue={increasingTheValue}
                resetValue={resetValue}
            />
        </div>
    );
}

export default App;