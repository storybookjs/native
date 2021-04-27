import axios from "axios";
import type { HandledMessageResponse } from "../types";
import { ActionTypes } from "../constants";
import type { AppDispatch, ThunkActionHandler } from "./store";

export const performCommand = (
    url: string,
    data: Record<string, any>
): ThunkActionHandler => {
    return async (dispatch) => {
        dispatch({ type: ActionTypes.PERFORM_COMMAND });

        try {
            const response = await axios.post(url, data);
            const details: HandledMessageResponse = {
                message: data,
                response: response.data.message,
                successful: true
            };

            dispatch({ type: ActionTypes.COMMAND_SUCCESS, payload: details });
        } catch (ex) {
            console.error(ex);
            const details: HandledMessageResponse = {
                message: data,
                response: ex.response?.data?.message,
                successful: false
            };

            dispatch({ type: ActionTypes.COMMAND_ERROR, payload: details });
        }
    };
};

export const resetCommands = (dispatch: AppDispatch) => {
    dispatch({
        type: ActionTypes.RESET_COMMANDS
    });
};
