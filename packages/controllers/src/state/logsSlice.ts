import { ActionTypes } from "../constants";
import type { AppDispatch } from "./store";

export const addLog = (dispatch: AppDispatch, log: Log) => {
    dispatch({
        type: ActionTypes.ADD_LOG,
        log
    });
};

export const filterLogs = (dispatch: AppDispatch, keyword: string) => {
    dispatch({
        type: ActionTypes.FILTER_LOG,
        logsFilterKeyword: keyword
    });
};

export const resetLogs = (dispatch: AppDispatch) => {
    dispatch({
        type: ActionTypes.RESET_LOGS
    });
};
