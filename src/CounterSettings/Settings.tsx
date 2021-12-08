import React, {ChangeEvent} from 'react';
import '../App.css';
import SettingsButton from "./SettingsButton";

type SettingsType = {
    setValue: any
    maxValue: any
    setMaxValue: any
    startValue: any
    setStartValue: any
}

function Settings(props: SettingsType) {

    const textFieldStyle = {
        padding: '5px',
        width: '120px',
        border: 'solid 2px #75d4f5',
        borderRadius: '6px',
    }

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        let stringCurrentValue = e.currentTarget.value
        let numCurrentValueOfMaxValue = Number(stringCurrentValue)

        props.setMaxValue(numCurrentValueOfMaxValue)
    };

    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        let stringCurrentValue = e.currentTarget.value
        let numCurrentValueOfStartValue = Number(stringCurrentValue)

        props.setStartValue(numCurrentValueOfStartValue)
        props.setValue(numCurrentValueOfStartValue)
    };

    return (
        <div className="Settings">
            <div className={'SetValues'}>
                <div className={'Value'}>
                    <span>max value:</span>
                    <input type="number" style={textFieldStyle} value={props.maxValue} onChange={onChangeMaxValue}/>
                </div>
                <div className={'Value'}>
                    <span>start value:</span>
                    <input type="number" style={textFieldStyle} value={props.startValue} onChange={onChangeStartValue}/>
                </div>
            </div>
            <SettingsButton />
        </div>
    );
}

export default Settings;
