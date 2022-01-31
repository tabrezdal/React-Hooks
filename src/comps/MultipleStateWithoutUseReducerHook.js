import React, { useState } from 'react';

const MultipleStateWithoutUseReducerHook = () => {

    const [counter, incrementCounter] = useState(0);
    const [text, chageText] = useState(true);
  return (
    <div>   
        <h1 style={{textAlign:'center'}}>useReducer Hook</h1>
        
        <div class="card">
        <h5 class="card-header">Multiple State without useReducer Hook</h5>
        <div class="card-body">
            <h5 class="card-title">Counter : {counter} </h5>
            <button className="btn btn-primary" onClick={ () =>{
                incrementCounter(counter + 1)
                chageText(!text)
            }}>Increment</button>
            <p class="card-text">{text ?  "This is Even Number!" : "This is Odd Number!"}</p>
        </div>
        </div>      
      </div>
  );
};

export default MultipleStateWithoutUseReducerHook;
