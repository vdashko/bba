import * as TYPES from "./types";

const INITIAL_STATE = {
    C : 15
};

export default function(state = INITIAL_STATE, { type, payload }) {
    switch (type) {
        case TYPES.CHANGE_TEMPERATURE:
            return {
                ...state,
                C: payload
            };
        default:
            return state;
    }
}