import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export type typeOfState = {
    start: number,
    end: number,
    max: number,
    min: number

}
export type typeOfMaxMin = {
    max: number,
    min: number
}
export type typeOfStartEnd = {
    start: number,
    end: number
}
let state = {
    start: 0,
    end: 5,
    max:7,
    min:0
}



ReactDOM.render(
    <App start={state.start} end={state.end} min={state.min} max={state.max}/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
