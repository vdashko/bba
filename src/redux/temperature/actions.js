import * as TYPES from "./types";

export function onChangeTemperature(payload) {
    return dispatch => dispatch({type: TYPES.CHANGE_TEMPERATURE, payload})
}
