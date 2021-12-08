import React, {ChangeEvent} from 'react';
import '../App.css';
import SettingsButton from "./SettingsButton";

type SettingsType = {
    setMaxValue: any
    setStartValue: any
    maxValue: number
    startValue: number
}

function Settings(props: SettingsType) {

    const textFieldStyle = {
        padding: '5px',
        width: '120px',
        border: 'solid 2px #75d4f5',
        borderRadius: '6px',
    }

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(e.currentTarget.value);
    };

    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setStartValue(e.currentTarget.value);
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
