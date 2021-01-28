import Paper from '@material-ui/core/Paper';
import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {ActionType, ArrOptionsType} from "./types";
//import fartuk from './img/fartuk.jpg'


type SelectWithNumberType = {
    optionArray: Array<ArrOptionsType>
    dispatch: (action: ActionType) => void
    actionType: string
    name: string
    img?: string
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
            if(+e.currentTarget.value >= 0){
                props.dispatch({type: props.actionType, count: +refSelect.current.value * +e.currentTarget.value})
            } else {
                props.dispatch({type: props.actionType, count: 0})
            }
        }
    }

    const onFuncCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        if (refInput.current) {
            if(+refInput.current.value >= 0){
                props.dispatch({type: props.actionType, count: +e.currentTarget.value * +refInput.current.value})
            } else {
                props.dispatch({type: props.actionType, count: 0})
            }

        }
    }


    return (
        <div className={'selectWithNumber'}>
            <Paper elevation={10} style={{padding: "15px", display: 'flex', justifyContent: 'space-between'}}>
                <div>
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
                        <input className={value < 0 ? 'errorMetersInput' :'metersInput'} type={'number'} onChange={onChangeMeters} value={value}
                               ref={refInput}/>
                        {
                            value < 0 && <div className={'errorDivSpan'}>
                                <span>Количество метров не может быть отрицательным!</span>
                            </div>
                        }
                    </div>
                </div>
                {props.img && <div className={'imgWrapper'}>
                    <img src={props.img} alt="image_icon" style={{width: '80px', height: 'auto'}}/>
                </div>}

            </Paper>
        </div>
    )
}

export default SelectWithNumber