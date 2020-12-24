import React from 'react'
import {typeOfMaxMin} from "../../index";



export function Settings(state:typeOfMaxMin) {
    return (
        <div>
            <div>
                <div><input value={state.max}/>max</div>
                <div><input value={state.min}/>start</div>
            </div>
            <div><button onClick={()=>{}}>set</button></div>
        </div>
    )
}

