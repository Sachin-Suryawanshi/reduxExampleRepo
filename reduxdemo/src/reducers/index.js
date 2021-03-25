import countReducer from "./counter";
import isLoggedReducer from "./isLogged";
import { combineReducers } from "redux";
const allReducers = combineReducers({
  counter: countReducer,
  isLoggedReducer: isLoggedReducer,
});
export default allReducers;
