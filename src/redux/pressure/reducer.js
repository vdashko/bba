import * as TYPES from "./types";

const INITIAL_STATE = {
    hPa : 990
};

export default function(state = INITIAL_STATE, { type, payload }) {
    switch (type) {
        case TYPES.CHANGE_PRESSURE:
            return {
                ...state,
                hPa : payload
            };
        default:
            return state;
    }
}