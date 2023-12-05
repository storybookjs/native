import { ActionTypes } from "../constants";
import type {ReduxState, HandledMessageResponse, NetworkLog} from "../types";

const defaultState: ReduxState = {
    loading: false,
    commands: [],
    networkLogs: []
};

export interface ReduxAction {
    type: ActionTypes;
    payload?: HandledMessageResponse;
    networkLog?: NetworkLog;
    networkLogsFilterKeyword?: string;
}


function getFiltered(logs: NetworkLog[], key?: string,): NetworkLog[] | undefined {
    let filtered = undefined
    if (key && key.length > 0)
        filtered = logs.filter((log) => {
            return log.method.toLowerCase().includes(key)
                || log.url.toLowerCase().includes(key)
                || log.content.toLowerCase().includes(key)
        });
    return filtered
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


        case ActionTypes.ADD_NETWORK_LOG:
            if (!action.networkLog) {
                throw new Error(`No networkLog for action: ${action.type}`);
            }

            let updated = false;
            const newLogs = state.networkLogs.map((log) => {
                if (log.id === action.networkLog!.id) {
                    updated = true;
                    return action.networkLog!
                }
                return log
            });

            const final = updated ? newLogs : newLogs.concat(action.networkLog)

            return {
                ...state,
                filteredNetworkLogs: getFiltered(final, state.networkLogsFilterKeyword),
                networkLogs: final,
            };
        case ActionTypes.FILTER_NETWORK_LOG:
            const list = getFiltered(state.networkLogs, action.networkLogsFilterKeyword)
            return {
                ...state,
                networkLogsFilterKeyword: action.networkLogsFilterKeyword,
                filteredNetworkLogs: list,
            };
        case ActionTypes.RESET_NETWORK_LOGS:
            return {
                ...state,
                filteredNetworkLogs: [],
                networkLogs: [],
            };
        default:
            return state;
    }
};
