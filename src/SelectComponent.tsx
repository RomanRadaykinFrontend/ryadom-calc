import React, {ChangeEvent} from 'react';
import './App.css';
import {ArrOptionsType} from "./types";
import Paper from "@material-ui/core/Paper";


type SelectComponentType = {
    optionArray: Array<ArrOptionsType>
    changeCount: any
    actionType: string
    name: string
}

function SelectComponent(props: SelectComponentType) {

    const options: Array<any> = props.optionArray.map((item) => {
        return <option value={item.value}>{item.name}</option>
    })


    const onFuncCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        props.changeCount({type: props.actionType, count: +e.currentTarget.value})
    };


    return (
        <div className={'selectComponent'}>
            <Paper elevation={10} style={{padding: "15px"}}>
                <div>
                    <h3>{props.name}:</h3>
                </div>
                <div>
                    <select onChange={onFuncCallback}>
                        {options}
                    </select>
                </div>
            </Paper>
        </div>
    )
}

export default SelectComponent