import Paper from '@material-ui/core/Paper';
import React, {ChangeEvent, FC, useReducer, useState} from 'react';
import './App.css';
import {ActionType, ArrOptionsType, InitialStateType} from "./types";



type SelectWithNumberType = {
    optionArray: Array<ArrOptionsType>
    changeCount: any
    actionType: string
    name: string
}

function SelectWithNumber(props: SelectWithNumberType) {

    let [value, setValue] = useState<number>(0);
    const refInput = React.createRef<HTMLInputElement>();
    const refSelect = React.createRef<HTMLSelectElement>();

    const options: Array<any> = props.optionArray.map((item) => {
        return <option value={item.value}>{item.name}</option>
    })

    const onChangeMeters = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(+e.currentTarget.value)
        if (refSelect.current) {
            props.changeCount({type: props.actionType, count: +refSelect.current.value * +e.currentTarget.value})
        }
    }

    const onFuncCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        if (refInput.current) {
            props.changeCount({type: props.actionType, count: +e.currentTarget.value * +refInput.current.value})
        }
    }


    return (
        <div className={'selectWithNumber'}>
            <Paper elevation={10} style={{padding: "15px"}}>
                <div>
                    <h3>{props.name}:</h3>
                </div>
                <div>
                    <select onChange={onFuncCallback} ref={refSelect}>
                        {options}
                    </select>
                </div>
                <div>
                    <h3>Количество погонных метров:</h3>
                </div>
                <div>
                    <input className={'metersInput'} type={'number'} onChange={onChangeMeters} value={value}
                           ref={refInput}/>
                </div>
            </Paper>
        </div>
    )
}

export default SelectWithNumber