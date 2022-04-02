import counterReducer from "./CounterReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counterReducer,
});
export default allReducers;
