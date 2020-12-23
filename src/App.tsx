import React from 'react';
import './App.css';
import {Counter} from "./Counter/Counter/counter";
import {typeOfState} from "./index";


function App(state: typeOfState) {
  return (
    <div className="App">
      <header className="App-header">
        <Counter start={state.start} end={state.end}/>
      </header>
    </div>
  );
}

export default App;
