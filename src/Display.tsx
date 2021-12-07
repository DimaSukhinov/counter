import React from 'react';
import './App.css';

export type FieldType = {
    value: number
}

function Display(props: FieldType) {
    return (
        <div className="Field">
            {props.value}
        </div>
    );
}

export default Display;
