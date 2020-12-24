import React, {ChangeEvent, useState} from 'react'
import {typeOfStartEnd} from "../../index";


export function Counter(state:typeOfStartEnd) {

    let [value, setValue] = useState<any>(0)

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const incFn = () => {
        if (value < 5){
        value ++
        setValue(value)
            }
    }

    const resetFn = () => {
           value = setValue(0)
    }

    return (
        <div>
            {/*<input type='number'
                   value={value}
                   onChange={onChangeValue}
            />*/}
            <div  onChange={onChangeValue}>{value}</div>
            <button disabled={state.end === value} onClick={incFn}>inc</button>
            <button disabled={state.start === value} onClick={resetFn}>reset</button>
        </div>

    )
}