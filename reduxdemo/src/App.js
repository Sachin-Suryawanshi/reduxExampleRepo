import { useSelector, useDispatch } from "react-redux";
// import {useState} from 'react';
import "./App.css";
import { decrement, increment, isLoggedCheck } from "./actions";
import UseRef from "./useRefDemo/uRef";

function App() {
  // const loginHandler=()=>
  // {
  //   setLogin(!isLogged);
  // }
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLoggedReducer);
  const dispatch = useDispatch();
  // const[login,setLogin]=useState(isLogged);
  return (
    <div className="App">
      <UseRef />
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(isLoggedCheck())}>LogIn</button>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? <h3>Something authenticated</h3> : null}
    </div>
  );
}

export default App;
