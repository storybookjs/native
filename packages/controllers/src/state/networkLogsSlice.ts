import {ActionTypes} from "../constants";
import type {AppDispatch} from "./store";

export const addNetworkLog = (dispatch: AppDispatch, log: Record<string, any>) => {
    function formatMilliseconds(milliseconds: number) {
        // Ensure the input is a positive number
        milliseconds = Math.abs(milliseconds);
        if (milliseconds === 0) {
            return "0ms"
        } else if (milliseconds < 1000) {
            return `${milliseconds}ms`;
        } else if (milliseconds < 60000) {
            const seconds = milliseconds / 1000;
            return `${seconds.toFixed(1)}s`;
        } else if (milliseconds < 3600000) {
            const minutes = milliseconds / 60000;
            return `${minutes.toFixed(1)}m`;
        } else {
            const hours = milliseconds / 3600000;
            return `${hours.toFixed(1)}h`;
        }
    }

    function formatBytes(bytes: number) {
        if (bytes < 1024) {
            return `${bytes}B`;
        } else if (bytes < 1024 * 1024) {
            const kilobytes = (bytes / 1024).toFixed(1);
            return `${kilobytes}KB`;
        } else if (bytes < 1024 * 1024 * 1024) {
            const megabytes = (bytes / (1024 * 1024)).toFixed(1);
            return `${megabytes}MB`;
        } else if (bytes < 1024 * 1024 * 1024 * 1024) {
            const gigabytes = (bytes / (1024 * 1024 * 1024)).toFixed(1);
            return `${gigabytes}GB`;
        } else {
            const terabytes = (bytes / (1024 * 1024 * 1024 * 1024)).toFixed(1);
            return `${terabytes}TB`;
        }
    }

    dispatch({
        type: ActionTypes.ADD_NETWORK_LOG,
        networkLog: {
            id: log.requestId,
            method: log.request.method,
            status: log.response?.status ?? "pending",
            url: log.request.url,
            type: log.response?.content?.mimeType?.split(";")[0] ?? "",
            size: formatBytes(log.response?.content?.size ?? 0),
            time: formatMilliseconds(log.time),
            requestHeaders: log.request.headers ?? [],
            responseHeaders: log.response?.headers ?? [],
            content: log.response?.content?.text ?? ""
        }
    });
};


export const filterNetWorkLogs = (dispatch: AppDispatch, keyword: string) => {
    dispatch({
        type: ActionTypes.FILTER_NETWORK_LOG,
        networkLogsFilterKeyword: keyword
    });
};


export const resetNetworkLogs = (dispatch: AppDispatch) => {
    dispatch({
        type: ActionTypes.RESET_NETWORK_LOGS
    });
};
