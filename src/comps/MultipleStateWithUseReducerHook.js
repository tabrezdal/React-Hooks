import React, { useReducer } from 'react';

const MultipleStateWithUseReducerHook = () => {

    const reducer = (state, action) => {
        switch(action.type){
        case "incrementCounter":
            return { counter : state.counter + 1, text : state.text };

        case "toggleText":
            return { counter : state.counter, text : !state.text }; 

        default:
            return state;
        }
    };

    const [state, dispatch] = useReducer( reducer, { counter : 0, text : "true"} );

  return (
    <div>         
        <div class="card">
        <h5 class="card-header">Multiple State with useReducer Hook</h5>
        <div class="card-body">
            <h5 class="card-title">Counter : {state.counter} </h5>
            <button className="btn btn-primary" onClick={ () => {
                dispatch({ type: "incrementCounter"});
                dispatch({ type: "toggleText"})
            }}>Increment</button>
        <p class="card-text">{state.text ? "This is an EVEN number!" : " This is an ODD Number!"}</p>
        </div>
        </div>      
      </div>
  );
};

export default MultipleStateWithUseReducerHook;
