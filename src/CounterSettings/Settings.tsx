import React, {ChangeEvent} from 'react';
import '../App.css';
import SettingsButton from "./SettingsButton";

type SettingsType = {
    setValue: any
    maxValue: number
    setMaxValue: any
    startValue: number
    setStartValue: any
    changeCounter: () => void
}

function Settings(props: SettingsType) {

    const textFieldStyle = {
        padding: '5px',
        width: '120px',
        border: 'solid 2px #75d4f5',
        borderRadius: '6px',
    }

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        let stringCurrentValueOfMaxValue = e.currentTarget.value

        props.setMaxValue(+stringCurrentValueOfMaxValue)
    };

    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        let stringCurrentValueOfStartValue = e.currentTarget.value

        props.setStartValue(+stringCurrentValueOfStartValue)
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
            <SettingsButton changeCounter={props.changeCounter} maxValue={props.maxValue} startValue={props.startValue}/>
        </div>
    );
}

export default Settings;
