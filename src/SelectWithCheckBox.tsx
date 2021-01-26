import React, {ChangeEvent} from 'react';
import './App.css';
import {ArrOptionsType} from "./types";
import Paper from "@material-ui/core/Paper";


type SelectWithCheckBoxType = {
    optionArray: Array<ArrOptionsType>
    changeCount: any
    actionType: string
    name: string
}

function SelectWithCheckbox(props: SelectWithCheckBoxType) {

    const countChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.name === 'под мойку') {
            props.changeCount({type: props.actionType, count: e.currentTarget.value, name: 'под мойку'})
        } else if (e.currentTarget.name === 'под варочную поверхность') {
            props.changeCount({type: props.actionType, count: e.currentTarget.value, name: 'под варочную поверхность'})
        }
    }

    const options: Array<any> = props.optionArray.map(item => {
        return <div>
            <label>{item.name}:</label>
            <input value={item.value} type={'checkbox'} checked={item.isChecked} onChange={countChangeCallback}
                   name={item.name}/>
        </div>

    })

    return (
        <div className={'selectWithCheckbox'}>
            <Paper elevation={10} style={{padding: "15px"}}>
                <h3>{props.name}:</h3>
                {options}
            </Paper>
        </div>
    )
}

export default SelectWithCheckbox