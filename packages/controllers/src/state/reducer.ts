import { ActionTypes } from "../constants";
import type { ReduxState, HandledMessageResponse, NetworkLog } from "../types";

const defaultState: ReduxState = {
    loading: false,
    commands: [],
    networkLogs: [],
    logs: []
};

export interface ReduxAction {
    type: ActionTypes;
    payload?: HandledMessageResponse;
    networkLog?: NetworkLog;
    networkLogsFilterKeyword?: string;
    log?: Log;
    logsFilterKeyword?: string;
}

function getFilteredNetwork(
    logs: NetworkLog[],
    key?: string
): NetworkLog[] | undefined {
    let filtered;
    if (key && key.length > 0) {
        const k = key.toLowerCase();
        filtered = logs.filter((log) => {
            return (
                log.method.toLowerCase().includes(k) ||
                log.url.toLowerCase().includes(k) ||
                log.content.toLowerCase().includes(k)
            );
        });
    }
    return filtered;
}

function getFiltered(logs: Log[], key?: string): Log[] | undefined {
    let filtered;
    if (key && key.length > 0) {
        filtered = logs.filter((log) => {
            return log.message.toLowerCase().includes(key.toLowerCase());
        });
    }
    return filtered;
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

        case ActionTypes.ADD_NETWORK_LOG: {
            if (!action.networkLog) {
                throw new Error(`No networkLog for action: ${action.type}`);
            }

            let updated = false;
            const newLogs = state.networkLogs.map((log) => {
                if (log.id === action.networkLog!.id) {
                    updated = true;
                    return action.networkLog!;
                }
                return log;
            });

            const final = updated ? newLogs : newLogs.concat(action.networkLog);

            return {
                ...state,
                filteredNetworkLogs: getFilteredNetwork(
                    final,
                    state.networkLogsFilterKeyword
                ),
                networkLogs: final
            };
        }
        case ActionTypes.FILTER_NETWORK_LOG:
            return {
                ...state,
                networkLogsFilterKeyword: action.networkLogsFilterKeyword,
                filteredNetworkLogs: getFilteredNetwork(
                    state.networkLogs,
                    action.networkLogsFilterKeyword
                )
            };
        case ActionTypes.RESET_NETWORK_LOGS:
            return {
                ...state,
                filteredNetworkLogs: undefined,
                networkLogs: []
            };

        case ActionTypes.ADD_LOG: {
            if (!action.log) {
                throw new Error(`No log for action: ${action.type}`);
            }

            const final = state.logs.concat(action.log);

            return {
                ...state,
                filteredLogs: getFiltered(final, state.logsFilterKeyword),
                logs: final
            };
        }
        case ActionTypes.FILTER_LOG:
            return {
                ...state,
                logsFilterKeyword: action.logsFilterKeyword,
                filteredLogs: getFiltered(state.logs, action.logsFilterKeyword)
            };
        case ActionTypes.RESET_LOGS:
            return {
                ...state,
                logsFilterKeyword: undefined,
                logs: []
            };
        default:
            return state;
    }
};
