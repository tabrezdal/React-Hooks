import React, { useState } from 'react';

const UseState = () => {

    const [counter, ctrIncrement] = useState(0);

    // let counter = 0;
    const incrementCounter = () =>{
        // counter = counter + 1;
        // console.log(counter);

        ctrIncrement(counter + 1);
    }


    const [enteredText, onChangeInput] = useState("");

    const onChangeHandler = (event) => {
        onChangeInput(event.target.value);
        console.log(enteredText);
    }


    const [inpValue, setInpValue] = useState("Input Text Will Be Here")

    const setEnteredText = () => {
        // if(enteredText != "")
        // {
        //     setInpValue(enteredText);
        // }
        // else {
        //     alert("Please enter some text inside the inout field!");
        // }

        { enteredText != "" ? setInpValue(enteredText) : alert("Please enter some text inside the input field!") }
    }
    
  return (
  <div>

<h1 style={{textAlign:'center'}}>useState Hook</h1>

<div class="card">
  <h5 class="card-header">Updating Varibale with useState</h5>
  <div class="card-body">
    <h5 class="card-title">Counter : {counter} </h5>
    <p class="card-text">Clicking below button will update counter value</p>
    <button className="btn btn-primary" onClick={incrementCounter}>Increment</button>
  </div>
</div>

<div class="card">
  <h5 class="card-header">Updating Varibale onclick and onchange with useState</h5>
  <div class="card-body">
    <h5 class="card-title">{ inpValue } </h5>
    <input type="text" onChange={ onChangeHandler }/>
         <button className="btn btn-primary" onClick={setEnteredText}>UpdateText to Input Value</button>
  </div>
</div>

  </div>
  )
};

export default UseState;
