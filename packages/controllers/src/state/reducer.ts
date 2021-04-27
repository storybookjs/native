import { ActionTypes } from "../constants";
import type { ReduxState, HandledMessageResponse } from "../types";

const defaultState: ReduxState = {
    loading: false,
    commands: []
};

export interface ReduxAction {
    type: ActionTypes;
    payload?: HandledMessageResponse;
}

export default (state = defaultState, action: ReduxAction): ReduxState => {
    switch (action.type) {
        case ActionTypes.PERFORM_COMMAND:
            return {
                ...state,
                loading: true
            };
        case ActionTypes.COMMAND_SUCCESS:
        case ActionTypes.COMMAND_ERROR:
            if (!action.payload) {
                throw new Error(`No payload for action: ${action.type}`);
            }

            return {
                ...state,
                loading: false,
                commands: state.commands.concat(action.payload)
            };
        case ActionTypes.RESET_COMMANDS:
            return {
                ...state,
                commands: []
            };
        default:
            return state;
    }
};
