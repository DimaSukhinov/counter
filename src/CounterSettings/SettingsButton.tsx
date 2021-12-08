import React from 'react';
import '../App.css';
import {Button} from "@material-ui/core";

function SettingsButton() {

    const setStyle = {
        margin: '20px',
    }

    return (
        <div className={'Buttons'}>
            <Button variant="contained" color="primary" style={setStyle}>
                set
            </Button>
        </div>
    );
}

export default SettingsButton;
