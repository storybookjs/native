export const BASE_IFRAME_ID = "appetize-iframe";
export const ACTION_EVENT_NAME = "native-action";

export enum ActionTypes {
    PERFORM_COMMAND = "load",
    COMMAND_ERROR = "error",
    COMMAND_SUCCESS = "success",
    RESET_COMMANDS = "reset-commands",

    ADD_NETWORK_LOG = "add-network-log",
    FILTER_NETWORK_LOG = "filter-network-log",
    RESET_NETWORK_LOGS = "reset-network-logs",

    ADD_LOG = "add-log",
    FILTER_LOG = "filter-log",
    RESET_LOGS = "reset-logs"
}
