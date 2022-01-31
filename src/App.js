import './App.css';
import UseState from './comps/UseState';
import MultipleStateWithoutUseReducer from './comps/MultipleStateWithoutUseReducerHook';

import  MultipleStateWithUseReducerHook from './comps/MultipleStateWithUseReducerHook';



function App() {
  return (
    <div>
      <UseState />
      <MultipleStateWithoutUseReducer />
      <MultipleStateWithUseReducerHook />
    </div>
  );
}

export default App;
