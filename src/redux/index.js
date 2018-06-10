import { combineReducers } from "redux";

import pressure from "./pressure/reducer";
import temperature from "./temperature/reducer";
import foreCast from "./foreCast/reducer"


export default combineReducers({
    pressure,
    temperature,
    foreCast
});