import React from 'react';
import '../App.css';
import {Button} from "@material-ui/core";

type ButtonProps = {
    increasingTheValue: () => void
    resetValue: () => void
    maxValue: number
    value: number
}

function Key(props: ButtonProps) {

    const incStyle = {
        margin: '20px',
        opacity: props.value === props.maxValue ? '0.5' : ''
    }

    const resetStyle = {
        margin: '20px',
        opacity: props.value === 0 ? '0.5' : ''
    }

    return (
        <div className={'Buttons'}>
            <Button onClick={props.increasingTheValue} variant="contained" color="primary" style={incStyle}>
                inc
            </Button>
            <Button onClick={props.resetValue} variant="contained" color="primary" style={resetStyle}>
                reset
            </Button>
        </div>
    );
}

export default Key;
