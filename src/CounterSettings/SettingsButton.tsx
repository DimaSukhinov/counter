import React from 'react';
import '../App.css';
import {Button} from "@material-ui/core";

type SettingButtonType = {
    changeCounter: any
}

function SettingsButton(props: SettingButtonType) {

    const setStyle = {
        margin: '20px',
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
