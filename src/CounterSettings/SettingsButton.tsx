import React from 'react';
import '../App.css';
import {Button} from "@material-ui/core";

type SettingButtonType = {
    changeCounter: () => void
    maxValue: number
    startValue: number
}

function SettingsButton(props: SettingButtonType) {

    const setStyle = {
        margin: '20px',
        opacity: props.maxValue <= props.startValue ? '0.5' : ''
    }

    return (
        <div className={'Buttons'}>
            <Button onClick={props.changeCounter} variant="contained" color="primary" style={setStyle}>
                set
            </Button>
        </div>
    );
}

export default SettingsButton;
