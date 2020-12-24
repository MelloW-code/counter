import React from 'react';
import './App.css';
import {Counter} from "./Counter/Counter/counter";

import {Settings} from "./Counter/Settings/Settings";
import {typeOfState} from "./index";


function App(state: typeOfState) {
  return (
    <div className="App">
      <header className="App-header">
        <Counter start={state.start} end={state.end}/>
        <Settings max={state.max} min={state.min}/>
      </header>
    </div>
  );
}

export default App;
