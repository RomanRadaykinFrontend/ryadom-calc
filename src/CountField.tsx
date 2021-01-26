import React from 'react';
import './App.css';
import Paper from "@material-ui/core/Paper";
import {Button} from "@material-ui/core";

type CountFieldType = {
    count: number
    changeCount: any
    actionType: string
}

function CountField(props: CountFieldType) {

    const resetAll = () => {
        props.changeCount({type: props.actionType})
    };

    return(
        <div>
            <Paper elevation={10} style={{padding: "30px"}}>
                <div className={'countFiled'}>
                   <h1>
                       {props.count}
                   </h1>
                </div>
            </Paper>
            <Button variant="contained" color="primary" onClick={resetAll}>
                    RESET
            </Button>
        </div>
    )
}

export default CountField