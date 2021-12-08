import React from 'react';
import '../App.css';
import {Button} from "@material-ui/core";

type SettingButtonType = {

}

function SettingsButton(props: SettingButtonType) {

    const setStyle = {
        margin: '20px',
    }

    const onClick = () => {

    }

    return (
        <div className={'Buttons'}>
            <Button onClick={onClick} variant="contained" color="primary" style={setStyle}>
                set
            </Button>
        </div>
    );
}

export default SettingsButton;
